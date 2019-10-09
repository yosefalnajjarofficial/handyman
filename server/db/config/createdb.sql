-- development db
CREATE DATABASE handyman;
CREATE USER handyman WITH superuser password '123';
ALTER DATABASE handyman OWNER TO handyman;
-- test db
CREATE DATABASE handymantest;
CREATE USER handymantest WITH superuser password '123';
ALTER DATABASE handymantest OWNER TO handymantest;