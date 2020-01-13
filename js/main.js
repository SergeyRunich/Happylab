$(document).ready(function(){
    
    var rowHeight = $(window).height();
    var rowWidth = $(window).width();
    var windowWidth = $(window).width();
    var contentHeight = $("#mainCol").height();
    var findUs = $("#findus").height();
    var brief = $("#briefrow").height();
    var whyUs = $("#whyusrow").height();
    var worksTitle = $("#worksTitle").width();
    var worksTitleMob = $(".worksTitleMob").width();
    var servicesImg = $("#servicesImg").height();
    var howWeDoRow = $("#howWeDoRow").height();

    $('.mainRow').css({'height':rowHeight+'px'});
    $('#mainCol').css({'top':rowHeight/2 - contentHeight/2 +'px'});
    $('#contacts1').css({'height':findUs +'px'});
    $('#briefcol').css({'height':brief+'px'});
    $('#whyuscol').css({'height':whyUs+'px'});
    $('#worksTitle').css({'height':worksTitle/2 + 'px'});
    $('.worksTitleMob').css({'height':worksTitleMob/2 + 'px'});
    $('#workOrder').css({'height':worksTitle/2 + 'px'});
    $('.workOrderMob').css({'height':worksTitleMob/2 + 'px'});
    $('#servicesUl').css({'height':servicesImg + 'px'});

    if(rowWidth > 991){
        $(".how-we-do-col").css({'height' :howWeDoRow + 'px'});
    }
    else {
        $(".how-we-do-col").css({'height' : 'auto'});
    }

    $(window).resize(function(){
        
        var rowHeightResized = $(window).height();
        var rowWidthResized = $(window).width();
        var contentHeightResized = $("#mainCol").height();
        var findUsResized = $("#findus").height();
        var briefResized = $("#briefrow").height();
        var whyUsResized = $("#whyusrow").height();
        var worksTitleResized = $("#worksTitle").width();
        var worksTitleMobResized = $(".worksTitleMob").width();
        var servicesImgResized = $("#servicesImg").height();
        var howWeDoRowResized = $("#howWeDoRow").height();
        rowWidth = rowWidthResized;

        $('.mainRow').css({'height':rowHeightResized+'px'});
        $('#mainCol').css({'top':rowHeightResized/2 - contentHeightResized/2 +'px'});
        $('#contacts1').css({'height':findUsResized+'px'});
        $('#briefcol').css({'height':briefResized+'px'});
        $('#whyuscol').css({'height':whyUsResized+'px'});
        $('#worksTitle').css({'height':worksTitleResized/2 + 'px'});
        $('.worksTitleMob').css({'height':worksTitleMobResized/2 + 'px'});
        $('#workOrder').css({'height':worksTitleResized/2 + 'px'});
        $('.workOrderMob').css({'height':worksTitleMobResized/2 + 'px'});
        $('#servicesUl').css({'height':servicesImgResized + 'px'});

        if(rowWidthResized > 991){
            $(".how-we-do-col").css({'height' :howWeDoRowResized + 'px'});
        }
        else {
            $(".how-we-do-col").css({'height' : 'auto'});
        }

    });


    $(function() {
       var el, newPoint, newPlace, offset;
       $("input[type='range'].timeinput").change(function() {
         el = $(this);
         width = el.width();
         newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
         offset = -1.3;
         if (newPoint < 0) { newPlace = 0;  }
         else if (newPoint > 1) { newPlace = width; }
         else { newPlace = width * newPoint + offset; offset -= newPoint;}
         el
           .next("output")
           .css({
             // left: newPlace,
             // marginLeft: (offset-3) + "%"
           })
           .text(el.val()+ ' сек.');
       })
       .trigger('change');
     });

    $(function() {
       var el, newPoint, newPlace, offset;
       $("input[type='range'].priceinput").change(function() {
         el = $(this);
         width = el.width();
         newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
         offset = -1.3;
         if (newPoint < 0) { newPlace = 0;  }
         else if (newPoint > 1) { newPlace = width; }
         else { newPlace = width * newPoint + offset; offset -= newPoint;}
         el
           .next("output")
           .css({
             // left: newPlace,
             // marginLeft: (offset - ($(window).width/100 + $("#priceValue").width()*100) ) + "%"
           })
           .text(el.val()+ ' руб.');
       })
       .trigger('change');
     });


    // MODALS

    $("#call-back").click(function(){
        $("#call-back-modal").fadeIn(function(){
            $("#call-back-content").animate({
            left: "0"}, 500);
        });
        
    });

    $("#close-btn").click(function(){
        $("#call-back-content").animate({
            left: "-30%"
        }, 500, function(){
            $("#call-back-modal").fadeOut();
        });
    });



    $(".caption_cont").click(function(){

        if(rowWidth > 640){
            $("#work-modal").fadeIn();

            $("#work-modal-close").click(function(){
                $('iframe').attr('src', $('iframe').attr('src'));
                $("#work-modal").fadeOut();
            });
        }

        else{
             $("#work-modal-mobile").fadeIn();

             $("#work-modal-close-mobile").click(function(){
                $('iframe').attr('src', $('iframe').attr('src'));
                $("#work-modal-mobile").fadeOut();
            });
        }
    });

    $("#main-modal-open").click(function(){

        if(rowWidth > 640){
            $("#main-modal").fadeIn();

            $("#main-modal-close").click(function(){
                $('iframe').attr('src', $('iframe').attr('src'));
                $("#main-modal").fadeOut();
            });
        }

        else{
             $("#main-modal-mobile").fadeIn();

             $("#main-modal-close-mobile").click(function(){
                $('iframe').attr('src', $('iframe').attr('src'));
                $("#main-modal-mobile").fadeOut();
            });
        }
    });

    //MODALS


    // SERVICES TAB LIST

    var active_tab = 1;

    $("#tab2_cont").hide();
    $("#tab3_cont").hide();
    $("#tab4_cont").hide();
    $("#tab5_cont").hide();
    $("#tab6_cont").hide();
    $("#tab7_cont").hide();
    $("#tab8_cont").hide();
    $("#tab9_cont").hide();

    $("#tab2_cont_mob").hide();
    $("#tab3_cont_mob").hide();
    $("#tab4_cont_mob").hide();
    $("#tab5_cont_mob").hide();
    $("#tab6_cont_mob").hide();
    $("#tab7_cont_mob").hide();
    $("#tab8_cont_mob").hide();
    $("#tab9_cont_mob").hide();

    var tab_header_text = ['ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ','ПРИМЕР РАБОТЫ'];
    var tab_caption_text = ['► Смотреть','► Смотреть','► Смотреть','► Смотреть','► Смотреть','► Смотреть','► Смотреть','► Смотреть','► Смотреть','► Смотреть'];

    $("#tab_header").html(tab_header_text[active_tab]);
    $("#tab_caption").html(tab_header_text[active_tab]);

    $("#tab1, #tab2, #tab3, #tab4, #tab5, #tab6, #tab7, #tab8, #tab9").click(function(){

        changeTab($(this).data("id"));

    });


    $("select").change(function () {
          var str = "";
          $("select option:selected").each(function () {
                str = $(this).val();
              });

          //desktop
        $("#tab" + active_tab).removeClass("activeLi");
        $("#tab" + str).addClass("activeLi");

          $("#tab_header").html(tab_header_text[str]);
            $("#tab_caption").html(tab_caption_text[str]);

            $("#tab_img").fadeOut("fast", function(){ $("#tab_img").attr('src','images/tab_img_'+ str +'.png');}).fadeIn("fast");
            $("#tab" + active_tab + "_cont").hide();
            $("#tab" + str + "_cont").show();

            //mobile
            $("#tab" + active_tab + "_cont_mob").fadeOut('fast');
            $("#tab" + str + "_cont_mob").fadeIn('fast', function(){ active_tab = str; });
    })
    .change();


    var changeTab = function(current_tab){

            //mobile
            $("#tab" + active_tab + "_cont_mob").hide();
            $("#tab" + current_tab + "_cont_mob").show();
            $("select [value=" + current_tab + "]").attr("selected", "selected");

            //desktop
            $("#tab" + active_tab + "_cont").fadeOut('fast');
            $("#tab" + active_tab).removeClass("activeLi");

            $("#tab_header").html(tab_header_text[current_tab]);
            $("#tab_caption").html(tab_caption_text[current_tab]);

            $("#tab_img").fadeOut("fast", function(){ $("#tab_img").attr('src','images/tab_img_'+ current_tab +'.png');}).fadeIn("fast");
            $("#tab" + current_tab + "_cont").fadeIn('fast', function(){ active_tab = current_tab; });
            $("#tab" + current_tab).addClass("activeLi");      

    }    

});