import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  public panelPlay() {
    const id = localStorage.getItem('IDX');

    if (!id) {
      alert('Please, start listen music in menu');
    } else {
      const audio = document.getElementById('player' + id) as HTMLMediaElement;
      document.getElementById('play' + id).style.display = 'none';
      document.getElementById('pause' + id).style.display = 'block';
      document.getElementById('panelPlay').style.display = 'none';
      document.getElementById('panelPause').style.display = 'inline-block';

      audio.play();
      audio.addEventListener('ended', () => {
        audio.currentTime = 0;

        this.panelPause();
      });
    }
  }

  public panelPause() {
    const id = localStorage.getItem('IDX');
    (document.getElementById('player' + id) as HTMLMediaElement).pause();
    document.getElementById('pause' + id).style.display = 'none';
    document.getElementById('play' + id).style.display = 'block';
    document.getElementById('panelPause').style.display = 'none';
    document.getElementById('panelPlay').style.display = 'inline-block';
  }

  public play(idx: number) {
    const id = `player${idx}`;
    const playId = `play${idx}`;
    const pauseId = `pause${idx}`;

    const oldIDX = localStorage.getItem('IDX');

    if (!oldIDX) {
      localStorage.setItem('IDX', idx.toString());
    } else if (+oldIDX !== idx) {
      const oldId = `player${oldIDX}`;
      const oldPlayId = `play${oldIDX}`;
      const oldPauseId = `pause${oldIDX}`;

      (document.getElementById(oldId) as HTMLMediaElement).pause();
      document.getElementById(oldPauseId).style.display = 'none';
      document.getElementById(oldPlayId).style.display = 'inline-block';

      localStorage.setItem('IDX', idx.toString());
    }

    const audio = document.getElementById(id) as HTMLMediaElement;
    document.getElementById(playId).style.display = 'none';
    document.getElementById(pauseId).style.display = 'inline-block';
    document.getElementById('panelPlay').style.display = 'none';
    document.getElementById('panelPause').style.display = 'inline-block';

    audio.play();
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;

      this.pause(+localStorage.getItem('IDX'));
    });
  }

  public pause(idx: number) {
    const id = `player${idx}`;
    const playId = `play${idx}`;
    const pauseId = `pause${idx}`;

    (document.getElementById(id) as HTMLMediaElement).pause();
    document.getElementById(pauseId).style.display = 'none';
    document.getElementById(playId).style.display = 'inline-block';
    document.getElementById('panelPause').style.display = 'none';
    document.getElementById('panelPlay').style.display = 'inline-block';
  }
}
