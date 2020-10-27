import { Component } from '@angular/core';
import { slideInOutAnimation } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInOutAnimation],

  // attach the fade in animation to the host (root) element of this component
 
})
export class AppComponent {
    title = 'layout';
    counter = 0;
    selectedDev1 = true;
    selectedDev2 = false;
    selectedDev3 = false;
    ngOninit() { }
    onSelect(idx) {
        this.selectedDev1 = false;
        this.selectedDev2 = false;
        this.selectedDev3 = false;
        switch (idx) {
            case 1:
                this.selectedDev1 = true;
                break;
            case 2:
                this.selectedDev2 = true;
                break;
            case 3:
                this.selectedDev3 = true;
                break;
        }
    }

}
