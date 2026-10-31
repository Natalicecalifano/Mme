import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Di5S_swi.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { s as Search } from "../_libs/lucide-react.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { d as hhmm, l as fmtDate, p as maskPhone, u as fmtLong, v as todayISO } from "./booking-fSYmPQ0r.mjs";
import { a as SelectTrigger, c as useDayBookings, i as SelectItem, n as Select, o as SelectValue, r as SelectContent, s as StatusSelect } from "./admin-queries-C3g7wTwq.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-Bl8dYahS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.index.tsx?tsr-split=component";
function Dashboard() {
	const [date, setDate] = (0, import_react.useState)(todayISO());
	const [slot, setSlot] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const bookings = useDayBookings(date);
	const settings = useQuery({
		queryKey: ["settings"],
		queryFn: async () => (await supabase.from("settings").select("*").eq("id", 1).single()).data
	});
	const list = bookings.data ?? [];
	const active = list.filter((b) => b.status !== "cancelado");
	const total = active.reduce((s, b) => s + b.party_size, 0);
	const arrived = active.filter((b) => b.status === "chegou" || b.status === "atendido").length;
	const waiting = active.filter((b) => b.status === "agendado").length;
	const cap = settings.data?.daily_capacity ?? 0;
	const slotsInDay = Array.from(new Set(list.map((b) => b.slot_time)));
	const filtered = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		const digits = term.replace(/\D/g, "");
		return list.filter((b) => (slot === "all" || b.slot_time === slot) && (!term || b.full_name.toLowerCase().includes(term) || digits && b.whatsapp.includes(digits) || b.code.toLowerCase() === term));
	}, [
		list,
		slot,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-2xl font-semibold sm:text-3xl",
					children: "Painel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "capitalize text-muted-foreground",
					children: fmtLong(date)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					type: "date",
					value: date,
					onChange: (e) => e.target.value && setDate(e.target.value),
					className: "h-11 w-auto"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Agendamentos",
						value: total
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Vagas disponíveis",
						value: Math.max(cap - total, 0),
						sub: `de ${cap}`,
						accent: true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Já chegaram",
						value: arrived
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Aguardados",
						value: waiting
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						className: "h-11 pl-9",
						placeholder: "Buscar por nome, WhatsApp ou código",
						value: q,
						onChange: (e) => setQ(e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
					value: slot,
					onValueChange: setSlot,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
						className: "h-11 sm:w-44",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 51
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: "all",
						children: "Todos os horários"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this), slotsInDay.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
						value: s,
						children: hhmm(s)
					}, s, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 34
					}, this))] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 overflow-hidden rounded-xl border bg-card",
				children: bookings.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "p-6 text-muted-foreground",
					children: "Carregando…"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 31
				}, this) : !filtered.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "p-6 text-muted-foreground",
					children: [
						"Nenhum agendamento em ",
						fmtDate(date),
						"."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 109
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "divide-y",
					children: filtered.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "w-14 font-display text-lg font-semibold",
								children: hhmm(b.slot_time)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-40 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-medium",
									children: b.full_name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
											className: "hover:underline",
											href: `https://wa.me/55${b.whatsapp}`,
											target: "_blank",
											rel: "noreferrer",
											children: maskPhone(b.whatsapp)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 68,
											columnNumber: 21
										}, this),
										b.email && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [" · ", b.email] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 33
										}, this),
										" · ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-mono",
											children: b.code
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 54
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusSelect, {
								id: b.id,
								value: b.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 17
							}, this)
						]
					}, b.id, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 32
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 195
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
function Stat({ label, value, sub, accent }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `rounded-xl border p-4 ${accent ? "border-accent bg-accent/15" : "bg-card"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 90,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-1 font-display text-3xl font-semibold",
			children: [
				value,
				" ",
				sub && /* @__PURE__ */ (void 0)("span", {
					className: "text-base font-normal text-muted-foreground",
					children: sub
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 81
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 89,
		columnNumber: 10
	}, this);
}
//#endregion
export { Dashboard as component };
