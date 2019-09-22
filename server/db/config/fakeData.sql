BEGIN;
INSERT INTO users (username,email,phone,password,country,city,is_handyman) VALUES ('mossa','mossa123@gmail.com',11111111,'mmm123','palestine','gaza',true);

INSERT INTO handyman (handyman_id, job_title,hour_rate,description) VALUES (1,1,15,'good worker');

INSERT INTO services (name) VALUES ('cooker');

INSERT INTO jobs (client_id,handyman_id,description,dead_line,price,status) VALUES (2,1,'cook the food','12-12-2020',15,'pending')


COMMIT;