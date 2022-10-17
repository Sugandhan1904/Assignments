jQuery(document).ready(function(){
    jQuery('.hoverstate').css('display', 'none')
	jQuery("#recommendedContent").hide();
	jQuery("#pastContent").hide();		
	jQuery(".Recommended").click(function(){
        jQuery(".Past").removeClass("active");                               
		jQuery(".Featured").removeClass("active");
        jQuery(".Recommended").addClass("active");
		jQuery("#featureContent").hide();
        jQuery("#recommendedContent").show();
        jQuery("#pastContent").hide();
    });
    jQuery(".Past").click(function(){
        jQuery(".Recommended").removeClass("active");                               
		jQuery(".Featured").removeClass("active");
        jQuery(".Past").addClass("active");
		jQuery("#featureContent").hide();
        jQuery("#recommendedContent").hide();
        jQuery("#pastContent").show();
    });
    jQuery(".Featured").click(function(){
        jQuery(".Past").removeClass("active");                               
		jQuery(".Recommended").removeClass("active");
        jQuery(".Featured").addClass("active");
		jQuery("#featureContent").show();
        jQuery("#recommendedContent").hide();
        jQuery("#pastContent").hide();
    });
});


jQuery(document).ready(function() {

    var owl1 = jQuery("#featureContent");

    owl1.owlCarousel({
        loop : true,
        nav : true,
        dots: true,
        margin : 20,
        responsive : {

            0 : {
                items : 1,
                margin : 0
            },
            768 : {
                items : 1,
                margin : 20
            },
            1024 : {
                items : 3,
                margin : 20
            }			
    },

    });

    var owl2 = jQuery("#recommendedContent");

    owl2.owlCarousel({
        loop : true,
        nav : true,
        dots: true,
        margin : 20,
        responsive : {

            0 : {
                items : 1,
                margin : 0
            },
            768 : {
                items : 1,
                margin : 20
            },
        1024 : {
            items : 3,
            margin : 20
        }			
    },

    });

    var owl3 = jQuery("#pastContent");

    owl3.owlCarousel({
        loop : true,
        nav : true,
        dots: true,
        margin : 20,
        responsive : {

            0 : {
                items : 1,
                margin : 0
            },
            768 : {
                items : 1,
                margin : 20
            },
        1024 : {
            items : 3,
            margin : 20
        }			
    },

    });
    $('.tab > div').click(function(){
        if($('.tab > .Featured ').hasClass('active')) {
            $(".line").addClass("fea");
            $(".line").removeClass("pas");
            $(".line").removeClass("recom");
            $(".line .arrow").css("display", "block");
    }
        else if($('.tab > .Recommended ').hasClass('active')) {
            $(".line").addClass("recom");
            $(".line").removeClass("pas");
            $(".line").removeClass("fea");
            $(".line .arrow").css("display", "block");
    }
    else if($('.tab > .Past ').hasClass('active')) { 
            $(".line").addClass("pas");
            $(".line").removeClass("fea");
            $(".line").removeClass("recom");
            $(".line .arrow").css("display", "block");
    }
    }); 

    $(".hovered").hover(function(){
        $(this).find('.hoverstate').show();
    },function(){
        $(this).find('.hoverstate').hide();
    });
   
}); 
