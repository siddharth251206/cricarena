import requests
from datetime import datetime, timedelta, date
from calendar import monthrange
from django.shortcuts import render
from collections import defaultdict

CRICAPI_KEY = "cbf98794-920a-4c3d-93d2-551987040cca"

def calendar_view(request, year=None, month=None):
    today = datetime.utcnow().date()

    if not year or not month:
        year = today.year
        month = today.month
    else:
        year = int(year)
        month = int(month)

    # Set up month bounds
    month_start = date(year, month, 1)
    days_in_month = monthrange(year, month)[1]
    month_end = month_start + timedelta(days=days_in_month - 1)

    # Get matches
    all_matches = []
    offset = 0
    while offset < 100:
        url = f"https://api.cricapi.com/v1/matches?apikey={CRICAPI_KEY}&offset={offset}"
        response = requests.get(url)
        try:
            data = response.json()
        except Exception:
            break

        matches = data.get("data", [])
        if not matches:
            break

        all_matches.extend(matches)
        if len(matches) < 20:
            break
        offset += 20

    # Process matches
    match_days = defaultdict(list)
    for match in all_matches:
        dt_str = match.get("dateTimeGMT")
        try:
            match_date = datetime.strptime(dt_str, "%Y-%m-%dT%H:%M:%S").date()
        except:
            continue

        if month_start <= match_date <= month_end:
            teams = match.get("teams", [])
            team1 = teams[0] if len(teams) > 0 else "TBD"
            team2 = teams[1] if len(teams) > 1 else "TBD"

            match_days[match_date].append({
                "teams": f"{team1} vs {team2}",
                "venue": match.get("venue", "TBD"),
                "status": match.get("status", "")
            })

    # Calculate padding for the calendar grid
    first_weekday = month_start.weekday()  # Monday=0, Sunday=6
    
    # Calculate days to pad at start (to make first day Sunday)
    # If month starts on Sunday (6), no padding needed
    # If month starts on Monday (0), pad 1 day (Sunday)
    # If month starts on Tuesday (1), pad 2 days (Sunday, Monday), etc.
    start_padding = (first_weekday + 1) % 7
    
    # Generate calendar days (only current month, with empty slots)
    calendar_days = []
    
    # Add empty days at the beginning
    for _ in range(start_padding):
        calendar_days.append(None)
    
    # Add actual days of the month
    for i in range(days_in_month):
        day_date = month_start + timedelta(days=i)
        calendar_days.append(day_date)
    
    # Add empty days at the end to complete the grid
    total_days = len(calendar_days)
    remaining = (7 - (total_days % 7)) % 7  # Days needed to complete last week
    for _ in range(remaining):
        calendar_days.append(None)

    context = {
        "calendar_days": calendar_days,
        "match_days": match_days,
        "year": year,
        "month": month,
        "month_name": month_start.strftime("%B"),
    }

    return render(request, "sportscal/c_index.html", context)