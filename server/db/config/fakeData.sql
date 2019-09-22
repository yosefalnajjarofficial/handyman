BEGIN;

INSERT INTO users (username,email,phone,password,country,city,is_handyman) 
VALUES ('mossa','mossa123@gmail.com',11111111,'mmm123','palestine','gaza',true);

INSERT INTO users (username,email,phone,password,country,city,is_handyman) VALUES ('fadi','fadi123@gmail.com',22222222,'fff123','palestine','gaza',false);

INSERT INTO services (name) VALUES ('builder');

INSERT INTO handyman (handyman_id, job_title,hour_rate,description) 
VALUES (1,1,15,'good builder');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the house','12-12-2020',15,'pending','build my house','omar el mukhtar','123','12');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the flat','20-1-2020',15,'accepted','build the flat','omar el mukhtar','12','142');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the flat','10-12-2019',20,'decliend','build the room','omar el mukhtar','132','1422');

COMMIT;
