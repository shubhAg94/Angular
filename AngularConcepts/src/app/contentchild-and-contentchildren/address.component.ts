import { Component, ContentChild } from '@angular/core';
import { CityComponent } from './city.component';

@Component({
  selector: 'address',
  template: `
        <b>{{title}}</b>
	<br/>City: {{city?.cityId}} - {{city?.cityName}} 
  `
})
export class AddressComponent {
	@ContentChild(CityComponent) city: CityComponent;
	title = 'Address';
}