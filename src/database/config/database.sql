BEGIN;

DROP TABLE IF EXISTS users,location CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR UNIQUE
);

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    adress TEXT,
    image TEXT,
    rate INT,
    user_email VARCHAR,
    FOREIGN KEY (user_email) REFERENCES users(email) 
);

COMMIT;