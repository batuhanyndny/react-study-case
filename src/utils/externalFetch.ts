import axios from 'axios';
import constants from '../constants';
import store from '../redux';

const bearerToken = () => {
  if (store) {
    return store.getState().user.token;
  } else return '';
};

export const client = axios.create({
  baseURL: constants.baseUrl,
  headers: {
    Authorization: `Bearer ${bearerToken()}`,
  },
});
