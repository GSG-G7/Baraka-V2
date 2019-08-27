INSERT INTO baraka_user
    (username , password , email)
VALUES
    ('Mohammed-Q96-1' , 'password1' , 'codecademy'),
    ('Mohammed-Q96-2' , 'password2' , 'codecademy'),
    ('Mohammed-Q96-3' , 'password3' , 'codecademy');
    
INSERT INTO baraka_list
    (name)
VALUES
    ('some dumy text'),
    ('some dumy text2'),
    ('some dumy text3');

INSERT INTO baraka_item
    (list_id , user_id ,content, isDone)
VALUES
    ( 1 , 1, 'some dumy text', true),
    ( 2 , 2, 'some dumy text', true),
    ( 3 , 3, 'some dumy text', false);

