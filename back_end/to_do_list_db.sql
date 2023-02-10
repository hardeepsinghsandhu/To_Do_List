CREATE DATABASE to_do_list_db;

--\c to_do_list_db

CREATE TABLE todo(
    tid SERIAL PRIMARY KEY,
    description VARCHAR(255)
);