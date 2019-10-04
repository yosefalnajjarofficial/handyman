BEGIN;

INSERT INTO users (username,email,phone,password,country,city,is_handyman) 
VALUES ('mossa','skdrow@gmail.com',11111111,'$2b$10$M860UeVT4eD5dgCm8pbK6uFxrrL.8U6ZNntwcf7GtZzl.GUs/qNXi','palestine','gaza',true);

INSERT INTO users (username,email,phone,password,country,city,is_handyman) VALUES ('fadi','fadi123222@gmail.com',22222222,'$2b$10$ln/KSWd8dPCllY.EkqCM1ObIyFSiLDnwU9L2zfsa8.bCqhM1HWhLG','palestine','gaza',false);

INSERT INTO services (name) VALUES ('build');
INSERT INTO services (name) VALUES ('Blacksmith');
INSERT INTO services (name) VALUES ('House cleaning');
INSERT INTO services (name) VALUES ('Wall paint');
INSERT INTO services (name) VALUES ('Plumbing');
INSERT INTO services (name) VALUES ('Mechanics');
INSERT INTO services (name) VALUES ('electrical engineer');
INSERT INTO services (name) VALUES ('cars wacookies vs stateshing');
INSERT INTO services (name) VALUES ('Pest and rodent control');
INSERT INTO services (name) VALUES ('Freight');

INSERT INTO handyman (handyman_id, job_title,hour_rate,description) 
VALUES (1,1,15,'good builder');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the house','2019-09-24T07:02:08.773Z',15,'pending','build my house','omar el mukhtar','123','12');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the flat','2019-09-24T07:02:08.773Z',15,'accepted','build the flat','omar el mukhtar','12','142');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status,message,street,building_number,flat_number) 
VALUES (2,1,'build the flat','2019-09-24T07:02:08.773Z',20,'decliend','build the room','omar el mukhtar','132','1422');

COMMIT;
