/* Write here your custom javascript codes */

$(document).ready(function(){
  console.log('Ready');
  $.get('https://www.concur.com/blog/category/en-us/feed', function(data){
    var blogs = $(data).find('item');
    console.log(blogs);
  })
});
