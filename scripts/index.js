'use strict';
/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems((items) => {
  const item = items[0];

  api.updateItem(item.id, { name: 'foobar' }, () => {
    console.log('updated!');
  });
});
