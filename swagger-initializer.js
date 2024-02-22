window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    // url: "swagger.json",
    urls : [
      {url: "./api-definition/auth.yaml", name: "Auth"},
      {url: "./api-definition/directory.yaml", name: "Directory"},
      {url: "./api-definition/communication.yaml", name: "Communication"},
      {url: "./api-definition/timeline.yaml", name: "Timeline"},
      {url: "./api-definition/explorer.yaml", name: "Explorer"},
      {url: "./api-definition/conversation.yaml", name: "Conversation"},
      {url: "./api-definition/actualites.yaml", name: "Actualites"},
      {url: "./api-definition/infra.yaml", name: "Infra"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
