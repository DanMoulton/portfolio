import { Component, EventEmitter, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-game-emulator',
    templateUrl: './game-emulator.component.html',
    styleUrls: ['./game-emulator.component.scss']
})
export class GameEmulatorComponent implements OnDestroy, OnInit {
    @Output() closeEmulatorEvent = new EventEmitter<void>();

    constructor(private renderer: Renderer2) { }

    ngOnInit() {
        window.document.getElementById('blurred-header')!.style.zIndex = '10';
        window.document.getElementById('brand-logo')!.style.zIndex = '10';
        window.document.getElementById('menu-btn')!.style.zIndex = '10';

        this.importEmulatorScripts();
    }

    public importEmulatorScripts(): void {
        const emulatorConfigScript = this.renderer.createElement('script');
        emulatorConfigScript.innerHTML = `
            EJS_player = '#game';
            EJS_biosUrl = '';
            EJS_gameUrl = '${environment.romURL}';
            EJS_pathtodata = "assets/scripts/emulator/"
            EJS_core = 'gb';
            EJS_oldCores = true;
            EJS_startOnLoaded = true;
            EJS_Buttons = {
                playPause: false,
                restart: false,
                mute: false,
                settings: false,
                fullscreen: false,
                saveState: false,
                loadState: false,
                screenRecord: false,
                gamepad: false,
                cheat: false,
                volume: false,
                quickSave: false,
                quickLoad: false,
                screenshot: false,
                cacheManager: false
            };
            EJS_VirtualGamepadSettings = [
                {
                    type: "button",
                    text: "B",
                    id: "b",
                    location: "right",
                    left: 25,
                    top: 65,
                    fontSize: 24,
                    bold: true,
                    input_value: 8
                },
                {
                    type: "button",
                    text: "A",
                    id: "a",
                    location: "right",
                    left: 80,
                    top: 25,
                    fontSize: 24,
                    bold: true,
                    input_value: 0
                },
                {
                    type: "dpad",
                    location: "left",
                    left: "50%",
                    right: "50%",
                    joystickInput: false,
                    inputValues: [4, 5, 6, 7]
                },
                {
                    type: "button",
                    text: "Start",
                    id: "start",
                    location: "center",
                    left: 68,
                    top: 30,
                    fontSize: 12,
                    block: true,
                    input_value: 3
                },
                {
                    type: "button",
                    text: "Select",
                    id: "select",
                    location: "center",
                    left: -4,
                    top: 30,
                    fontSize: 12,
                    block: true,
                    input_value: 2
                }
            ]
        `;
        this.renderer.appendChild(document.head, emulatorConfigScript);
    
        const emulatorLoaderScript = this.renderer.createElement('script');
        emulatorLoaderScript.src = 'assets/scripts/emulator/loader.js';
        this.renderer.appendChild(document.head, emulatorLoaderScript);
    }

    public closeEmulator() {
        this.removeEmulatorScripts();

        this.closeEmulatorEvent.emit();
    }

    public removeEmulatorScripts(): void {
        document.querySelectorAll('script[src*="emulator"]').forEach(element => {
            element.remove();
        });
        document.querySelectorAll('link[href*="emulator"]').forEach(element => {
            element.remove();
        });
    }

    ngOnDestroy() {
        window.document.getElementById('blurred-header')!.style.zIndex = '30';
        window.document.getElementById('brand-logo')!.style.zIndex = '50';
        window.document.getElementById('menu-btn')!.style.zIndex = '40';

        this.removeEmulatorScripts();
    }
}
