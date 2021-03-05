var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Element, State, Watch, h } from '@stencil/core';
let SntVerticalTabs = class SntVerticalTabs {
    constructor() {
        this.activeTabClass = 'active-tab';
        this.findFirstSelectedTab = () => {
            let selectedIdx;
            for (const [i, tab] of this.tabs.entries()) {
                tab.setAttribute('role', 'tab');
                if (i == 0) {
                    tab.setAttribute('tabindex', '0');
                }
                else {
                    tab.setAttribute('tabindex', '-1');
                }
                if (tab.classList.contains('selected')) {
                    tab.classList.remove('selected');
                    selectedIdx = i;
                }
            }
            return selectedIdx;
        };
        this.selectTab = (idx = null) => {
            for (let i = 0, tab; (tab = this.tabs[i]); i = i + 1) {
                const select = i === idx;
                tab.setAttribute('tabindex', select ? -1 : i + 1);
                tab.setAttribute('aria-selected', select);
                this.panels[i].setAttribute('aria-hidden', !select);
            }
        };
        this.tabTitleClick = e => {
            if (e.target.classList.contains('title')) {
                this.selected = this.tabs.indexOf(e.target);
                e.target.focus();
                //Set active states on paragraph tag
                const findAllParagraphs = this.el.querySelectorAll('p');
                findAllParagraphs.forEach(p => {
                    if (p.classList.contains(this.activeTabClass))
                        p.classList.remove(this.activeTabClass);
                });
                e.target.parentElement.classList.add(this.activeTabClass);
            }
        };
        this.tabKeyDown = e => {
            let idx = 0;
            switch (e.code) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    e.preventDefault();
                    idx = this.selected - 1;
                    idx = idx < 0 ? this.tabs.length - 1 : idx;
                    this.tabs[idx].click();
                    this.tabs.forEach((e, i) => {
                        e.setAttribute('tabindex', '-1');
                        (i == idx) ? e.setAttribute('tabindex', '0') : false;
                    });
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    e.preventDefault();
                    (this.selected != undefined) ? idx = this.selected + 1 : idx = 1;
                    if (isNaN(idx)) {
                        this.tabs[1].click();
                    }
                    else {
                        if (idx == this.tabs.length)
                            this.tabs[0].click();
                        if (idx < this.tabs.length)
                            this.tabs[idx].click();
                    }
                    this.tabs.forEach((e, i) => {
                        e.setAttribute('tabindex', '-1');
                        (i == idx) ? e.setAttribute('tabindex', '0') : false;
                    });
                    break;
                case 'Enter':
                    e.preventDefault();
                    e.target.click();
                    break;
                default:
                    break;
            }
        };
    }
    onSelectedChange(index) {
        this.selectTab(index);
    }
    componentDidLoad() {
        function createVerticalMenu(title, id) {
            let li = document.createElement('li');
            li.classList.add('tab-item');
            li.setAttribute('role', 'tablist');
            li.innerHTML = `<p><a class="title" tabindex="-1" id=${id} data-text=${title}>${title}</a></p>`;
            return li;
        }
        if (this.el.querySelectorAll('snt-data').length > 0) {
            const verticalElement = this.el.querySelector('.vertical-tab-items');
            this.el.querySelectorAll('snt-data').forEach(function (el) {
                let { link } = JSON.parse(el.data);
                try {
                    verticalElement.appendChild(createVerticalMenu(link.title, link.id));
                }
                catch (e) {
                    console.log(e);
                }
            });
        }
        this.el.querySelectorAll('.panel-wrapper section')[0].setAttribute('aria-hidden', 'false');
        this.el.setAttribute('role', 'tablist');
        const tabItems = Array.from(this.el.querySelectorAll('.title'));
        const panelsSlot = Array.from(this.el.querySelectorAll('.panel'));
        this.tabs = tabItems;
        this.panels = panelsSlot;
        this.selected = this.findFirstSelectedTab();
        tabItems.forEach((item, i) => {
            item.addEventListener('click', event => {
                event.preventDefault();
                this.tabTitleClick(event);
            });
            item.addEventListener('keydown', e => { this.tabKeyDown(e); });
            item.setAttribute('id', item.id);
            item.setAttribute('aria-controls', item.id + '-tab');
            //adding active class to the first tab
            if (i === 0) {
                item.parentElement.classList.add(this.activeTabClass);
                item.setAttribute('aria-selected', 'true');
            }
            for (const [index, panel] of this.panels.entries()) {
                panel.setAttribute('role', 'tabpanel');
                panel.setAttribute('id', 'tab-' + index);
            }
        });
    }
    componentDidUnload() {
        const tabItems = Array.from(this.el.querySelectorAll('.title'));
        tabItems.forEach(item => {
            item.removeEventListener('click', e => { this.tabTitleClick(e); });
        });
        tabItems.forEach(item => {
            item.removeEventListener('click', e => { this.tabKeyDown(e); });
        });
    }
    render() {
        return [
            h("snt-layout", null,
                h("div", { class: "tab-wrapper" },
                    h("div", { class: "tab-header" },
                        h("ul", { class: "vertical-tab-items" })),
                    h("slot", null)))
        ];
    }
};
__decorate([
    Element(),
    __metadata("design:type", HTMLElement)
], SntVerticalTabs.prototype, "el", void 0);
__decorate([
    State(),
    __metadata("design:type", Object)
], SntVerticalTabs.prototype, "selected", void 0);
__decorate([
    Watch('selected'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SntVerticalTabs.prototype, "onSelectedChange", null);
SntVerticalTabs = __decorate([
    Component({
        tag: 'snt-vertical-tabs',
        styleUrl: 'snt-vertical-tabs.scss',
        shadow: false
    })
], SntVerticalTabs);
export { SntVerticalTabs };
