/*
***MEMBERS***
C  | POST  |members
R | GET | members/:member_id, 
R |GET | members/new
U | PUT | members/:member_id, 
D | DELETE |members/:member_id, 

***BOOKS***
C  | POST  /books
R | GET | /books (index), GET /books/:book_id(specific book), GET /books/:member_id (books by member)
R | GET | /books/new
U | PUT | /books/:book_id, PUT /books/:member_id
D | DELETE |/books/:book_id

****GENRES *****
C | GET /genres
R | GET/genres  GET /genres/:genre_id    GET /genres/new (creation form)
U | PUT /genres/:genre_id
D | DELETE /genres/:genre_id



*/