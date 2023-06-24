// Function to retrieve the user's role
export const getUserRole = () => {
    // Retrieve the user object from your application state
    // eslint-disable-next-line no-undef
    const user = getUserFromAppState(); // Replace with your actual method to retrieve the user from the app state
  
    // Check if the user object exists and has a valid role property
    if (user && user.role) {
      return user.role; // Return the user's role
    }
  
    // If the user object or role property is missing, return a default role or handle the scenario as desired
    return 'default';
  };
  