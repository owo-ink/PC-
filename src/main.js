
function postMsg() {
	if (document.form.comment.value==null || document.form.comment.value=="") {
		alert("请填写留言。");
		return;
	} else {
		document.form.submit();
	}
}