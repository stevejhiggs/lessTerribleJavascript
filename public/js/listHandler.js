var appendDataToList = function(target, dataToAppend) {
    dataToAppend.forEach(function(person) {
        target.append("<tr><td>" + person.first +  "</td><td>" + person.last + "</td><td>" + person.email + "</td></tr>");
    });
};

var sortByFirstName = function(target, sourceData) {
    sourceData.sort(function (a, b) {
        if (a.first > b.first) {
            return 1;
        }
        if (a.first < b.first) {
            return -1;
        }
        return 0;
    });

    target.empty();
    appendDataToList(target, sourceData);
};

module.exports = {
    appendDataToList: appendDataToList,
    sortByFirstName: sortByFirstName
};