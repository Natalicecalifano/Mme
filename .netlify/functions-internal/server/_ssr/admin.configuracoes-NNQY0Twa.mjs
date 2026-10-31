import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DswBbBxu.mjs";
import { r as getAutoApproveSetting, s as setAutoApproveSetting } from "./auto-approval-C_3_hpbe.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { b as CalendarPlus, c as Plus, f as LoaderCircle, r as Trash2, u as Pencil } from "../_libs/lucide-react.mjs";
import { i as useQueryClient, n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as WEEKDAYS, d as hhmm, l as fmtDate, r as PERIODS, v as todayISO } from "./booking-fSYmPQ0r.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Label } from "./label-8xz9aKVd.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.configuracoes-NNQY0Twa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$3 = "/app/applet/src/components/ui/switch.tsx";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Switch.displayName = Switch$1.displayName;
var _jsxFileName$2 = "/app/applet/src/components/ui/textarea.tsx";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Textarea.displayName = "Textarea";
var _jsxFileName$1 = "/app/applet/src/components/admin/ScheduleDays.tsx";
var emptyDay = {
	day: "",
	period: "integral",
	start_time: "08:00",
	end_time: "18:00",
	iniciar_capacity: 0,
	p1_capacity: 0,
	p2_capacity: 0,
	aresta_capacity: 0
};
function ScheduleDays() {
	const qc = useQueryClient();
	const [draft, setDraft] = (0, import_react.useState)(emptyDay);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const days = useQuery({
		queryKey: ["admin-schedule-days"],
		queryFn: async () => {
			const { data, error } = await supabase.from("schedule_days").select("*").gte("day", todayISO()).order("day");
			if (error) throw error;
			return data;
		}
	});
	async function save(e) {
		e.preventDefault();
		if (!draft.day || draft.day < todayISO() || draft.start_time >= draft.end_time) {
			toast.error("Informe uma data futura ou de hoje e um horário final após o inicial.");
			return;
		}
		setBusy(true);
		const { error } = await supabase.from("schedule_days").upsert(draft, { onConflict: "day" });
		setBusy(false);
		if (error) {
			toast.error("Não foi possível publicar as vagas. Tente novamente.");
			return;
		}
		toast.success("Data e vagas publicadas");
		setDraft(emptyDay);
		await Promise.all([qc.invalidateQueries({ queryKey: ["admin-schedule-days"] }), qc.invalidateQueries({ queryKey: ["schedule"] })]);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "space-y-4 border-b pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-lg font-semibold",
				children: "Agenda e vagas por data"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: save,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "schedule-day",
									children: "Data"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 49,
									columnNumber: 40
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "schedule-day",
									type: "date",
									min: todayISO(),
									required: true,
									value: draft.day,
									onChange: (e) => setDraft({
										...draft,
										day: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 49,
									columnNumber: 82
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 49,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "schedule-period",
									children: "Turno"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 50,
									columnNumber: 40
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
									id: "schedule-period",
									className: "h-9 w-full rounded-md border border-input bg-background px-3 text-sm",
									value: draft.period,
									onChange: (e) => setDraft({
										...draft,
										period: e.target.value
									}),
									children: Object.entries(PERIODS).map(([value, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
										value,
										children: label
									}, value, false, {
										fileName: _jsxFileName$1,
										lineNumber: 50,
										columnNumber: 331
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 50,
									columnNumber: 86
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 50,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "schedule-start",
									children: "Início"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 51,
									columnNumber: 40
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "schedule-start",
									type: "time",
									required: true,
									value: draft.start_time,
									onChange: (e) => setDraft({
										...draft,
										start_time: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 51,
									columnNumber: 86
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 51,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "schedule-end",
									children: "Fim"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 52,
									columnNumber: 40
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "schedule-end",
									type: "time",
									required: true,
									value: draft.end_time,
									onChange: (e) => setDraft({
										...draft,
										end_time: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 52,
									columnNumber: 81
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 52,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 48,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							["iniciar_capacity", "Vagas Iniciar"],
							["p1_capacity", "Vagas P1"],
							["p2_capacity", "Vagas P2"],
							["aresta_capacity", "Vagas Aresta"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: key,
								children: label
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 55,
								columnNumber: 219
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: key,
								type: "number",
								required: true,
								min: 0,
								step: 1,
								value: draft[key],
								onChange: (e) => setDraft({
									...draft,
									[key]: Math.max(0, Math.trunc(Number(e.target.value) || 0))
								})
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 55,
								columnNumber: 255
							}, this)]
						}, key, true, {
							fileName: _jsxFileName$1,
							lineNumber: 55,
							columnNumber: 180
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 54,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							type: "submit",
							disabled: busy,
							children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 57,
								columnNumber: 93
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarPlus, {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 57,
								columnNumber: 132
							}, this), " Publicar vagas"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 47
						}, this), draft.day && /* @__PURE__ */ (void 0)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setDraft(emptyDay),
							children: "Limpar"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 187
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 57,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 47,
				columnNumber: 7
			}, this),
			days.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Carregando datas…"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 25
			}, this) : days.isError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				role: "alert",
				className: "text-sm text-destructive",
				children: "Não foi possível carregar a agenda."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 109
			}, this) : !days.data?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Nenhuma data publicada."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 59,
				columnNumber: 225
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "divide-y",
				children: days.data.map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-semibold",
								children: fmtDate(day.day)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 61,
								columnNumber: 136
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									PERIODS[day.period],
									" · ",
									hhmm(day.start_time),
									"–",
									hhmm(day.end_time)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 61,
								columnNumber: 187
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm",
								children: [
									"Iniciar: ",
									day.iniciar_capacity,
									" · P1: ",
									day.p1_capacity,
									" · P2: ",
									day.p2_capacity,
									" · Aresta: ",
									day.aresta_capacity
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 61,
								columnNumber: 303
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 111
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "icon",
						"aria-label": `Editar ${fmtDate(day.day)}`,
						title: "Editar data e vagas",
						onClick: () => setDraft({
							day: day.day,
							period: day.period,
							start_time: hhmm(day.start_time),
							end_time: hhmm(day.end_time),
							iniciar_capacity: day.iniciar_capacity,
							p1_capacity: day.p1_capacity,
							p2_capacity: day.p2_capacity,
							aresta_capacity: day.aresta_capacity
						}),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 61,
							columnNumber: 820
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 61,
						columnNumber: 447
					}, this)]
				}, day.day, true, {
					fileName: _jsxFileName$1,
					lineNumber: 61,
					columnNumber: 35
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 60,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 45,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.configuracoes.tsx?tsr-split=component";
function SettingsPage() {
	const qc = useQueryClient();
	const settings = useQuery({
		queryKey: ["settings"],
		queryFn: async () => (await supabase.from("settings").select("*").eq("id", 1).single()).data
	});
	const slots = useQuery({
		queryKey: ["admin-slots"],
		queryFn: async () => (await supabase.from("time_slots").select("*").order("start_time")).data ?? []
	});
	const blocked = useQuery({
		queryKey: ["blocked"],
		queryFn: async () => (await supabase.from("blocked_dates").select("*").order("day")).data ?? []
	});
	const [s, setS] = (0, import_react.useState)(null);
	const [autoApprove, setAutoApprove] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") setAutoApprove(getAutoApproveSetting());
	}, []);
	(0, import_react.useEffect)(() => {
		if (settings.data) setS(settings.data);
	}, [settings.data]);
	const [newTime, setNewTime] = (0, import_react.useState)("");
	const [blockDay, setBlockDay] = (0, import_react.useState)("");
	const [blockReason, setBlockReason] = (0, import_react.useState)("");
	async function saveSettings() {
		if (!s) return;
		const { error } = await supabase.from("settings").update({
			daily_capacity: s.daily_capacity,
			slot_capacity: s.slot_capacity,
			group_size: s.group_size,
			open_weekdays: s.open_weekdays,
			days_ahead: s.days_ahead,
			payment_note: s.payment_note.slice(0, 500)
		}).eq("id", 1);
		if (error) {
			toast.error("Erro ao salvar");
			return;
		}
		toast.success("Configurações salvas");
		qc.invalidateQueries({ queryKey: ["settings"] });
	}
	const refreshSlots = () => qc.invalidateQueries({ queryKey: ["admin-slots"] });
	async function addSlot() {
		if (!newTime) return;
		const { error } = await supabase.from("time_slots").insert({ start_time: newTime });
		if (error) {
			toast.error("Horário já existe ou é inválido");
			return;
		}
		setNewTime("");
		refreshSlots();
	}
	async function blockDate() {
		if (!blockDay) return;
		const { error } = await supabase.from("blocked_dates").insert({
			day: blockDay,
			reason: blockReason.slice(0, 200) || null
		});
		if (error) {
			toast.error("Data já bloqueada");
			return;
		}
		setBlockDay("");
		setBlockReason("");
		qc.invalidateQueries({ queryKey: ["blocked"] });
	}
	if (!s) return null;
	const num = (k) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
		type: "number",
		min: k === "group_size" || k === "days_ahead" ? 1 : 0,
		className: "h-11",
		value: s[k],
		onChange: (e) => setS({
			...s,
			[k]: Math.max(0, parseInt(e.target.value) || 0)
		})
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 98,
		columnNumber: 88
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-3xl space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-2xl font-semibold sm:text-3xl",
				children: "Configurações"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScheduleDays, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				title: "Capacidade e dias",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Capacidade por dia" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 40
								}, this), num("daily_capacity")]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Capacidade padrão por horário" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 111,
										columnNumber: 13
									}, this),
									num("slot_capacity"),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex gap-1.5 pt-1",
										children: [
											1,
											2,
											3
										].map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											onClick: () => setS({
												...s,
												slot_capacity: s.group_size * m
											}),
											className: "rounded-md border px-2 py-1 text-xs hover:bg-muted",
											children: s.group_size * m
										}, m, false, {
											fileName: _jsxFileName,
											lineNumber: 113,
											columnNumber: 35
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 112,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Pessoas por grupo" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 40
								}, this), num("group_size")]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Abrir agenda para os próximos (dias)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 40
								}, this), num("days_ahead")]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Dias de atendimento" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap gap-2",
							children: WEEKDAYS.map((w, i) => {
								const on = s.open_weekdays.includes(i);
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setS({
										...s,
										open_weekdays: on ? s.open_weekdays.filter((x) => x !== i) : [...s.open_weekdays, i].sort()
									}),
									className: `h-11 w-14 rounded-lg border-2 text-sm font-semibold ${on ? "border-primary bg-primary text-primary-foreground" : "bg-background text-muted-foreground"}`,
									children: w
								}, w, false, {
									fileName: _jsxFileName,
									lineNumber: 127,
									columnNumber: 20
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { children: "Orientação sobre pagamento" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
							maxLength: 500,
							value: s.payment_note,
							onChange: (e) => setS({
								...s,
								payment_note: e.target.value
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "lg",
						className: "mt-5",
						onClick: saveSettings,
						children: "Salvar configurações"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				title: "Aprovação de novos cadastros",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-semibold text-foreground",
							children: "Liberar agendamento sem autorização prévia do ADM"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground",
							children: autoApprove ? "Ativado: O usuário faz o cadastro e já escolhe as datas para agendar imediatamente, sem precisar que o administrador autorize." : "Desativado: O usuário faz o cadastro e fica com status 'em análise', dependendo de aprovação manual no menu Cadastros antes de agendar."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 146,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: autoApprove ? "Aprovação Automática" : "Aprovação Manual"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
							checked: autoApprove,
							onCheckedChange: (val) => {
								setAutoApprove(val);
								setAutoApproveSetting(val);
								toast.success(val ? "Aprovação automática ativada: Usuários podem agendar sem autorização do ADM." : "Aprovação manual ativada: Cadastros exigem autorização prévia do ADM.");
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				title: "Horários",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "divide-y rounded-lg border",
						children: slots.data?.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 px-3 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "w-16 font-display text-lg font-semibold",
									children: hhmm(t.start_time)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: ["Vagas", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
										type: "number",
										min: 0,
										placeholder: String(s.slot_capacity),
										defaultValue: t.capacity ?? "",
										className: "h-9 w-20",
										onBlur: async (e) => {
											const v = e.target.value === "" ? null : Math.max(0, parseInt(e.target.value));
											await supabase.from("time_slots").update({ capacity: v }).eq("id", t.id);
											refreshSlots();
										}
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "ml-auto flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
										checked: t.active,
										onCheckedChange: async (v) => {
											await supabase.from("time_slots").update({ active: v }).eq("id", t.id);
											refreshSlots();
										}
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 180,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: "ghost",
										size: "icon",
										onClick: async () => {
											if (confirm("Excluir este horário?")) {
												await supabase.from("time_slots").delete().eq("id", t.id);
												refreshSlots();
											}
										},
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 191,
											columnNumber: 16
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 15
								}, this)
							]
						}, t.id, true, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 33
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 166,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-xs text-muted-foreground",
						children: "Deixe \"vagas\" vazio para usar a capacidade padrão. Desligue para cancelar o horário."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 195,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "time",
							className: "h-11 w-36",
							value: newTime,
							onChange: (e) => setNewTime(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							className: "h-11",
							onClick: addSlot,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 198,
								columnNumber: 72
							}, this), " Criar horário"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				title: "Datas bloqueadas",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							type: "date",
							className: "h-11 sm:w-44",
							value: blockDay,
							onChange: (e) => setBlockDay(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 204,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							className: "h-11",
							placeholder: "Motivo (opcional)",
							maxLength: 200,
							value: blockReason,
							onChange: (e) => setBlockReason(e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							className: "h-11",
							onClick: blockDate,
							children: "Bloquear"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 203,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 space-y-2",
					children: [blocked.data?.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between rounded-lg border px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: fmtDate(b.day) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 210,
								columnNumber: 21
							}, this),
							" ",
							b.reason && /* @__PURE__ */ (void 0)("span", {
								className: "text-muted-foreground",
								children: ["— ", b.reason]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 210,
								columnNumber: 58
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 210,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: async () => {
								await supabase.from("blocked_dates").delete().eq("day", b.day);
								qc.invalidateQueries({ queryKey: ["blocked"] });
							},
							children: "Reabrir"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 211,
							columnNumber: 15
						}, this)]
					}, b.day, true, {
						fileName: _jsxFileName,
						lineNumber: 209,
						columnNumber: 35
					}, this)), !blocked.data?.length && /* @__PURE__ */ (void 0)("p", {
						className: "text-sm text-muted-foreground",
						children: "Nenhuma data bloqueada."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 218,
						columnNumber: 37
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 208,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 202,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 102,
		columnNumber: 10
	}, this);
}
function Card({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "rounded-2xl border bg-card p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "mb-4 text-lg font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 231,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 230,
		columnNumber: 10
	}, this);
}
//#endregion
export { SettingsPage as component };
