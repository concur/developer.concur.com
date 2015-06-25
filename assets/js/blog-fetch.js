/* Write here your custom javascript codes */

$(document).ready(function(){
  $.get('https://www.concur.com/blog/category/en-us/feed', function(data){

    var blogs = $(data).find('item');
    var recentBlogs = [];

    for(var i = 0; i < 3; i++){
      recentBlogs.push(blogs[i]);
    }

    recentBlogs.forEach(function(elem){
      $('#blog-list').append('<li><a href="' + elem.childNodes[3].innerHTML + '" target="_blank">' + elem.childNodes[1].innerHTML + '</a></li>');
    });

  });
});
