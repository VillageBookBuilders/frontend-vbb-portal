# Fixtures

## Purpose

The purpose of the fixtures is to act as the response from the backend API. These can be used for writing test or building out a feature. They should be modelled after the [Swagger docs for the python backend ](https://vbb-backend.herokuapp.com/swagger/). Keys should be written in `snake_case`. Values should be representative of real data ( i.e. Phone numbers should be localized, timezones should be accurate).

## Structures

Files should be named for their endpoints with each `const` named after the HTML Verb ( GET, POST, etc ) and endpoint that the data represents. `getStudents` would return a list of all students as a RESTful get request to `/students`.
