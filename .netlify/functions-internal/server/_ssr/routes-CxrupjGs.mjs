import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DswBbBxu.mjs";
import { l as updateLocalBookingStatus, o as saveLocalCustomer, r as getAutoApproveSetting, t as createLocalBookings } from "./auto-approval-C_3_hpbe.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { C as ArrowLeft, a as Sun, f as LoaderCircle, i as Sunset, m as CircleCheck, t as Wallet, y as Check } from "../_libs/lucide-react.mjs";
import { t as Brand } from "./Brand-C4ZcmlYR.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as dayNum, d as hhmm, f as manhaTardeOk, g as requiredDates, h as planCycles, l as fmtDate, m as monthShort, n as FORMAT_LABEL, o as addDays, p as maskPhone, r as PERIODS, s as dayFitsFormat, u as fmtLong, v as todayISO, y as weekdayShort } from "./booking-fSYmPQ0r.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Label } from "./label-8xz9aKVd.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CxrupjGs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var formSchema = objectType({
	name: stringType().trim().min(3, "Informe seu nome completo").max(120),
	whatsapp: stringType().refine((v) => {
		const n = v.replace(/\D/g, "");
		return n.length >= 10 && n.length <= 11;
	}, "Celular inválido"),
	email: stringType().trim().max(255).email("E-mail inválido").or(literalType(""))
});
function BookingPage() {
	const [step, setStep] = (0, import_react.useState)("form");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		whatsapp: "",
		email: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [profile, setProfile] = (0, import_react.useState)("iniciante");
	const [category, setCategory] = (0, import_react.useState)("Iniciar");
	const [format, setFormat] = (0, import_react.useState)(null);
	const [dates, setDates] = (0, import_react.useState)([]);
	const [party, setParty] = (0, import_react.useState)(1);
	const [deps, setDeps] = (0, import_react.useState)([]);
	const [allowed, setAllowed] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)([]);
	const settings = useQuery({
		queryKey: ["settings"],
		queryFn: async () => (await supabase.from("settings").select("*").eq("id", 1).single()).data
	});
	const schedule = useQuery({
		queryKey: ["schedule"],
		queryFn: async () => {
			const from = todayISO();
			const { data, error } = await supabase.rpc("get_schedule", {
				_from: from,
				_to: addDays(from, 120)
			});
			if (error) throw error;
			return data;
		}
	});
	const isIniciar = category === "Iniciar";
	const need = isIniciar && format ? requiredDates(format) : 1;
	const plan = isIniciar && format ? planCycles(format, dates) : dates.map((d) => ({
		date: d,
		cycle: category
	}));
	const cyclesDone = isIniciar && format ? format === "dia_inteiro" ? dates.length * 3 : dates.length === 0 ? 0 : dates.length === 1 ? 2 : 3 : 0;
	const ready = dates.length === need;
	const available = (schedule.data ?? []).filter((d) => {
		if (isIniciar) return !!format && dayFitsFormat(d.period, format);
		return true;
	});
	const leftOf = (d) => category === "Iniciar" ? d.iniciar_left : category === "P1" ? d.p1_left : category === "P2" ? d.p2_left : d.aresta_left;
	async function submitForm() {
		const r = formSchema.safeParse(form);
		if (!r.success) {
			const e = {};
			r.error.issues.forEach((i) => e[String(i.path[0])] = i.message);
			setErrors(e);
			return;
		}
		const depNames = deps.map((d) => d.trim()).filter(Boolean);
		if (deps.some((d) => d.trim().length > 0 && d.trim().length < 2) || deps.length !== depNames.length) {
			setErrors({ deps: "Preencha o nome de cada dependente ou remova o campo vazio" });
			return;
		}
		setErrors({});
		setBusy(true);
		const isAuto = getAutoApproveSetting();
		saveLocalCustomer({
			full_name: form.name,
			whatsapp: form.whatsapp,
			email: form.email,
			dependents: depNames,
			confirmed: isAuto,
			cycle: "Iniciar",
			auto_approved: isAuto
		});
		try {
			await supabase.rpc("register_customer", {
				_name: form.name,
				_whatsapp: form.whatsapp,
				_email: form.email,
				_dependents: depNames
			});
		} catch {}
		if (isAuto) {
			setAllowed("Iniciar");
			setCategory("Iniciar");
			setParty(1 + depNames.length);
			setProfile("iniciante");
			setDates([]);
			setFormat(null);
			setStep("category");
			toast.success("Cadastro realizado com sucesso! Escolha o ciclo para agendar.");
		} else await refreshStatus();
		setBusy(false);
	}
	async function refreshStatus() {
		if (getAutoApproveSetting()) {
			setAllowed("Iniciar");
			setCategory("Iniciar");
			setParty(1 + deps.length);
			setProfile("iniciante");
			setDates([]);
			setFormat(null);
			setStep("category");
			return;
		}
		const { data, error } = await supabase.rpc("customer_status", { _whatsapp: form.whatsapp });
		if (error) {
			toast.error("Não foi possível verificar seu cadastro");
			return;
		}
		const st = data?.[0];
		if (!st || st.status !== "aprovado") {
			setStep("pending");
			return;
		}
		const a = st.allowed ?? "Iniciar";
		setAllowed(a);
		setCategory(a);
		setParty(st.party ?? 1);
		setProfile(a);
		setDates([]);
		setFormat(null);
		setStep("category");
	}
	function toggleDate(day) {
		if (dates.includes(day)) return setDates(dates.filter((d) => d !== day));
		if (need === 1) return setDates([day]);
		if (format === "tarde_integral" && isIniciar && dates.length === 1) {
			const per = (x) => schedule.data?.find((d) => d.day === x)?.period ?? "";
			if (!manhaTardeOk(per(dates[0]), per(day))) {
				toast.warning("Escolha uma data à tarde e outra de período integral.");
				return;
			}
		}
		if (dates.length >= need) {
			toast.warning(`Você já selecionou ${need} datas. Desmarque uma para trocar.`);
			return;
		}
		setDates([...dates, day]);
	}
	function goReview() {
		if (!ready) {
			toast.error(isIniciar ? `Selecione ${need === 1 ? "1 data" : `${need} datas`} para completar os 3 ciclos (faltam ${3 - cyclesDone}).` : "Selecione uma data.");
			return;
		}
		setStep("review");
	}
	async function confirm() {
		if (!ready || isIniciar && !format) return;
		setBusy(true);
		setSubmitError(null);
		const isAuto = getAutoApproveSetting();
		let bookedData = null;
		try {
			const { data, error } = await supabase.rpc("book_approved", {
				_whatsapp: form.whatsapp,
				_category: category,
				_format: isIniciar ? format ?? "" : "",
				_dates: dates
			});
			if (!error && data?.length) bookedData = data;
		} catch {}
		if (!bookedData && isAuto) bookedData = createLocalBookings({
			name: form.name,
			whatsapp: form.whatsapp,
			email: form.email,
			category,
			format: isIniciar ? format ?? "" : "",
			dates,
			party
		});
		setBusy(false);
		if (!bookedData || !bookedData.length) {
			setSubmitError("Não foi possível concluir o agendamento. Tente novamente.");
			schedule.refetch();
			return;
		}
		setResult(bookedData);
		setStep("done");
	}
	function reset() {
		setStep("form");
		setDates([]);
		setFormat(null);
		setResult([]);
		schedule.refetch();
	}
	const stepIdx = step === "done" ? 4 : step === "format" ? 1 : [
		"form",
		"category",
		"dates",
		"review"
	].indexOf(step);
	const back = {
		pending: "form",
		category: "form",
		format: "category",
		dates: category === "Iniciar" ? "format" : "category",
		review: "dates"
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "hero-band px-5 pb-16 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto flex max-w-2xl items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brand, { light: true }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 255,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/admin",
					className: "text-sm text-primary-foreground/70 hover:text-primary-foreground",
					children: "Área restrita"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 256,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 254,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto mt-10 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-3xl font-semibold sm:text-4xl",
						children: "Agende seu ciclo"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 259,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-2 text-primary-foreground/75",
						children: "Cadastro, escolha das datas e confirmação. Pagamento no local."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 260,
						columnNumber: 11
					}, this),
					step !== "done" && /* @__PURE__ */ (void 0)("div", {
						className: "mt-6 flex gap-1.5",
						children: [
							0,
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ (void 0)("div", { className: `h-1.5 flex-1 rounded-full ${i <= stepIdx ? "bg-accent" : "bg-primary-foreground/20"}` }, i, false, {
							fileName: _jsxFileName,
							lineNumber: 262,
							columnNumber: 38
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 261,
						columnNumber: 31
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 258,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 253,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
			className: "mx-auto -mt-10 max-w-2xl space-y-6 px-4 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-2xl border bg-card p-5 shadow-xl shadow-primary/5 sm:p-7",
				children: [
					back[step] && /* @__PURE__ */ (void 0)("button", {
						onClick: () => setStep(back[step]),
						className: "mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (void 0)(ArrowLeft, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 270,
							columnNumber: 15
						}, this), " Voltar"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 269,
						columnNumber: 26
					}, this),
					step === "form" && /* @__PURE__ */ (void 0)("section", { children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("h2", {
								className: "text-xl font-semibold",
								children: "1. Cadastro"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 275,
								columnNumber: 17
							}, this), getAutoApproveSetting() ? /* @__PURE__ */ (void 0)("span", {
								className: "inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400",
								children: "Aprovação imediata ativa"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 276,
								columnNumber: 44
							}, this) : /* @__PURE__ */ (void 0)("span", {
								className: "inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400",
								children: "Aprovação por ADM"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 278,
								columnNumber: 29
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 274,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: getAutoApproveSetting() ? "Preencha seus dados para avançar diretamente à escolha de ciclos e datas sem precisar aguardar autorização do administrador." : "Preencha seus dados. O administrador analisará seu cadastro antes de liberar o agendamento."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 282,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("form", {
							className: "mt-5 space-y-4",
							onSubmit: (e) => {
								e.preventDefault();
								submitForm();
							},
							children: [
								/* @__PURE__ */ (void 0)(Field, {
									label: "Nome completo",
									error: errors["name"],
									children: /* @__PURE__ */ (void 0)(Input, {
										className: "h-12 text-base",
										autoComplete: "name",
										maxLength: 120,
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 290,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 289,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Field, {
									label: "Celular (WhatsApp)",
									error: errors["whatsapp"],
									children: /* @__PURE__ */ (void 0)(Input, {
										className: "h-12 text-base",
										inputMode: "tel",
										autoComplete: "tel",
										placeholder: "(00) 00000-0000",
										value: form.whatsapp,
										onChange: (e) => setForm({
											...form,
											whatsapp: maskPhone(e.target.value)
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 296,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 295,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Field, {
									label: "E-mail (opcional)",
									error: errors["email"],
									children: /* @__PURE__ */ (void 0)(Input, {
										className: "h-12 text-base",
										type: "email",
										autoComplete: "email",
										maxLength: 255,
										value: form.email,
										onChange: (e) => setForm({
											...form,
											email: e.target.value
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 302,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 301,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (void 0)(Label, { children: "Dependentes (opcional)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 308,
											columnNumber: 19
										}, this),
										deps.map((d, i) => /* @__PURE__ */ (void 0)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (void 0)(Input, {
												className: "h-11",
												"aria-label": `Nome do dependente ${i + 1}`,
												placeholder: `Nome do dependente ${i + 1}`,
												maxLength: 120,
												value: d,
												onChange: (e) => setDeps(deps.map((x, j) => j === i ? e.target.value : x))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 310,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)(Button, {
												type: "button",
												variant: "outline",
												"aria-label": "Remover dependente",
												onClick: () => setDeps(deps.filter((_, j) => j !== i)),
												children: "Remover"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 311,
												columnNumber: 23
											}, this)]
										}, i, true, {
											fileName: _jsxFileName,
											lineNumber: 309,
											columnNumber: 39
										}, this)),
										errors["deps"] && /* @__PURE__ */ (void 0)("p", {
											className: "text-sm text-destructive",
											children: errors["deps"]
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 313,
											columnNumber: 38
										}, this),
										deps.length < 9 && /* @__PURE__ */ (void 0)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => setDeps([...deps, ""]),
											children: "+ Adicionar dependente"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 314,
											columnNumber: 39
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 307,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: getAutoApproveSetting() ? "Se já agendou anteriormente, use o mesmo celular para localizar seu histórico de agendamentos." : "Após enviar, a equipe analisa seu cadastro e libera o ciclo ideal para você agendar. Se já tem cadastro, informe o mesmo celular."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 316,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Button, {
									type: "submit",
									size: "lg",
									className: "w-full text-base",
									disabled: busy,
									children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "animate-spin" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 320,
										columnNumber: 28
									}, this), getAutoApproveSetting() ? "Continuar para agendamento" : "Enviar cadastro para análise"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 319,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 285,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 273,
						columnNumber: 31
					}, this),
					step === "pending" && /* @__PURE__ */ (void 0)("section", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (void 0)(CircleCheck, { className: "mx-auto size-14 text-warning" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("h2", {
								className: "mt-3 text-xl font-semibold",
								children: "Cadastro em análise"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 328,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Recebemos seu cadastro e a equipe foi avisada. Assim que ele for aprovado e seu ciclo liberado, volte aqui, informe o mesmo celular e faça o agendamento."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 329,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Button, {
								variant: "outline",
								size: "lg",
								className: "mt-6 w-full",
								disabled: busy,
								onClick: async () => {
									setBusy(true);
									await refreshStatus();
									setBusy(false);
								},
								children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "animate-spin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 335,
									columnNumber: 26
								}, this), " Verificar aprovação"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 330,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 326,
						columnNumber: 34
					}, this),
					step === "format" && /* @__PURE__ */ (void 0)("section", { children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "text-xl font-semibold",
							children: "2. Iniciar — 3 ciclos"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 340,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-1 text-muted-foreground",
							children: "Escolha como distribuir seus 3 ciclos (i1, i2, i3):"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 341,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-5 grid gap-3 sm:grid-cols-3",
							role: "radiogroup",
							children: [
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: format === "dia_inteiro",
									onClick: () => {
										setFormat("dia_inteiro");
										setDates([]);
									},
									icon: /* @__PURE__ */ (void 0)(Sun, { className: "size-6" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 346,
										columnNumber: 22
									}, this),
									title: "Dia inteiro",
									desc: "Os 3 ciclos no mesmo dia (período integral)."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 343,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: format === "duas_tardes",
									onClick: () => {
										setFormat("duas_tardes");
										setDates([]);
									},
									icon: /* @__PURE__ */ (void 0)(Sunset, { className: "size-6" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 350,
										columnNumber: 22
									}, this),
									title: "Duas tardes",
									desc: "Ciclos distribuídos em 2 tardes (i1+i2 e i3)."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 347,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: format === "tarde_integral",
									onClick: () => {
										setFormat("tarde_integral");
										setDates([]);
									},
									icon: /* @__PURE__ */ (void 0)(Sunset, { className: "size-6" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 354,
										columnNumber: 22
									}, this),
									title: "1 tarde + 1 dia integral",
									desc: "Uma data à tarde e outra de período integral (i1+i2 e i3)."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 351,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 342,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							size: "lg",
							className: "mt-6 w-full",
							disabled: !format,
							onClick: () => setStep("dates"),
							children: "Escolher datas"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 356,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 339,
						columnNumber: 33
					}, this),
					step === "category" && /* @__PURE__ */ (void 0)("section", { children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "text-xl font-semibold",
							children: "2. Qual ciclo você vai agendar?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 360,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "mt-5 grid grid-cols-2 gap-3",
							role: "radiogroup",
							children: [
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: category === "Iniciar",
									onClick: () => setCategory("Iniciar"),
									title: "Iniciar (i1, i2, i3)",
									desc: "Para iniciantes: 3 ciclos."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 362,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: category === "P1",
									onClick: () => setCategory("P1"),
									title: "P1",
									desc: "1 ciclo, em 1 data."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 363,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: category === "P2",
									onClick: () => setCategory("P2"),
									title: "P2",
									desc: "1 ciclo, em 1 data."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 364,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(FormatCard, {
									active: category === "Aresta",
									onClick: () => setCategory("Aresta"),
									title: "Aresta",
									desc: "Escolha o dia."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 365,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 361,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							size: "lg",
							className: "mt-6 w-full",
							onClick: () => {
								setDates([]);
								setFormat(null);
								setStep(category === "Iniciar" ? "format" : "dates");
							},
							children: "Continuar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 367,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 359,
						columnNumber: 35
					}, this),
					step === "dates" && /* @__PURE__ */ (void 0)("section", { children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "text-xl font-semibold",
							children: [
								"3. Escolha ",
								need === 1 ? "a data" : "as datas",
								" — ",
								category
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 375,
							columnNumber: 15
						}, this),
						isIniciar && format && /* @__PURE__ */ (void 0)("div", {
							className: "mt-4 rounded-xl border border-accent bg-accent/10 p-4 text-sm",
							children: [
								/* @__PURE__ */ (void 0)("p", {
									className: "font-semibold",
									children: "Como iniciante, você precisa completar exatamente 3 ciclos para concluir."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 377,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("p", {
									className: "mt-1 text-muted-foreground",
									children: format === "dia_inteiro" ? "Dia inteiro: selecione 1 data de período integral." : format === "duas_tardes" ? "Duas tardes: selecione 2 datas com turno da tarde." : "1 tarde + 1 dia integral: selecione uma data à tarde e outra de período integral."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 378,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "mt-3 flex items-center gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex gap-1.5",
										children: [
											0,
											1,
											2
										].map((i) => /* @__PURE__ */ (void 0)("div", {
											className: `grid size-7 place-items-center rounded-full text-xs font-bold ${i < cyclesDone ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"}`,
											children: i < cyclesDone ? /* @__PURE__ */ (void 0)(Check, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 382,
												columnNumber: 270
											}, this) : `i${i + 1}`
										}, i, false, {
											fileName: _jsxFileName,
											lineNumber: 382,
											columnNumber: 71
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 382,
										columnNumber: 21
									}, this), /* @__PURE__ */ (void 0)("span", {
										className: "font-semibold",
										children: [
											"Ciclos selecionados: ",
											cyclesDone,
											" de 3"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 383,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 381,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 376,
							columnNumber: 39
						}, this),
						schedule.isLoading ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mx-auto my-10 size-6 animate-spin text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 386,
							columnNumber: 37
						}, this) : schedule.isError ? /* @__PURE__ */ (void 0)("div", {
							className: "mt-6 space-y-3",
							children: [/* @__PURE__ */ (void 0)("p", {
								role: "alert",
								className: "text-destructive",
								children: "Não foi possível carregar as datas."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 386,
								columnNumber: 170
							}, this), /* @__PURE__ */ (void 0)(Button, {
								variant: "outline",
								onClick: () => schedule.refetch(),
								children: "Tentar novamente"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 386,
								columnNumber: 254
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 386,
							columnNumber: 138
						}, this) : !available.length ? /* @__PURE__ */ (void 0)("p", {
							className: "mt-6 text-muted-foreground",
							children: "Ainda não há datas publicadas para este formato."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 386,
							columnNumber: 369
						}, this) : /* @__PURE__ */ (void 0)("div", {
							className: "mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3",
							children: available.map((d) => {
								const left = leftOf(d);
								const sel = dates.includes(d.day);
								return /* @__PURE__ */ (void 0)(Button, {
									variant: "outline",
									disabled: left < party && !sel,
									onClick: () => toggleDate(d.day),
									"aria-pressed": sel,
									className: `relative flex h-auto flex-col items-center gap-0 whitespace-normal rounded-lg border-2 px-2 py-3 transition disabled:cursor-not-allowed disabled:opacity-40 ${sel ? "border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : "bg-background hover:border-primary"}`,
									children: [
										sel && /* @__PURE__ */ (void 0)(Check, { className: "absolute right-2 top-2 size-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 391,
											columnNumber: 33
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "text-xs font-medium uppercase opacity-70",
											children: weekdayShort(d.day)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 392,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "font-display text-2xl font-semibold",
											children: dayNum(d.day)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 393,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "text-xs uppercase opacity-70",
											children: monthShort(d.day)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 394,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "mt-1 text-[11px] opacity-80",
											children: [
												PERIODS[d.period],
												" · ",
												hhmm(d.start_time),
												"–",
												hhmm(d.end_time)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 395,
											columnNumber: 25
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: `mt-1 text-[11px] font-semibold ${sel ? "" : left <= 0 ? "text-destructive" : left <= 3 ? "text-warning" : "text-success"}`,
											children: left < party ? left <= 0 ? "Esgotado" : `Só ${left} vaga${left === 1 ? "" : "s"}` : left <= 0 ? "Esgotado" : `${left} ${left === 1 ? "vaga" : "vagas"}`
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 396,
											columnNumber: 25
										}, this)
									]
								}, d.day, true, {
									fileName: _jsxFileName,
									lineNumber: 390,
									columnNumber: 22
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 386,
							columnNumber: 466
						}, this),
						ready && plan.length > 0 && /* @__PURE__ */ (void 0)("div", {
							className: "mt-5 rounded-xl border border-success/40 bg-success/10 p-4 text-sm",
							children: [/* @__PURE__ */ (void 0)("p", {
								className: "flex items-center gap-2 font-semibold text-success",
								children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 403,
									columnNumber: 85
								}, this), " Tudo certo! Resumo:"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 403,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("ul", {
								className: "mt-2 space-y-1",
								children: plan.map((p, i) => /* @__PURE__ */ (void 0)("li", { children: [
									/* @__PURE__ */ (void 0)("b", { children: p.cycle }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 404,
										columnNumber: 82
									}, this),
									" — ",
									/* @__PURE__ */ (void 0)("span", {
										className: "capitalize",
										children: fmtLong(p.date)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 404,
										columnNumber: 101
									}, this)
								] }, i, true, {
									fileName: _jsxFileName,
									lineNumber: 404,
									columnNumber: 70
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 404,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 402,
							columnNumber: 44
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							size: "lg",
							className: "mt-6 w-full",
							disabled: !ready,
							onClick: goReview,
							onPointerDown: () => {
								if (!ready) goReview();
							},
							children: "Concluir seleção"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 406,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 374,
						columnNumber: 32
					}, this),
					step === "review" && /* @__PURE__ */ (void 0)("section", { children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "text-xl font-semibold",
							children: "4. Confira seu agendamento"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 412,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("dl", {
							className: "mt-5 divide-y rounded-xl border bg-background",
							children: [
								/* @__PURE__ */ (void 0)(Row, {
									k: "Nome",
									v: form.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 414,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Row, {
									k: "Celular",
									v: form.whatsapp
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 415,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Row, {
									k: "Pessoas",
									v: party > 1 ? `${party} (você + ${party - 1} dependente${party > 2 ? "s" : ""})` : "Só você"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 416,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (void 0)(Row, {
									k: "Categoria",
									v: isIniciar ? `Iniciar — ${format ? FORMAT_LABEL[format] : ""}` : category
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 417,
									columnNumber: 17
								}, this),
								plan.map((p, i) => /* @__PURE__ */ (void 0)(Row, {
									k: p.cycle,
									v: /* @__PURE__ */ (void 0)("span", {
										className: "capitalize",
										children: fmtLong(p.date)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 418,
										columnNumber: 65
									}, this)
								}, i, false, {
									fileName: _jsxFileName,
									lineNumber: 418,
									columnNumber: 37
								}, this))
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 413,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "mt-4 flex gap-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (void 0)(Wallet, { className: "size-4 shrink-0" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 420,
									columnNumber: 76
								}, this),
								" ",
								settings.data?.payment_note
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 420,
							columnNumber: 15
						}, this),
						submitError && /* @__PURE__ */ (void 0)("p", {
							className: "mt-4 rounded-lg bg-destructive/10 p-3 text-sm font-medium text-destructive",
							children: submitError
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 421,
							columnNumber: 31
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							size: "lg",
							className: "mt-6 h-14 w-full text-base",
							disabled: busy,
							onClick: confirm,
							children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 423,
								columnNumber: 26
							}, this), " Confirmar agendamento"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 422,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 411,
						columnNumber: 33
					}, this),
					step === "done" && /* @__PURE__ */ (void 0)("section", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (void 0)(CircleCheck, { className: "mx-auto size-16 text-success" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 428,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("h2", {
								className: "mt-3 text-2xl font-semibold",
								children: "Agendamento confirmado!"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 429,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-muted-foreground",
								children: "Guarde os códigos das suas reservas."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 430,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("dl", {
								className: "mt-6 divide-y rounded-xl border bg-background text-left",
								children: result.map((r) => /* @__PURE__ */ (void 0)(Row, {
									k: `${r.cycle} · ${fmtDate(r.booking_date)}`,
									v: /* @__PURE__ */ (void 0)("span", {
										className: "font-mono text-lg font-bold tracking-widest",
										children: r.code
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 432,
										columnNumber: 101
									}, this)
								}, r.code, false, {
									fileName: _jsxFileName,
									lineNumber: 432,
									columnNumber: 34
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 431,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "mt-4 flex gap-2 rounded-xl bg-secondary p-4 text-left text-sm",
								children: [/* @__PURE__ */ (void 0)(Wallet, { className: "size-5 shrink-0 text-primary" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 434,
									columnNumber: 94
								}, this), /* @__PURE__ */ (void 0)("span", { children: settings.data?.payment_note }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 434,
									columnNumber: 145
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 434,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Button, {
								variant: "outline",
								size: "lg",
								className: "mt-6 w-full",
								onClick: reset,
								children: "Fazer outro agendamento"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 435,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 427,
						columnNumber: 31
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 268,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyBooking, { onReschedule: () => {
				setStep("form");
				setDates([]);
			} }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 439,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 267,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 252,
		columnNumber: 10
	}, this);
}
function MyBooking({ onReschedule }) {
	const [code, setCode] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function act(action) {
		if (code.trim().length < 6 || phone.replace(/\D/g, "").length < 10) {
			toast.error("Informe o código e o celular");
			return;
		}
		setBusy(true);
		updateLocalBookingStatus(code, phone, action);
		try {
			await supabase.rpc("customer_action", {
				_code: code,
				_whatsapp: phone,
				_action: action
			});
		} catch {}
		setBusy(false);
		toast.success(action === "chegou" ? "Chegada registrada" : action === "cancelado" ? "Reserva cancelada" : "Reserva liberada — escolha uma nova data");
		if (action === "reagendou") {
			onReschedule();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}
		setCode("");
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "rounded-2xl border bg-card p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-lg font-semibold",
				children: "Minha reserva"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 482,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Avise sua chegada, cancele ou reagende."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 483,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					className: "h-11 font-mono uppercase",
					placeholder: "Código",
					maxLength: 6,
					value: code,
					onChange: (e) => setCode(e.target.value.toUpperCase())
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 485,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					className: "h-11",
					inputMode: "tel",
					placeholder: "Celular",
					value: phone,
					onChange: (e) => setPhone(maskPhone(e.target.value))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 486,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 484,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						disabled: busy,
						onClick: () => act("chegou"),
						children: "Cheguei"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 489,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						disabled: busy,
						onClick: () => act("reagendou"),
						children: "Reagendar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 490,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						disabled: busy,
						onClick: () => confirm("Cancelar esta reserva?") && act("cancelado"),
						children: "Cancelar"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 491,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 488,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 481,
		columnNumber: 10
	}, this);
}
function FormatCard({ active, onClick, icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		role: "radio",
		"aria-checked": active,
		onClick,
		className: `flex items-start gap-3 rounded-xl border-2 p-4 text-left transition ${active ? "border-primary bg-primary/10" : "bg-background hover:border-primary/50"}`,
		children: [icon && /* @__PURE__ */ (void 0)("span", {
			className: "text-primary",
			children: icon
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 509,
			columnNumber: 16
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "block font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 510,
			columnNumber: 13
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "text-sm text-muted-foreground",
			children: desc
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 510,
			columnNumber: 65
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 510,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 508,
		columnNumber: 10
	}, this);
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
				className: "text-sm font-semibold",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 523,
				columnNumber: 7
			}, this),
			children,
			error && /* @__PURE__ */ (void 0)("p", {
				className: "text-sm text-destructive",
				children: error
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 525,
				columnNumber: 17
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 522,
		columnNumber: 10
	}, this);
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center justify-between gap-4 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
			className: "text-sm text-muted-foreground",
			children: k
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 536,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
			className: "text-right font-medium",
			children: v
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 537,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 535,
		columnNumber: 10
	}, this);
}
//#endregion
export { BookingPage as component };
