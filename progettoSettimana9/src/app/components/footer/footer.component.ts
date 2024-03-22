import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ferrari: string = 'Ferrari';
  lamborghini: string = 'Lamborghini';
  porsche: string = 'Porsche';
  rollsRoyce: string = 'Rolls-Royce';
}
