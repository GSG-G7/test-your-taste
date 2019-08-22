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
    address TEXT,
    image TEXT,
    rate INT,
    user_email VARCHAR,
    FOREIGN KEY (user_email) REFERENCES users(email) 
);

INSERT INTO users(name,email) values ('abdallah','ra@gmail.com');

INSERT INTO location(name,address,image,rate,user_email) values ('abdallah','gaza','https://www.beachwoodplace.com/content/ggp-malls/beachwood-place/en/_jcr_content/par/row_927505531/row-par/image_content_box/image.img.jpg/1559232825414.jpg', 2 ,'ra@gmail.com');


COMMIT;
