var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/* map id's*/
for (var i in siteData["homepageIdMapping"]) {
  $("#"+i).html(siteData["homepageIdMapping"][i]);
}
/* date easter egg */
// var today = new Date();
// $("#dateText").text(today.getDate());
/* add news content*/
// var newsCurrentPageIndex = 1;
// var newsMaxPages = Math.ceil(siteData["news"].length/3);
// function populateNews(pageIndex) {
//   var newsString = "";
//   var endIndex = pageIndex*3;
//   var startIndex = endIndex-3;
//   var newsItemsMax = siteData["news"].length;
//   if (endIndex>newsItemsMax) {
//     endIndex = newsItemsMax;
//   }
//   for (var i = startIndex; i < endIndex; i++) {
//     var news = siteData["news"][i];
//     newsString += '<div class="newsItem"><div class="contentPadding"><div' + (news["overlayId"] ? ' class="noSelectClick overlayClick" overlay="'+news["overlayId"]+'"' :'' ) +'>';
//     newsString += '<img class="newsImage marginBottom15" src="'+ (news["image"]==="" ? "resources/images/news-default.jpg" : news["image"]) +'" alt="'+news["title"]+'" onerror="this.src=\'resources/images/news-default.jpg\'" alt="'+news["title"]+'">';
//     newsString += '<p class="boldFont fontSize20Paragraph marginBottom15">'+news["title"]+'</p>';
//     newsString += '<p class="fontSize16Paragraph textJustify marginBottom10">'+news["content"]+'</p>';
//     newsString += news["overlayId"] ? '<p class="boldFont fontSize16 marginBottom30 textRight">READ MORE</p>' : '';
//     newsString += '</div></div></div>';
//   }
//   newsString += '<div class="clearBoth"></div>';
//   $("#newsItems").html(newsString);
//  }
// populateNews(newsCurrentPageIndex);
// if (siteData["news"].length>3) {
//   $("#newsMore").show();
// }
// $(document).on("click", ".newsPagination", function() {
//   if ($(this).attr("id")==="newsMore") {
//     newsCurrentPageIndex++;
//   } else if ($(this).attr("id")==="newsBack") {
//     newsCurrentPageIndex--;
//   }
//   if (newsCurrentPageIndex<=newsMaxPages) {
//     populateNews(newsCurrentPageIndex);
//      if (newsCurrentPageIndex===1) {
//       $("#newsMore").show();
//       $("#newsBack").hide();
//     } else if (newsCurrentPageIndex===newsMaxPages) {
//       $("#newsMore").hide();
//       $("#newsBack").show();
//     } else {
//       $("#newsMore").show();
//       $("#newsBack").show();
//     }
//   }
// });

(function() {
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
    dojosString += '<div class="linkTriangle16 floatLeft"></div><div class="clearBoth"></div>';
    dojosString += '</a>';
    dojosString += '</div></div>';
    if (i%2===1) {
      dojosString += '<div class="clearBothLessThan768"></div>';
    }
  }
  dojosString += '<div class="clearBoth"></div>';
  $("#dojosContent").html(dojosString);

  /* Contact Us Links*/
  $("#contactUsEmailLink").attr("href",siteData["contact"]["email"]["href"]);
  $("#contactUsEmailLink").text(siteData["contact"]["email"]["text"]);
  
  /* footer links */
  for (var k = 0; k < siteData["footerLinks"].length; k++) {
    $("#footerLinksInner").append('<h2 class="condensedFont fontSize25 marginBottom15 noSelectClick overlayClick" overlay="'+siteData["footerLinks"][k]["overlayId"]+'">'+siteData["footerLinks"][k]["text"]+'</h2>');
  }
  
  /* get FB footer include */
  var fbWidth = $("#footerFacebook").width()+10;
  $("#footerFacebook").append('<div class="fb-like-box" data-href="https://www.facebook.com/pages/Dublin-Kendo-Kobukai/48005091845" data-width="'+fbWidth+'" data-colorscheme="dark" data-show-faces="true" data-header="false" data-stream="true" data-show-border="false"></div>');
})();

$(window).load(function() {
  /* parallax show on load*/
  $(".parallaxContainer").css("background-color","transparent");
});

/* mobile nav */
$(document).on("click", "#mobileButton", function() {
  $("#mobileNavigation").stop(true, true).slideToggle();
});
/* scroll functionality */
var scrollSpeed =  isMobile ? 0.4 : 0.75;
var scrollingToTop = false;
$(document).on("click", "#scrollToTop", function() {
  scrollingToTop = true;
  $("html, body").animate({ scrollTop: 0 }, $(window).scrollTop()*scrollSpeed,function(){
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
  if (!toggleOverlay()) {
    if ($(this).attr("join-now") === "true") {
      $("#contactUsTopic").val("join-now");
    }
    var screenHeight = $(window).height();
    var clickElement = $(this).attr("overlay");
    var elementScrollTo = $(this).attr("scroll-to");
    var element = $("#"+elementScrollTo);
    var elementHeight = element.outerHeight();
    var elementOffsetTop = element.offset().top + 10;
    if (elementHeight<screenHeight) {
      elementOffsetTop -= (screenHeight-elementHeight)/2;
    }
    $("html, body").animate({ scrollTop: elementOffsetTop }, elementOffsetTop*scrollSpeed, function() {
      clickElement && showOverlay(clickElement);
    });
  }
});
/* submit forms */
function elementInView(element) {
  var elementTop = element.getBoundingClientRect().top,
  elementBottom = element.getBoundingClientRect().bottom;
  return elementTop >= 0 && elementBottom <= window.innerHeight;
}
$(document).on("click", "#submitButton", function() {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var errorArray = [];
  if ($("#contactUsName").val()==="") {
    errorArray.push("Name");
  }
  if ($("#contactUsEmail").val()==="" || !$("#contactUsEmail").val().match(emailRegex)) {
    errorArray.push("Email Address");
  }
  if ($("#contactUsMessage").val()==="") {
    errorArray.push("Message");
  }
  $("#contactUsLoading").hide();
  $("#submitButton").show();
  
  if (errorArray.length>0) {
    var errorText = "Error: you must enter a valid ";
    var errorCount = 1;
    for (var i = 0; i < errorArray.length; i++) {
      if (errorCount>1) {
        errorText += ", ";
        if (errorCount===errorArray.length) {
          errorText += " and ";
        }
      }
      errorText += errorArray[i];
      errorCount++;
    }
    errorText += ".";
    $("#contactUsFeedback p").text(errorText);
    $("#contactUsFeedback").css("background-color","#d75452");
    $("#contactUsFeedback").slideDown();
    !elementInView($("#contactUsFeedback").get(0)) && $("html, body").animate({ scrollTop: $("#contactUsFeedback").offset().top },300);
  } else {
    $("#submitButton").hide();
    $("#contactUsLoading").show();
    var data = $("#contactUsForm").serialize();
    $.post("contact.php", data, function(response) {
      $("#contactUsLoading").hide();
      $("#submitButton").show();
      if (response["success"]===true) {
        $("#contactUsFeedback p").text("Thanks, a reply will be sent as soon as possible.");
        $("#contactUsFeedback").css("background-color","#000096");
      } else {
        $("#contactUsFeedback p").text("Error: please try again later.");
        $("#contactUsFeedback").css("background-color","#d75452");
      }
      $("#contactUsFeedback").slideDown();
      !elementInView($("#contactUsFeedback").get(0)) && $("html, body").animate({ scrollTop: $("#contactUsFeedback").offset().top },300);
    });
  }
});
/* overlay functionality*/
var lastOverlay = "";
var topBeforeOverlay = 0;
function showOverlay(overlay){
  if (siteData["overlays"][overlay]) {
    if (overlay!==lastOverlay) {
      lastOverlay = overlay;
      $("#kendoOverlay").removeClass().addClass(siteData["overlays"][overlay]["style"]+"Overlay");
      var overlayString = "";
      var data = siteData["overlays"][overlay]["data"];
      var dataLength = data.length;
      var clearBoth = '<div class="clearBoth"></div>';
      var sizeCount = 0;
      for (var i = 0; i < dataLength; i++) {
        var row = data[i];
        var rowString = "";
        var rowSize = row["size"] ? parseInt(row["size"],10) : 0;
        sizeCount += rowSize;
        if (sizeCount>0 && rowSize===0) { // || sizeCount>100
          sizeCount = rowSize;
          rowString += clearBoth;
        }
        if (rowSize>0) {
          rowString += '<div class="float'+ (row["float"] ? row["float"].charAt(0).toUpperCase()+row["float"].slice(1) : 'Left') +' block'+rowSize+'">';
        }
        switch(row["type"]) {
          case "header":
            rowString += '<h2 class="contentPadding condensedFont fontSize30 marginBottom10">'+row["text"].toUpperCase()+'</h2>';
            break;
          case "subheader":
            rowString += '<p class="contentPadding boldFont fontSize20">'+row["text"]+'</p>';
            break;
          case "paragraph":
            rowString += '<p class="shortContentPadding fontSize16Paragraph">'+row["text"]+'</p>';
            break;
          case "image":
            rowString += '<div class="contentPadding"><img src="'+row["source"]+'" alt="'+row["altText"]+'"></div>';
            break;
          case "link":
            rowString += '<a href="'+row["source"]+'" class="noSelectClick" target="_blank"><div class="shortContentPadding"><p class="boldFont fontSize16Paragraph colorBlue floatLeft">'+row["text"]+'</p><div class="linkTriangle16 floatLeft"></div><div class="clearBoth"></div></div></a>';
            break;
          case "document":
            rowString += '<a href="'+row["source"]+'" class="noSelectClick" target="_blank"><div class="shortContentPadding posRel"><div class="documentIcon"></div><p class="documentText boldFont fontSize16Paragraph colorBlue">'+row["text"]+'</p></div></a>';
            break;
          case "gallery":
            rowString += '<div class="contentPadding"><img src="'+row["source"]+'" alt="'+row["altText"]+'"><p class="fontSize16Paragraph">'+row["text"]+'</p></div>';
            break;
          case "break":
            rowString += '<br>';
            break;
          case "clear":
            break;
        }
        if (rowSize>0) {
          rowString += '</div>';
        }
        overlayString += rowString;
      }
      overlayString += clearBoth;
      $("#kendoOverlayContent").html(overlayString);
    }
    topBeforeOverlay = $(document).scrollTop();
    $("#kendoOverlay").fadeIn(300, function() {
      $("body").css("overflow","hidden");
      $("#kendoOverlay").css("overflow","auto");
    });
  }
}

var toggleOverlay = function() {
  if ($(this).attr("overlay")) {
    showOverlay($(this).attr("overlay"));
    return true;
  }
  $("body").css("overflow","auto");
  $("#kendoOverlay").css("overflow","hidden").fadeOut();
  return false;
};
$(document).on("click", ".overlayClick", toggleOverlay);