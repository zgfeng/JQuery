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
    $('#date').datepicker({
        dateFormat : 'yy-mm-dd',
		//dayNames : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		//dayNamesShort : ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesMin : ['日','一','二','三','四','五','六'],
		monthNames : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		altField : '#abc',
		altFormat : 'dd/mm/yy',
		//appendText : '日历',
		showWeek : true,
		weekHeader : '周',
		firstDay : 1,
		//disabled : true,
		//numberOfMonths : 3,
		//numberOfMonths : [3,2],
		//showOtherMonths : true,
		//selectOtherMonths : true,
		changeMonth : true,
		changeYear : true,
		//isRTL : true,
		//autoSize : true,
		//showOn : 'button',
		//buttonText : '日历',
		//buttonImage : 'img/calendar.gif',
		//buttonImageOnly : true,
		showButtonPanel : true,
		closeText : '关闭',
		currentText : '今天dd',
		//nextText : '下个月mm',
		//prevText : '上个月mm',
		//navigationAsDateFormat : true,
		//yearSuffix : '年',
		//showMonthAfterYear : true,
		
		//日期的限制优先级，min和max最高
		maxDate : 0,
		//minDate : -8000,				//但是年份有另外一个属性进行了限制
		hideIfNoPrevNext : true,
		
		//而maxDate和minDate只是限制日期，而年份的限制的优先级没有另外一个高
		yearRange : '1950:2020',
		
		//defaultDate : -1,
		
		//gotoCurrent : true,
		
		//showAnim : true,
		//duration : 1000,
		//showAnim : 'slide',
		//beforeShow : function () {
		//	alert('日历显示之前被调用！');
		//}
		
		//beforeShowDay : function (date) {
		//	if (date.getDate() == 1) {
		//		return [false, 'a', '不能选择1号'];
		//	} else {
		//		return [true];
		//	}
		//}
		
		//onChangeMonthYear : function (year, month, inst) {
			//alert('日历中年份或月份改变时激活！');
			//alert(year);
			//alert(month);
			//alert(inst.id);
		//}
		
		//onSelect : function (dateText, inst) {
		//	alert(dateText);
		//}
		
		//onClose : function (dateText, inst) {
		//	alert(dateText);
		//}
    });

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
