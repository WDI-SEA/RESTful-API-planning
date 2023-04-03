| HTTP METHOD (_Verb_) | URL (_Nouns_) | CRUD | Response | Notes |
| -------------------- | ------------- | ---- | -------- | ----- |
| GET |	/members |	READ |	Find a list of all members |	200 OK: Retrieve a list of all members / 404 Not Found
| POST | /members |	CREATE |	Create a new member	 | 201 Created: Create a new member / 400 Bad Request
| GET |	/members/:id |	READ |	Find a specific member by their ID |	200 OK: Retrieve a specific member by their ID / 404 Not Found
| PUT |	/members/:id |	UPDATE |	Find and Update a member by their id |	200 OK: Update a specific member by their ID / 400 Bad Request
| DELETE |	/members/:id |	DELETE |	Delete a member by their id	 | 204 No Content: Delete a specific member by their ID / 400 Bad Request
| GET |	/members/:id/books |	READ |	Find a list of books a specific user has checked out |	200 OK: Retrieve a list of books checked out by a specific member / 404 Not Found
| GET |	/books:	 | READ	| Find a list of all books |	200 OK: Retrieve a list of all books / 404 Not Found
| POST |	/books:	| CREATE |	Add a book to the list |	201 Created: Create a new book / 400 Bad Request
| GET |	/books/:id |	READ |	Find a book by its id |	200 OK: Retrieve a specific book by its ID / 404 Not Found 
| PUT |	/books/:id |	UPDATE |	Find a book by its id and update it |	200 OK: Update a specific book by its ID / 400 Bad Request
| DELETE |	/books/:id |	DELETE |	Find a book by the id and delete it |	204 No Content: Delete a specific book by its ID /400 Bad Request
| PUT |	/books/:id/checkout/:memberId |	UPDATE |	Check out a specific book to a specific member |	200 OK: Check out a book to a specific member by their ID / 400 Bad Request
| PUT |	/books/:id/checkin |	UPDATE |	Check a book back in |	200 OK: Check in a book / 400 Bad Request
| GET |	/books/:id/genres |	READ |	Find the list of genre of a book |	200 OK: Retrieve a list of genres associated with a specific book / 404 Not Found
| GET |	/genres	| READ |	Finds a list of genres	 | 200 OK: Associate a genre with a specific book / 404 Not Found
| POST |	/genres	| CREATE |	Add a new genre	 | 201 Created: Create a new genre / 400 Bad Request
| GET |	/genres/:id	 | READ	 |Find a genre by its id |	200 OK: Retrieve a specific genre by its ID / 404 Not Found
| PUT |	/genres/:id	 | UPDATE |	Update a genre by its id |	200 OK: Update a specific genre by its ID / 400 Bad Request
| DELETE |	/genres/:id |	DELETE |	Delete a genre by its id |	204 No Content: Delete a specific genre by its ID /400 Bad Request
| GET |	/genres/:id/books |	READ |	Find a list of books by its genre |	200 OK: Retrieve a list of books associated with a specific genre /404 Not Found