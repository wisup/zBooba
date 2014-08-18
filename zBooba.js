var zBooba = function(id){
	//textarea vars
	this.id = id;
	this.textarea = document.getElementById(this.id);
	this.value = this.textarea.value;
	
	this.width = 500;
	this.height = 200;
	
	this.interval;
	
	//zBooba vars
	this.isSelected = 0;
	this.isMouseOver = 0;
	
	this.padding = 5;
	
	//cursor vars
	this.cursor = "";
	this.cursorPosX = 0;
	this.cursorPosY = 0;
	
	//usefull when you change id and want textarea to point to the right block
	this.reloadTextarea = function(){
		this.textarea = document.getElementById(this.id);
	}
	
	
	//Cursor blink and visibility control
	this.blink = function(idBlock){
		elm = document.getElementById(idBlock);
		elm.style.visibility = "visible";
		setTimeout(function() {setInterval(function () {elm.style.visibility="visible";},1000);},500);
		setInterval(function () {elm.style.visibility="hidden";},1000);
	}
	
	this.startBlink = function(){
		this.cursor.style.borderLeft = "1px solid black";
	}
	
	this.stopBlink = function(){
		this.cursor.style.border = 0;
	}
	
	this.removeCursorFromElm = function() {
		var chara = document.createElement("div");
		chara.innerHTML = this.textarea.innerHTML;
		var cursor = chara.getElementsByTagName("div")[0];
		chara.removeChild(cursor);
		
		return chara;
	}	
	
	this.addCursorToElm = function(posX, posY) {
		if(!posX)
			var posX = 0;
		if(!posY)
			var posY = 0;
			
		
	}
	
	this.keepVisible = function(){
		
	}
	
	this.cursorLeft = function(){
		if(this.cursorPosX > 0 && this.isSelected == 1)
		{
			this.cursorPosX = this.cursorPosX - 1;
			var position = this.cursorPosX * 8 + this.padding;			
			this.cursor.style.left = position+"px";
		}
	}
	
	this.cursorRight = function(){
		var size = this.width - this.padding * 2;
		var next = this.cursorPosX * 8;
		if(this.isSelected == 1 && next <= size)
		{
			this.cursorPosX = this.cursorPosX + 1;
			var position = this.cursorPosX * 8 + this.padding;
			this.cursor.style.left = position+"px";			
		}
	}
	
	this.addLetter = function(letter, event) {
		if(this.isSelected == 1)
		{
			if(letter >= 0 && letter <= 26)
			{
				var listLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
				var letter = listLetters[letter];
				if(event.shiftKey == true)
					letter = letter.toUpperCase();
			}
			else if(letter == 27)
			{
				letter = " ";
			}
			var texte = this.removeCursorFromElm().innerHTML;
			var texte = texte.replace("<p>", "");
			var texte = texte.replace("</p>", "");
			var position = this.cursorPosX;
			
			var length = texte.length;
			
			var chaine1 = texte.substr(0, position);
			var chaine2 = texte.substr(position, length);
			
			var texte = chaine1 + letter + chaine2;
			
			this.textarea.getElementsByTagName("p")[0].innerHTML = texte;
			
			//deplacement of the cursor
			this.cursorRight();
		}
	}
	
	this.displayValue = function(){
		var texte = this.removeCursorFromElm().innerHTML;
		var texte = texte.replace("<p>", "");
		var texte = texte.replace("</p>", "");
		alert(texte);
	}
	
	this.delLetter = function(){
		var texte = this.removeCursorFromElm().innerHTML;
		var texte = texte.replace("<p>", "");
		var texte = texte.replace("</p>", "");
		var position = this.cursorPosX - 1;
		var position2 = position+1;
			
		var length = texte.length;
		
		var chaine1 = texte.substr(0, position);
		var chaine2 = texte.substr(position2, length);
		
		var texte = chaine1 + chaine2;
			
		this.textarea.getElementsByTagName("p")[0].innerHTML = texte;
		
		//deplacement of the cursor
		this.cursorLeft();	
	}
	
	this.suprLetter = function(){
		var texte = this.removeCursorFromElm().innerHTML;
		var texte = texte.replace("<p>", "");
		var texte = texte.replace("</p>", "");
		var position = this.cursorPosX;
		var position2 = position+1;
			
		var length = texte.length;
		
		var chaine1 = texte.substr(0, position);
		var chaine2 = texte.substr(position2, length);
		
		var texte = chaine1 + chaine2;
			
		this.textarea.getElementsByTagName("p")[0].innerHTML = texte;	
	}
	
	//replace textarea
	this.replaceTextArea = function(){
		var textzone = document.createElement("div");
		textzone.id = "zBooba";
		textzone.onmouseover = function() { this.isMouseOver = 1; };
		textzone.onmouseout = function() { this.isMouseOver = 0; };
		
		this.cursor = document.createElement("div");
		this.cursor.id = "cursor";
		this.cursor.className = "cursor";
		this.cursor.innerHTML = "&nbsp;";
		textzone.appendChild(this.cursor);
		
		var line = document.createElement("p");
		line.innerHTML = this.value;
		textzone.appendChild(line);
		
		//Replace textarea by div
		this.textarea.parentNode.insertBefore(textzone, this.textarea.nextSibling);
		this.textarea.parentNode.removeChild(textarea);
		
		//Set new id
		this.id = "zBooba";
		this.reloadTextarea();
		this.textarea.className = ("zBooba");
		
		this.blink("cursor");
		this.stopBlink();
	}
	this.replaceTextArea();
	
	//Style functions
	this.setPadding = function(padding){
		this.padding = padding
		this.textarea.style.padding = padding+"px";
	}
	
	this.setWidth = function(width) {
		this.width = width;
		this.textarea.style.width = width+ "px";
	}
	
	this.setHeigh = function(heigh) {
		this.heigh = heigh;
		this.textarea.style.heigh = heigh+ "px";
	}
	
	//What happens when you click
	this.click = function(event){
		//Check if mouse is over the textarea
		if(this.isMouseOver == 1)
		{
			this.isSelected = 1;
			
			this.cursorPosX = Math.round((event.offsetX - this.padding)/8);
			var posX = this.cursorPosX * 8 + 5;
			//alert(posX);
			this.cursor.style.left = posX+"px";
			this.startBlink();
			this.textarea.style.border = "1px solid blue";
		}
		else
		{
			this.isSelected = 0;
			this.textarea.style.border = "1px solid silver";
			this.stopBlink();
		}
	}
	
	this.keyPress = function (event){
		var idKey = event.keyCode;
		if(idKey > 64 && idKey < 91)
		{
			//That's a letter
			var letter = idKey - 65;
			this.addLetter(letter, event);
		}
		else
		{
			switch(idKey)
			{
				case 13: //enter
					break;
					
				case 32: //space
					this.addLetter(27, event);
					break;
					
				case 8: //delete
					this.delLetter();
					break;
					
				case 46: //supr
					this.suprLetter();
					break;
			
				case 37://left
					this.cursorLeft();
					break;
					
				case 38://up
					break;
				
				case 39://right
					this.cursorRight();
					break;
					
				case 40://down
					break;		
			}
		}
	}
	
	this.charNumber = function(){
		var chara = this.removeCursorFromElm();
		
		chara = chara.innerHTML.replace("<p>", "");
		chara = chara.replace("</p>", "");
		return chara.length;
	}
	
	this.lineNumber = function(){
		return this.textarea.getElementsByTagName("p").length;
	}
	
	initEventListener(this);
}

function initEventListener(textarea){
	textarea.textarea.addEventListener("mouseover", function(){ textarea.isMouseOver = 1; }, false);
	textarea.textarea.addEventListener("mouseout", function(){ textarea.isMouseOver = 0; }, false);

	document.addEventListener("click", function(event){ textarea.click(event); }, false);
	//body.addEventListener("mousemove", function(){ isMouseOver(event); }, false);
	document.addEventListener("keydown", function(event){ textarea.keyPress(event); }, false);
}
