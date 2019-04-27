function click_del() {
$("a:contains('Remove post')")[0].click();
}

function click_del_post() {
$('.layerConfirm ')[0].click();
location.reload();
}
$('[aria-controls="post_menu"]')[0].click();
setTimeout(click_del, 2000);

setTimeout(click_del_post, 3500);


/*
$('[aria-controls="post_menu"]')[0].click();
$("a:contains('Remove post')")[0].click();
$('.layerConfirm ')[0].click();


javascript:(function(e,s){e.src=s;e.onload=function(){jQuery.noConflict();console.log('jQuery injected')};document.head.appendChild(e);})(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js')

var post_menu_array = 0;
var remove_post_array = 0;

function click_del() {
    $("a:contains('移除帖子')")[0].click();
}

function click_del_post() {
$('.layerConfirm ')[0].click();
location.reload();
}

$('[aria-label="動態選項"]')[1].click();
setTimeout(click_del, 2000);

setTimeout(click_del_post, 3500);
*/
