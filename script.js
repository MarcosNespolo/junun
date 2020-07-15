function modoPagamento(ver, sumir){
	var i;
	for(i=0;i<document.getElementsByClassName(ver).length;i++){
		document.getElementsByClassName(ver)[i].style.display = "block";
	}
	for(i=0;i<document.getElementsByClassName(sumir).length;i++){
		document.getElementsByClassName(sumir)[i].style.display = "none";
	}
}