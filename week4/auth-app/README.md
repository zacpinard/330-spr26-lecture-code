# Express App Template

This folder contains a reusable Express starter. It includes:

- an Express server entrypoint
- Babel, ESLint and Prettier configuration
- Installed packages for testing (`jest`, `supertest`)

## Getting started

1. Copy/paste this template and rename the `name` property in `package.json`
2. From the folder, run `npm install`.
3. Start the dev server with `npm run dev`.
4. Run tests with `npm test`.


## Planning: POST /signup route

* Setup MongoDB
  * Install mongoose
  * Connect to MongoDB via Mongoose
* Create a user record
  * email
  * password (eventually store securely, sooner rather than later)
* Implement route in express
* Tests