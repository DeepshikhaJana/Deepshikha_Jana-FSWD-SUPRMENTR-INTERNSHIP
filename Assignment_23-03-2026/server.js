const express = require("express");
const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Home Page!</h1><p>This is the main entry point of our Hello Server.</p>",
  );
});

// About Route
app.get("/about", (req, res) => {
  res.send(
    "<h1>About Us</h1><p>We are a simple Node.js server built with Express to demonstrate basic routing.</p>",
  );
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send(
    '<h1>Contact Us</h1><p>Reach out to us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>',
  );
});

// 404 Route (Catch-all for undefined routes)
app.use((req, res) => {
  res
    .status(404)
    .send(
      "<h1>404 - Oops! Page Not Found</h1><p>The route you are looking for does not exist.</p>",
    );
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
