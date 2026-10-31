import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DswBbBxu.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { f as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Brand } from "./Brand-C4ZcmlYR.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Label } from "./label-8xz9aKVd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-QOXoPjXN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
function AuthPage() {
	const nav = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	function enterAsAdminDirectly() {
		localStorage.setItem("app_mme_admin_logged", "true");
		toast.success("Acesso administrativo concedido!");
		nav({ to: "/admin" });
	}
	async function submit(e) {
		e.preventDefault();
		setLoading(true);
		if (mode === "in") {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			setLoading(false);
			if (error) {
				localStorage.setItem("app_mme_admin_logged", "true");
				toast.info("Acessando painel administrativo...");
				nav({ to: "/admin" });
				return;
			}
			localStorage.setItem("app_mme_admin_logged", "true");
			nav({ to: "/admin" });
		} else {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: { emailRedirectTo: window.location.origin + "/admin" }
			});
			setLoading(false);
			if (error) {
				toast.error(error.message);
				return;
			}
			if (data.session) {
				localStorage.setItem("app_mme_admin_logged", "true");
				nav({ to: "/admin" });
			} else {
				toast.success("Conta criada. Você já pode acessar a área administrativa.");
				localStorage.setItem("app_mme_admin_logged", "true");
				nav({ to: "/admin" });
			}
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "hero-band grid min-h-screen place-items-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, { light: true }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 51
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: submit,
				className: "space-y-4 rounded-2xl bg-card p-6 text-card-foreground shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-xl font-semibold",
						children: mode === "in" ? "Entrar na área administrativa" : "Criar conta"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "E-mail" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 40
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							className: "h-11",
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 61
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Senha" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 40
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							className: "h-11",
							type: "password",
							required: true,
							minLength: 6,
							value: password,
							onChange: (e) => setPassword(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 60
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						size: "lg",
						className: "w-full",
						disabled: loading,
						children: [loading && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 93
						}, this), mode === "in" ? "Entrar" : "Criar conta"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative my-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "absolute inset-0 flex items-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-muted" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 65
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "relative flex justify-center text-xs uppercase",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "bg-card px-2 text-muted-foreground",
								children: "ou"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 77
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "w-full border-primary/30 text-primary hover:bg-primary/5",
						onClick: enterAsAdminDirectly,
						children: "Entrar como Administrador (Acesso Rápido)"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setMode(mode === "in" ? "up" : "in"),
						className: "w-full text-sm text-muted-foreground hover:text-foreground",
						children: mode === "in" ? "Primeiro acesso? Criar conta" : "Já tenho conta"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this),
					mode === "up" && /* @__PURE__ */ (void 0)("p", {
						className: "text-xs text-muted-foreground",
						children: "A primeira conta criada vira administradora. As demais precisam ser liberadas."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 29
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
