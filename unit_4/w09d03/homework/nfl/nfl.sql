-- 1. List the names of all NFL teams'

--select name from teams;

--  Buffalo Bills
--  Miami Dolphins
--  New England Patriots
--  New York Jets
--  Baltimore Ravens
--  Cincinnati Bengals
--  Cleveland Browns
--  Pittsburgh Steelers
--  Houston Texans
--  Indianapolis Colts
--  Jacksonville Jaguars
--  Tennessee Titans
--  Denver Broncos
--  Kansas City Chiefs
--  Oakland Raiders
--  San Diego Chargers
--  Dallas Cowboys
--  New York Giants
--  Philadelphia Eagles
--  Washington Redskins
--  Chicago Bears
--  Detroit Lions
--  Green Bay Packers
--  Minnesota Vikings
--  Atlanta Falcons
--  Carolina Panthers
--  New Orleans Saints
--  Tampa Bay Buccaneers
--  Arizona Cardinals
--  St. Louis Rams
--  San Francisco 49ers
--  Seattle Seahawks


-- 2. List the stadium name and head coach of all NFC teams

-- select stadium, head_coach from teams where conference = 'NFC';
--             stadium            |  head_coach   
-- -------------------------------+---------------
--  AT&T Stadium                  | Jason Garrett
--  MetLife Stadium               | Tom Coughlin
--  Lincoln Financial Field       | Chip Kelly
--  FedExField                    | Jay Gruden
--  Soldier Field                 | Marc Trestman
--  Ford Field                    | Jim Caldwell
--  Lambeau Field                 | Mike McCarthy
--  TCF Bank Stadium              | Mike Zimmer
--  Georgia Dome                  | Mike Smith
--  Bank of America Stadium       | Ron Rivera
--  Mercedes-Benz Superdome       | Sean Payton
--  Raymond James Stadium         | Lovie Smith
--  University of Phoenix Stadium | Bruce Arians
--  Edward Jones Dome             | Jeff Fisher
--  Levis Stadium                 | Jim Harbaugh
--  CenturyLink Field             | Pete Carroll



-- 3. List the head coaches of the AFC South
-- select head_coach from teams where division = 'South' and conference = 'AFC';
--      head_coach   
-- ----------------
--  Bill OBrien
--  Chuck Pagano
--  Gus Bradley
--  Ken Whisenhunt
-- (4 rows)



-- 4. The total number of players in the NFL
-- select count(*) from players;
-- 1,532
-- 5. The team names and head coaches of the NFC North and AFC East
-- select head_coach, name from teams where conference = 'NFC' and division = 'North' ;
--   head_coach   |       name        
-- ---------------+-------------------
--  Marc Trestman | Chicago Bears
--  Jim Caldwell  | Detroit Lions
--  Mike McCarthy | Green Bay Packers
--  Mike Zimmer   | Minnesota Vikings
-- (4 rows)


-- select head_coach, name from teams where conference = 'AFC' and division = 'East' ;
--    head_coach   |         name         
----------------+----------------------
--  Doug Marrone   | Buffalo Bills
--  Joe Philbin    | Miami Dolphins
--  Bill Belichick | New England Patriots
--  Rex Ryan       | New York Jets

-- 6. The 50 players with the highest salaries
-- select * from players order by salary desc limit 50;
--  id  |          name           | position |  salary  | team_id 
-- ------+-------------------------+----------+----------+---------
--   589 | Peyton Manning          | QB       | 18000000 |      13
--  1255 | Drew Brees              | QB       | 15760000 |      27
--   434 | Dwight Freeney          | DE       | 14035000 |      10
--   590 | Elvis Dumervil          | DE       | 14000000 |      13
--   870 | Michael Vick            | QB       | 12500000 |      19
--  1390 | Sam Bradford            | QB       | 12000000 |      30
--  1109 | Jared Allen             | DE       | 11619850 |      24
--  1155 | Matt Ryan               | QB       | 11500000 |      25
--  1021 | Matthew Stafford        | QB       | 11500000 |      22
--   647 | Tamba Hali              | DE       | 11250000 |      14
--    60 | Jake Long               | T        | 11200000 |       2
--   871 | Nnamdi Asomugha         | CB       | 11000000 |      19
--   922 | Trent Williams          | T        | 11000000 |      20
--  1298 | Vincent Jackson         | WR       | 11000000 |      28
--  1022 | Cliff Avril             | DE       | 10600000 |      22
--  1348 | Calais Campbell         | DE       | 10600000 |      29
--   289 | Joe Thomas              | T        | 10500000 |       7
--  1156 | Brent Grimes            | CB       | 10431000 |      25
--   435 | Peyton Manning (buyout) | QB       | 10400000 |      10
--  1391 | Chris Long              | DE       | 10310000 |      30
--   731 | Philip Rivers           | QB       | 10200000 |      16
--  1392 | Jason Smith             | T        | 10000000 |      30
--   163 | David Harris            | LB       |  9900000 |       4
--   104 | Wes Welker              | WR       |  9515000 |       3
--  1299 | Davin Joseph            | G        |  9500000 |      28
--   648 | Dwayne Bowe             | WR       |  9443000 |      14
--   872 | Asante Samuel           | CB       |  9400000 |      19
--   973 | Brandon Marshall        | WR       |  9300000 |      21
--  1023 | Ndamukong Suh           | DT       |  9250000 |      22
--   773 | Tony Romo               | QB       |  9000000 |      17
--   974 | Julius Peppers          | DE       |  8900000 |      21
--   774 | Anthony Spencer         | LB       |  8800000 |      17
--    61 | Karlos Dansby           | LB       |  8800000 |       2
--  1201 | Jordan Gross            | T        |  8500000 |      26
--   649 | Tyson Jackson           | DE       |  8005000 |      14
--  1110 | Adrian Peterson         | RB       |  8000000 |      24
--   591 | Champ Bailey            | CB       |  8000000 |      13
--   541 | Chris Johnson           | RB       |  8000000 |      12
--  1057 | Aaron Rodgers           | QB       |  8000000 |      23
--   873 | Jason Peters            | T        |  7900000 |      19
--  1300 | Eric Wright             | CB       |  7750000 |      28
--  1202 | Steve Smith             | WR       |  7750000 |      26
--   164 | Santonio Holmes         | WR       |  7750000 |       4
--   975 | Jay Cutler              | QB       |  7700000 |      21
--   976 | Matt Forte              | RB       |  7700000 |      21
--   217 | Ray Rice                | RB       |  7700000 |       5
--   977 | Brian Urlacher          | LB       |  7500000 |      21
--   389 | Johnathan Joseph        | CB       |  7250000 |       9
--   436 | Gary Brackett           | LB       |  7200000 |      10
--   218 | Ed Reed                 | S        |  7200000 |       5
-- (50 rows)

-- 7. The average salary of all NFL players

-- 8. The names and positions of players with a salary above 10_000_000

-- 9. The player with the highest salary in the NFL

-- 10. The name and position of the first 100 players with the lowest salaries

-- 11. The average salary for a DE in the nfl

-- 12. The names of all the players on the Buffalo Bills

-- 13. The total salary of all players on the New York Giants

-- 14. The player with the lowest salary on the Green Bay Packers
