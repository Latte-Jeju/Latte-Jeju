  
function test(callback){
	$.getJSON("제주속담사전.json", function(json) {
	  callback(json);
	});
  }

var item=0;

function forjson() {
	
	item+=1;
	test(function (json){
	let initGame = () => {
		
		
		
		
		
		$("content *").remove();
		
    	const str = json[0][item].contents;
		const name =json[0][item].name;
		p2 = document.getElementById('name');
		content2 = document.getElementsByClassName('content');
		let content = document.getElementById('DWetype'),
        typeBox = document.getElementById('typeBox');
		
		//console.log(name);
    
    const COLOR = {
      'BG_WHITE' : '#ffffff',
      'RED'      : '#e74c3c',
      'GREEN'    : '#27ae60',
      'BG_GREY'  : '#e1e1e1',
    };
    
		let split = str.split(' ');
		
		p2.innerHTML = name;
		let res = '';
    split.forEach((item, i) => {
      res += `<span class='word' id="word_${++i}">${item}</span> `;
    });

		content.innerHTML = res;

		let currIndex = 0;

		let currWord = document.getElementById(`word_${(currIndex+1)}`);
		currWord.style.backgroundColor = COLOR.BG_GREY;

		typeBox.onkeyup = event => {

			if(event.keyCode === 32){
				currWord.style.color = (typeBox.value.trim() == split[currIndex]) ? 
                                COLOR.GREEN : COLOR.RED;

				currWord.style.backgroundColor = COLOR.BG_WHITE;
				currIndex++;
				
				currWord = document.getElementById(`word_${currIndex+1}`);
				currWord.style.backgroundColor = COLOR.BG_GREY;

				typeBox.value = '';
			}
		}
		
	}
	
	
	initGame();
	
	
});
}