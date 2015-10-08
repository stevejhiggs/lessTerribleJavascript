var _ = require('underscore');

var appendDataToList = function(target, dataToAppend) {
    dataToAppend.forEach(function(person) {
        target.append("<tr><td>" + person.first +  "</td><td>" + person.last + "</td><td>" + person.email + "</td></tr>");
    });
};

var sortByFirstName = function(target, sourceData) {
    var sortedData = _.sortBy(sourceData, function(o) { return o.first; });
    target.empty();
    appendDataToList(target, sortedData);
};

module.exports = {
    appendDataToList: appendDataToList,
    sortByFirstName: sortByFirstName
};