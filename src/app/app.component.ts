import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-player-panel';
  public displayCondition: boolean = true;

  public showOrHidePanel(id: string) {
    const doc = document.getElementById(id);

    doc.classList.toggle('show');
  }

  public playOrPause() {
    this.displayCondition = !this.displayCondition;
  }
}
