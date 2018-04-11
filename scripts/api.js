'use strict';
/* global */

// eslint-disable-next-line no-unused-vars
const api = (() => {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/domstephanie/items';
  const getItems = callback => {
    $.getJSON(BASE_URL, callback);
  };
  return {
    getItems
  };
})();