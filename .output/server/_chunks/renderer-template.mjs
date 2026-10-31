import { i as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!doctype html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>App MME</title>\n    <meta name=\"description\" content=\"Sistema de agendamento e cadastro de ciclos Iniciar, P1, P2 e Aresta com painel administrativo e controle de agenda.\" />\n    <meta property=\"og:title\" content=\"App MME\" />\n    <meta property=\"og:description\" content=\"Sistema de agendamento e cadastro de ciclos Iniciar, P1, P2 e Aresta com painel administrativo e controle de agenda.\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <link rel=\"icon\" href=\"/favicon.ico\" type=\"image/x-icon\" />\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link href=\"https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap\" rel=\"stylesheet\" />\n  </head>\n  <body>\n    <div id=\"root\"></div>\n  </body>\n</html>\n\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
