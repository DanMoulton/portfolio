import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

type ScreenSize = 'small' | 'medium' | 'large';

@Directive({
    selector: '[ifScreenSize]'
})
export class IfScreenSizeDirective implements OnDestroy {
    @Input('ifScreenSize') set screenSize(size: ScreenSize) {
        this.subscriptions.unsubscribe();
        this.subscriptions.add(this.breakpointObserver.observe(this.screenSizes[size])
                                                      .subscribe((state) => this.updateView(state)));
    }

    private subscriptions = new Subscription();
    private screenSizes = {
        small: [Breakpoints.Small, Breakpoints.XSmall],
        medium: [Breakpoints.Medium],
        large: [Breakpoints.Large, Breakpoints.XLarge]
    };

    constructor(private breakpointObserver: BreakpointObserver,
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef) { }

    private updateView(state: BreakpointState): void {
        if (state.matches && !this.viewContainerRef.length) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else if (!state.matches && this.viewContainerRef.length) {
            this.viewContainerRef.clear();
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
