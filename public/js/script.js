'use strict';

var $ = require('jquery');
var data = require('./data');
var listHandler = require('./listHandler');

var listEntryPoint = $('#nameList tbody');

listHandler.appendDataToList(listEntryPoint, data);

$('#sortBtn').click(function() {
   listHandler.sortByFirstName(listEntryPoint, data);
    return false;
});

