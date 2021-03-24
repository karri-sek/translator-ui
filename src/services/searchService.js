import axios from 'axios';

const searchTranslators = async ({ language }) => {
    console.log(" language: ", "http://localhost:5000/searchTranslator?lang="+language);
  const response = await axios({
    method: "get",
    url: "http://localhost:5000/searchTranslator?lang="+language
    
  });
  console.log(" response ", response);
  return response;
};

export default searchTranslators;
