import requests
from datetime import datetime, timedelta, date
from calendar import monthrange
from django.shortcuts import render
from collections import defaultdict

# --- Remove API key and API usage ---
# CRICAPI_KEY = "cbf98794-920a-4c3d-93d2-551987040cca"

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

    # --- Hardcoded event data ---
    events = [
        {"start": "Jul 2", "end": "Jul 2", "teams": "India vs England – 2nd Test"},
        {"start": "Jul 5", "end": "Jul 13", "teams": "Malawi 4‑nation T20I"},
        {"start": "Jul 6", "end": "Jul 13", "teams": "Indonesia Tri‑Series (T20I)"},
        {"start": "Jul 10", "end": "Jul 13", "teams": "Bulgaria Tri‑Series (T20I)"},
        {"start": "Jul 10", "end": "Jul 14", "teams": "India vs England – 3rd Test"},
        {"start": "Jul 14", "end": "Jul 26", "teams": "Zimbabwe T20I Tri‑Series"},
        {"start": "Jul 17", "end": "Jul 27", "teams": "Pearl of Africa T20I Series"},
        {"start": "Jul 18", "end": "Jul 23", "teams": "Saudi Arabia vs Qatar T20Is"},
        {"start": "Jul 18", "end": "Jul 26", "teams": "Asia Pacific Champions Trophy"},
        {"start": "Jul 20", "end": "Jul 24", "teams": "Pakistan vs Bangladesh – T20Is"},
        {"start": "Jul 23", "end": "Jul 27", "teams": "India vs England – 4th Test"},
        {"start": "Jul 25", "end": "Jul 27", "teams": "Finland vs Estonia T20Is"},
        {"start": "Jul 30", "end": "Aug 11", "teams": "New Zealand in Zimbabwe Tests"},
        {"start": "Jul 31", "end": "Aug 4", "teams": "India vs England – 5th Test continues"},
        # --- August and September events ---
        {"start": "Aug 1", "end": "Aug 12", "teams": "Pakistan in West Indies (3 T20Is, 3 ODIs)"},
        {"start": "Aug 6", "end": "Aug 10", "teams": "Pakistan women in Ireland (3 WT20Is)"},
        {"start": "Aug 7", "end": "Aug 11", "teams": "NZ Tests in Zimbabwe (2 Tests)"},
        {"start": "Aug 10", "end": "Aug 24", "teams": "South Africa tour of Australia (3 T20Is, 3 ODIs)"},
        {"start": "Aug 17", "end": "Aug 31", "teams": "India in Bangladesh (3 ODIs, 3 T20Is; see note on possible postponement)"},
        {"start": "Aug 29", "end": "Aug 31", "teams": "Sri Lanka in Zimbabwe (2 ODIs)"},
        {"start": "Sep 3", "end": "Sep 7", "teams": "Sri Lanka/Zimbabwe T20Is continue"},
    ]

    # Helper to parse date like 'Jul 2' or 'Aug 4' to date object for this year
    def parse_event_date(s):
        parts = s.split()
        if len(parts) == 2:
            month_str, day = parts
            month_num = datetime.strptime(month_str, "%b").month
            return date(year if month_num >= month_start.month else year + 1, month_num, int(day.replace('\u202f','').replace('\u2009','')))
        return None

    # Map events to days in the current month
    match_days = defaultdict(list)
    for event in events:
        start_dt = parse_event_date(event["start"])
        end_dt = parse_event_date(event["end"])
        if not start_dt or not end_dt:
            continue
        # Clamp event to current month
        cur = max(start_dt, month_start)
        last = min(end_dt, month_end)
        while cur <= last:
            match_days[cur].append({
                "teams": event["teams"],
                "venue": "",
                "status": ""
            })
            cur += timedelta(days=1)


    # Calculate padding for the calendar grid
    first_weekday = month_start.weekday()  # Monday=0, Sunday=6
    start_padding = (first_weekday + 1) % 7
    calendar_days = []
    for _ in range(start_padding):
        calendar_days.append(None)
    for i in range(days_in_month):
        day_date = month_start + timedelta(days=i)
        calendar_days.append(day_date)
    total_days = len(calendar_days)
    remaining = (7 - (total_days % 7)) % 7
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