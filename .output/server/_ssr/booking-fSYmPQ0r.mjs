//#region node_modules/.nitro/vite/services/ssr/assets/booking-fSYmPQ0r.js
var TZ = "America/Sao_Paulo";
function todayISO() {
	return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(/* @__PURE__ */ new Date());
}
function addDays(iso, n) {
	const d = /* @__PURE__ */ new Date(iso + "T12:00:00Z");
	d.setUTCDate(d.getUTCDate() + n);
	return d.toISOString().slice(0, 10);
}
function d(iso) {
	return /* @__PURE__ */ new Date(iso + "T12:00:00Z");
}
var fmtDate = (iso) => d(iso).toLocaleDateString("pt-BR", {
	timeZone: "UTC",
	day: "2-digit",
	month: "2-digit",
	year: "numeric"
});
var fmtLong = (iso) => d(iso).toLocaleDateString("pt-BR", {
	timeZone: "UTC",
	weekday: "long",
	day: "numeric",
	month: "long"
});
var weekdayShort = (iso) => d(iso).toLocaleDateString("pt-BR", {
	timeZone: "UTC",
	weekday: "short"
}).replace(".", "");
var monthShort = (iso) => d(iso).toLocaleDateString("pt-BR", {
	timeZone: "UTC",
	month: "short"
}).replace(".", "");
var dayNum = (iso) => String(d(iso).getUTCDate());
var hhmm = (t) => t.slice(0, 5);
function maskPhone(v) {
	const n = v.replace(/\D/g, "").slice(0, 11);
	if (n.length <= 2) return n;
	if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
	if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`;
	return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
}
var STATUSES = [
	{
		value: "agendado",
		label: "Agendado",
		cls: "bg-info/15 text-info border-info/30"
	},
	{
		value: "chegou",
		label: "Chegou",
		cls: "bg-warning/20 text-foreground border-warning/50"
	},
	{
		value: "concluiu",
		label: "Concluiu",
		cls: "bg-success/15 text-success border-success/30",
		adminOnly: true
	},
	{
		value: "faltou",
		label: "Faltou",
		cls: "bg-destructive/10 text-destructive border-destructive/30",
		adminOnly: true
	},
	{
		value: "cancelado",
		label: "Cancelou",
		cls: "bg-muted text-muted-foreground border-border"
	},
	{
		value: "reagendou",
		label: "Reagendou",
		cls: "bg-muted text-foreground border-border"
	},
	{
		value: "repetir",
		label: "Repetir",
		cls: "bg-warning/20 text-foreground border-warning/50",
		adminOnly: true
	},
	{
		value: "passou",
		label: "Passou",
		cls: "bg-success/25 text-success border-success/40",
		adminOnly: true
	}
];
var LEGACY = [{
	value: "atendido",
	label: "Atendido",
	cls: "bg-success/15 text-success border-success/30"
}, {
	value: "nao_compareceu",
	label: "Não compareceu",
	cls: "bg-destructive/10 text-destructive border-destructive/30"
}];
var statusInfo = (s) => [...STATUSES, ...LEGACY].find((x) => x.value === s) ?? STATUSES[0];
var CYCLES = [
	"i1",
	"i2",
	"i3",
	"P1",
	"P2",
	"Aresta"
];
var PERIODS = {
	integral: "Período integral",
	tarde: "Tarde"
};
var requiredDates = (f) => f === "dia_inteiro" ? 1 : 2;
function planCycles(f, dates) {
	const ds = [...dates].sort();
	if (f === "dia_inteiro") return ds.length === 1 ? [
		"i1",
		"i2",
		"i3"
	].map((c) => ({
		date: ds[0],
		cycle: c
	})) : [];
	return ds.length === 2 ? [
		{
			date: ds[0],
			cycle: "i1"
		},
		{
			date: ds[0],
			cycle: "i2"
		},
		{
			date: ds[1],
			cycle: "i3"
		}
	] : [];
}
function dayFitsFormat(period, f) {
	if (f === "tarde_integral") return period === "tarde" || period === "integral";
	return f === "dia_inteiro" ? period === "integral" : period !== "manha";
}
var FORMAT_LABEL = {
	dia_inteiro: "Dia inteiro",
	duas_tardes: "Duas tardes",
	tarde_integral: "1 tarde + 1 dia integral"
};
/** 1 tarde + 1 integral: uma data à tarde e outra de período integral. */
function manhaTardeOk(a, b) {
	return a === "tarde" && b === "integral" || a === "integral" && b === "tarde";
}
var WEEKDAYS = [
	"Dom",
	"Seg",
	"Ter",
	"Qua",
	"Qui",
	"Sex",
	"Sáb"
];
//#endregion
export { statusInfo as _, WEEKDAYS as a, dayNum as c, hhmm as d, manhaTardeOk as f, requiredDates as g, planCycles as h, STATUSES as i, fmtDate as l, monthShort as m, FORMAT_LABEL as n, addDays as o, maskPhone as p, PERIODS as r, dayFitsFormat as s, CYCLES as t, fmtLong as u, todayISO as v, weekdayShort as y };
