import axios from 'axios';

/**
 * call to the backend Api which is able to receive the message along with users details
 * @param {*} toUser 
 * @param {*} fromUser 
 * @param {*} message 
 * @returns 
 */
const sendMessageToTranslator = async (toUser, fromUser, message) => {
  const response = await axios({
    method: "post",
    url: "http://localhost:5000/message/sendMessage",
    data: {
      toUser,
      fromUser,
      message
    },
  });
  return response.data;
};

export  {sendMessageToTranslator};
