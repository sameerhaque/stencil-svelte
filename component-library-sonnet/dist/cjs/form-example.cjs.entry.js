'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');

const GetAQuoteExample = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("snt-layout", null, index.h("snt-form", null, index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "last-name" }, "Last Name"), index.h("input", { "data-field": "lastName", required: true, "aria-required": "true", minlength: "1", maxlength: "30", type: "text", class: "form-control", id: "last-name", "aria-describedby": "lastName_error" }), index.h("div", { "data-for": "last-name", id: "lastName_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Error empty value"), index.h("div", { "data-error": true, "data-special-character": true, class: "hidden", "aria-hidden": "false" }, "Error special characters"), index.h("div", { "data-error": true, "data-min-length": true, class: "hidden", "aria-hidden": "false" }, "Error min length"), index.h("div", { "data-error": true, "data-max-length": true, class: "hidden", "aria-hidden": "false" }, "Error max length")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "pay" }, "Currency"), index.h("span", { class: "currency-input" }, index.h("input", { "data-field": "pay", type: "text", class: "form-control", id: "pay", name: "pay", required: true, "aria-required": "true", minlength: "2", maxlength: "30", "aria-describedby": "pay_error" })), index.h("div", { "data-for": "pay", id: "pay_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Currency is blank"), index.h("div", { "data-error": true, "data-currency-format": true, class: "hidden", "aria-hidden": "false" }, "Invalid currency format")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "crm-email" }, "Email"), index.h("input", { "data-field": "email", required: true, "aria-required": "true", type: "text", class: "form-control", id: "crm-email", "aria-describedby": "email_error" }), index.h("div", { "data-for": "crm-email", id: "email_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Error empty value"), index.h("div", { "data-error": true, "data-email": true, class: "hidden", "aria-hidden": "false" }, "Email format invalid")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "email-confirmation" }, "Email confirmation"), index.h("input", { "data-field": "emailConfirmation", required: true, "aria-required": "true", type: "text", class: "form-control", id: "email-confirmation", "data-email-id": "crm-email", "aria-describedby": "emailConfirmation_error" }), index.h("div", { "data-for": "email-confirmation", id: "emailConfirmation_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Error empty value"), index.h("div", { "data-error": true, "data-email-confirmation": true, class: "hidden", "aria-hidden": "false" }, "Emails must match")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "coverageEnd" }, "End Date"), index.h("input", { "data-field": "coverageEnd", required: true, "aria-required": "true", type: "coverageEnd", class: "form-control", id: "coverageEnd", "data-onchange-blank": "coverageStart", placeholder: "MM/DD/YY", "aria-describedby": "coverageEnd_error" }), index.h("div", { "data-for": "coverageEnd", id: "coverageEnd_error" }, index.h("div", { "data-error": "data-error", "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Date can't be blank"), index.h("div", { "data-error": "data-error", "data-date-format": true, class: "hidden", "aria-hidden": "false" }, "Please provide proper date format"), index.h("div", { "data-error": "data-error", "data-date-past": true, class: "hidden", "aria-hidden": "false" }, "Date can't be in past"), index.h("div", { "data-error": "data-error", "data-date-exceeds-one-year-today": true, class: "hidden", "aria-hidden": "false" }, "Date cannot be more than one year from today")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "coverageStart" }, "Start Date"), index.h("input", { "data-field": "coverageStart", required: true, "aria-required": "true", type: "coverageStart", class: "form-control", id: "coverageStart", placeholder: "MM/DD/YY", "data-preceeds": "coverageEnd", "data-exceeds": "coverageEnd", "aria-describedby": "coverageStart_error" }), index.h("div", { "data-for": "coverageStart", id: "coverageStart_error" }, index.h("div", { "data-error": "data-error", "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Date can't be blank"), index.h("div", { "data-error": "data-error", "data-date-format": true, class: "hidden", "aria-hidden": "false" }, "Please provide proper date format"), index.h("div", { "data-error": "data-error", "data-date-preceeds-one-year": true, class: "hidden", "aria-hidden": "false" }, "Date cannot be more than one year before coverage end"), index.h("div", { "data-error": "data-error", "data-date-exceeds": true, class: "hidden", "aria-hidden": "false" }, "Date cannot be greater than coverage end")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col-12 col-sm-6" }, index.h("label", { "html-for": "interest" }, "Interested in"), index.h("snt-dropdown", { name: "interest", "placeholder-text": "Select", labelText: "Interested in", required: true }, index.h("snt-options", null, index.h("snt-item", { "data-key": "one", value: "One" }), index.h("snt-item", { "data-key": "two", value: "Two" }))), index.h("div", { "data-for": "interest", id: "interest_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Error empty value")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("label", { "html-for": "copy" }, "Copy"), index.h("textarea", { "data-field": "copy", required: true, "aria-required": "true", class: "form-control", id: "copy", "aria-describedby": "copy_error" }), index.h("div", { "data-for": "copy", id: "copy_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Error empty value")))), index.h("div", { class: "form-row" }, index.h("div", { class: "col" }, index.h("snt-recaptcha", { sitekey: "6LdN6sEZAAAAAHZKlAlCNR7SX5DljuJ50N9loEvB" }), index.h("div", { slot: "error-messages", "data-for": "recaptcha", id: "recaptcha_error" }, index.h("div", { "data-error": true, "data-empty-value": true, class: "hidden", "aria-hidden": "false" }, "Please confirm you are not a robot")))), index.h("snt-button", { class: "submit-button", "style-classes": "cta theme-default" }, "Submit"))));
    }
};

exports.form_example = GetAQuoteExample;
