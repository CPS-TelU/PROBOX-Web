// backend/app.js
import express from 'express';
import session from 'express-session';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';

// Generate a secret key
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Generated Secret Key:', secretKey);

const app = express();

// Set up sessions
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Custom middleware to check authentication
function requireLogin(req, res, next) {
  if (req.session.userId) {
    // User is authenticated, allow them to proceed
    next();
  } else {
    // User is not authenticated, redirect to login page or show an error
    res.redirect('/Login'); // Adjust this route according to your setup
  }
}

// Determine the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '/')));

// Login route
app.get('/Login', (req, res) => {
  // Render your login page
  // You can use a template engine like EJS or send HTML directly
  res.sendFile(path.join(__dirname, 'src/Pages/Login.jsx'));
});

// Dashboard route (protected with middleware)
app.get('/Dashboard', requireLogin, (req, res) => {
  // Render your dashboard page or provide dashboard content
  res.sendFile(path.join(__dirname, 'src/Pages/Dashboard.jsx'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// // backend/app.js
// import express from 'express';
// import session from 'express-session';
// import crypto from 'crypto';
// import path from 'path'; // Import the path module
// import bodyParser from 'body-parser'; // Import the body-parser module

// // Generate a secret key
// const secretKey = crypto.randomBytes(32).toString('hex');
// console.log('Generated Secret Key:', secretKey);

// const app = express();

// // Set up sessions
// app.use(session({
//   secret: secretKey,
//   resave: false,
//   saveUninitialized: true
// }));

// // Middleware to parse request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Custom middleware to check authentication
// function requireLogin(req, res, next) {
//   if (req.session.userId) {
//     // User is authenticated, allow them to proceed
//     next();
//   } else {
//     // User is not authenticated, redirect to login page or show an error
//     res.redirect('/Login'); // Adjust this route according to your setup
//   }
// }

// // Serve static files from public directory
// app.use(express.static(path.join(__dirname, '/')));

// // Login route
// app.get('/Login', (req, res) => {
//   // Render your login page
//   // You can use a template engine like EJS or send HTML directly
//   res.sendFile(path.join(__dirname, 'src/Pages/Login.jsx'));
// });

// // Dashboard route (protected with middleware)
// app.get('/Dashboard', requireLogin, (req, res) => {
//   // Render your dashboard page or provide dashboard content
//   res.sendFile(path.join(__dirname, 'src/Pages/Dashboard.jsx'));
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
