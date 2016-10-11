freeCodeCamp TimeStamp API Microservice
---------------------------------------

**User Stories**

 - I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
 - User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.
 - User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

**Usage**

 - `https://freecodecampdata-emstone.c9users.io:8080/December 3, 2016`
 - `https://freecodecampdata-emstone.c9users.io:8080/1476051567`

**Example Output**

 - {"unix":"1481328000","natural":"Saturday, December 10, 2016"}