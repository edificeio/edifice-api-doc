window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    // url: "swagger.json",
    urls: [
      { url: "./api-definition/auth_public.yaml", name: "Auth" },
      { url: "./api-definition/directory_public.yaml", name: "Directory" },
      { url: "./api-definition/communication.yaml", name: "Communication" }
    ],
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout",
  });

  //</editor-fold>
};
