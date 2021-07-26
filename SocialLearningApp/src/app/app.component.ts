import { Component } from '@angular/core';

@Component({//burası component biliglerinin tutulduğu yer, isimlendirme yanlış olursa, hata berir
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialLearningApp';
}
