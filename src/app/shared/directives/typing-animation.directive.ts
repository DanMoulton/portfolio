import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[typingAnimation]'
})
export class TypingAnimationDirective implements AfterViewInit {
    @Input('typingAnimation') sentences!: string | string[];

    private textCursorBlinkingAnimation = [
        { borderRightColor: '#ffffffbf' },
        { borderRightColor: 'transparent' }
    ];
    private textCursorBlinkingTiming = {
        duration: 1000,
        iterations: Infinity
    };
    private typingAnimation: any;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.setTypingAnimation();
        this.typeSentences();
    }

    private setTypingAnimation(): void {
        this.elementRef.nativeElement.setAttribute('style', 'border-right: 1px solid #ffffffbf');
        this.typingAnimation = this.elementRef.nativeElement.animate(this.textCursorBlinkingAnimation, this.textCursorBlinkingTiming);
        this.typingAnimation.pause();
    }

    private async typeSentences(): Promise<void> {
        for (let i = 0; i < [this.sentences].flat().length; i++) {
            this.typingAnimation.pause();

            await new Promise<void>(resolve => {
                setTimeout(async () => {
                    await this.typeSentence(this.sentences[i]);

                    resolve();
                }, 500);
            });

            this.typingAnimation.play();

            await new Promise<void>(resolve => {
                setTimeout(async () => {
                    if (i < ([this.sentences].flat().length - 1)) {
                        await this.deleteSentence(this.sentences[i]);
                    }

                    resolve();
                }, 1500);
            });
        }
    }

    private typeSentence(sentence: string): Promise<void> {
        return new Promise(resolve => {
            for (let i = 0; i < sentence.length; i++) {
                setTimeout(() => {
                    this.elementRef.nativeElement.innerHTML += sentence[i];

                    if (i === (sentence.length - 1)) {
                        resolve();
                    }
                }, i * 80);
            }
        });
    }

    private deleteSentence(sentence: string): Promise<void> {
        return new Promise(resolve => {
            for (let i = 0; i < sentence.length; i++) {
                setTimeout(() => {
                    this.elementRef.nativeElement.innerHTML = this.elementRef.nativeElement.innerHTML.slice(0, -1);

                    if (i === (sentence.length - 1)) {
                        this.elementRef.nativeElement.innerHTML = '';

                        resolve();
                    }
                }, i * 50);
            }
        });
    }
}
