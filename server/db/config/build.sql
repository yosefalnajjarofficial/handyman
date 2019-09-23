BEGIN;

DROP TABLE IF EXISTS users, handyman, services, jobs;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone INTEGER NOT NULL,
  password VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  is_handyman BOOLEAN NOT NULL
);

CREATE TABLE services(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE handyman(
  handyman_id INTEGER PRIMARY KEY REFERENCES users(id),
  job_title INTEGER REFERENCES services(id),
  hour_rate INTEGER NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY NOT NULL, 
  client_id INTEGER REFERENCES users(id), 
  handyman_id INTEGER REFERENCES handyman(handyman_id), 
  description TEXT NOT NULL, 
  dead_line DATE NOT NULL, 
  price INTEGER NOT NULL, 
  status VARCHAR(255) NOT NULL, 
  message TEXT, 
  street VARCHAR(255) NOT NULL, 
  building_number INTEGER NOT NULL, 
  flat_number VARCHAR(255) NOT NULL
);

COMMIT;
