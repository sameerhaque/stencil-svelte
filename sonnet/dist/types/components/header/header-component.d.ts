export declare class HeaderComponent {
    static readonly TAG_NAME = "snt-header";
    element: HTMLElement;
    private layout;
    private secondaryNavPane;
    private navbarCollapse;
    private secondaryNavDesktop;
    private secondaryNavMobile;
    private primaryNav;
    private mainPanel;
    private static readonly SECONDARY_NAV_DESKTOP_SLOT_NAME;
    private static readonly SECONDARY_NAV_MOBILE_SLOT_NAME;
    private static readonly PRIMARY_NAV_SLOT_NAME;
    private static readonly NAVBAR_BRAND_SLOT_NAME;
    styleClasses: string;
    fixed: boolean;
    languageJson: string;
    mainContentId: string;
    active: boolean;
    private shrunk;
    private languageStrings;
    private focusTrap;
    private gaqButtonActionData;
    private searchBar;
    private searchPanel;
    onToggleSearch(evt: CustomEvent): void;
    toggleActive(active?: boolean): Promise<boolean>;
    setActive(active: boolean): Promise<boolean>;
    onScroll(_evt: any): void;
    onViewportChanged(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private registersubComponents;
    private setSubComponentClasses;
    private insertAdditionalElements;
    private shrink;
    private toggleFocusTrap;
    render(): any;
}