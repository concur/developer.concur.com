(function() {
  var swaggerUI = undefined;
  var oauthTokenPattern = /^\d_.*$/g;

  function addApiKeyAuthorization(){
    // var key = encodeURIComponent($('#input_apiKey')[0].value);
    var key = $('#input_apiKey')[0].value;
    if(key && key.trim() != "") {
      var authScheme = oauthTokenPattern.test(key) ? "OAuth" : "Bearer";
      var apiKeyAuth = new SwaggerClient.ApiKeyAuthorization("Authorization", authScheme + " " + key, "header");

      swaggerUI.api.clientAuthorizations.add("api_key", apiKeyAuth);

      log("added key " + key);
    }
  }

  function loadSwaggerUi(url, domId) {
    swaggerUI = new SwaggerUi({
      url: url,
      dom_id: domId,
      supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
      onComplete: function(swaggerApi, swaggerUi){
        $('pre code').each(function(i, e) {
          hljs.highlightBlock(e)
        });

        // if(typeof initOAuth == "function") {
        //   initOAuth({
        //     clientId: "your-client-id",
        //     clientSecret: "your-client-secret-if-required",
        //     realm: "your-realms",
        //     appName: "your-app-name",
        //     scopeSeparator: ","
        //   });
        // }

        addApiKeyAuthorization();
        $('#input_apiKey').change(addApiKeyAuthorization);
      },
      onFailure: function(data) {
        log("Unable to Load SwaggerUI");
      },
      docExpansion: "list",
      sorter : "alpha"
    });
    swaggerUI.load();
  }

  function log() {
    if ('console' in window) {
      console.log.apply(console, arguments);
    }
  }

  $(document).ready(function() {
    $('.load-swagger-ui').each(function() {
      loadSwaggerUi($(this).data('spec'), $(this).attr('id'));
    })
  });
})();
