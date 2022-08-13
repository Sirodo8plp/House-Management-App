const choice = 1; // 0 or 1

const isDev = () => {
  if (choice === 1) return "https://house-management-api.herokuapp.com";
  return "http://localhost:4000";
};

export default isDev;
