globalThis.__nitro_main__ = import.meta.url;
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-30T23:18:04.793Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-30T23:18:04.793Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/Brand-CasF5FeA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fe-ZkrCqGpx2TY3eifF8phk3yr5E+E\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 1022,
		"path": "../public/assets/Brand-CasF5FeA.js"
	},
	"/assets/admin-CtyNaSIn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179e-2VdSgV0c9P7qmXxnIdoqfmPM4Yw\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 6046,
		"path": "../public/assets/admin-CtyNaSIn.js"
	},
	"/assets/admin-queries-B_4xGcC_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f78-yi8xqvHSjxSvyHSELzmYxCJ26mA\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 85880,
		"path": "../public/assets/admin-queries-B_4xGcC_.js"
	},
	"/assets/admin.configuracoes-D4mzDT_2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55fb-GTd5pXHxmJmEpWKRNpG3ECS5Tm4\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 22011,
		"path": "../public/assets/admin.configuracoes-D4mzDT_2.js"
	},
	"/assets/admin.index-Dnw79INf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"193f-oZOj1x+t5I/6pTnUPs0Xgx8Sglo\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 6463,
		"path": "../public/assets/admin.index-Dnw79INf.js"
	},
	"/assets/auth-9ePnrFKD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d24-k9v5emhopW7BAjS3YLnPVaRZuDU\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 3364,
		"path": "../public/assets/auth-9ePnrFKD.js"
	},
	"/assets/booking-C5IxCcrb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa3-uigttC0f9GbPXwWyziHoiPBS81U\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 2723,
		"path": "../public/assets/booking-C5IxCcrb.js"
	},
	"/assets/button-Ig4Lm35g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d3-y4HsYzjX2s3UQtbfNxC1mv/X/ms\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 2003,
		"path": "../public/assets/button-Ig4Lm35g.js"
	},
	"/assets/check-CDE5qQJ2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-CzU9NX/W4iF3rkTEzSdDTcfQ/2k\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 113,
		"path": "../public/assets/check-CDE5qQJ2.js"
	},
	"/assets/dist-9KFqAwZ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1665-k4ccPO16m89/4gVVK3JV3pEOzeI\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 5733,
		"path": "../public/assets/dist-9KFqAwZ3.js"
	},
	"/assets/dist-a0Y2V2Uw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bf-VHc9Zp0EZweGyMscEd4kJZ+ZgA4\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 703,
		"path": "../public/assets/dist-a0Y2V2Uw.js"
	},
	"/assets/admin.agenda-Bh2qJH74.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19d4-1V0+bLG+L5o77u0xnrmyGuDLpKc\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 6612,
		"path": "../public/assets/admin.agenda-Bh2qJH74.js"
	},
	"/assets/input-BUCFfeK9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da-GUymywkIavHmoh/01ARDX/f0Ac0\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 730,
		"path": "../public/assets/input-BUCFfeK9.js"
	},
	"/assets/jsx-dev-runtime-D9KxULS5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e2c-iMHkILeCUf+vgzbYHd8Nfe5+wMw\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 32300,
		"path": "../public/assets/jsx-dev-runtime-D9KxULS5.js"
	},
	"/assets/label-yTxiktTu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-mOfISnbcDWEu0e1l55DjdlfqlOM\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 842,
		"path": "../public/assets/label-yTxiktTu.js"
	},
	"/assets/loader-circle-B-U0ccgH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-FJKf5sTzTzUvtsxawE/JZCvgGdg\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 133,
		"path": "../public/assets/loader-circle-B-U0ccgH.js"
	},
	"/assets/phone-v4Usnvka.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"137-zvJAntPToeRhT9ou15HExvRgWew\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 311,
		"path": "../public/assets/phone-v4Usnvka.js"
	},
	"/assets/route-Gag50D_J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-rhL/vtfmPc3p6yjHlSDnLK4vGxE\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 279,
		"path": "../public/assets/route-Gag50D_J.js"
	},
	"/assets/routes-C0gPbGUp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145c5-wS5IacCXm/QMA5LzbdV1SdQCh0Q\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 83397,
		"path": "../public/assets/routes-C0gPbGUp.js"
	},
	"/assets/admin.cadastros-BU2UGaRT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19ce-FFBNtqXPIQHtVOqQJ+CZP9TJE7c\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 6606,
		"path": "../public/assets/admin.cadastros-BU2UGaRT.js"
	},
	"/assets/styles-B2uFRwUr.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13b1b-9c+Kcr2Olaj80pzB2eA/jSe6LIA\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 80667,
		"path": "../public/assets/styles-B2uFRwUr.css"
	},
	"/assets/trash-2-Ck92zNFV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-vMiEW3koottARz1aeknsCxjYH9w\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 317,
		"path": "../public/assets/trash-2-Ck92zNFV.js"
	},
	"/assets/index-Cx5tHUL3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca9fb-DqLLmKOX1f3IGdwUbOdyWaVWE1E\"",
		"mtime": "2026-10-30T23:18:04.116Z",
		"size": 829947,
		"path": "../public/assets/index-Cx5tHUL3.js"
	},
	"/assets/useMutation-DectyWai.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"916-/ktCyGcce1UBC2jM1p7M8OCl0pQ\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 2326,
		"path": "../public/assets/useMutation-DectyWai.js"
	},
	"/assets/useQuery-CEpa0bLD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"219a-oLNPuSP8iyAfCDxRn63VZbEG134\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 8602,
		"path": "../public/assets/useQuery-CEpa0bLD.js"
	},
	"/assets/utils-B5aw-UiG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ce4-Su9feU96Ne0WqULQtnMG5DHjzsw\"",
		"mtime": "2026-10-30T23:18:04.117Z",
		"size": 31972,
		"path": "../public/assets/utils-B5aw-UiG.js"
	},
	"/assets/aistudio/app-mme_59f29400.zip": {
		"type": "application/zip",
		"etag": "\"41e4e-43LSltXAp/fxLDJ0vSsKF4NqCGU\"",
		"mtime": "2026-10-30T23:18:04.793Z",
		"size": 269902,
		"path": "../public/assets/aistudio/app-mme_59f29400.zip"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6qWkqV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6qWkqV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
