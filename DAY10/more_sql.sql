CREATE TABLE Students ( 	 /* Create table with a single field as primary key */
    ID INT NOT NULL
    Name VARCHAR(255)
    PRIMARY KEY (ID)
);

CREATE TABLE Students ( 	 /* Create table with multiple fields as primary key */
    ID INT NOT NULL
    LastName VARCHAR(255)
    FirstName VARCHAR(255) NOT NULL,
    CONSTRAINT PK_Student
    PRIMARY KEY (ID, FirstName)
);

ALTER TABLE Students 	 /* Set a column as primary key */
ADD PRIMARY KEY (ID);

ALTER TABLE Students 	 /* Set multiple columns as primary key */
ADD CONSTRAINT PK_Student 	 /*Naming a Primary Key*/
PRIMARY KEY (ID, FirstName); 



SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING count(assignment_submissions.*) < 100; 





SELECT students.name as student, count (assignment_submissions.*) as total_submissions 
FROM assignment_submissions 
JOIN students ON students.id = student_id 
WHERE students.end_d