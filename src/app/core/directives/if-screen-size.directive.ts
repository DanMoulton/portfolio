import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

type ScreenSize = 'small' | 'medium' | 'large';

@Directive({
    selector: '[ifScreenSize]'
})
export class IfScreenSizeDirective implements OnDestroy {
    @Input('ifScreenSize') set screenSize(sizes: ScreenSize | ScreenSize[]) {
        this.subscription.unsubscribe();
        this.subscription = this.breakpointObserver.observe(this.getScreenSizesToObserve(sizes))
                                                   .subscribe((state) => this.updateView(state));
    }

    private subscription = new Subscription();

    constructor(private breakpointObserver: BreakpointObserver,
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef) { }


    private getScreenSizesToObserve(sizes: string | ScreenSize[]): string[] {
        const screenSizeBreakpoints: { [key: string]: string[] } = {
            small: [Breakpoints.Small, Breakpoints.XSmall],
            medium: [Breakpoints.Medium],
            large: [Breakpoints.Large, Breakpoints.XLarge]
        };

        let screenSizesToObserve: string[] = [];

        [sizes].flat().forEach(size => {
            screenSizesToObserve = screenSizesToObserve.concat(screenSizeBreakpoints[size]);
        });

        return screenSizesToObserve;
    }

    private updateView(state: BreakpointState): void {
        if (state.matches && !this.viewContainerRef.length) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else if (!state.matches && this.viewContainerRef.length) {
            this.viewContainerRef.clear();
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
