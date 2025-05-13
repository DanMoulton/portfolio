import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    public navOpen = false;
    private screenSizeSmallSubject = new BehaviorSubject<boolean>(false);
    private splashScreenAnimationSubject = new BehaviorSubject<boolean>(false);
    private headerVisibilitySubject = new BehaviorSubject<boolean>(true);

    public setScreenSizeSmallState(value: boolean): void {
        this.screenSizeSmallSubject.next(value);
    }

    public get getScreenSizeSmallState$(): Observable<boolean> {
        return this.screenSizeSmallSubject.asObservable();
    }

    public setSplashScreenAnimationFinishedState(): void {
        this.splashScreenAnimationSubject.next(true);
    }

    public get getSplashScreenAnimationFinishedState$(): Observable<boolean> {
        return this.splashScreenAnimationSubject.asObservable();
    }

    public setHeaderVisibilityState(visible: boolean): void {
        this.headerVisibilitySubject.next(visible);
    }

    public get getHeaderVisibilityState$(): Observable<boolean> {
        return this.headerVisibilitySubject.asObservable();
    }
}
