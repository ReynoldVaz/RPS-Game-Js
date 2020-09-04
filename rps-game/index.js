function rpsGame(yourchoice){

    var humanchoice, compchoice;
    //var age =prompt("your age?");
    humanchoice=yourchoice.id;
    compchoice=randchoice(randnum());
    console.log('comp choose', compchoice);
    result=decidewin(humanchoice,compchoice);
    console.log(result);//array[1,0] or [0,1]
    message=finalmsg(result)
    frontrps(yourchoice.id,compchoice,message);
    newgame();
}

function randnum(){
   return Math.floor(Math.random()*3);
}
function randchoice(num){
    return ['rock','paper','scissors'][num];
}
function decidewin(hc,cc){
    var rpsdb={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'scissors':0,'rock':1,'paper':0.5},
        'scissors':{'scissors':0.5,'rock':0,'paper':1},
    };
    
    var hscore=rpsdb[hc][cc];
    var cscore=rpsdb[cc][hc];

    return [hscore , cscore];
}
function finalmsg([hscore,cscore]){
    if(hscore===0){
        return {'message':'you lost','color':'red'};
    }else if(hscore===0.5){
        return{'message':'you tied','color':'yellow'};
    }else{
        return{'message':'you won','color':'green'};
    }

}
function frontrps(himgchoice,cimgchoice,finalmsg){
    var dbimg={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var hdiv=document.createElement('div');
    var cdiv=document.createElement('div');
    var msg=document.createElement('div');

    hdiv.innerHTML="<img src='"+dbimg[himgchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 5,233, 1);'>"
    msg.innerHTML="<h1 style='color:"+finalmsg['color']+";  font-size:60px; padding:10px '>"+finalmsg['message']+"</h1>"
    cdiv.innerHTML="<img src='"+dbimg[cimgchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(233, 5,37, 1);' >"

    document.getElementById('flex-box-cont1').appendChild(hdiv);
    document.getElementById('flex-box-cont1').appendChild(msg);
    document.getElementById('flex-box-cont1').appendChild(cdiv);

} 

function newgame(){
    //var cont2 = document.createElement('div');
    //cont2.innerHTML="<class='"+container-2+"'>"
   
    // 1. Create the button
var button = document.createElement("button");
button.innerHTML = "new game";

// 2. Append somewhere
//document.getElementById('flex-box-cont1').appendChild(cont2);
var div = document.getElementById('flex-box-cont1');
div.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    window.location.href = "index.html";
});
}