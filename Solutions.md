| HTTP METHOD (_Verb_) | URL (_Nouns_)          | CRUD      | Response                                  | Notes |
| -------------------- | -------------          | ----      | --------                                  | ----- |
|              GET     |  /members              |  READ     |   array of members { [member, member] }   |  allow member to view all books     |
|              GET     |  /members/:member_id   |  READ     |   single member    { member }             |  detailed views of a single user    |
|              POST    |  /members              |  CREATE   |   No data, or new member { member }       |  detailed views of a single user    |
|           PUT/PATCH  |  /members/:member_id   |  UPDATE   |   No data, or new member { member }       |  detailed views of a single user    |
|              DELETE  |  /members/:member_id   |  DESTROY  |   No data                                 |  detailed views of a single user    |



| -------------------- | -------------          | ----      | --------                                  | -----                                             |
|              GET     |  /members              |    READ   |   array of members { [member, member] }   |  allow member to view all books                   |
|              GET     |  /members/:member_id   |    READ   |   single member    { member }             |  detailed views of a single user                  |
|              POST    |  /members              |   CREATE  |   No data, or new member { member }       | status 204 or redirect to /members/:member_id     |
|           PUT/PATCH  |  /members/:member_id   |  UPDATE   |   No data, or new member { member }       | status 204 or redirect to /members/:member_id     |
|              DELETE  |  /members/:member_id   |  DESTROY  |   No data                                 | status 204 or redirect to /members/:member_id     |

| -------------------- | -------------          | ----      | --------                                  | -----                                             |
|              GET     |  /books                |    READ   |   array of books   { [book, book] }       |  allow member to view all books                   |
|              GET     |  /books/:book_id       |    READ   |   single book    { book }                 |  status 204 or redirect                           |
|              POST    | /members/:member_id/books |   CREATE  |   No data, or new book { book }        |  status 204 or redirect to /books/:book_id        |
|           PUT/PATCH  | /books/:book_id/checkout  |  UPDATE   |   No data, or new book { book }        |  status 204 or redirect to /books/:book_id        |
|              DELETE  | /books/:book_id/return    |  DESTROY  |   No data                              |  status 204 or redirect to /books/:book_id        |

| -------------------- | -------------          | ----      | --------                                  | -----                                             |
|              GET     |  /books/:book_id/genres    |    READ   |   array of all genres { [genre, genre] }  |  allow member to view all book genres         |
|              GET     |  /books/genres/:genre_id   |    READ   |   single genre    { genre }           |  status 204 or redirect                           |
|              POST    | /books/genres/:genre_id    |   CREATE  |   No data, or new book { book }       |  status 204 or redirect to /books/:book_id        |
|           PUT/PATCH  |  /books/:genre_id          |  UPDATE   |   No data, or new book { book }       |  status 204 or redirect to /books/:book_id        |
|              DELETE  |  /books/:genre_id          |  DESTROY  |          No data                      |  status 204 or redirect to /books/:book_id        |