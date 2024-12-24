export const checkAuth = (username, password) => {
    return (
      username === import.meta.env.VITE_ADMIN_USERNAME &&
      password === import.meta.env.VITE_ADMIN_PASSWORD
    );
  };
  