INSERT INTO baraka_user
    (username , password , email)
VALUES
    ('Mohammed' , 'password1' , 'codecademy@gmail.com'),
    ('Fadi' , '1' , 'fadi@gmail.com'),
    ('Mai' , '1' , 'mai@gmail.com'),
    ('Amooda' , '1' , 'amooda@gmail.com');
    
INSERT INTO baraka_list
    (name)
VALUES
    ('Project 1'),
    ('Project 2'),
    ('Project 3');

INSERT INTO baraka_item
    (list_id , user_id ,content, is_done)
VALUES
    ( 1 , 1, 'some dumy text', true),
    ( 2 , 2, 'some dumy text', true),
    ( 3 , 3, 'some dumy text', false);

