'use strict';
/* global */

// eslint-disable-next-line no-unused-vars
const api = (() => {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/domstephanie';
  const getItems = callback => callback('API module works');
  return {
    getItems
  };
})();