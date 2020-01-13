$(document).ready(function(){
   
    // VARIABLES
    
    var default_size = 1280; // Default size for works block
    var font_title_full = 88; // Default size for caption's title
    var font_text_full = 64; // Default size for caption's text
    var wh_trigger = 0;
    
    
    
    
    // FUNCTIONS. DON'T TOUCH!!!
    
    var boxCaption = function(box_id) {
        
        
        if($(box_id + "_cont").width() > $(box_id + "_cont").height()) {
         
            wh_trigger = $(box_id + "_cont").height();
            
        }
        
        else if($(box_id + "_cont").width() < $(box_id + "_cont").height()){
         
            wh_trigger = $(box_id + "_cont").width();
            
        }
        
        else wh_trigger = $(box_id + "_cont").width();
        
        
     
        var font_title_size = Math.round(font_title_full - (font_title_full / 100) * ((default_size - wh_trigger) * 100 / default_size));
    
        var font_text_size = Math.round(font_text_full - (font_text_full / 100) * ((default_size - wh_trigger) * 100 / default_size));
        
        
    $(".works_hover_title").css({'font-size': font_title_size + 'px'});
    $(".works_text_title").css({'font-size': font_text_size + 'px'});
        
        
    $(box_id + "_header").css({'padding-top': $(box_id + "_cont").height()/2 - $(box_id + "_header").height()/2 + $(box_id + "_cont").height()/5 +'px'});
    $(box_id + "_header").css({'padding-left': $(box_id + "_cont").width()/2 - $(box_id + "_header").width()/2 +'px'});
        
    
                
                
     var boxOver = function(box_id) {
        
        $(box_id + "_cont").stop(true, false).animate({'opacity': 1}, 400);
        $(box_id + "_header").stop(true, false).animate({'padding-top': $(box_id + "_cont").height()/2 - $(box_id + "_header").height()/2 +'px'}, 400);
        
    }
    
    var boxOut = function(box_id) {
        
        $(box_id + "_cont").stop(true, false).animate({'opacity': 0}, 400);
        $(box_id + "_header").stop(true, false).animate({'padding-top': $(box_id + "_cont").height()/2 - $(box_id + "_header").height()/2 + $(box_id + "_cont").height()/5 +'px'}, 400);
        
    }           
                
         
    $(box_id + "_cont").hover(function(){ 
        boxOver(box_id); }, 
    function(){ 
        boxOut(box_id); 
    });      
                
                
                
                
                
    }
    
    var captionCalls = function() {
        
        boxCaption("#pic1");
        boxCaption("#pic2");
        boxCaption("#pic3");
        boxCaption("#pic4");
        boxCaption("#pic5");
        boxCaption("#pic6");
        boxCaption("#pic7");
        boxCaption("#pic8");
        boxCaption("#pic9");
        boxCaption("#pic10");
        boxCaption("#pic11");
        boxCaption("#pic12");
        boxCaption("#pic13");
        boxCaption("#pic14");
        boxCaption("#pic15");
        boxCaption("#pic16");
        boxCaption("#pic17");
        boxCaption("#pic18");
        boxCaption("#pic19");
        boxCaption("#pic100");
        
    }
    
    // END OF FUNCTIONS!
    
    
    
      
    $(window).resize(function(){
        
        captionCalls();
        
    });captionCalls();


    
});