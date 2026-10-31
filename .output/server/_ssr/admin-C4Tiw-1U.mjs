import { t as supabase } from "./client-DswBbBxu.mjs";
import { a as getLocalCustomers } from "./auto-approval-C_3_hpbe.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { d as LogOut, f as LoaderCircle, n as Users, o as Settings, p as LayoutDashboard, x as CalendarDays } from "../_libs/lucide-react.mjs";
import { t as Brand } from "./Brand-C4ZcmlYR.mjs";
import { b as useNavigate, h as Outlet, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-C4Tiw-1U.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.tsx?tsr-split=component";
var NAV = [
	{
		to: "/admin",
		label: "Painel",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/agenda",
		label: "Agenda do dia",
		icon: CalendarDays,
		exact: false
	},
	{
		to: "/admin/cadastros",
		label: "Cadastros",
		icon: Users,
		exact: false
	},
	{
		to: "/admin/configuracoes",
		label: "Configurações",
		icon: Settings,
		exact: false
	}
];
function AdminLayout() {
	const qc = useQueryClient();
	const nav = useNavigate();
	const role = useQuery({
		queryKey: ["is-admin"],
		queryFn: async () => {
			if (typeof window !== "undefined" && localStorage.getItem("app_mme_admin_logged") === "true") return true;
			try {
				const { data } = await supabase.rpc("claim_first_admin");
				return data ?? false;
			} catch {
				return true;
			}
		}
	});
	const pending = useQuery({
		queryKey: ["pending-count"],
		enabled: !!role.data,
		refetchInterval: 15e3,
		queryFn: async () => {
			const localUnconfirmed = getLocalCustomers().filter((c) => !c.confirmed).length;
			try {
				const { count } = await supabase.from("customers").select("id", {
					count: "exact",
					head: true
				}).eq("confirmed", false);
				return (count ?? 0) + localUnconfirmed;
			} catch {
				return localUnconfirmed;
			}
		}
	});
	async function signOut() {
		if (typeof window !== "undefined") localStorage.removeItem("app_mme_admin_logged");
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		nav({
			to: "/auth",
			replace: true
		});
	}
	if (role.isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid min-h-screen place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-6 animate-spin" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 84
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 79,
		columnNumber: 30
	}, this);
	if (!role.data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid min-h-screen place-items-center px-4 text-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-xl font-semibold",
				children: "Acesso não autorizado"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Sua conta ainda não tem permissão de administrador."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				className: "mt-5",
				variant: "outline",
				onClick: signOut,
				children: "Sair"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 84,
				columnNumber: 11
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 80,
		columnNumber: 26
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen md:flex",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
			className: "bg-sidebar text-sidebar-foreground md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between p-4 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, { light: true }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "icon",
						className: "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground md:hidden",
						onClick: signOut,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 172
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:pt-4",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: n.to,
						activeOptions: { exact: n.exact },
						className: "flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
						activeProps: { className: "!bg-sidebar-primary !text-sidebar-primary-foreground" },
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(n.icon, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 15
							}, this),
							" ",
							n.label,
							n.to === "/admin/cadastros" && !!pending.data && /* @__PURE__ */ (void 0)("span", {
								className: "ml-auto rounded-full bg-destructive px-2 py-0.5 text-xs font-bold text-destructive-foreground",
								"aria-label": `${pending.data} cadastros novos`,
								children: pending.data
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 65
							}, this)
						]
					}, n.to, true, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 25
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute bottom-4 hidden px-3 md:block",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: signOut,
						className: "flex items-center gap-2 px-3 text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 143
						}, this), " Sair"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 88,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
			className: "min-w-0 flex-1 p-4 sm:p-8",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 51
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 107,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 87,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminLayout as component };
