CREATE TABLE farm (
  id SERIAL PRIMARY KEY,
  owners VARCHAR(50) NOT NULL,
  number_of_worker VARCHAR(50) NOT NULL
); 

INSERT INTO farm (id, owners) 
VALUES (1, 'Leo',20); 

SELECT * FROM farm; 

SELECT count(*) FROM farm; 



SELECT matchid, player FROM goal 
  WHERE teamid LIKE 'GER' 

  SELECT id,stadium,team1,team2
  FROM game 
WHERE id Like 1012


SELECT player, teamid,stadium, mdate
  FROM game JOIN goal ON (id=matchid) 
  WHERE teamid like 'GER';


  SELECT team1, team2 ,player FROM game 
JOIN goal ON id = matchid 
WHERE player LIKE 'Mario%'