$('.col-md-9').on('click', function(){
  setTimeout(function(){
    $("pre").text(function () {
        return $(this).text().replace("developer.concur.com/api-explorer-proxy", "www.concursolutions.com");
  })
}, 500);
});
