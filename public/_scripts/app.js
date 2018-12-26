$( document ).ready(function() {



/* =========================================================================
    Works Overview
========================================================================= */
	
if($('.template-works-overview').length){
	
	
	function onStage(work_url){
		
	
		$( '#loading-work-container' ).load( work_url+' #work', function() {
	
// 			$('.loading-work-stage').mousewheelStopPropagation();
	
			$('.loading-work-stage').css('display','block');
	
			$('.fitvids').fitVids();
	
			setTimeout(function(){
	
				$('.loading-work-stage').animate({opacity: 1}, 300, function() {
	
	
				});
	
			}, 400);
	
		});
		
		
	}
	
	
	function offStage(){
	
		$( '.loading-work-stage' ).css({
			'display':'none',
			'opacity':'0'
		});
		
		$( '#loading-work-container' ).empty();
			
	}

	
	
	
	$(window).on('popstate', function(e) {
		console.log('popstate');
		
		if(history.state){
			
			var workURL = history.state.url;
			
			onStage(workURL);
				
		}
		else{
			offStage();
		}
		
	});
	


	$(document).on('click', '.js-load-work', function(event) {
	
		event.preventDefault();
	
		var $this = $(this);
	
		var workURL = $this.data('work-url');
	
		history.pushState({ url: workURL }, null, workURL);
		
		onStage(workURL);
	
	});
	
	
	
	$(document).on('click', '.loading-work-stage-close', function() {
	
		offStage();
		
		var $this = $(this);
	
		var worksURL = $this.data('works-url');
		
		history.pushState(null, null, worksURL);
		
	});


	
}



/* =========================================================================
    Work
========================================================================= */


if($('.template-comml-work').length){

    skrollr.init({
        forceHeight: false
    });

}














});