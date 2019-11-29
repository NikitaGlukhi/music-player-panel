import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-player-panel';
  public showBtnCondition: boolean = true;
  public musicData = {
    defaultSongs: [
      {
        title: 'Fighting The World',
        albumName: 'Fighting The World',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/01.%20Fighting%20The%20World.mp3?generation=1574680231796761&alt=media',
        uploaded: '1575014296317',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Defender',
        albumName: 'Fighting The World',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/05.%20Defender.mp3?generation=1574680237123034&alt=media',
        uploaded: '1575014296323',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Animals',
        albumName: 'Sign Of The Hammer',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/02.%20Animals.mp3?generation=1574680233413720&alt=media',
        uploaded: '1575014296329',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Death Tone',
        albumName: 'Battle Hymns',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/01.%20Death%20Tone.mp3?generation=1574680235768642&alt=media',
        uploaded: '1575014296333',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Thor [The Powerhead]',
        albumName: 'Sign Of The Hammer',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/03.%20Thor%20%5BThe%20Powerhead%5D.mp3?generation=1574680233761794&alt=media',
        uploaded: '1575014296335',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Fast Taker',
        albumName: 'Battle Hymns',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/03.%20Fast%20Taker.mp3?generation=1574680230859252&alt=media',
        uploaded: '1575014296337',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Carry On',
        albumName: 'Fighting The World',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/03.%20Carry%20On.mp3?generation=1574680240112184&alt=media',
        uploaded: '1575014296339',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Each Dawn I Die',
        albumName: 'Hail To England',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/02.%20Each%20Dawn%20I%20Die.mp3?generation=1574680232242331&alt=media',
        uploaded: '1575014296342',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Hail To England',
        albumName: 'Hail To England',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/04.%20Hail%20To%20England.mp3?generation=1574680234556914&alt=media',
        uploaded: '1575014296344',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      },
      {
        title: 'Warriors Of The World United',
        albumName: 'Warriors Of The World [Limited Edition. Super Audio CD]',
        url: 'https://storage.googleapis.com/download/storage/v1/b/audio-files11/o/08.%20Warriors%20Of%20The%20World%20United.mp3?generation=1574680238134545&alt=media',
        uploaded: '1575014296345',
        isNew: true,
        countOfListening: 0,
        artist: {
          id: 1,
          artist: 'Manowar'
        }
      }
    ],
    userSongs: []
  };

  public showOrHidePanel(id: string) {
    const doc = document.getElementById(id);

    doc.classList.toggle('show');
  }

  public playOrPause() {
    this.showBtnCondition = !this.showBtnCondition;
  }

  public play(id: string) {
    const doc = document.getElementById(id) as HTMLMediaElement;
    doc.play();
  }

  public pause(id: string) {
    const doc = document.getElementById(id) as HTMLMediaElement;
    doc.pause();
  }
}
