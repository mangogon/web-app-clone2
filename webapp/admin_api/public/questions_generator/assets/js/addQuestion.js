$(document).ready(function () {
	// var optionsCheckbox = $('#showHideOptions input[type=checkbox]');
	// optionsShowHide();
	//
	// optionsCheckbox.change(function () {
	// 	optionsShowHide();
	// });
	//
	//
	// function optionsShowHide() {
	// 	var optionsCheckbox = $('#showHideOptions input[type=checkbox]');
	// 	var shcompany = $('#shcompany');
	//
	// 	if (mgift.checked) {
	// 		shcompany.show();
	// 	} else {
	// 		shcompany.hide();
	// 	}
	// }
});

function addQuestion(){
	var data = $('#questionForm').serializeJSON();

	$.post('http://localhost:4100/api/questions', data)
		.done(function(res){
			console.log('rr', res);
		})
		.fail(function (err) {
			console.log('err => ', err);
		})
}

