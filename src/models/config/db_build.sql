BEGIN;
DROP TABLE IF EXISTS baraka_item, baraka_list, baraka_user; 
CREATE TABLE baraka_list (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);
CREATE TABLE baraka_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR NOT NUll
);
CREATE TABLE baraka_item (
    id SERIAL PRIMARY KEY,
    content VARCHAR,
    is_done BOOLEAN,
    list_id INTEGER REFERENCES baraka_list(id),
    user_id INTEGER REFERENCES baraka_user(id)
);
COMMIT;