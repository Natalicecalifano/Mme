import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Di5S_swi.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { l as Phone, r as Trash2, y as Check } from "../_libs/lucide-react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { l as fmtDate, p as maskPhone, t as CYCLES } from "./booking-fSYmPQ0r.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.cadastros-CcAjGodd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.cadastros.tsx?tsr-split=component";
function Cadastros() {
	const qc = useQueryClient();
	const [q, setQ] = (0, import_react.useState)("");
	const [onlyPending, setOnlyPending] = (0, import_react.useState)(true);
	const list = useQuery({
		queryKey: ["customers"],
		queryFn: async () => {
			const { data, error } = await supabase.from("customers").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const save = useMutation({
		mutationFn: async (v) => {
			const { error } = await supabase.from("customers").update({
				cycle: v.cycle,
				confirmed: v.confirmed
			}).eq("id", v.id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Cadastro atualizado");
			qc.invalidateQueries({ queryKey: ["customers"] });
			qc.invalidateQueries({ queryKey: ["pending-count"] });
		},
		onError: () => toast.error("Não foi possível salvar o cadastro")
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("customers").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			toast.success("Cadastro apagado");
			qc.invalidateQueries({ queryKey: ["customers"] });
			qc.invalidateQueries({ queryKey: ["pending-count"] });
		},
		onError: () => toast.error("Não foi possível apagar o cadastro")
	});
	const term = q.trim().toLowerCase();
	const rows = (list.data ?? []).filter((c) => (!onlyPending || !c.confirmed) && (!term || c.full_name.toLowerCase().includes(term) || c.whatsapp.includes(term.replace(/\D/g, "") || "§")));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-xl font-semibold sm:text-2xl",
				children: "Cadastros"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Analise cada cadastro e escolha o ciclo que a pessoa está apta a agendar. Só depois de aprovado ela consegue agendar."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						className: "max-w-xs",
						placeholder: "Buscar por nome ou celular",
						value: q,
						onChange: (e) => setQ(e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: onlyPending ? "default" : "outline",
						onClick: () => setOnlyPending(true),
						children: "A confirmar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: !onlyPending ? "default" : "outline",
						onClick: () => setOnlyPending(false),
						children: "Todos"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 7
			}, this),
			list.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-6 text-muted-foreground",
				children: "Carregando…"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 25
			}, this) : list.isError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				role: "alert",
				className: "mt-6 text-destructive",
				children: "Não foi possível carregar os cadastros."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 100
			}, this) : !rows.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-6 rounded-xl border bg-card p-6 text-muted-foreground",
				children: onlyPending ? "Nenhum cadastro aguardando confirmação." : "Nenhum cadastro encontrado."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 211
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 space-y-2",
				children: rows.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
					c,
					busy: save.isPending || del.isPending,
					onSave: (cycle, confirmed) => save.mutate({
						id: c.id,
						cycle,
						confirmed
					}),
					onDelete: () => del.mutate(c.id)
				}, c.id, false, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 26
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 379
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 71,
		columnNumber: 10
	}, this);
}
function Row({ c, busy, onSave, onDelete }) {
	const [cycle, setCycle] = (0, import_react.useState)(c.cycle ?? "");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-xl border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-lg font-semibold",
					children: c.full_name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: `rounded-full border px-2 py-0.5 text-xs font-medium ${c.confirmed ? "bg-success/15 text-success border-success/30" : "bg-warning/20 border-warning/50"}`,
					children: c.confirmed ? "Confirmado" : "A confirmar"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: `https://wa.me/55${c.whatsapp}`,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Phone, { className: "size-3.5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 186
					}, this),
					" ",
					maskPhone(c.whatsapp)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: ["Dependentes: ", c.dependents?.length ? c.dependents.join(", ") : "nenhum"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: ["Última atividade: ", c.last_activity_date ? fmtDate(c.last_activity_date) : "—"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "text-sm font-medium",
						htmlFor: `cy-${c.id}`,
						children: "Ciclo atual"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
						id: `cy-${c.id}`,
						className: "h-9 rounded-md border border-input bg-background px-3 text-sm",
						value: cycle,
						onChange: (e) => setCycle(e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
							value: "",
							children: "Iniciar (i1, i2, i3)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 11
						}, this), CYCLES.map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
							value: x,
							children: x
						}, x, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 28
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						disabled: busy,
						onClick: () => onSave(cycle || null, true),
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 87
							}, this),
							" ",
							c.confirmed ? "Salvar" : "Aprovar cadastro"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: "outline",
						className: "text-destructive",
						disabled: busy,
						onClick: () => confirm(`Apagar o cadastro de ${c.full_name}? Os agendamentos já feitos continuam na agenda.`) && onDelete(),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 215
						}, this), " Apagar"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 108,
		columnNumber: 10
	}, this);
}
//#endregion
export { Cadastros as component };
