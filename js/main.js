$(function(){
	$('#login-button').on('mouseover',function(){
		$(this).animate({
			width:'250px'
		},600,'easeOutBounce');
	});
	$('#login-button').on('mouseout',function(){
		$(this).animate({
			width:'150px'
		},800, 'easeOutBounce');
		//$('#login-button').effect( "bounce", "slow" );
	});
	$('#login-button').on('click',function(){
		/*$('#login-button').effect("drop","600", function(){
			
			});*/
			
		$('#login-button').animate({
			right:'-200px',
			opacity:'0'
		},300,function(){
			$('#login-details').animate({
			right:'0px',
			opacity:'1'
		},800);
		$('#login-details-inner').animate({
			right:'301px'
		},850, function(){$(this).css('opacity','1');});			
			});

	});
	$('#login-details-inner').on('click', function(){
		//$('#login-button').effect("slide","1000");
		$('#login-details, #login-details-inner').animate({
			right:'-310px',
			opacity:'0'
		},500, function(){
			$('#login-button').animate({
				right:'0px',
				opacity:'1'
			},600);
			$('#login-credentials')[0].reset();
			});
		
	});
	$('#login-input-button').on('click', function(){
		$('.wrapper').animate({opacity:'0'},800, 'easeInQuad', function(){
			window.open('business.html','_self');
		});
		
	});
});
