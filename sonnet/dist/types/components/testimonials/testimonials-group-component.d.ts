import { EventEmitter } from '../../stencil-public-runtime';
export declare class TestimonialsGroupComponent {
    element: HTMLElement;
    groupId: string;
    groupHeadline: string;
    showSlide: EventEmitter;
    hideSlide: EventEmitter;
    selected: number;
    slideSelector: string;
    indicatorSelector: string;
    prevSelector: string;
    nextSelector: string;
    cycleType: string | boolean;
    ride: boolean;
    wrap: boolean;
    private listeners;
    private nextListener;
    private prevListener;
    private slideElements;
    private indicatorElements;
    private prevElement;
    private nextElement;
    private currentSlide;
    private x0;
    private _carouselContainer;
    unify(e: any): any;
    lock(e: any): void;
    move(e: any): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    getPrevNextButtons(): void;
    getSlideElements(): void;
    getIndicatorElements(): void;
    addClickHandler(element: any, fn?: () => Promise<void>): () => void;
    indicatorClickHandler(element: any, index: any): void;
    addActiveClass(element: any): void;
    removeActiveClass(elements?: NodeListOf<Element>): void;
    onShow(index?: number): Promise<void>;
    onHide(index?: number): Promise<void>;
    next(): Promise<void>;
    prev(): Promise<void>;
    render(): any;
}