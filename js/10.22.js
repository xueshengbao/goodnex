

//色彩切换

jQuery.extend({
	tubiao:function(obj,img){
		obj.hover(function(){
		img.css("-webkit-filter","grayscale(0%)")
	},function(){
		img.css("-webkit-filter","grayscale(100%)")
	})
	}
})
$(document).ready(function(){
	$.tubiao($("#center .container .row .col-lg-12 .tubiao li:eq(0)"),$("#center .container .row .col-lg-12 .tubiao li:eq(0) img"))
	$.tubiao($("#center .container .row .col-lg-12 .tubiao li:eq(1)"),$("#center .container .row .col-lg-12 .tubiao li:eq(1) img"))
	$.tubiao($("#center .container .row .col-lg-12 .tubiao li:eq(2)"),$("#center .container .row .col-lg-12 .tubiao li:eq(2) img"))
	$.tubiao($("#center .container .row .col-lg-12 .tubiao li:eq(3)"),$("#center .container .row .col-lg-12 .tubiao li:eq(3) img"))
	$.tubiao($("#center .container .row .col-lg-12 .tubiao li:eq(4)"),$("#center .container .row .col-lg-12 .tubiao li:eq(4) img"))
	$.tubiao($("#center .container .row .col-lg-12 .banner .banner-center ul li:eq(0)"),$("#center .container .row .col-lg-12 .banner .banner-center li:eq(0) .tu img"))
	$.tubiao($("#center .container .row .col-lg-12 .banner .banner-center ul li:eq(1)"),$("#center .container .row .col-lg-12 .banner .banner-center li:eq(1) .tu img"))
	$.tubiao($("#center .container .row .col-lg-12 .banner .banner-center ul li:eq(2)"),$("#center .container .row .col-lg-12 .banner .banner-center li:eq(2) .tu img"))
	$.tubiao($("#center .container .row .col-lg-12 .banner .banner-center ul li:eq(3)"),$("#center .container .row .col-lg-12 .banner .banner-center li:eq(3) .tu img"))
})

//下方选项卡


$(document).ready(function(){
	$("#center .container .row .col-lg-8 .xxk .xxk-top li").click(function(){
		var index=$(this).index();
		$("#center .container .row .col-lg-8 .xxk .xxk-top li").removeClass("first").eq(index).addClass("first");
		$("#center .container .row .col-lg-8 .xxk .xxk-bottom li").css("display","none").eq(index).css("display","block")
	})	
})


jQuery.extend({
	one:function(){
		
	}
})

$(document).ready(function(){
	
})

// banner轮播

//$(document).ready(function(){
//		var flag=true;
//		var n=0;
//		var next=0;
//		function tu(){
//			next=n+1;
//			if(next>=$('.lunbo-box .li-lunbo').length){
//				next=0;
//			};
//			$('.lunbo-box .li-lunbo').removeClass("active").eq(next).addClass("active");
//			n=next;
//		}
//		var t=setInterval(tu,8000);
//		
//	   
//    
//}




// banner轮播

$(document).ready(function(){
		var n=0;
		var next=0;
		function tu(){
			next=n+1;
			if(next>=$('.lunbo-box .li-lunbo').length){
				next=0;
			};
			
			$('.lunbo-box .li-lunbo').removeClass("active").eq(next).addClass("active");
			n=next;
		}
		var t=setInterval(tu,8000);
//		$('#lunbo').mouseover(function(){
//			clearInterval(t);
//		}).mouseout(function(){
//			t=setInterval(tu,8000);
//		});
	    $('#lunbo .bannerRight').click(function(){
	    	next=n-1;
			if(next<0){
				next=$('.lunbo-box .li-lunbo').length-1;
			};
	    	
			$('.lunbo-box .li-lunbo').removeClass("active").eq(next).addClass("active");
			n=next;
		})
	    $('#lunbo .bannerLeft').click(function(){
	    	tu();
	    })
	   
})