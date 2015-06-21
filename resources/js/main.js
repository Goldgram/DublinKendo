var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/* map id's*/
for (var i in siteData["homepageIdMapping"]) {
  $("#"+i).text(siteData["homepageIdMapping"][i]);
}
/* add dojo content */
(function() {
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
    dojosString += '<p class="boldFont fontSize14 colorBlue floatLeft">Google Maps</p>';
    dojosString += '<div class="linkTriangle14 floatLeft"></div><div class="clearBoth"></div>';
    dojosString += '</a>';
    dojosString += '</div></div>';
    if (i%2===1) {
      dojosString += '<div class="clearBothLessThan768"></div>';
    }
  }
  dojosString += '<div class="clearBoth"></div>';
  $("#dojosContent").html(dojosString);
})();
/* add news content*/
var newsCurrentPageIndex = 1;
var newsMaxPages = Math.ceil(siteData["news"].length/3);
function populateNews(pageIndex) {
  var newsString = "";
  var endIndex = pageIndex*3;
  var startIndex = endIndex-3;
  var newsItemsMax = siteData["news"].length;
  if (endIndex>newsItemsMax) {
    endIndex = newsItemsMax;
  }
  for (var i = startIndex; i < endIndex; i++) {
    var news = siteData["news"][i];
    newsString += '<div class="newsItem"><div class="contentPadding"><div' + (news["overlay"] ? ' class="noSelectClick overlayClick" overlay="news'+i+'"' :'' ) +'>';
    newsString += '<img class="newsImage marginBottom15" src="'+news["image"]+'" alt="'+news["title"]+'" onerror="this.src=\'resources/images/news-default.jpg\'" alt="'+news["title"]+'">';
    newsString += '<p class="boldFont fontSize20Paragraph marginBottom15">'+news["title"]+'</p>';
    newsString += '<p class="fontSize16Paragraph textJustify marginBottom10">'+news["content"]+'</p>';
    newsString += news["overlay"] ? '<p class="boldFont fontSize16 marginBottom30">READ MORE</p>' : '';
    newsString += '</div></div></div>';
  }
  newsString += '<div class="clearBoth"></div>';
  $("#newsItems").html(newsString);
 }
populateNews(newsCurrentPageIndex);
if (siteData["news"].length>3) {
  $("#newsMore").show();
}
$(document).on("click", ".newsPagination", function() {
  if ($(this).attr("id")==="newsMore") {
    newsCurrentPageIndex++;
  } else if ($(this).attr("id")==="newsBack") {
    newsCurrentPageIndex--;
  }
  if (newsCurrentPageIndex<=newsMaxPages) {
    populateNews(newsCurrentPageIndex);
     if (newsCurrentPageIndex===1) {
      $("#newsMore").show();
      $("#newsBack").hide();
    } else if (newsCurrentPageIndex===newsMaxPages) {
      $("#newsMore").hide();
      $("#newsBack").show();
    } else {
      $("#newsMore").show();
      $("#newsBack").show();
    }
  }
});

$(window).load(function() {
  /* parallax show on load*/
  $(".parallaxContainer").css("background-color","transparent");
});

$(document).ready(function() {
  /* date easter egg */
  var today = new Date();
  $("#dateText").text(today.getDate());
});


/* mobile nav */
$(document).on("click", "#mobileButton", function() {
  $("#mobileNavigation").stop(true, true).slideToggle();
});
/* scroll functionality */
var scrollSpeed =  isMobile ? 0.5 : 0.8;
var scrollingToTop = false;
$(document).on("click", "#scrollToTop", function() {
  scrollingToTop = true;
  $("html body").animate({ scrollTop: 0 }, $(window).scrollTop()*scrollSpeed,function(){
    scrollingToTop = false;
  });
  $("#scrollToTop").fadeOut("slow");
});
$(window).scroll(function() {
  if (scrollingToTop===false) {
    if($(this).scrollTop()>50) {
      $("#scrollToTop").fadeIn("slow");
    } else {
      $("#scrollToTop").fadeOut();
    }
  }
});
$(document).on("click", ".scrollToClick", function() {
  var screenHeight = $(window).height();
  var clickElement = $(this).attr("overlay");
  var element = $("#"+$(this).attr("scroll-to"));
  var elementHeight = element.outerHeight();
  var elementOffsetTop = element.offset().top + (isMobile?45:10);
  if (elementHeight<screenHeight) {
    elementOffsetTop -= (screenHeight-elementHeight)/2;
  }
  $("html body").animate({ scrollTop: elementOffsetTop }, elementOffsetTop*scrollSpeed, function() {
    clickElement && showOverlay(clickElement);
  });
});
/* overlay functionality*/
function showOverlay(overlay){
  console.log("show overlay: "+overlay);
}
$(document).on("click", ".overlayClick", function() {
  showOverlay($(this).attr("overlay"));
});
