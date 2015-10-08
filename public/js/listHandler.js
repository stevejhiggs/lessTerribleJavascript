const _ = require('underscore');

export function appendDataToList(target, dataToAppend) {
    dataToAppend.forEach((person) => {
        target.append(`<tr><td>${person.first}</td><td>${person.last}</td><td>${person.email}</td></tr>`);
    });
}

export function sortByFirstName(target, sourceData) {
    let sortedData = _.sortBy(sourceData, (o) => { return o.first; });
    target.empty();
    appendDataToList(target, sortedData);
}
