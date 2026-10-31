globalThis.__nitro_main__ = import.meta.url;
import { i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"18-+oL+Es1XZdIOibUzsrl9W9r73L0\"",
		"mtime": "2026-10-31T14:56:21.786Z",
		"size": 24,
		"path": "../public/_redirects"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-31T14:56:21.786Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/Brand-C6Sc0MSh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fe-8ZhnuPOz4GW4wvpDM9bz9zFtj38\"",
		"mtime": "2026-10-31T14:56:21.054Z",
		"size": 1022,
		"path": "../public/assets/Brand-C6Sc0MSh.js"
	},
	"/assets/admin-CSB3pnQB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c2-yJUmOO3X4vJPEq72Cx4C2qRJ9zA\"",
		"mtime": "2026-10-31T14:56:21.054Z",
		"size": 6338,
		"path": "../public/assets/admin-CSB3pnQB.js"
	},
	"/assets/admin.cadastros-BKMAt0zG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aae-9HqiGmyT8OXSjGW4S/THtxOIFhA\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 6830,
		"path": "../public/assets/admin.cadastros-BKMAt0zG.js"
	},
	"/assets/admin-queries-B9NFNd7S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"145dd-vyp/vlnq9Rqob93mtwL8zQNbTU0\"",
		"mtime": "2026-10-31T14:56:21.054Z",
		"size": 83421,
		"path": "../public/assets/admin-queries-B9NFNd7S.js"
	},
	"/assets/auto-approval-Ben-06L_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30c4-GpO8g2rmu6I1wCbgHoDfSJ6abw4\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 12484,
		"path": "../public/assets/auto-approval-Ben-06L_.js"
	},
	"/assets/admin.index-CYv9v_Eo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1944-gtKbRpmR1ELJ9Guy6zdXfKG7/To\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 6468,
		"path": "../public/assets/admin.index-CYv9v_Eo.js"
	},
	"/assets/auth-yN8r1n_R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1239-hUNahXQOGYI4s7CQV1pMvsUmnNM\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 4665,
		"path": "../public/assets/auth-yN8r1n_R.js"
	},
	"/assets/booking-C5IxCcrb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa3-uigttC0f9GbPXwWyziHoiPBS81U\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 2723,
		"path": "../public/assets/booking-C5IxCcrb.js"
	},
	"/assets/check-BX6Jns1A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-ixlJTnK5gCHpSPcUtqUoyTNR/PE\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 113,
		"path": "../public/assets/check-BX6Jns1A.js"
	},
	"/assets/button-Bw2-vqxK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d3-B7x/HXnVI6/MBL7q0Rf7wWH8gAU\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 2003,
		"path": "../public/assets/button-Bw2-vqxK.js"
	},
	"/assets/dist-CLNOzJCM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15f7-QcqVcRA7FMcZp6Lcf6yITrsuUqA\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 5623,
		"path": "../public/assets/dist-CLNOzJCM.js"
	},
	"/assets/dist-DRNgePZj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bf-fQOgUcy4ACbuM5PDS/ncArcCDEI\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 703,
		"path": "../public/assets/dist-DRNgePZj.js"
	},
	"/assets/admin.configuracoes-Cf8tXPEZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c5e-pDRoGeBCGSaYBqegKE/zkj+qgBU\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 23646,
		"path": "../public/assets/admin.configuracoes-Cf8tXPEZ.js"
	},
	"/assets/jsx-dev-runtime-BPvUG5k_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79c3-YMg7H5hE14rSs2OGaqBTVg4aFLc\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 31171,
		"path": "../public/assets/jsx-dev-runtime-BPvUG5k_.js"
	},
	"/assets/input-BZFx4lOl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da-kBsOwoV0zbCjYnDkwzVxbKa4bc4\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 730,
		"path": "../public/assets/input-BZFx4lOl.js"
	},
	"/assets/loader-circle-CeigbqTi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-jMIID0CnL4dNRbqo2iJddU9ARBE\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 133,
		"path": "../public/assets/loader-circle-CeigbqTi.js"
	},
	"/assets/phone-Bs2zDugy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"137-d+iP8B5UPF+Gcbb6B60G3+iEQ5c\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 311,
		"path": "../public/assets/phone-Bs2zDugy.js"
	},
	"/assets/route-LiW9H1RA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-VRuEmhwP+H0QHHPzTLCl31ts5So\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 279,
		"path": "../public/assets/route-LiW9H1RA.js"
	},
	"/assets/admin.agenda-ikDtVZcH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19dc-Ovaert7vL0KGns0idg35WJaE0mk\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 6620,
		"path": "../public/assets/admin.agenda-ikDtVZcH.js"
	},
	"/assets/label-FuRjTpSV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34a-Hw78Zu6/iOwGZwosY4/zWepAOeU\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 842,
		"path": "../public/assets/label-FuRjTpSV.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-31T14:56:21.786Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/routes-BAWSPsMk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14c3b-VFywF6sovEeMflpMi1pthW+6mlo\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 85051,
		"path": "../public/assets/routes-BAWSPsMk.js"
	},
	"/assets/index-D0n-EBeS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c0e6f-vXccdytryIcWTFt/XlS5zUMTBZM\"",
		"mtime": "2026-10-31T14:56:21.054Z",
		"size": 790127,
		"path": "../public/assets/index-D0n-EBeS.js"
	},
	"/assets/styles-DrJ4dndO.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1411e-8M1DeTuZjy2q2QZbhGIhy1IlI3k\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 82206,
		"path": "../public/assets/styles-DrJ4dndO.css"
	},
	"/assets/useMutation-BUIxMd9z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ce-wEHMXsY878WO30qSZtqjcg/dbM4\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 2254,
		"path": "../public/assets/useMutation-BUIxMd9z.js"
	},
	"/assets/trash-2-B2dgxWqh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-Uc7JYmcLKkGFMKixOSRSP0uhmYE\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 317,
		"path": "../public/assets/trash-2-B2dgxWqh.js"
	},
	"/assets/utils-BjWAYmQq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a67-P0ajxU81X/DPaU4ImE7GdlX5kIg\"",
		"mtime": "2026-10-31T14:56:21.055Z",
		"size": 31335,
		"path": "../public/assets/utils-BjWAYmQq.js"
	},
	"/assets/aistudio/app-mme_59f29400.zip": {
		"type": "application/zip",
		"etag": "\"41e4e-43LSltXAp/fxLDJ0vSsKF4NqCGU\"",
		"mtime": "2026-10-31T14:56:21.786Z",
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
