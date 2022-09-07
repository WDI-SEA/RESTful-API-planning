| HTTP METHOD (_Verb_)    | URL (_Nouns_)       | CRUD | Response                               | Notes |
| --------------------    | -------------       | ---- | --------                               | ----- |
| GET                      /members              READ   array of members                          allows user to access all members  
| GET                      /members/:user_id     READ   single user based on their ID             details single user      
| GET                      /books                READ   array of books                            allows user to access all books
| GET                      /genres               READ   array of genres                           allows user to look at all genres
| GET                      /books/:user_id       READ   array of books checked out by members     allows user to look at books checked out by members
| GET                      /books/:genre_id      READ   array of books based on genre             allows user to look at books based on genres
| GET                      /books/:book_id       READ   single book based on the book ID          allows user to look at single book based on the book id
| POST                     /members              CREATE create new member                         allows new member to be created
| POST                     /books                CREATE add new book to array                     allows new book to be added to the system
| POST                     /genres               CREATE add new genre to array                    allows user to add new genre to list of genres
| PUT                      /members/:user_id     UPDATE updates single member information         allows user to update member information
| PUT                      /books/:book_id       UPDATE updates single book information           allows user to update single book info (checked out status)
| PUT                      /books/:genre_id      UPDATE updates genres for the books              allows user to update genres for books
| PUT                      /genres               UPDATE updates genres array                      allows user to update genres
| DELETE                   /books/:book_id       DELETE deletes books from book array             allows user to remove book from database
| DELETE                   /members/:user_id     DELETE deletes member from member array          allows user to delete a member from the system
| DELETE                   /genres/:book_id      DELETE deletes a genre from the specific book    allows user to delete a genre from the book
