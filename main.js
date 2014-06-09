	

//onclick button event

$('button').click(lowScore); // find me all buttons on page


function lowScore(event) {
	event.preventDefault();

//assign variables

var self_score = {
	"type": "Selfcare",
	"value": parseInt($('.self').val())
};

var work_score = {
	"type": "Work",
	"value": parseInt($('.work').val())
};

var money_score = {
	"type": "Money", "value":parseInt($('.money').val())	
};
var relationships_score = {
	"type": "Relationships", "value":parseInt($('.rel').val())
};	

var service_score = {
	"type": "Service","value": parseInt($('.service').val())
};

var spirituality_score = {
	"type": "Spirituality", "value":parseInt($('.spirit').val())
	};	


var allScores = [self_score, work_score, money_score, relationships_score,service_score, spirituality_score];

var sortedScores = allScores.sort(function(a,b){
		return a.value-b.value});

console.log(sortedScores);


var lowScore = sortedScores[0];


//console.log(lowScore);

for(i=0;i<sortedScores.length;i++) {
	var score = sortedScores[i];
	$('.lowScore').append(score.type + ": " + score.value + "<br />");
}

// $('.lowScore').html("Low Score: " + lowScore.type);

}


// //// nevans
//'Low Score'+<sortedScores>
// var scores	= $('#task').val();



// if (newTask != '') {

// 	$('#tasks').append('<li>' + newTask + '</li>');
// 	}

// 	$('#task').val('');

// }

// $(tasks li).click(markCompleted);

// 	function markCompleted(){
// 		$(this).addClass('completed')
// 	}

// 	//Read the input field
// 	var self_score = $('').val();
	
// 	var work_score = $('')

// 	var money_score = $('')	
	
// 	var relationships_score = $('')	
	
// 	var relationships_score = $('')	
// 	//Print it on screen
// }

// $('scores')

// if(newTask != '') {
// 	$('#tasks')
// }