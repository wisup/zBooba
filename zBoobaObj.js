function zBooba(obj){
	var textarea = document.getElementById(obj.idTextArea);
	
	function setBasicData(){
		obj.width = "500";
		obj.height = "50";
	}
	
	setBasicData();
	alert(obj.width);
}