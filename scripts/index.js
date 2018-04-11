'use strict';
/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);