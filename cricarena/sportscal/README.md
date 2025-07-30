# Sportscal App - Cricket Calendar 2025

This Django app provides a comprehensive cricket calendar for 2025 with all major international matches, tournaments, and series.

## Features

- **Complete 2025 Cricket Schedule**: All major tournaments and series
- **Database-Driven**: Uses SQL database instead of hardcoded data
- **Interactive Calendar**: Navigate between months and years
- **Match Details**: Shows venue and status information
- **Responsive Design**: Works on desktop and mobile devices

## Database Setup

### 1. Load the SQL Data

Run the Django management command to load all 2025 cricket matches:

```bash
python manage.py load_matches
```

This will populate the database with all matches from the `sql/matches2025.sql` file.

### 2. SQL File Contents

The `sql/matches2025.sql` file contains:

- **ICC Champions Trophy 2025** (February 19 – March 9)
- **ICC World Test Championship Final** (June 11–15)
- **Asia Cup 2025** (September 9–28)
- **ICC Women's Cricket World Cup 2025** (September 30 – November 2)
- **Major Bilateral Series**:
  - Australia in West Indies (June 25 – July 28)
  - India in England Test Series (June 20 – August 4)
  - Bangladesh Tour of Sri Lanka (Mid-June)
  - Zimbabwe Tri-Nation T20I Series (July 14 – 26)
  - And many more...

## Usage

### View Calendar

Navigate to `/sportscal/` to view the current month's calendar.

### Navigate Between Months

- Use the `<` and `>` buttons to navigate between months
- The calendar automatically loads matches for the selected month
- URL parameters: `?year=2025&month=7` for July 2025

### Match Information

Each match displays:
- **Title**: Match name and series
- **Venue**: Location where the match is scheduled
- **Status**: Scheduled, Postponed, or other status

## Database Schema

The `CricketMatch` model contains:

```python
class CricketMatch(models.Model):
    title = models.CharField(max_length=255)      # Match title
    start_date = models.DateField()               # Start date
    end_date = models.DateField()                 # End date
    venue = models.CharField(max_length=255)      # Venue/location
    status = models.CharField(max_length=100)     # Match status
```

## Adding New Matches

To add new matches:

1. **Via Django Admin**: Use the Django admin interface
2. **Via SQL**: Add INSERT statements to `sql/matches2025.sql`
3. **Via Management Command**: Create a new management command

## Files Structure

```
sportscal/
├── models.py              # Database model
├── views.py               # Calendar view logic
├── templates/
│   └── sportscal/
│       └── c_index.html   # Calendar template
├── sql/
│   └── matches2025.sql    # SQL data file
└── management/
    └── commands/
        └── load_matches.py # Django management command
```

## API Integration

The app previously used CricAPI but now uses a local database for better performance and reliability. The SQL file contains comprehensive data for the entire 2025 cricket calendar.

## Status Codes

- **Scheduled**: Match is confirmed and scheduled
- **Postponed**: Match has been postponed (e.g., India in Bangladesh series)
- **Reserve Day**: Backup day for weather-affected matches

## Future Enhancements

- Add match results and scores
- Include player information
- Add team logos and flags
- Implement match notifications
- Add filtering by tournament/series 