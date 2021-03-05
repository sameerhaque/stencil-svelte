var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Event, Method, Prop, h } from "@stencil/core";
import { StringUtils } from "../../core/utils/StringUtils";
import { DomUtils } from "../../core/utils/DomUtils";
import { FormService } from '../../core/utils/FormService';
import { FormAttributes } from "./form-attributes.enum";
import { Action } from "../../core/reflection";
import { RecaptchaComponent } from '../recaptcha/recaptcha-component';
let FormComponent = class FormComponent {
    /**
     * Methods
     */
    async openErrorModal(actionData, modalId) {
        Action.openErrorModal(actionData, modalId);
    }
    async openSuccessModal(actionData, modalId) {
        Action.openSuccessModal(actionData, modalId);
    }
    async reset() {
        this.formEl.reset();
        const recaptchaElement = this.formEl.querySelector(RecaptchaComponent.TAG_NAME);
        if (recaptchaElement) {
            await recaptchaElement.reset();
        }
    }
    componentDidLoad() {
        var _elements = this.getFormElements();
        _elements.forEach((_element) => {
            DomUtils.attachHandler(_element, "invalid", this.onInvalidateFormElementHandler.bind(this));
            DomUtils.attachHandler(_element, "change", this.onChangeInputBlankHandler.bind(this));
            if (_element.tagName !== "SELECT") {
                DomUtils.attachHandler(_element, "blur", this.onBlurFormElementHandler.bind(this));
            }
            if (_element.tagName === "SELECT" || _element.type === "checkbox") {
                DomUtils.attachHandler(_element, "change", this.onChangeValueFormElementHandler.bind(this));
            }
        });
        // Attach onSubmit to call callback handler
        if (this.submitCallBackhandler) {
            DomUtils.attachHandler(this.formEl, "submit", this.submitCallBackhandler.bind(this));
        }
    }
    async getData() {
        var _result = {
            method: this.formEl.getAttribute("method"),
            action: this.formEl.getAttribute("action"),
            content: this.getPayload(),
        };
        return _result;
    }
    onChangeInputBlankHandler(event) {
        const element = event.target;
        if (element.hasAttribute(FormAttributes.DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME)) {
            const _form = element.form;
            const inputElement = _form.querySelector("[" +
                FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
                "=" +
                element.getAttribute(FormAttributes.DATA_ONCHANGE_BLANK_ATTRIBUTE_NAME) +
                "]");
            if (inputElement) {
                inputElement.value = '';
            }
        }
    }
    onChangeValueFormElementHandler(event) {
        FormService.process(event);
        event.preventDefault();
    }
    onBlurFormElementHandler(event) {
        var _element = event.target;
        var _value = FormService.getValue(_element);
        if (StringUtils.hasLength(_value)) {
            FormService.process(event);
        }
        else {
            var _form = _element.form;
            var _dataErrorParent = _form.querySelector("[" +
                FormAttributes.DATA_FOR_ATTRIBUTE_NAME +
                "=" +
                _element.id +
                "]");
            if (_dataErrorParent) {
                var _errorMessageNode = FormService.getErrorMessageNode(_dataErrorParent);
                _errorMessageNode.classList.add("hidden");
            }
        }
        event.preventDefault();
    }
    onInvalidateFormElementHandler(event) {
        FormService.process(event);
        event.preventDefault();
    }
    getPayload() {
        var _result = {};
        var _elements = this.getFormElements();
        _elements.forEach((_element) => {
            _result[this.getPayloadNameForElement(_element)] = FormService.getValue(_element);
        });
        return _result;
    }
    submitForm(e) {
        this.formSubmit.emit(e);
        e.preventDefault();
    }
    getFormElements() {
        return this.formEl.querySelectorAll("input[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "], select[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "], textarea[" +
            FormAttributes.DATA_FIELD_ATTRUBITE_NAME +
            "]");
    }
    getPayloadNameForElement(element) {
        if (DomUtils.hasValidStringAttribute(element, FormAttributes.DATA_FIELD_ATTRUBITE_NAME)) {
            return element.getAttribute(FormAttributes.DATA_FIELD_ATTRUBITE_NAME);
        }
        else if (DomUtils.hasValidStringAttribute(element, "name")) {
            return element.getAttribute("name");
        }
        throw "Element " + element + " does not have a payload name.";
    }
    render() {
        return (h("form", { ref: (el) => (this.formEl = el), onSubmit: (e) => {
                this.submitForm(e);
            } },
            h("slot", null)));
    }
};
__decorate([
    Prop({ reflect: true }),
    __metadata("design:type", String)
], FormComponent.prototype, "text", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Object)
], FormComponent.prototype, "submitCallBackhandler", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], FormComponent.prototype, "formSubmit", void 0);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FormComponent.prototype, "openErrorModal", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FormComponent.prototype, "openSuccessModal", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormComponent.prototype, "reset", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormComponent.prototype, "getData", null);
FormComponent = __decorate([
    Component({
        tag: "snt-form",
        styleUrl: "./form-component.scss",
        shadow: false,
    })
], FormComponent);
export { FormComponent };
