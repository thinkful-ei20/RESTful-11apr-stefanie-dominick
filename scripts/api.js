'use strict';
/* global $ */

// eslint-disable-next-line no-unused-vars
const api = (() => {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/domstephanie/items';
  const getItems = callback => {
    $.getJSON(BASE_URL, callback);
  };
  const createItem = (name, callback) => {
    const newItem = JSON.stringify({
      name
    });
    $.ajax({
      url: BASE_URL,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  };
  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };
  return {
    getItems, createItem, updateItem
  };
})();