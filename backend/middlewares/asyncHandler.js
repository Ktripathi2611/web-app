const asyncHandler = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next); // Await the function
    } catch (error) {
      console.error('Error:', error.message); // Log the error for debugging
      res.status(500).json({ message: error.message }); // Send error response
    }
  };
  
  export default asyncHandler;
  