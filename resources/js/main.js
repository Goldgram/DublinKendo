/* map id's*/
for (var i in siteData["homepageIdMapping"]) {
  $("#"+i).text(siteData["homepageIdMapping"][i]);
}
var dojosString = "";
/* add dojo content */
var dojosString = "";
var numOfDojos = siteData["dojoLocations"].length;
for (var i = 0; i < numOfDojos; i++) {
  var dojo = siteData["dojoLocations"][i];
  dojosString += '<div class="locations floatLeft"><div class="contentPadding">';
  dojosString += '<p class="boldFont fontSize20 marginBottom20">'+dojo["day"]+'</p>';
  for (var j = 0; j < dojo["times"].length; j++) {
    dojosString += '<p class="fontSize16Paragraph">'+dojo["times"][j]["type"]+'</p>';
    dojosString += '<p class="boldFont fontSize16 colorBlue marginBottom20">'+dojo["times"][j]["time"]+'</p>';
  }
  dojosString += '<p class="fontSize16Paragraph">'+dojo["address"]+'</p>';
  dojosString += '<a href="http://maps.google.com/?q='+dojo["googleAddress"]+'" target="_blank">';
  dojosString += '<img class="mapImages" src="http://maps.googleapis.com/maps/api/staticmap?center='+dojo["googleLongLat"]+'&markers='+dojo["googleLongLat"]+'&zoom=16&size=560x300&sensor=false&scale=1">';
  dojosString += '</a>';
  dojosString += '<a href="http://maps.google.com/?q='+dojo["googleAddress"]+'" class="marginBottom20" target="_blank">';
  dojosString += '<p class="boldFont fontSize16 colorBlue floatLeft">Google Maps</p>';
  dojosString += '<div class="linkTriangle floatLeft"></div><div class="clearBoth"></div>';
  dojosString += '</a>';
  dojosString += '</div></div>';
  if (i%2===1) {
    dojosString += '<div class="clearBothLessThan768"></div>';
  }
}
dojosString += '<div class="clearBoth"></div>';
$("#dojosContent").html(dojosString);








var siteData = {
  "news":[
    {"content":"whoop 1", "class":"contentBox1"}
    ,{"content":"whoop 2", "class":"contentBox2"}
    ,{"content":"whoop 3", "class":"contentBox1"}
    ,{"content":"whoop 4", "class":"contentBox2"}
    ,{"content":"whoop 5", "class":"contentBox1"}
    ,{"content":"whoop 6", "class":"contentBox2"}
    ,{"content":"whoop 7", "class":"contentBox1"}
    ,{"content":"whoop 8", "class":"contentBox2"}
    ,{"content":"whoop 9", "class":"contentBox1"}
    ,{"content":"whoop 10", "class":"contentBox2"}

  ]
};

var contentString = "";
for (var index in siteData["news"]) {
  contentString += "<li><div class='"+siteData["news"][index]["class"]+"'>"+siteData["news"][index]["content"]+"</div></li>";
};
$("#newsSlider ul").html(contentString);

$(window).load(function() {
  $("#newsSlider").flexslider({
    animation:"slide"
    // ,startAt:1
    ,minItems: 1
    ,maxItems: 3
//, animationLoop: false,
    ,itemWidth: 200
    // ,itemMargin: 5
  });
});







$(window).load(function() {
  $(".parallaxContainer").css("background-color","transparent");
});

$(document).ready(function() {
  var today = new Date();
  $("#dateText").text(today.getDate());
});

$(document).on("click", "#mobileButton", function() {
  $("#mobileNavigation").stop(true, true).slideToggle();
});

var scrollSpeed = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 0.5 : 0.8;
var scrollingToTop = false;
$(document).on("click", "#scrollToTop", function() {
  scrollingToTop = true;
  $("html body").animate({ scrollTop: 0 }, $(window).scrollTop()*scrollSpeed,function(){
    scrollingToTop = false;
  });
  $("#scrollToTop").fadeOut("slow");
});
$(window).scroll(function(){
  console.log("triggered");
  if (scrollingToTop===false) {
    if($(this).scrollTop()>50) {
      $("#scrollToTop").fadeIn("slow");
    } else {
      $("#scrollToTop").fadeOut();
    }
  }
})
$(document).on("click", ".scrollToClick", function() {
  var screenHeight = $(window).height();
  var clickElement = $(this).attr("overlay");
  var element = $("#"+$(this).attr("scroll-to"));
  var elementHeight = element.outerHeight();
  var elementOffsetTop = element.offset().top;
  if (elementHeight<screenHeight) {
    elementOffsetTop -= (screenHeight-elementHeight)/2;
  }
  $("html body").animate({ scrollTop: elementOffsetTop }, elementOffsetTop*scrollSpeed, function() {
    clickElement && showOverlay(clickElement);
  });
});

$(document).on("click", ".overlayClick", function() {
  showOverlay($(this).attr("overlay"));
});

function showOverlay(overlay){
  console.log("show overlay: "+overlay);
}

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

