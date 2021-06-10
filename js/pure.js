function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
var b=0;



  
function test(callback){
  $.getJSON("./제주사진정보.json", function(json) {
    callback(json);
  });
}

function forjson(){
  test(function (json) {
    
  console.log(json);
  
  $("section *").remove();
  // this will show the info it in firebug console
  var section = document.querySelector('section');
  //var margin =document.getElementsByClassName('margin')

  classification={}
  for(var i=b; i<b+3;i++)
  {
    
    
  // li 노드 생성
    a=json[0][i];
   // "classification": "nature",
    //if (a.subClassification != "earth"){
    
  
    
   
    var kdiv = document.createElement('div');
    var frontdiv= document.createElement('IMG');
    var backdiv = document.createElement('div');
    
      
  
    
    
    
    //var y=document.getElementsByClassName("card front")
    frontdiv.setAttribute("src","http://www.jeju.go.kr"+a.dataImageUrl); // b에다가 image url 담을예정
    frontdiv.setAttribute("width", "304");
    frontdiv.setAttribute("height", "228");
    frontdiv.setAttribute("alt", "The Pulpit Rock");
    
   
    section.className='flex'
    kdiv.className = 'wrap'
    frontdiv.className ="card front"
    backdiv.className = "card back"
   // section1.className='flex'
    
    
    backdiv.textContent=a.title
    //backdiv.textContent=escapeHtml(a.contents)
    
    //myH2.textContent = a.title;
    // node.textContent1= a.type;
    
    
    kdiv.appendChild(backdiv);
    kdiv.appendChild(frontdiv);
    section.appendChild(kdiv);
    
   // section1.appendChild(section);
   
   
  
     
  };

  b+=3;
  console.log(b);

});
}


  
  



  

function calcRectArea(width, height) {
  return width * height;
}

function myFunction() {
  var x = document.getElementById("").src;
  document.getElementById("demo").innerHTML = x;
}
    

      










