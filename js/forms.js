$(function(){
	$(".reg-form").each(function(){
		var this_form = $(this);
		this_form.validate({
			rules: {
				'user_name': {
					required: true,
					minlength: 3,
					normalizer: function(value) {
						return $.trim(value);
					}
				},
				'user_email': {
					required: true,
					email: true,
				},
				'user_site': {
					required: true,
					normalizer: function(value) {
						var reg = new RegExp('^https?://','i'),
							url = $.trim(value).replace(reg,'');
						return url? 'http://'+url: '';
					},
					url: true
				},
			},
			messages: {
				'user_name': "Напишите Ваше имя",
				'user_email': {
					required: "Укажите свой E-Mail",
					email: "Не верный формат адреса E-Mail"
				},
				'user_site': {
					required: "Укажите адрес сайта",
					url: "Не верный формат адреса сайта"
				}
			},
			submitHandler: function(form) {
				if ($(".policy_input", form).prop('checked')) {
					form.submit();
				} else {
					$(".policy_span", form).addClass('error');
					$(".policy_input", form).click(function() {
						$(".policy_span", form).removeClass('error');
					});
				}
				return false;
			},
			focusCleanup: true,
			focusInvalid: false,
			errorClass: "error",
			ignore: ":checkbox"
		});
	});
});