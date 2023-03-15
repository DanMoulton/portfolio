import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { StateService } from '../../shared/services/state.service';

type ScreenSize = 'small' | 'medium' | 'large';

@Directive({
    selector: '[appIfScreenSize]'
})
export class IfScreenSizeDirective implements OnDestroy {

    @Input('appIfScreenSize') set screenSize(sizes: ScreenSize | ScreenSize[]) {
        this.subscription.unsubscribe();
        this.subscription = this.breakpointObserver.observe(this.getScreenSizesToObserve(sizes))
            .subscribe((state) => this.updateView(state));
    }

    private subscription = new Subscription();

    constructor(private breakpointObserver: BreakpointObserver,
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private stateService: StateService) { }


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

            if (state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small]) {
                this.stateService.setScreenSizeSmallState(true);
            }
            else {
                this.stateService.setScreenSizeSmallState(false);
            }
        } else if (!state.matches && this.viewContainerRef.length) {
            this.viewContainerRef.clear();
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
