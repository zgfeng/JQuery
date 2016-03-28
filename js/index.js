$(function(){
    $('#search_button').button({
        icons : {
            primary : 'ui-icon-search',
        },
    });


    $('#member, #logout').hide();
	
	if ($.cookie('user')) {
		$('#member, #logout').show();
		$('#reg_a, #login_a').hide();
		$('#member').html($.cookie('user'));
	} else {
		$('#member, #logout').hide();
		$('#reg_a, #login_a').show();
	}
	
	$('#logout').click(function () {
		$.removeCookie('user');
		window.location.href = '/JQuery/';
	});

    $('#loading').dialog({
		autoOpen : false,
		modal : true,
		closeOnEscape : false,
		resizable : false,
		draggable : false,
		width : 180,
		height : 50,
	}).parent().parent().find('.ui-widget-header').hide();
	
	$('#reg_a').click(function () {
		$('#reg').dialog('open');
	});

    $('#reg').dialog({
        autoOpen : false,
        modal : true,
        resizable : false,
        width : 320,
        height : 340,
        buttons : {
            '提交' : function(){
                $(this).submit();
            },
        },
    }).buttonset().validate({
	
		submitHandler : function (form) {
			$(form).ajaxSubmit({
				url : 'add.php',
				type : 'POST',
				beforeSubmit : function (formData, jqForm, options) {
					$('#loading').dialog('open');
					$('#reg').dialog('widget').find('button').eq(1).button('disable');
				},
				success : function (responseText, statusText) {
					if (responseText) {
						$('#reg').dialog('widget').find('button').eq(1).button('enable');
						$('#loading').css('background', 'url(images/success.gif) no-repeat 20px center').html('数据新增成功...');
                        $.cookie('user',$('#user').val());
						setTimeout(function () {
							$('#loading').dialog('close');
							$('#reg').dialog('close');
							$('#reg').resetForm();
							$('#reg span.star').html('*').removeClass('succ');
							$('#loading').css('background', 'url(images/loading.gif) no-repeat 20px center').html('数据交互中...');
                            $('#member, #logout').show();
							$('#reg_a, #login_a').hide();
							$('#member').html($.cookie('user'));
						}, 1000);
					}
				},
			});
		},
	
		showErrors : function (errorMap, errorList) {
			var errors = this.numberOfInvalids();
			
			if (errors > 0) {
				$('#reg').dialog('option', 'height', errors * 20 + 340);
			} else {
				$('#reg').dialog('option', 'height', 340);
			}
			
			this.defaultShowErrors();
		},
		
		highlight : function (element, errorClass) {
			$(element).css('border', '1px solid #630');
		},
		
		unhighlight : function (element, errorClass) {
			$(element).css('border', '1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
		},
	
		errorLabelContainer : 'ol.reg_error',
		wrapper : 'li',
	
		rules : {
			user : {
				required : true,
				minlength : 2,
			},
			pass : {
				required : true,
				minlength : 6,
			},
			email : {
				required : true,
				email : true
			},
			date : {
				date : true,
			},
		},
		messages : {
			user : {
				required : '帐号不得为空！',
				minlength : jQuery.format('帐号不得小于{0}位！'),
			},
			pass : {
				required : '密码不得为空！',
				minlength : jQuery.format('密码不得小于{0}位！'),
			},
			email : {
				required : '邮箱不得为空！',
				minlength : '请输入正确的邮箱地址！',
			},	
		}
	});
	
	$('#date').datepicker({
		changeMonth : true,
		changeYear : true,
		yearSuffix : '',
		maxDate : 0,
		yearRange : '1950:2020',

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
