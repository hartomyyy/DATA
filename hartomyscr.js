$('#blog-repeat').on('click',function(event){event.preventDefault();var elload=$(".blog-pager-older-link");var link=elload.attr('href');var alreadyClicked=elload.data('clicked');if(alreadyClicked){return!1}
elload.data('clicked',!0);$('.blog-pager-older-link').html('Loading...');$.get(link,function(data){var source=$(data).find('.blog-posts').length?$(data):$('<div></div>');$(".blog-posts").append(source.find('.blog-posts').html());var clone=source.find('#Blog1_blog-pager-older-link').clone();if(clone.html()===undefined){$("#blog-pager-older-link").html('<span></span><span><a class="blog-pager-older-link">Empty Post</a></span><span></span>');finish=1}else{$("#blog-repeat").html(clone)}
elload.data('clicked',!1)},"html")})
$('#hartomyTampilanGrid').click(function(){$("body").removeClass('hartomyTampilanList')});$('#hartomyTampilanList').click(function(){$("body").addClass('hartomyTampilanList')});$(function(){$(document).on('scroll',function(){if($(window).scrollTop()>100){$('.scroll-top-wrapper').addClass('show')}else{$('.scroll-top-wrapper').removeClass('show')}});$('.scroll-top-wrapper').on('click',scrollToTop)});function scrollToTop(){verticalOffset=typeof(verticalOffset)!='undefined'?verticalOffset:0;element=$('body');offset=element.offset();offsetTop=offset.top;$('html, body').animate({scrollTop:offsetTop},500,'linear')}
$(function(){$(".separator:first").remove(),$(".post-body > img:first").remove()});
$(".buka").click(function() {
 if ($('#headerkanan').css('left') == '80px') {
  $("#headerkanan").css({
   left: "-300px"
  })
  $("#menututup").css({
   left: "28px"
  });
  $("#headerwidget").css({
   width: "76%"
  })
 } else {
  $("body").css({
   overflow: ""
  });
  $("#headerkanan").css({
   left: ""
  });
  $("#menukiri").css({
   left: "0"
  });
  $("#wrapper").css({
   width: "76%",
   left: "138px"
  });
  $("#fotoku").css({
   left: "0"
  });
  $("#menubuka").css({
   left: "-28px"
  })
  $("#menututup").css({
   left: "28px"
  });
  $("#headerwidget").css({
   width: "76%"
  })
 }
});
$(".menututup").click(function() {
 if ($('#menututup').css('left') == '28px') {
  $("#headerkanan").css({
   left: "-300px"
  })
  $("#menukiri").css({
   left: "-210px"
  });
  $("#menututup").css({
   left: "-28px"
  });
  $("#menubuka").css({
   left: "28px"
  })
  $("#wrapper").css({
   left: "40px",
   width: "85%"
  });
  $("#headerwidget").css({
   width: "100%"
  })
  $("#fotoku").css({
   left: "198px"
  })
 }
});
$(".menubuka").click(function() {
 if ($('#menukiri').css('left') == '-210px') {
  $("#menukiri").css({
   left: "0"
  });
  $("#headerkanan").css({
   left: "80px"
  })
  $("#menututup").css({
   left: "28px"
  });
  $("#menubuka").css({
   left: "-28px"
  })
  $("#fotoku").css({
   left: "0"
  });
  $("#wrapper").css({
   left: "138px",
   width: "76%"
  })
  $("#headerwidget").css({
   width: "76%"
  })
 }
});
$(".mediabuka").click(function() {
 if ($('#menukiri').css('left') == '-210px') {
  $("#menukiri").css({
   left: "0"
  });
  $("#headerkanan").css({
   left: "80px"
  })
  $("#mediatutup").css({
   left: "28px"
  });
  $("#mediabuka").css({
   left: "-28px"
  })
  $("#fotoku").css({
   left: "0"
  })
 }
});
$(".mediatutup").click(function() {
 if ($('#mediatutup').css('left') == '28px') {
  $("#menukiri").css({
   left: "-210px"
  });
  $("#headerkanan").css({
   left: "-300px"
  })
  $("#mediatutup").css({
   left: "-28px"
  });
  $("#mediabuka").css({
   left: "28px"
  })
  $("#fotoku").css({
   left: "198px"
  })
 }
});
$(".mobilebuka").click(function() {
 if ($('#mobilebuka').css('left') == '233px') {
  $("#menukiri").css({
   left: "-300px"
  });
  $("#headerkanan").css({
   left: "-300px"
  })
  $("#mobilebuka").css({
   left: "-300px"
  })
 }
});
$(".meopen").click(function() {
 if ($('#headerkanan').css('left') == '-300px') {
  $("#menukiri").css({
   left: "0"
  });
  $("#fotoku").css({
   left: "0"
  });
  $("#mobilebuka").css({
   left: "233px"
  })
  $("#mediatutup").css({
   left: "28px"
  });
  $("#mediabuka").css({
   left: "-28px"
  })
 } else {
  $("body").css({
   overflow: ""
  });
  $("#headerkanan").css({
   left: "-300px"
  })
 }
});
$(".bukaM").click(function() {
 if ($('#headerkanan').css('left') == '-300px') {
  $("#menukiri").css({
   left: "0"
  });
  $("#fotoku").css({
   left: "0"
  });
  $("#mobilebuka").css({
   left: "233px"
  });
  $("#headerkanan").css({
   left: "35px"
  })
 } else {
  $("body").css({
   overflow: ""
  });
  $("#headerkanan").css({
   left: ""
  })
 }
});
$(".bukaMedia").click(function() {
 if ($('#headerkanan').css('left') == '-300px') {
  $("#menukiri").css({
   left: "0"
  });
  $("#fotoku").css({
   left: "0"
  });
  $("#wrapper").css({
   left: ""
  });
  $("#headerkanan").css({
   left: "80px"
  });
  $("#mediatutup").css({
   left: "28px"
  });
  $("#mediabuka").css({
   left: "-28px"
  })
 } else {
  $("body").css({
   overflow: ""
  });
  $("#headerkanan").css({
   left: ""
  })
 }
});
