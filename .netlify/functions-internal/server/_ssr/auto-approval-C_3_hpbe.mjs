//#region node_modules/.nitro/vite/services/ssr/assets/auto-approval-C_3_hpbe.js
var SETTING_KEY = "mme_auto_approve_customers";
var CUSTOMERS_KEY = "mme_local_customers";
var BOOKINGS_KEY = "mme_local_bookings";
function getAutoApproveSetting() {
	if (typeof window === "undefined") return true;
	const val = localStorage.getItem(SETTING_KEY);
	if (val === null) return true;
	return val === "true";
}
function setAutoApproveSetting(enabled) {
	if (typeof window === "undefined") return;
	localStorage.setItem(SETTING_KEY, String(enabled));
}
function getLocalCustomers() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(CUSTOMERS_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveLocalCustomer(c) {
	const list = getLocalCustomers();
	const cleanPhone = c.whatsapp.replace(/\D/g, "");
	const existingIdx = list.findIndex((item) => item.whatsapp.replace(/\D/g, "") === cleanPhone);
	const now = (/* @__PURE__ */ new Date()).toISOString();
	if (existingIdx >= 0) {
		const updated = {
			...list[existingIdx],
			full_name: c.full_name,
			email: c.email ?? list[existingIdx].email,
			dependents: c.dependents,
			confirmed: c.confirmed ?? list[existingIdx].confirmed,
			cycle: c.cycle ?? list[existingIdx].cycle,
			auto_approved: c.auto_approved ?? list[existingIdx].auto_approved ?? false
		};
		list[existingIdx] = updated;
		localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
		return updated;
	}
	const newCust = {
		id: c.id || "local-" + Math.random().toString(36).substring(2, 10),
		full_name: c.full_name,
		whatsapp: cleanPhone,
		email: c.email || null,
		dependents: c.dependents,
		confirmed: c.confirmed,
		cycle: c.cycle || "Iniciar",
		created_at: now,
		last_activity_date: null,
		auto_approved: c.auto_approved ?? false
	};
	list.unshift(newCust);
	localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
	return newCust;
}
function updateLocalCustomer(id, updates) {
	const list = getLocalCustomers();
	const idx = list.findIndex((item) => item.id === id);
	if (idx >= 0) {
		list[idx] = {
			...list[idx],
			...updates
		};
		localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
	}
}
function deleteLocalCustomer(id) {
	const list = getLocalCustomers().filter((item) => item.id !== id);
	localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
}
function getLocalBookings(date) {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(BOOKINGS_KEY);
		const list = raw ? JSON.parse(raw) : [];
		if (date) return list.filter((b) => b.booking_date === date);
		return list;
	} catch {
		return [];
	}
}
function genBookingCode() {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let code = "";
	for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * 32));
	return code;
}
function createLocalBookings(params) {
	const cleanPhone = params.whatsapp.replace(/\D/g, "");
	const customer = saveLocalCustomer({
		full_name: params.name,
		whatsapp: cleanPhone,
		email: params.email || null,
		dependents: [],
		confirmed: true,
		cycle: params.category,
		auto_approved: true
	});
	const allBookings = getLocalBookings();
	const groupId = "grp-" + Math.random().toString(36).substring(2, 9);
	const now = (/* @__PURE__ */ new Date()).toISOString();
	let planCycles = [];
	let planDates = [];
	if (params.category === "Iniciar") {
		planCycles = [
			"i1",
			"i2",
			"i3"
		];
		if (params.format === "dia_inteiro") planDates = [
			params.dates[0],
			params.dates[0],
			params.dates[0]
		];
		else if (params.format === "duas_tardes" || params.format === "tarde_integral") planDates = [
			params.dates[0],
			params.dates[0],
			params.dates[1] || params.dates[0]
		];
		else planDates = params.dates;
	} else {
		planCycles = [params.category];
		planDates = [params.dates[0]];
	}
	const results = [];
	for (let i = 0; i < planCycles.length; i++) {
		const cycle = planCycles[i];
		const date = planDates[i] || planDates[0];
		const code = genBookingCode();
		const booking = {
			id: "bkg-" + Math.random().toString(36).substring(2, 10),
			code,
			full_name: params.name,
			whatsapp: cleanPhone,
			email: params.email || null,
			booking_date: date,
			slot_time: "09:00:00",
			visit_type: params.category,
			category: params.category,
			cycle,
			format: params.format || null,
			customer_id: customer.id,
			group_id: groupId,
			party_size: params.party || 1,
			status: "agendado",
			created_at: now
		};
		allBookings.push(booking);
		results.push({
			code,
			booking_date: date,
			cycle
		});
	}
	if (typeof window !== "undefined") localStorage.setItem(BOOKINGS_KEY, JSON.stringify(allBookings));
	return results;
}
function updateLocalBookingStatus(code, whatsapp, action) {
	const cleanCode = code.trim().toUpperCase();
	const cleanPhone = whatsapp.replace(/\D/g, "");
	const list = getLocalBookings();
	let found = false;
	for (const b of list) if (b.code.toUpperCase() === cleanCode && b.whatsapp.replace(/\D/g, "") === cleanPhone) {
		b.status = action;
		found = true;
	}
	if (found && typeof window !== "undefined") localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
	return found;
}
function updateLocalBookingCycle(id, cycle, category) {
	const list = getLocalBookings();
	const b = list.find((item) => item.id === id);
	if (b) {
		b.cycle = cycle;
		b.category = category;
		b.visit_type = category;
		if (typeof window !== "undefined") localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
	}
}
//#endregion
export { getLocalCustomers as a, updateLocalBookingCycle as c, getLocalBookings as i, updateLocalBookingStatus as l, deleteLocalCustomer as n, saveLocalCustomer as o, getAutoApproveSetting as r, setAutoApproveSetting as s, createLocalBookings as t, updateLocalCustomer as u };
