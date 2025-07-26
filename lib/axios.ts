import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.10minuteschool.com/discovery-service/api/v1/products/',
  headers: {
    'X-TENMS-SOURCE-PLATFORM': 'web',
    'accept': 'application/json'
  }
});

export const AppAxios = async (url: string, params = {}) => {
  try {
    const response = await axiosClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`GET ${url} failed:`, error);
    throw error;
  }
};

export default axiosClient;
