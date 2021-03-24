import axios from 'axios';

const registerUser = async (user) => {
  console.log(" this user ", user.firstName);
  const response = await axios({
    method: "post",
    url: "http://localhost:5000/register",
    data: {
     user
    },
  });
  return response.data;
};

export default registerUser;
