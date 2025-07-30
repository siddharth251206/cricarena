-- Cricket Matches 2025 Database
-- This file contains all major cricket matches scheduled for 2025

-- Clear existing data
DELETE FROM sportscal_cricketmatch;

-- ICC Champions Trophy 2025 (ODIs) - February 19 – March 9
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('ICC Champions Trophy 2025 - Group Stage', '2025-02-19', '2025-03-05', 'Pakistan & UAE', 'Scheduled'),
('ICC Champions Trophy 2025 - Semi Finals', '2025-03-04', '2025-03-05', 'Pakistan & UAE', 'Scheduled'),
('ICC Champions Trophy 2025 - Final', '2025-03-09', '2025-03-09', 'Pakistan & UAE', 'Scheduled');

-- IPL 2025 Season - April to May
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('IPL 2025 - Opening Ceremony', '2025-04-01', '2025-04-01', 'Mumbai', 'Scheduled'),
('IPL 2025 - CSK vs MI (Opening Match)', '2025-04-02', '2025-04-02', 'Chennai', 'Scheduled'),
('IPL 2025 - RCB vs KKR', '2025-04-03', '2025-04-03', 'Bangalore', 'Scheduled'),
('IPL 2025 - RR vs DC', '2025-04-04', '2025-04-04', 'Jaipur', 'Scheduled'),
('IPL 2025 - PBKS vs SRH', '2025-04-05', '2025-04-05', 'Mohali', 'Scheduled'),
('IPL 2025 - LSG vs GT', '2025-04-06', '2025-04-06', 'Lucknow', 'Scheduled'),
('IPL 2025 - MI vs RCB', '2025-04-07', '2025-04-07', 'Mumbai', 'Scheduled'),
('IPL 2025 - KKR vs CSK', '2025-04-08', '2025-04-08', 'Kolkata', 'Scheduled'),
('IPL 2025 - DC vs PBKS', '2025-04-09', '2025-04-09', 'Delhi', 'Scheduled'),
('IPL 2025 - SRH vs RR', '2025-04-10', '2025-04-10', 'Hyderabad', 'Scheduled'),
('IPL 2025 - GT vs LSG', '2025-04-11', '2025-04-11', 'Ahmedabad', 'Scheduled'),
('IPL 2025 - CSK vs RCB', '2025-04-12', '2025-04-12', 'Chennai', 'Scheduled'),
('IPL 2025 - MI vs KKR', '2025-04-13', '2025-04-13', 'Mumbai', 'Scheduled'),
('IPL 2025 - RR vs PBKS', '2025-04-14', '2025-04-14', 'Jaipur', 'Scheduled'),
('IPL 2025 - DC vs SRH', '2025-04-15', '2025-04-15', 'Delhi', 'Scheduled'),
('IPL 2025 - LSG vs CSK', '2025-04-16', '2025-04-16', 'Lucknow', 'Scheduled'),
('IPL 2025 - GT vs MI', '2025-04-17', '2025-04-17', 'Ahmedabad', 'Scheduled'),
('IPL 2025 - RCB vs RR', '2025-04-18', '2025-04-18', 'Bangalore', 'Scheduled'),
('IPL 2025 - KKR vs DC', '2025-04-19', '2025-04-19', 'Kolkata', 'Scheduled'),
('IPL 2025 - PBKS vs LSG', '2025-04-20', '2025-04-20', 'Mohali', 'Scheduled'),
('IPL 2025 - SRH vs GT', '2025-04-21', '2025-04-21', 'Hyderabad', 'Scheduled'),
('IPL 2025 - CSK vs RR', '2025-04-22', '2025-04-22', 'Chennai', 'Scheduled'),
('IPL 2025 - MI vs PBKS', '2025-04-23', '2025-04-23', 'Mumbai', 'Scheduled'),
('IPL 2025 - RCB vs DC', '2025-04-24', '2025-04-24', 'Bangalore', 'Scheduled'),
('IPL 2025 - KKR vs SRH', '2025-04-25', '2025-04-25', 'Kolkata', 'Scheduled'),
('IPL 2025 - LSG vs RR', '2025-04-26', '2025-04-26', 'Lucknow', 'Scheduled'),
('IPL 2025 - GT vs CSK', '2025-04-27', '2025-04-27', 'Ahmedabad', 'Scheduled'),
('IPL 2025 - MI vs LSG', '2025-04-28', '2025-04-28', 'Mumbai', 'Scheduled'),
('IPL 2025 - RCB vs PBKS', '2025-04-29', '2025-04-29', 'Bangalore', 'Scheduled'),
('IPL 2025 - KKR vs GT', '2025-04-30', '2025-04-30', 'Kolkata', 'Scheduled');

-- IPL 2025 - May (Playoffs and Finals)
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('IPL 2025 - DC vs CSK', '2025-05-01', '2025-05-01', 'Delhi', 'Scheduled'),
('IPL 2025 - SRH vs MI', '2025-05-02', '2025-05-02', 'Hyderabad', 'Scheduled'),
('IPL 2025 - RR vs RCB', '2025-05-03', '2025-05-03', 'Jaipur', 'Scheduled'),
('IPL 2025 - LSG vs KKR', '2025-05-04', '2025-05-04', 'Lucknow', 'Scheduled'),
('IPL 2025 - PBKS vs GT', '2025-05-05', '2025-05-05', 'Mohali', 'Scheduled'),
('IPL 2025 - CSK vs SRH', '2025-05-06', '2025-05-06', 'Chennai', 'Scheduled'),
('IPL 2025 - MI vs RR', '2025-05-07', '2025-05-07', 'Mumbai', 'Scheduled'),
('IPL 2025 - RCB vs LSG', '2025-05-08', '2025-05-08', 'Bangalore', 'Scheduled'),
('IPL 2025 - KKR vs PBKS', '2025-05-09', '2025-05-09', 'Kolkata', 'Scheduled'),
('IPL 2025 - DC vs GT', '2025-05-10', '2025-05-10', 'Delhi', 'Scheduled'),
('IPL 2025 - SRH vs RCB', '2025-05-11', '2025-05-11', 'Hyderabad', 'Scheduled'),
('IPL 2025 - CSK vs MI', '2025-05-12', '2025-05-12', 'Chennai', 'Scheduled'),
('IPL 2025 - RR vs KKR', '2025-05-13', '2025-05-13', 'Jaipur', 'Scheduled'),
('IPL 2025 - LSG vs DC', '2025-05-14', '2025-05-14', 'Lucknow', 'Scheduled'),
('IPL 2025 - GT vs PBKS', '2025-05-15', '2025-05-15', 'Ahmedabad', 'Scheduled'),
('IPL 2025 - RCB vs CSK', '2025-05-16', '2025-05-16', 'Bangalore', 'Scheduled'),
('IPL 2025 - MI vs SRH', '2025-05-17', '2025-05-17', 'Mumbai', 'Scheduled'),
('IPL 2025 - KKR vs RR', '2025-05-18', '2025-05-18', 'Kolkata', 'Scheduled'),
('IPL 2025 - DC vs LSG', '2025-05-19', '2025-05-19', 'Delhi', 'Scheduled'),
('IPL 2025 - PBKS vs GT', '2025-05-20', '2025-05-20', 'Mohali', 'Scheduled'),
('IPL 2025 - Qualifier 1', '2025-05-22', '2025-05-22', 'Mumbai', 'Scheduled'),
('IPL 2025 - Eliminator', '2025-05-23', '2025-05-23', 'Bangalore', 'Scheduled'),
('IPL 2025 - Qualifier 2', '2025-05-25', '2025-05-25', 'Chennai', 'Scheduled'),
('IPL 2025 - Final', '2025-05-27', '2025-05-27', 'Mumbai', 'Scheduled');

-- International Series in May
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('England vs New Zealand - 1st Test', '2025-05-15', '2025-05-19', 'Lords, London', 'Scheduled'),
('England vs New Zealand - 2nd Test', '2025-05-23', '2025-05-27', 'Headingley, Leeds', 'Scheduled'),
('Pakistan vs Sri Lanka - T20I Series', '2025-05-20', '2025-05-25', 'Pakistan', 'Scheduled');

-- ICC World Test Championship Final - June 11–15
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('ICC World Test Championship Final - Australia vs South Africa', '2025-06-11', '2025-06-15', 'Lords, London', 'Scheduled'),
('ICC World Test Championship Final - Reserve Day', '2025-06-16', '2025-06-16', 'Lords, London', 'Reserve Day');

-- Asia Cup 2025 (T20I) - September 9–28
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Asia Cup 2025 - Group Stage', '2025-09-09', '2025-09-20', 'UAE', 'Scheduled'),
('Asia Cup 2025 - Semi Finals', '2025-09-22', '2025-09-23', 'UAE', 'Scheduled'),
('Asia Cup 2025 - Final', '2025-09-28', '2025-09-28', 'UAE', 'Scheduled');

-- ICC Women's Cricket World Cup 2025 (WODIs) - September 30 – November 2
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('ICC Women''s Cricket World Cup 2025 - Group Stage', '2025-09-30', '2025-10-25', 'India & Sri Lanka', 'Scheduled'),
('ICC Women''s Cricket World Cup 2025 - Semi Finals', '2025-10-28', '2025-10-29', 'India & Sri Lanka', 'Scheduled'),
('ICC Women''s Cricket World Cup 2025 - Final', '2025-11-02', '2025-11-02', 'India & Sri Lanka', 'Scheduled');

-- Australia in West Indies - June 25 – July 28
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Australia vs West Indies - 1st Test', '2025-06-25', '2025-06-29', 'West Indies', 'Scheduled'),
('Australia vs West Indies - 2nd Test', '2025-07-03', '2025-07-07', 'West Indies', 'Scheduled'),
('Australia vs West Indies - 3rd Test (Day-Night)', '2025-07-15', '2025-07-19', 'Sabina Park, Jamaica', 'Scheduled'),
('Australia vs West Indies - 1st T20I', '2025-07-22', '2025-07-22', 'West Indies', 'Scheduled'),
('Australia vs West Indies - 2nd T20I', '2025-07-24', '2025-07-24', 'West Indies', 'Scheduled'),
('Australia vs West Indies - 3rd T20I', '2025-07-26', '2025-07-26', 'West Indies', 'Scheduled'),
('Australia vs West Indies - 4th T20I', '2025-07-27', '2025-07-27', 'West Indies', 'Scheduled'),
('Australia vs West Indies - 5th T20I', '2025-07-28', '2025-07-28', 'West Indies', 'Scheduled');

-- India in England (Men's Test Series) - June 20 – August 4
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('India vs England - 1st Test', '2025-06-20', '2025-06-24', 'Headingley, Leeds', 'Scheduled'),
('India vs England - 2nd Test', '2025-07-02', '2025-07-06', 'Edgbaston, Birmingham', 'Scheduled'),
('India vs England - 3rd Test', '2025-07-10', '2025-07-14', 'Lords, London', 'Scheduled'),
('India vs England - 4th Test', '2025-07-23', '2025-07-27', 'Old Trafford, Manchester', 'Scheduled'),
('India vs England - 5th Test', '2025-07-31', '2025-08-04', 'The Oval, London', 'Scheduled');

-- India in Bangladesh - August 17 – 31 (Later deferred to September 2026)
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('India vs Bangladesh - 1st ODI', '2025-08-17', '2025-08-17', 'Bangladesh', 'Postponed'),
('India vs Bangladesh - 2nd ODI', '2025-08-20', '2025-08-20', 'Bangladesh', 'Postponed'),
('India vs Bangladesh - 3rd ODI', '2025-08-23', '2025-08-23', 'Bangladesh', 'Postponed'),
('India vs Bangladesh - 1st T20I', '2025-08-26', '2025-08-26', 'Bangladesh', 'Postponed'),
('India vs Bangladesh - 2nd T20I', '2025-08-28', '2025-08-28', 'Bangladesh', 'Postponed'),
('India vs Bangladesh - 3rd T20I', '2025-08-31', '2025-08-31', 'Bangladesh', 'Postponed');

-- Zimbabwe Tri-Nation T20I Series - July 14 – 26
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Zimbabwe T20I Tri-Series - Zimbabwe vs South Africa', '2025-07-14', '2025-07-14', 'Harare, Zimbabwe', 'Scheduled'),
('Zimbabwe T20I Tri-Series - Zimbabwe vs New Zealand', '2025-07-16', '2025-07-16', 'Harare, Zimbabwe', 'Scheduled'),
('Zimbabwe T20I Tri-Series - South Africa vs New Zealand', '2025-07-18', '2025-07-18', 'Harare, Zimbabwe', 'Scheduled'),
('Zimbabwe T20I Tri-Series - Zimbabwe vs South Africa', '2025-07-20', '2025-07-20', 'Harare, Zimbabwe', 'Scheduled'),
('Zimbabwe T20I Tri-Series - Zimbabwe vs New Zealand', '2025-07-22', '2025-07-22', 'Harare, Zimbabwe', 'Scheduled'),
('Zimbabwe T20I Tri-Series - South Africa vs New Zealand', '2025-07-24', '2025-07-24', 'Harare, Zimbabwe', 'Scheduled'),
('Zimbabwe T20I Tri-Series - Final', '2025-07-26', '2025-07-26', 'Harare, Zimbabwe', 'Scheduled');

-- Zimbabwe vs South Africa Tests - June 28 – July 10
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Zimbabwe vs South Africa - 1st Test', '2025-06-28', '2025-07-02', 'Bulawayo, Zimbabwe', 'Scheduled'),
('Zimbabwe vs South Africa - 2nd Test', '2025-07-06', '2025-07-10', 'Bulawayo, Zimbabwe', 'Scheduled');

-- New Zealand in Zimbabwe Tests - From July 30
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('New Zealand vs Zimbabwe - 1st Test', '2025-07-30', '2025-08-03', 'Zimbabwe', 'Scheduled'),
('New Zealand vs Zimbabwe - 2nd Test', '2025-08-07', '2025-08-11', 'Zimbabwe', 'Scheduled');

-- Bangladesh Tour of Sri Lanka - Starting mid-June
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Bangladesh vs Sri Lanka - 1st Test', '2025-06-15', '2025-06-19', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 2nd Test', '2025-06-23', '2025-06-27', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 1st ODI', '2025-07-01', '2025-07-01', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 2nd ODI', '2025-07-04', '2025-07-04', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 3rd ODI', '2025-07-07', '2025-07-07', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 1st T20I', '2025-07-10', '2025-07-10', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 2nd T20I', '2025-07-12', '2025-07-12', 'Sri Lanka', 'Scheduled'),
('Bangladesh vs Sri Lanka - 3rd T20I', '2025-07-14', '2025-07-14', 'Sri Lanka', 'Scheduled');

-- Mixed Disability T20I Series - June 15 – July 3
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Mixed Disability T20I - India vs England - 1st Match', '2025-06-15', '2025-06-15', 'England', 'Scheduled'),
('Mixed Disability T20I - India vs England - 2nd Match', '2025-06-18', '2025-06-18', 'England', 'Scheduled'),
('Mixed Disability T20I - India vs England - 3rd Match', '2025-06-21', '2025-06-21', 'England', 'Scheduled'),
('Mixed Disability T20I - India vs England - 4th Match', '2025-06-24', '2025-06-24', 'England', 'Scheduled'),
('Mixed Disability T20I - India vs England - 5th Match', '2025-06-27', '2025-06-27', 'England', 'Scheduled'),
('Mixed Disability T20I - India vs England - 6th Match', '2025-06-30', '2025-06-30', 'England', 'Scheduled'),
('Mixed Disability T20I - India vs England - 7th Match', '2025-07-03', '2025-07-03', 'England', 'Scheduled');

-- Australia vs South Africa T20I series - Beginning August 10
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Australia vs South Africa - 1st T20I', '2025-08-10', '2025-08-10', 'Australia', 'Scheduled'),
('Australia vs South Africa - 2nd T20I', '2025-08-12', '2025-08-12', 'Australia', 'Scheduled'),
('Australia vs South Africa - 3rd T20I', '2025-08-14', '2025-08-14', 'Australia', 'Scheduled');

-- India hosts West Indies - October
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('India vs West Indies - 1st Test', '2025-10-15', '2025-10-19', 'Ahmedabad', 'Scheduled'),
('India vs West Indies - 2nd Test', '2025-10-23', '2025-10-27', 'Kolkata', 'Scheduled');

-- India hosts South Africa - November onwards
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('India vs South Africa - 1st Test', '2025-11-14', '2025-11-18', 'India', 'Scheduled'),
('India vs South Africa - 2nd Test', '2025-11-22', '2025-11-26', 'India', 'Scheduled'),
('India vs South Africa - 1st ODI', '2025-12-02', '2025-12-02', 'Ranchi', 'Scheduled'),
('India vs South Africa - 2nd ODI', '2025-12-05', '2025-12-05', 'Raipur', 'Scheduled'),
('India vs South Africa - 3rd ODI', '2025-12-08', '2025-12-08', 'Visakhapatnam', 'Scheduled'),
('India vs South Africa - 1st T20I', '2025-12-12', '2025-12-12', 'India', 'Scheduled'),
('India vs South Africa - 2nd T20I', '2025-12-14', '2025-12-14', 'India', 'Scheduled'),
('India vs South Africa - 3rd T20I', '2025-12-16', '2025-12-16', 'India', 'Scheduled'),
('India vs South Africa - 4th T20I', '2025-12-18', '2025-12-18', 'India', 'Scheduled'),
('India vs South Africa - 5th T20I', '2025-12-20', '2025-12-20', 'Narendra Modi Stadium, Ahmedabad', 'Scheduled');

-- Additional Minor Series and Events
INSERT INTO sportscal_cricketmatch (title, start_date, end_date, venue, status) VALUES
('Pakistan vs Bangladesh - T20I Series', '2025-07-20', '2025-07-24', 'Pakistan', 'Scheduled'),
('Sri Lanka vs Zimbabwe - 2 ODIs', '2025-08-29', '2025-08-31', 'Zimbabwe', 'Scheduled'),
('Pakistan in West Indies - 3 T20Is, 3 ODIs', '2025-08-01', '2025-08-12', 'West Indies', 'Scheduled'),
('Pakistan Women in Ireland - 3 WT20Is', '2025-08-06', '2025-08-10', 'Ireland', 'Scheduled'),
('South Africa tour of Australia - 3 T20Is, 3 ODIs', '2025-08-10', '2025-08-24', 'Australia', 'Scheduled');
