import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Di5S_swi.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { _ as ChevronLeft, g as ChevronRight, l as Phone } from "../_libs/lucide-react.mjs";
import { i as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { d as hhmm, l as fmtDate, n as FORMAT_LABEL, o as addDays, p as maskPhone, v as todayISO } from "./booking-fSYmPQ0r.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useDayBookings, t as QuickStatus } from "./admin-queries-C3g7wTwq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.agenda-1L6kUhs9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.agenda.tsx?tsr-split=component";
var CYCLE_OPTS = [
	"i1",
	"i2",
	"i3",
	"P1",
	"P2",
	"Aresta"
];
function CycleFix({ id, value }) {
	const qc = useQueryClient();
	const [cycle, setCycle] = (0, import_react.useState)(value ?? "");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function save() {
		if (!cycle) return;
		setBusy(true);
		const category = cycle.startsWith("i") ? "Iniciar" : cycle;
		const { error } = await supabase.from("bookings").update({
			cycle,
			category,
			visit_type: category
		}).eq("id", id);
		setBusy(false);
		if (error) {
			toast.error("Não foi possível corrigir o ciclo");
			return;
		}
		toast.success("Ciclo do agendamento confirmado");
		qc.invalidateQueries();
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-3 flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "text-xs font-medium text-muted-foreground",
				htmlFor: `fix-${id}`,
				children: "Ciclo agendado"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
				id: `fix-${id}`,
				className: "h-9 rounded-md border border-input bg-background px-2 text-sm",
				value: cycle,
				onChange: (e) => setCycle(e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: "",
					disabled: true,
					children: "Escolha"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this), CYCLE_OPTS.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
					value: c,
					children: c
				}, c, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 30
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				size: "sm",
				variant: "outline",
				disabled: busy || !cycle,
				onClick: save,
				children: "Confirmar ciclo"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 10
	}, this);
}
function Agenda() {
	const [date, setDate] = (0, import_react.useState)(todayISO());
	const { data, isLoading } = useDayBookings(date);
	const groups = /* @__PURE__ */ new Map();
	(data ?? []).forEach((b) => groups.set(b.slot_time, [...groups.get(b.slot_time) ?? [], b]));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-xl font-semibold sm:text-2xl",
				children: ["Agenda do dia — ", fmtDate(date)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "icon",
						onClick: () => setDate(addDays(date, -1)),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 92
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => setDate(todayISO()),
						children: "Hoje"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "icon",
						onClick: () => setDate(addDays(date, 1)),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 91
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 7
		}, this), isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-8 text-muted-foreground",
			children: "Carregando…"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 20
		}, this) : !groups.size ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-8 rounded-xl border bg-card p-6 text-muted-foreground",
			children: "Nenhum agendamento para este dia."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 95
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-6 space-y-6",
			children: [...groups.entries()].map(([t, list]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "sticky top-0 z-10 mb-2 bg-background py-1 font-display text-2xl font-semibold",
				children: [
					hhmm(t),
					" ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-sm font-normal text-muted-foreground",
						children: [list.filter((b) => b.status !== "cancelado").length, " pessoas"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 119
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 15
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-2",
				children: list.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `rounded-xl border bg-card p-4 ${b.status === "cancelado" ? "opacity-60" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-lg font-semibold",
								children: b.full_name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 23
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-mono text-sm text-muted-foreground",
								children: b.code
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 23
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 21
						}, this),
						(b.category || b.cycle) && /* @__PURE__ */ (void 0)("div", {
							className: "mt-1 flex flex-wrap gap-1.5 text-xs",
							children: [
								b.category && /* @__PURE__ */ (void 0)("span", {
									className: "rounded-full border bg-muted px-2 py-0.5 font-medium",
									children: b.category === "iniciar" ? "Iniciar" : b.category
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 40
								}, this),
								b.cycle && /* @__PURE__ */ (void 0)("span", {
									className: "rounded-full border bg-info/15 px-2 py-0.5 font-medium text-info",
									children: ["Ciclo ", b.cycle]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 37
								}, this),
								b.format && /* @__PURE__ */ (void 0)("span", {
									className: "rounded-full border px-2 py-0.5 text-muted-foreground",
									children: FORMAT_LABEL[b.format] ?? b.format
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 38
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 49
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: `https://wa.me/55${b.whatsapp}`,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 23
								}, this),
								" ",
								maskPhone(b.whatsapp)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-xs font-medium text-muted-foreground",
							children: "Gerenciar atividade (Concluiu, Faltou, Repetir e Passou são só do administrador; Passou avança o ciclo)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-1.5",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuickStatus, {
								id: b.id,
								value: b.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 45
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CycleFix, {
							id: b.id,
							value: b.cycle
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 21
						}, this)
					]
				}, b.id, true, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 15
			}, this)] }, t, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 53
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 207
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 10
	}, this);
}
//#endregion
export { Agenda as component };
