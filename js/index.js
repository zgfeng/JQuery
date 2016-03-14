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

    $('#email').autocomplete({
        delay : 0,
        autoFocus : true,
        source : function (request,response){
            var hosts = ['qq.com','163.com','263.com','sina.com.cn','gmail.com','hotmail.com','live.cn'],
                term  = request.term,       //获取用户输入的内容
                name  = term,               //邮箱的用户名
                host  = '',                 //邮箱的域名
                ix    = term.indexOf('@'),  //@的位置
                result= [];                 //最终呈现的邮箱列表
            result.push(term);

            //当有@的时候，重新分别用户名和域名
			if (ix > -1) {
				name = term.slice(0, ix);
				host = term.slice(ix + 1);
			}
			
			if (name) {
				//如果用户已经输入@和后面的域名，
				//那么就找到相关的域名提示，比如bnbbs@1，就提示bnbbs@163.com
				//如果用户还没有输入@或后面的域名，
				//那么就把所有的域名都提示出来
				
				var findedHosts = (host ? $.grep(hosts, function (value, index) {
						return value.indexOf(host) > -1
					}) : hosts),
					findedResult = $.map(findedHosts, function (value, index) {
					return name + '@' + value;
				});
				
				result = result.concat(findedResult);
			}
			
			response(result);
                
        },
    });
});
