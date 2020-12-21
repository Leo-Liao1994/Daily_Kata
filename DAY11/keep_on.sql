-- CREATE INDEX first_name_index ON person (first_name)  

-- CREATE INDEX first_name_and_last_name_index ON person (first_name, last_name) 


-- CREATE VIEW first_and_last_name AS SELECT first_name, last_name FROM person;  -- create a table that shows first & last name in table person.

CREATE VIEW base_storage AS 
SELECT base.base_id, supply.supply_id, supply.name, 
    COALESCE( 
      (SELECT quantity FROM inventory 
        WHERE base_id = base.base_id AND supply_id = supply.supply.id), 0) 
        AS quantity 
FROM base CROSS JOIN supply ;

