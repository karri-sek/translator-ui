import axios from 'axios';

const verifyLogin = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:5000/login",
    data: {
      email: email,
      password: password,
    },
  });
  return response.data;
};

export default verifyLogin;
