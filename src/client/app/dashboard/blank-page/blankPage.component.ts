import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'blank-page',
    templateUrl: './blank-page.component.html'
})

export class BlankPageComponent {
public items:any;

	 constructor() { 
    this.items = ['First', 'Second', 'Third'];
  }
}
