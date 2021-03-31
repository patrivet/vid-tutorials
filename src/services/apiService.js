const BASE_URL = "https://lingumi-take-home-test-server.herokuapp.com";

// Fetch Factory
const fetchRequest = (url, options = {}) => {
  return fetch(url, options)
    .then((res) => (res.status < 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((error) => {
      console.log(`${error.message} while fetching /${url}`);
      console.error(error);
    });
};

export const getTutorials = () => {
  return fetchRequest(`${BASE_URL}/videoTutorials`);
};
