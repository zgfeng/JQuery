$(function(){
    $('#search_button').button({
        icons : {
            primary : 'ui-icon-search',
        },
    });

    $('#reg').dialog({
        autoOpen : true,
        modal : true,
        resizable : false,
        width : 320,
        height : 340,
        buttons : {
            '提交' : function(){}
        },
    });

    $('#reg').buttonset();
    $('#date').datepicker();

    $('#reg input[title]').tooltip({
        show : false,
        hide : false,
        position : {
            my : 'left center',
            at : 'right+5 center'
        },
    });

    var host = ['test','teacher','tteh','aa','aabb','aacc'];
    $('#email').autocomplete({
        source : host,
    });
});
