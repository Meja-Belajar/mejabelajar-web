// Fetch live data
const getLive = async () => {
  try {
    const response = await fetch('../data/live.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Fetch mentor data
const getMentor = async () => {
  try {
    const response = await fetch('../data/user.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Fetch user data
const getUser = async () => {
  try {
    const response = await fetch('../data/user.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export {
  getLive,
  getMentor,
  getUser
};
