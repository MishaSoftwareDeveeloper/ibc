import {trigger, transition, query, style, animate, group } from '@angular/animations';

export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('animSlider', [
        
     
        transition(':increment', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [style({ transform: 'translateX(100%)' }), animate('.8s ease-out', style({ transform: 'translateX(0%)' }))], {
                    optional: true,
                }),
                query(':leave', [style({ transform: 'translateX(0%)' }), animate('.8s ease-out', style({ transform: 'translateX(-100%)' }))], {
                    optional: true,
                }),
            ]),

        ]),
        transition(':decrement', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.8s ease-out', style({ transform: 'translateX(0%)' }))], {
                    optional: true,
                }),
                query(':leave', [style({ transform: 'translateX(0%)' }), animate('.8s ease-out', style({ transform: 'translateX(100%)' }))], {
                    optional: true,
                }),
            ]),
        ]),

    ]);