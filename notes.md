# Notes

## add search functionality
  - create form with search input and submit button as an ejs layout component in views
  - this form will send the value entered via a get request since it is searching a name
  - method="GET" action="/getUsername"
  - set up the route /searchUsername in routes and connection controller handler
  - search button clicked
  - url searched is: URL:  /searchUsername?searchUsernameInput=Seneca
    - search-username-input => name attribute on the form element
    - Seneca => Value is input by user
    - req.query: { 'searchUsernameInput': 'Seneca' }
    - in the controller handle the request to open a new db pool and query the database for the req.query value: Seneca
    - SELECT * FROM usernames WHERE username LIKE '%Seneca%'
    - create new file: db/search.js
    - const queryString = `SELECT * FROM usernames WHERE username ILIKE $1`;
    - const searchTerm = `%value%`;
    - const results = await pool.query(queryString, [searchTerm]);


## add capacity to delete all usernames

