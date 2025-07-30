import requests
from datetime import datetime, timedelta, date
from calendar import monthrange
from django.shortcuts import render
from collections import defaultdict
from .models import CricketMatch
import json

# --- Remove API key and API usage ---
# CRICAPI_KEY = "cbf98794-920a-4c3d-93d2-551987040cca"

def calendar_view(request, year=None, month=None):
    # Default to 2025 instead of current year for cricket calendar
    if not year:
        year = 2025
    if not month:
        month = 7  # Default to July 2025 to show cricket matches
    
    year = int(year)
    month = int(month)

    # Set up month bounds
    month_start = date(year, month, 1)
    days_in_month = monthrange(year, month)[1]
    month_end = month_start + timedelta(days=days_in_month - 1)

    # --- Get events from database ---
    events = CricketMatch.objects.filter(
        start_date__lte=month_end,
        end_date__gte=month_start
    ).order_by('start_date')

    # Map events to days in the current month
    match_days = defaultdict(list)
    for event in events:
        # Clamp event to current month
        cur = max(event.start_date, month_start)
        last = min(event.end_date, month_end)
        while cur <= last:
            match_days[cur].append({
                "teams": event.title,
                "venue": event.venue,
                "status": event.status
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

    # Prepare calendar data for JavaScript
    calendar_data = {
        "year": year,
        "month": month,
        "monthName": month_start.strftime("%B"),
        "calendarDays": [
            {
                "date": day.strftime("%Y-%m-%d"),
                "day": day.day,
                "hasEvents": day in match_days
            } if day else None
            for day in calendar_days
        ],
        "matchDays": {
            date.strftime("%Y-%m-%d"): matches
            for date, matches in match_days.items()
        }
    }

    context = {
        "calendar_days": calendar_days,
        "match_days": match_days,
        "year": year,
        "month": month,
        "month_name": month_start.strftime("%B"),
        "calendar_data_json": json.dumps(calendar_data)
    }

    return render(request, "sportscal/c_index.html", context)