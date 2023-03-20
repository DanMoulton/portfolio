import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    public navOpen = false;

    private screenSizeSmallSubject = new BehaviorSubject<boolean>(false);
    private splashScreenAnimationSubject = new BehaviorSubject<boolean>(false);
    private logoVisibilitySubject = new BehaviorSubject<boolean>(true);

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

    public setLogoVisibilityState(visible: boolean): void {
        this.logoVisibilitySubject.next(visible);
    }

    public get getLogoVisibilityState$(): Observable<boolean> {
        return this.logoVisibilitySubject.asObservable();
    }
}
