# Supabase Dog Adoption App

## Learning Objectives
- Draw a simple architecture diagram describing the relationship between a user's computer and a single RESTful API.
- On load, use fetch and .then to hit a GET endpoint, get all items, and set state and update the view using the response.
- In front end apps with asynchronous behavior, use the network tab to examine (and debug) the request being sent to a server and the response received from a server.
- Predict the order of function calls when using Promises

[Buggy Supabase Adopt a Dog](https://github.com/alchemycodelab/buggy-js-adopt-a-dog)

### Live Example:
https://alchemycodelab.github.io/web-01-adopt-a-dog/


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        1 |


| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load on the home page, see a list of dogs (names and breed image), fetched from supabase                               |        2 |
| On clicking a dog, user should be taken to that dog's detail page.  | 1 |
| Detail page should get the id from the URL and use that id to fetch that dog from supabase.                                      |        1 |
| Detail page should show the user details about the dog (including age, breed, and description) |     1 |

| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| PURE with TDD: `renderDogCard(dog)` : return DOM node |1|
| PURE with TDD: `renderDogDetail(dog)` : return DOM node |1|
| ASYNC: `fetchDogs()` : return array of dogs from supabase |1|
| ASYNC: `fetchDog(id)` : return single dog from supabase |1|
