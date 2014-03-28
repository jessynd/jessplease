var jp = {};

// jp.menuClick = function(){
// 	$("nav").on("click", function(){
// 			$("nav ul").toggleClass("show");
// 			$("nav li").toggleClass("smoothDown");
// 	});
// };

jp.funFacts= function(){

	var funFacts = ["Jess worked as a Page at the Canadian House of Commons", "Jess speaks 4 languages fluently - English, Spanish, French and Italian", "Jess is originally from Argentina", "Jess has a Master's degree in Philosophy", "Jess loves art and volunteers as a Gallery Guide at the AGO", "Jess is one of the people that says 'roll film' at the Toronto International Film Festival every year'", "Jess is a huge Opera nerd", "Jess loves to Snowboard her winter blues away with the High Park Ski Club", "Jess loves the colours pink and red", "Jess once planned a party for 1500 people in a decommissioned hospital", "Jess plays the two-toned bell in a loud community samba band", "Every year, on the Blackout anniversary, Jess takes to the streets and blocks traffic for ten minutes with her band to remind everyone of what it feels like to celebrate in community with fellow Torontonians", "Jess once co-founded a consumer co-operative", "Jess once purchased 700 lbs of coffee from Nicaragua and drove a truck herself to pick them up at the airport", "Jess used to play the violin"]

	var index = 0;
	
	function loopThrough() {
	
		$(".reader").text(textArray[index]);
		index = (index + 1);
		$(".reader").text(textArray[index]);

	};

	
	window.setInterval(loopThrough, 150);
	

}; //funFacts




$(function(){
			$('a').smoothScroll({offset:-20});
			
			$("nav a").on("click",function(e){
				e.preventDefault();
				$("nav.menu ul").toggleClass("show");

			}); //end on click nav a


		}); //end doc ready
