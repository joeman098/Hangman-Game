var words ["dog","cat", 'house', "door" ]

  var stats = {
  	wins: 0 , 
  	loses: 0  ,
  	guesesLeft: 8 ,
  	computerpick: "",
  	guessessofar: [],
  	correctGuess: [],
  }

function computerpick(x){
     return x = words[Math.floor(Math.random() * words.length)];
    }




document.onkeyup = function(event){
	 stats.computerpick = computerpick(computerpick); 

	 var userpick = event.key ;
      var userPick = userpick.toLowerCase();
      stats.guessessofar.push(userPick);

      if(stats.guesesLeft > 1){
      	if(computerpick.includes(userPick)){
      		
      	}
      }

}