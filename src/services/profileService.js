import axios from 'axios';

const getProfile = async ({ email }) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:5000/profile',
    data: {
      email: email,
    },
  });
  return response.data;
};

/**
 * This method calls to backend to upload the image in storage
 * @param {*} image 
 * @param {*} email 
 */
const uploadProfileImage = async (image, email) => {
  let formData = new FormData();
  formData.append('file', image);
  const response = await axios
    .post('http://localhost:5000/profile/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data;
};

const updateUserProfileWithImageURL = async (email, imageURL) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:5000/profile/updateProfile',
    data: {
      email: email,
      imageURL: imageURL
    },
  });
  return response.data;
}

const updateProfileLanguages = async (languages, qualification, email, firstName, lastName, city) => {
  console.log(" langages ",languages)
  const response = await axios({
    method: 'post',
    url: 'http://localhost:5000/profile/updateProfile',
    data: {
      newLanguages: languages,
      qualification,
      email,
      firstName,
      lastName,
      city
    },
  });
  return response.data;
}
export { getProfile, uploadProfileImage, updateProfileLanguages, updateUserProfileWithImageURL };
