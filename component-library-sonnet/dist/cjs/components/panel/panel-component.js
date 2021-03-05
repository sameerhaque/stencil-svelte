var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { h, Component, Element, Host } from "@stencil/core";
import { ViewportObserverManager } from "../../core/components/viewport/observer/ViewportObserverManager";
let PanelComponent = class PanelComponent {
    componentDidLoad() {
        const configEl = this.element.querySelector("snt-data");
        if (configEl) {
            const config = JSON.parse(configEl.innerHTML);
            // Create array from JSON obj keys, cast to number array, sort descending
            const viewportSizes = ((Object.keys(config.viewport)).map(Number)).sort((a, b) => b - a);
            ViewportObserverManager.getInstance().observe(this.element, (entries) => {
                const entry = entries[0];
                for (let viewportSize of viewportSizes) {
                    if (entry.contentRect.width >= viewportSize) {
                        console.log(entry.contentRect.width + " >= " + viewportSize);
                        const style = config.viewport[viewportSize].style;
                        for (let styleKey of (Object.keys(style))) {
                            this.element.style[styleKey] = style[styleKey];
                        }
                        const elClass = config.viewport[viewportSize]["class"];
                        if (elClass) {
                            for (let classVal of elClass) {
                                if (!this.element.classList.contains(classVal)) {
                                    this.element.classList.add(classVal);
                                }
                            }
                        }
                        break;
                    }
                }
            });
        }
    }
    render() {
        return (h(Host, null,
            h("snt-layout", null,
                h("slot", null))));
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], PanelComponent.prototype, "element", void 0);
PanelComponent = __decorate([
    Component({
        tag: 'snt-panel',
        styleUrl: 'panel-component.scss',
        shadow: false
    })
], PanelComponent);
export { PanelComponent };
