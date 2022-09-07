| HTTP METHOD (_Verb_) | URL (_Nouns_)          | CRUD      | Response                                  | Notes |
| -------------------- | -------------          | ----      | --------                                  | ----- |
|              GET     |  /members              |  READ     |   array of members { [member, member] }   |  allow member to view all books     |
|              GET     |  /members/:member_id   |  READ     |   single member    { member }             |  detailed views of a single user    |
|              POST    |  /members              |  CREATE   |   No data, or new member { member }       |  detailed views of a single user    |
|           PUT/PATCH  |  /members/:member_id   |  UPDATE   |   No data, or new member { member }       |  detailed views of a single user    |
|              DELETE  |  /members/:member_id   |  DESTROY  |          No data                          |  detailed views of a single user    |
