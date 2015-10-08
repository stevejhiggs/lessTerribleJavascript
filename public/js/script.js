var data = [
    {
        first: 'Jane',
        last: 'Doe',
        email: "jane.doe@email.com"
    },
    {
        first: 'Luke',
        last: 'Skywhaler',
        email: "notmyfather@theforce.org"
    },
    {
        first: 'Bat',
        last: 'Man',
        email: "blatentcopyrightinfringment@bat4eva.net"
    },
    {
        first: 'SoopaDoopa',
        last: 'Man',
        email: "redpants@notclarkekent.com"
    }
];

var listEntryPoint = $('#nameList tbody');

function appendDataToList(target, dataToAppend) {
    dataToAppend.forEach(function(person) {
        target.append("<tr><td>" + person.first +  "</td><td>" + person.last + "</td><td>" + person.email + "</td></tr>");
    });
}

function sortByFirstName() {
    data.sort(function (a, b) {
        if (a.first > b.first) {
            return 1;
        }
        if (a.first < b.first) {
            return -1;
        }
        return 0;
    });

    listEntryPoint.empty();
    appendDataToList(listEntryPoint, data);
}



appendDataToList(listEntryPoint, data);
$('#sortBtn').click(function() {
   sortByFirstName();
    return false;
});

