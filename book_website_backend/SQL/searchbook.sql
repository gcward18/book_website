--- example for the following request
--- http://localhost:5000/add_book?title=a&img_path=c&edition=0&gutenberg_path=d&publisher=e&notes=f&isbn=g&publish_year=h&pages=i&binding_type=j&jacket_condition=k&author=b
SELECT * FROM GCWZF4.BOOK_CONDITION 
WHERE JACKET_CONDITION = 'k';

SELECT * FROM GCWZF4.JACKET_CONDITIONS 
WHERE JACKET_CONDITION = 'k';


SELECT * FROM GCWZF4.PUBLISHER_BOOKS 
WHERE PUBLISHER = 'e';

SELECT * FROM GCWZF4.PUBLISHERS 
WHERE PUBLISHER = 'e';


SELECT * FROM GCWZF4.BOOK_BINDING_TYPES 
WHERE BINDING_TYPE = 'j';

SELECT * FROM GCWZF4.BINDING_TYPES 
WHERE BINDING_TYPE = 'j';

SELECT *   
FROM GCWZF4.BOOK_EDITIONS 
WHERE  TITLE = 'a' AND AUTHOR = 'b' AND EDITION = '0';

SELECT * FROM GCWZF4.AUTHORS
WHERE AUTHOR = 'b';