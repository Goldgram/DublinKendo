// console.log(siteData);

$(document).on("click", "#mobileButton", function() {
	$("#mobileNavigation").stop(true, true).slideToggle();
});

$(document).ready(function() {
	var today = new Date();
	// var dd = today.getDate();
	$("#dateText").text(today.getDate());
});
$(window).load(function() {
	$(".parallaxContainer").css("background-color","transparent");
});

// function users(dataUrl,elementId,presentation, animate) {// users list class for multiple instances

// $("#welcome").load(function() {
// 	// $("#welcome").css("background","transparent");
// 	alert("whoop");
//   // Handler for .load() called.
// });
// $(document).load(function() {
// 	// $("#welcome").css("background","transparent");
// 	// alert("whoop");
// 	console.log("buzz");
//   // Handler for .load() called.
// });
// console.log("fizz");

// $(window).on('scroll', function(){

	// expand
	// if ( $(window).scrollTop() > 90  && $(window).width() > 766 ) {
	// 	if (!$('#nav').hasClass('expanded')) {
	// 		$('#nav').animate({'height' : '70px'}, 50);
	// 		$('#nav').addClass('expanded');
	// 	}
	// }

	// contract
	// if ( $(window).scrollTop() < 90  && $(window).width() > 766 ) {
	// 	if ($('#nav').hasClass('expanded')) {
	// 		$('#nav').animate({'height' : '177px'}, 50);
	// 		$('#nav').removeClass('expanded');
	// 	}
	// }
// });


// 	var usersData = null, view = null;

// 	var drawList = function(elementId) {// draw user list to elementId param
// 		var userList = "";
// 		for(i in usersData) {
// 			userList+="<li class='usersClickEvent' usersJsHandler='showCard' usersId='"+i+"' ><p>"+usersData[i].name+"</p></li>";
// 		}
// 		$("#"+elementId).html("<ul class='usersList'>"+userList+"<ul/>");
// 	};

// 	var eventHandler = function(e) {// show/hide card event handler
// 		var target = $(this);
// 		if (target.attr("usersJsHandler")==="showCard") {
// 			showCard(target.attr("usersId"));
// 		} else {
// 			hideCards();
// 		}
// 	};

// 	var showCard = function(id) {
// 		if (!$(".usersCardContainer.for"+elementId).length) {
// 			if ($(".usersCardContainer").length) {//hide other types of cards
// 				hideCards();
// 			}
// 			var animateNow = true;
// 			$("#"+elementId).prepend("<div class='usersCardContainer for"+elementId+"' style='display:"+(animate ? "none" : "inline")+";'>"+view+"</div>");
// 		}
// 		// add any element attributes that match the JSON data
// 		for (i in usersData[id]) {
// 			if (i==="images") {
// 				for (j in usersData[id]["images"]) {
// 					for (k in usersData[id]["images"][j]) {
// 						$(".usersCardContainer ."+j).attr(k,usersData[id]["images"][j][k]);
// 					}
// 				}
// 			} else {
// 				$(".usersCardContainer ."+i).text(usersData[id][i]);
// 			}
// 		}
// 		if (animate && animateNow) { $(".usersCardContainer").fadeIn("slow"); }
// 	};

// 	var hideCards = function() { $(".usersCardContainer").remove(); };

// 	$.getJSON( dataUrl, function(data) {//get JSON data
// 		usersData = data;
// 		drawList(elementId);
// 	});
// 	$.get(presentation, function(data) { view = data; });//get presentation layer
// 	$(document).on("click", "#"+elementId+" .usersClickEvent", eventHandler);//add handler for this class instance
// }
// var heroes = new users("resources/heroData.json","heroList","heroCard.html",false);
// var villain = new users("resources/villainData.json","villainList","villainCard.html",true);

