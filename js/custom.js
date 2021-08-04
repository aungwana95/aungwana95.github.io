// A $( document ).ready() block.
$( document ).ready(function() {
$('.generate-iframe').click(function(){

	

var code = $('#iframe-code').val();
var url = $('#iframe-url').val();


$('#iframe-output-area1').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'.mp4');
$('#iframe-output-area2').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_hd.mp4');
$('#iframe-output-area3').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_dvd.mp4');
$('#iframe-output-area4').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_std.mp4');
$('#iframe-output-area5').val('https://videos.files.wordpress.com/'+ code +'/'+ url +'_mp4_hd.original.jpg');
$('#iframe-output-area6').val('https://videopress.com/v/'+ code +'/');
	});
});

// Copy //


function copy1() {
  let textarea = document.getElementById("iframe-output-area1");
  textarea.select();
  document.execCommand("copy");
}
function copy2() {
  let textarea = document.getElementById("iframe-output-area2");
  textarea.select();
  document.execCommand("copy");
}
function copy3() {
  let textarea = document.getElementById("iframe-output-area3");
  textarea.select();
  document.execCommand("copy");
}
function copy4() {
  let textarea = document.getElementById("iframe-output-area4");
  textarea.select();
  document.execCommand("copy");
}
function copy5() {
  let textarea = document.getElementById("iframe-output-area5");
  textarea.select();
  document.execCommand("copy");
}
function copy6() {
  let textarea = document.getElementById("iframe-output-area6");
  textarea.select();
  document.execCommand("copy");
}



