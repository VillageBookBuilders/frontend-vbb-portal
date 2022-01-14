# Village Portal (VBB)

Village Portal is a open-sourced `school-based mentoring managment platform`. Development is lead by Village Book Builders volunteers. Village Book Builders accelerates learners globally through virtual mentoring, learning libraries, and special educational community-wide interventions. Village Portal helps schedule hundreds of virtual volunteer mentors in global time zones. Other Features are in development.

This project is broken up into a separate backend and frontend repository. The backend contains the Django project which uses the Django Rest Framework to host a simple API and can be found at [backend-vbb-portal](https://github.com/VilllageBookBuilders/backend-vbb-portal). The frontend uses React and queries data from the API.

## Running locally

This repo will default to a `dev` environment hosted on Heroku so you don't need to run the backend repo locally. If you would like to please see instructions on how to do so in the [backend-vbb-portal](https://github.com/VilllageBookBuilders/backend-vbb-portal). You will also need to configure a `.env` file. An example of this file can be found in `./examples/exampleENV`.

### Run the following commands inside of the repository folder to get started:

1. `yarn` (install the node_js modules) (node js needs to be installed on your computer first)

2. `yarn start` (this will create a temporary local server which reloads on detecting newly-saved changes to the codebase)

3. `ctrl + c` (when pressed in the terminal window running the node server will close the server)

**Note:** The Heroku hosted `dev` server will sleep if not accessed every 5 minutes so your first request (typically login) will take a little bit to return. This is normal.

## Development

### To Log In for Development

Navigate to your local host ( typically `http://localhost:3000`) and go to the `/signin/` route and log in with an email/pw provided to you as the role you which to emulate (see User types below).

### Docs and valuable links

- `NOTES.MD` has been added to the `.gitignore` file if you'd like to keep a set of notes with your local file.

- [Swagger docs for the python backend ](https://vbb-backend.herokuapp.com/swagger/)

- **Note:** The `v1/`, or version, of the end point should be written into the axios call and <strong>not</strong> added to the root endpoint.

### Coding

Examples of component patterns can be found under examples as can redux folder structure.

### Testing Notes

**NOTE:** Phone numbers must be accurate down to the exchange. For the US that means the country code ( 1 ) + area code ( 202 ) + ( 489 ) must be real or the request to the backend will fail. The last four digits can be any number.

### Terminology

- Users types (found in `src/redux/User.redux/User.types.js`):

  - 'STUDENT'
  - 'MENTOR'
  - 'TEACHER'
  - 'DIRECTOR'
  - 'ADVISOR'
  - 'HEADMASTER'

- Slot:

  - Represents the template of a slot ( think of this as the cookie cutter you make the cookies (slots) from )
  - You book a time slot which then generates an instance of a session with a specific mentee

- Session: Represents an individual meeting created from the session slot ( think of the cookie itself )
