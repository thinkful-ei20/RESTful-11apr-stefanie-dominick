'use strict';
/* global shoppingList, $, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

const item = store.items[0];
console.log('current name: ' + item.name);
store.findAndUpdate(item.id, { name: 'foobar' });
console.log('new name: ' + item.name);
