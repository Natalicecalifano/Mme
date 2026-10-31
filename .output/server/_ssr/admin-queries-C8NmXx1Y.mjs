import { n as __toESM } from "../_runtime.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as supabase } from "./client-DswBbBxu.mjs";
import { i as getLocalBookings } from "./auto-approval-C_3_hpbe.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { h as ChevronUp, v as ChevronDown, y as Check } from "../_libs/lucide-react.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { _ as statusInfo, i as STATUSES } from "./booking-fSYmPQ0r.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-queries-C8NmXx1Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/select.tsx";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 29,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 19,
	columnNumber: 3
}, void 0));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronUp, { className: "h-4 w-4" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 44,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 39,
	columnNumber: 3
}, void 0));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4" }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 58,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 53,
	columnNumber: 3
}, void 0));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollUpButton, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 79,
			columnNumber: 7
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 80,
			columnNumber: 7
		}, void 0),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectScrollDownButton, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 89,
			columnNumber: 7
		}, void 0)
	]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 68,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 67,
	columnNumber: 3
}, void 0));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 99,
	columnNumber: 3
}, void 0));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 121,
			columnNumber: 9
		}, void 0) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 120,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 119,
		columnNumber: 5
	}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItemText, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 124,
		columnNumber: 5
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$1,
	lineNumber: 111,
	columnNumber: 3
}, void 0));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 133,
	columnNumber: 3
}, void 0));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var _jsxFileName = "/app/applet/src/components/admin/StatusSelect.tsx";
function StatusSelect({ id, value }) {
	const qc = useQueryClient();
	const m = useMutation({
		mutationFn: async (status) => {
			const list = getLocalBookings();
			const localItem = list.find((b) => b.id === id);
			if (localItem) {
				localItem.status = status;
				if (typeof window !== "undefined") localStorage.setItem("mme_local_bookings", JSON.stringify(list));
			}
			try {
				await supabase.from("bookings").update({ status }).eq("id", id);
			} catch {}
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["bookings"] }),
		onError: () => toast.error("Não foi possível alterar o status")
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, {
		value,
		onValueChange: (v) => m.mutate(v),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, {
			className: `h-9 w-40 border font-medium ${statusInfo(value).cls}`,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 89
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, {
			value: s.value,
			children: s.label
		}, s.value, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 43
		}, this)) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
function QuickStatus({ id, value }) {
	const qc = useQueryClient();
	const m = useMutation({
		mutationFn: async (status) => {
			const list = getLocalBookings();
			const localItem = list.find((b) => b.id === id);
			if (localItem) {
				localItem.status = status;
				if (typeof window !== "undefined") localStorage.setItem("mme_local_bookings", JSON.stringify(list));
			}
			try {
				await supabase.from("bookings").update({ status }).eq("id", id);
			} catch {}
		},
		onSuccess: () => qc.invalidateQueries({ queryKey: ["bookings"] }),
		onError: () => toast.error("Não foi possível alterar o status")
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-wrap gap-1.5",
		children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			disabled: m.isPending,
			onClick: () => m.mutate(s.value),
			className: `rounded-lg border px-3 py-2 text-sm font-medium transition ${value === s.value ? s.cls + " ring-2 ring-ring/30" : "bg-background text-muted-foreground hover:bg-muted"}`,
			children: s.label
		}, s.value, false, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
function useDayBookings(date) {
	return useQuery({
		queryKey: ["bookings", date],
		queryFn: async () => {
			let remoteBookings = [];
			try {
				const { data } = await supabase.from("bookings").select("*").eq("booking_date", date).order("slot_time").order("created_at");
				if (data) remoteBookings = data;
			} catch {}
			const local = getLocalBookings(date);
			const map = /* @__PURE__ */ new Map();
			remoteBookings.forEach((b) => map.set(b.id || b.code, b));
			local.forEach((b) => map.set(b.id || b.code, b));
			return Array.from(map.values());
		}
	});
}
//#endregion
export { SelectTrigger as a, useDayBookings as c, SelectItem as i, Select as n, SelectValue as o, SelectContent as r, StatusSelect as s, QuickStatus as t };
