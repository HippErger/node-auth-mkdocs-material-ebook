require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const basicAuth = require('express-basic-auth')

// Function used in the myAuthorizer function
const myAuthorizer = (username, password) => {
  // Change this later when ready, maybe use a mongoDB or sqlite3 in memory
  // https://studio.zollege.com/container/block-v1:ACA+JS311+2020_Q2+type@vertical+block@7bfe32a3ac0748d89a46aa339a68fa9f
  return (username === process.env.STUDENT_USERNAME && password === process.env.STUDENT_PASSWORD) || (username === process.env.INSTRUCTOR_USERNAME && password === process.env.INSTRUCTOR_PASSWORD) 
}

// using the express-basic-auth package we can return a WWW challenge for the user to enter their password.
const challengeAuth = basicAuth({
  authorizer: myAuthorizer,
  challenge: true
})

// app.use(express.json());
// app.use(express.urlencoded());

// forces all requests to go through the challengeAuth function, see above
app.use('/', challengeAuth);

// Serve static content
app.use(express.static('./ebook-folder/site'))
// may need to include images later....

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

// Return to this approach later:
// https://github.com/expressjs/express/blob/master/examples/auth/index.js