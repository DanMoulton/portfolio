import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-game-emulator',
    templateUrl: './game-emulator.component.html',
    styleUrls: ['./game-emulator.component.scss']
})
export class GameEmulatorComponent implements OnInit {
    @Output() closeEmulatorEvent = new EventEmitter<void>();

    constructor(private renderer: Renderer2) { }

    ngOnInit() {
        window.document.getElementById('blurred-header')!.style.zIndex = '10';
        window.document.getElementById('brand-logo')!.style.zIndex = '10';
        window.document.getElementById('menu-btn')!.style.zIndex = '10';

        this.importEmulatorScripts();
    }

    public importEmulatorScripts(): void {
        const emulatorScript = this.renderer.createElement('script');
        emulatorScript.src = 'assets/scripts/emulator/loader.js';

        this.renderer.appendChild(document.head, emulatorScript);
    }

    public closeEmulator() {
        this.removeEmulatorScripts();

        this.closeEmulatorEvent.emit();
    }

    public removeEmulatorScripts(): void {
        document.querySelectorAll('script[src*="emulator"]').forEach(element => {
            element.remove();
        });
        document.querySelectorAll('script[src*="EmulatorJS"]').forEach(element => {
            element.remove();
        });
        document.querySelectorAll('link[href*="emulator"]').forEach(element => {
            element.remove();
        });
        document.querySelectorAll('link[href*="EmulatorJS"]').forEach(element => {
            element.remove();
        });
    }
}
