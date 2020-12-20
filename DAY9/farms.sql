CREATE TABLE farm (
  id SERIAL PRIMARY KEY,
  owners VARCHAR(50) NOT NULL,
  number_of_worker VARCHAR(50) NOT NULL
); 

INSERT INTO farm (id, owners) 
VALUES (1, 'Leo',20); 

SELECT * FROM farm; 

SELECT count(*) FROM farm;