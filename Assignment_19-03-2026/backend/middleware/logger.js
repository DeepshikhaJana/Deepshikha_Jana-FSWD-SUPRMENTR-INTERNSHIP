// Custom middleware to log request details
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
  next(); // Pass control to the next middleware/route handler
};

export default logger;
