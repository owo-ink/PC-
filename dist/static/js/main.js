
function postMsg() {
	if (document.form.comment.value==null || document.form.comment.value=="") {
		alert("请填写留言。");
		return;
	} else {
		document.form.submit();
	}
}

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isiOS) {
	document.body.classList.add('ios')
}