function modoPagamento(ver, sumir){
	var i;
	for(i=0;i<document.getElementsByClassName(ver).length;i++){
		document.getElementsByClassName(ver)[i].style.display = "block";
	}
	for(i=0;i<document.getElementsByClassName(sumir).length;i++){
		document.getElementsByClassName(sumir)[i].style.display = "none";
	}
}
function process(quant, i, max){
    var val = parseInt
(document.getElementsByClassName("quant")[i].innerHTML);
    val += quant;
    if(val < 0){
      document.getElementsByClassName("quant")[i].innerHTML  = 0;
    }else if(val > max){
      document.getElementsByClassName("quant")[i].innerHTML  = max;
    }else{
    	document.getElementsByClassName("quant")[i].innerHTML  = val;
    }
    for(var y=0 ; y<document.getElementsByClassName("quant").length;y++){
    //	document.getElementById("total").value = (parseInt(document.getElementById("total").value) + 
    	//	parseInt(document.getElementsByClassName("quant")[y].value.replace(".",'').replace(".",'')) * 
    		//parseInt(document.getElementsByClassName("price")[y].value.replace(".",'').replace(".",'').substring(0,(document.getElementsByClassName("price")[y].value.length-3))));
    }
    //document.getElementById("total").value = parseInt(document.getElementById("total").value).toLocaleString("pt") + " Bs." ;
}