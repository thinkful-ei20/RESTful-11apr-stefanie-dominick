'use strict';
/* global $, store */

// eslint-disable-next-line no-unused-vars
const api = (() => {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/domstephanie/items';
  const getItems = callback => {
    $.getJSON(BASE_URL, callback);
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
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
  const findAndUpdate = function(id, newData) {
    const targetItem = store.findById(id);
    Object.assign(newData, targetItem);
  };
  return {
    getItems, createItem, updateItem, findAndUpdate
  };
})();