var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ModalComponent_1;
import { Component, Element, h, Method, Watch, Prop, Listen, Event, Host } from "@stencil/core";
import { WebUtils } from "../../core/utils/WebUtils";
import { ModalOptions } from "./domain/ModalOptions";
import { ModalLanguageVariables } from "./domain/ModalLanguageVariables";
import { StringUtils } from "../../core/utils/StringUtils";
import focusTrap from "focus-trap";
import { DomUtils, ScrollDirectionEnum } from "../../core/utils/DomUtils";
let ModalComponent = ModalComponent_1 = class ModalComponent {
    constructor() {
        this.shown = false;
        this.modalTitle = StringUtils.empty();
        this.options = ModalComponent_1.DEFAULT_OPTIONS;
        this.styleClasses = StringUtils.empty();
        this.languageString = StringUtils.empty();
    }
    async toggleModal(shown) {
        if (shown) {
            this.modalEvent.emit({ eventType: ModalComponent_1.EVENT_MODAL_SHOW });
            this.element.classList.add(ModalComponent_1.CLASS_READY_TO_SHOW);
            await WebUtils.sleep(WebUtils.getTransitionDuration(this.element));
            if (this.options.backdrop) {
                this.backdropElement.classList.add(ModalComponent_1.CLASS_SHOW);
                await WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement));
            }
            this.modalDialogElement.classList.add(ModalComponent_1.CLASS_SHOW);
            this.modalEvent.emit({ eventType: ModalComponent_1.EVENT_MODAL_SHOWN });
        }
        else {
            this.modalEvent.emit({ eventType: ModalComponent_1.EVENT_MODAL_HIDE });
            this.modalDialogElement.classList.remove(ModalComponent_1.CLASS_SHOW);
            await WebUtils.sleep(WebUtils.getTransitionDuration(this.element));
            if (this.backdropElement) {
                this.backdropElement.classList.remove(ModalComponent_1.CLASS_SHOW);
                await WebUtils.sleep(WebUtils.getTransitionDuration(this.backdropElement));
            }
            this.element.classList.remove(ModalComponent_1.CLASS_READY_TO_SHOW);
            this.modalEvent.emit({ eventType: ModalComponent_1.EVENT_MODAL_HIDDEN });
        }
        this.toggleFocusTrap();
    }
    async show() {
        this.shown = true;
    }
    async hide() {
        this.shown = false;
    }
    async toggle() {
        this.shown = !this.shown;
    }
    async isShown() {
        return this.shown;
    }
    modalEventHandler(modalEvent) {
        switch (modalEvent.detail.eventType) {
            case ModalComponent_1.EVENT_MODAL_SHOW:
                this.lastActiveElement = document.activeElement || document.body;
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(true, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.add(ModalComponent_1.CLASS_MODAL_OPEN);
                }
                break;
            case ModalComponent_1.EVENT_MODAL_SHOWN:
                break;
            case ModalComponent_1.EVENT_MODAL_HIDE:
                if (document.body.scrollHeight > window.innerHeight) {
                    DomUtils.setScrollbarPaddingReplacement(false, ScrollDirectionEnum.VERTICAL);
                    document.body.classList.remove(ModalComponent_1.CLASS_MODAL_OPEN);
                }
                this.lastActiveElement.focus();
                break;
            case ModalComponent_1.EVENT_MODAL_HIDDEN:
                break;
            default:
                throw new Error("Unsupported modal event type.");
        }
    }
    componentWillLoad() {
        this.languageVariables = new ModalLanguageVariables();
        try {
            const parsedJson = JSON.parse(this.languageString);
            Object.keys(this.languageVariables).forEach((key) => {
                if (parsedJson.hasOwnProperty(key)) {
                    this.languageVariables[key] = parsedJson[key];
                }
                else {
                    console.error(`Required language variable '${key}' not passed through 'language-string' property.`);
                }
            });
        }
        catch (e) {
            throw new Error("Invalid JSON string in language-string attribute.");
        }
    }
    componentDidLoad() {
        const footerContentElement = this.element.querySelector('.modal-footer');
        if (StringUtils.isEmpty(footerContentElement.innerHTML.trim())) {
            footerContentElement.classList.add('no-content');
        }
        const headerContentElement = this.element.querySelector('.modal-header');
        if (StringUtils.isEmpty(this.modalTitle)) {
            headerContentElement.classList.add('no-header-content');
        }
        this.dialogTitle = this.modalContentElement.querySelector("h1, h2, h3, h4, h5, h6");
        this.dialogDescription = this.modalContentElement.querySelector("p");
        this.dialogTitle && (this.dialogTitle.id = this.dialogTitle.id || "dialog-title");
        this.dialogDescription && (this.dialogDescription.id = this.dialogDescription.id || "dialog-description");
        this.focusTrap = focusTrap(this.element, { initialFocus: this.modalDialogElement });
    }
    toggleFocusTrap() {
        (this.shown) ? this.focusTrap.activate() : this.focusTrap.deactivate();
    }
    render() {
        return (h(Host, { shown: this.shown, onSntDismiss: this.hide.bind(this) },
            h("snt-layout", { padding: "none" },
                h("div", { id: "backdrop", class: "modal-backdrop fade", ref: (thisElement) => this.backdropElement = thisElement }),
                h("div", { class: WebUtils.generateClasses(["modal", "fade"], this.styleClasses), tabindex: "-1", role: "dialog", "aria-labelledby": this.dialogTitle ? this.dialogTitle['id'] : null, "aria-describedby": this.dialogDescription ? this.dialogDescription['id'] : null, "aria-hidden": (this.shown) ? "false" : "true", ref: (thisElement) => this.modalDialogElement = thisElement, onClick: (event) => (event.target == event.currentTarget && this.hide()), onKeyDown: (event) => (WebUtils.isValidEscapeKey(event) && this.hide()) },
                    h("div", { class: "modal-dialog modal-dialog-centered", role: "document" },
                        h("div", { class: "modal-content", ref: (elem) => this.modalContentElement = elem },
                            h("div", { class: "modal-header" }),
                            h("div", { class: "modal-body" },
                                h("slot", null)),
                            h("div", { class: "modal-footer" },
                                h("slot", { name: "footer" })),
                            h("button", { type: "button", class: "close", onClick: this.hide.bind(this) },
                                h("span", { class: "sr-only" }, this.languageVariables.close),
                                h("span", { class: "icon", "aria-hidden": "true" }))))))));
    }
};
ModalComponent.TAG_NAME = "snt-modal";
ModalComponent.DEFAULT_OPTIONS = new ModalOptions();
ModalComponent.EVENT_MODAL_SHOWN = "modal-shown";
ModalComponent.EVENT_MODAL_SHOW = "modal-show";
ModalComponent.EVENT_MODAL_HIDDEN = "modal-hidden";
ModalComponent.EVENT_MODAL_HIDE = "modal-hide";
ModalComponent.CLASS_SHOW = "show";
ModalComponent.CLASS_READY_TO_SHOW = "ready-to-show";
ModalComponent.CLASS_MODAL_OPEN = "modal-open";
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], ModalComponent.prototype, "element", void 0);
__decorate([
    Prop({ reflect: true, mutable: true }),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "shown", void 0);
__decorate([
    Prop({ reflect: true, mutable: true }),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalTitle", void 0);
__decorate([
    Prop(),
    __metadata("design:type", ModalOptions)
], ModalComponent.prototype, "options", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], ModalComponent.prototype, "styleClasses", void 0);
__decorate([
    Prop({ reflect: true, mutable: true }),
    __metadata("design:type", String)
], ModalComponent.prototype, "languageString", void 0);
__decorate([
    Event({ bubbles: true }),
    __metadata("design:type", Object)
], ModalComponent.prototype, "modalEvent", void 0);
__decorate([
    Watch("shown"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModalComponent.prototype, "toggleModal", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModalComponent.prototype, "show", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModalComponent.prototype, "hide", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModalComponent.prototype, "toggle", null);
__decorate([
    Method(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModalComponent.prototype, "isShown", null);
__decorate([
    Listen("modalEvent"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "modalEventHandler", null);
ModalComponent = ModalComponent_1 = __decorate([
    Component({
        tag: 'snt-modal',
        styleUrl: 'modal-component.scss',
        shadow: false
    })
], ModalComponent);
export { ModalComponent };
