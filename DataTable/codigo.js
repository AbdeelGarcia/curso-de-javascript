$(document).ready(function () {
    var table = $('#example').DataTable({
        
        columnDefs: [
        { type: 'date-uk', targets: 4 } //specify your date column number,starting from 0
        ],
        createdRow: function (row, data, index) {
            if (data[5].replace(/[\$,]/g, '') * 1 > 400000) {
                $('td', row).eq(5).css('color','blue');
            }
        },
        });
    });

    //var table = $('#example').DataTable();
    var column = table.column(4);

    $(column.footer()).html(
        column.data().reduce(function (a, b) {
            return parseInt(a, 10) + parseInt(b, 10);
        })
    );

    //If your date format is mm/dd//yyyy.
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "date-uk-pre": function (a) {
    if (a == null || a == "") {
    return 0;
    }
    var ukDatea = a.split('/');
    return (ukDatea[2] + ukDatea[0] + ukDatea[1]) * 1;
    },
    "date-uk-asc": function (a, b) {
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    "date-uk-desc": function (a, b) {
    return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});


    //OR
    //If your date format is dd/mm/yyyy.
    // jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    // "date-uk-pre": function (a) {
    // if (a == null || a == "") {
    // return 0;
    // }
    // var ukDatea = a.split('/');
    // return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    // },
    // "date-uk-asc": function (a, b) {
    // return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    // },
    // "date-uk-desc": function (a, b) {
    // return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    // }
    // });

