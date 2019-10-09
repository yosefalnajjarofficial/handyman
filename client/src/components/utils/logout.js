import axios from 'axios';

const logout = async () => {
  const response = await axios.get('api/v1/logout');
  return response;
};

export default logout;
