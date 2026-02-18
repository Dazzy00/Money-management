// Copyright (c) 2026, Dazzy and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Member", {
	refresh(frm) {
        if (frm.doc.first_name) {
            frappe.msgprint("Habari yako, " + frm.doc.first_name);
        }
	},
    first_name(frm) {
        first_name = frm.doc.first_name;
        last_name = frm.doc.last_name;
        full_name = first_name + " " + last_name;
        frm.set_value("full_name", full_name);
    },
    last_name(frm) {
        first_name = frm.doc.first_name;
        last_name = frm.doc.last_name;
        full_name = first_name + " " + last_name;
        frm.set_value("full_name", full_name);
    },
    after_save(frm) {
        frappe.msgprint("Full Name: " + frm.doc.full_name);
    },
});
