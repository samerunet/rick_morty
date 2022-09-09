-- 1. List the names of all NFL teams'
SELECT name FROM teams;
         name         
----------------------
 Buffalo Bills
 Miami Dolphins
 New England Patriots
-- 2. List the stadium name and head coach of all NFC teams

SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

-- 3. List the head coaches of the AFC South
SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';
   head_coach   
----------------
 Bill OBrien
 Chuck Pagano
 Gus Bradley
 Ken Whisenhunt
-- 4. The total number of players in the NFL
SELECT COUNT (*) FROM players;
 count 
-------
  1532
(1 row)
-- 5. The team names and head coaches of the NFC North and AFC East
 SELECT name, head_coach FROM teams WHERE conference = 'NFC' AND division = 'North' OR  conference = 'AFC' AND division = 'East'; 
         name         |   head_coach   
----------------------+----------------
 Buffalo Bills        | Doug Marrone
 Miami Dolphins       | Joe Philbin
 New England Patriots | Bill Belichick
 New York Jets        | Rex Ryan
 Chicago Bears        | Marc Trestman
 Detroit Lions        | Jim Caldwell
 Green Bay Packers    | Mike McCarthy
 Minnesota Vikings    | Mike Zimmer
-- 6. The 50 players with the highest salaries
SELECT name, salary FROM players ORDER BY salary DESC LIMIT 50; 
          name           |  salary  
-------------------------+----------
 Peyton Manning          | 18000000
 Drew Brees              | 15760000
 Dwight Freeney          | 14035000
 Elvis Dumervil          | 14000000
 Michael Vick            | 12500000
 Sam Bradford            | 12000000
 Jared Allen             | 11619850
 Matt Ryan               | 11500000
-- 7. The average salary of all NFL players
SELECT AVG(salary) FROM players;
         avg          
----------------------
 1579692.539817232376
(1 row)
-- 8. The names and positions of players with a salary above 10_000_000
 SELECT name, position, salary FROM players WHERE salary >= 10000000;
-- 9. The player with the highest salary in the NFL
SELECT name, salary FROM players ORDER BY salary DESC limit 1;
      name      |  salary  
----------------+----------
 Peyton Manning | 18000000
(1 row)

-- 10. The name and position of the first 100 players with the lowest salaries
SELECT name, salary FROM players ORDER BY salary ASC limit 100;
-- 11. The average salary for a DE in the nfl
SELECT AVG(salary) FROM players WHERE position = 'DE';
         avg          
----------------------
 2161326.377049180328
(1 row)
-- 12. The names of all the players on the Buffalo Bills

-- 13. The total salary of all players on the New York Giants
SELECT SUM(salary) FROM players INNER JOIN teams ON players.teams_id = teams.id WHERE teams.name = 'New York Giants';
-- 14. The player with the lowest salary on the Green Bay Packers
SELECT salary, players.name FROM players JOIN teams ON players.team_id = teams.id WHERE  teams.name = 'Green Bay Packers' ORDER BY salary ASC LIMIT 1;
 salary |      name      
--------+----------------
 390000 | Shaky Smithson
(1 row)