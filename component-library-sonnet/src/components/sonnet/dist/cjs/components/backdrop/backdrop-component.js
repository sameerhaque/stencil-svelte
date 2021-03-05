var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Event, h, Host, Listen, Prop } from "@stencil/core";
import { EventUtils } from "../../core/utils/EventUtils";
let BackdropComponent = class BackdropComponent {
    constructor() {
        this.lastClick = -10000;
        /**
         * If `true`, the backdrop can be clicked and will emit `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdroo will stop propagation on tap
         */
        this.stopPropagation = true;
    }
    onTouchStart(evt) {
        this.lastClick = EventUtils.now(evt);
        this.emitTap(evt);
    }
    onMouseDown(evt) {
        if (this.lastClick < EventUtils.now(evt) - 2500) {
            this.emitTap(evt);
        }
    }
    emitTap(evt) {
        if (this.stopPropagation) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        if (this.tappable) {
            this.sntBackdropTap.emit(evt);
        }
    }
    render() {
        return (h(Host, { tabindex: "-1" }));
    }
};
BackdropComponent.TAG_NAME = "snt-backdrop";
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], BackdropComponent.prototype, "tappable", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Boolean)
], BackdropComponent.prototype, "stopPropagation", void 0);
__decorate([
    Event(),
    __metadata("design:type", Object)
], BackdropComponent.prototype, "sntBackdropTap", void 0);
__decorate([
    Listen('touchstart', { passive: false, capture: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TouchEvent]),
    __metadata("design:returntype", void 0)
], BackdropComponent.prototype, "onTouchStart", null);
__decorate([
    Listen('click', { passive: false, capture: true }),
    Listen('mousedown', { passive: false, capture: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TouchEvent]),
    __metadata("design:returntype", void 0)
], BackdropComponent.prototype, "onMouseDown", null);
BackdropComponent = __decorate([
    Component({
        tag: 'snt-backdrop',
        styleUrl: "backdrop-component.scss",
        shadow: false
    })
], BackdropComponent);
export { BackdropComponent };
