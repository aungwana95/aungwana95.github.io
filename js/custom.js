// A $( document ).ready() block.
$( document ).ready(function() {
   $('.generate-iframe').click(function(){

	

		var code = $('#iframe-code').val();
                var url = $('#iframe-url').val();




		$('#iframe-output-area1').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'.mp4');
                $('#iframe-output-area2').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_hd.mp4');
                $('#iframe-output-area3').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_dvd.mp4');
                $('#iframe-output-area4').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_std.mp4');
	});
});

// https://videos.files.wordpress.com/sctAQyVA/crouchingtigerhiddendragon-swordofdestiny5b20165daungwana.mp4 //