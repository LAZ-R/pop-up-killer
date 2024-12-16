import { APP_NAME, APP_VERSION } from "../app-properties.js";
import { getSvgIcon } from "./services/icons.service.js";
import { requestWakeLock } from './utils/wakelock.js' 
import { getFormatedMilliseconds, getRandomIntegerBetween, setHTMLTitle } from "./utils/UTILS.js";
import { getRandomPopupObject } from "./services/popup.service.js";

/* ########################################################### */
/* VARIABLES */
/* ########################################################### */

const MAIN = document.getElementById('main');
const FOOTER = document.getElementById('footer');

const ding = new Audio('../medias/audio/dingWin95.mp3');
const tada = new Audio('../medias/audio/tadaWin95.mp3');
const startup = new Audio('../medias/audio/startupWin95.mp3');
const glitch = new Audio('../medias/audio/glitch.mp3');



/* ########################################################### */
/* FUNCTIONS */
/* ########################################################### */

// USER ACTIONS ///////////////////////////////////////////////////////////////////////////////////

const onCoverClick = () => {
  document.getElementById('cover').style.opacity = 0;
  document.getElementById('cover').remove();
  document.getElementById('body').style.cursor = 'progress';
  startup.play();
  setTimeout(() => {
    FOOTER.style.opacity = 1;
    setTimeout(() => {
      document.getElementById('browserButton').style.opacity = 1;
      document.getElementById('main').style.opacity = 1;
      setDownloadParadisePage();
    }, 1200);
  }, 1000);
}
window.onCoverClick = onCoverClick;

const onStartGameClick = () => {
  document.getElementById('startGameButton').setAttribute('disabled', true);
  startGame();
}
window.onStartGameClick = onStartGameClick;

const onPopupClose = (popupId) => {
  document.getElementById(`popup${popupId}`).remove();
  closedPopUp += 1;
  if (popupCount - closedPopUp == 0) {
    setIsComplete();
  }
}
window.onPopupClose = onPopupClose;

const onBackClick = () => {
  if (isComplete) {
    setDownloadParadisePage();
    isComplete = false;
  }
}
window.onBackClick = onBackClick;

const onClockClick = () => {
  clicks += 1;
  if (clicks === 3) {
    clicks = 0
    isNsfw = !isNsfw;
    if (isNsfw) {
      document.getElementById('ieLogo').classList.add('pinked');
    } else {
      document.getElementById('ieLogo').classList.remove('pinked');
    }
    //console.log(`is NSFW : ${isNsfw}`);
  }
}
window.onClockClick = onClockClick;

// AUTO ///////////////////////////////////////////////////////////////////////////////////////////

const getCurrentHour = () => {
  // FR
  const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
  const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
  return `${hours}:${minutes}`;

  // EN
  /* const hours = new Date().getHours() <= 12 ? new Date().getHours() : new Date().getHours() - 12;
  const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
  return `${hours}:${minutes} ${new Date().getHours() <= 12 ? 'AM' : 'PM'}`; */
}

const setDownloadParadisePage = () => {
  document.getElementById('ieContent').innerHTML = '';
  document.getElementById('urlAdress').innerHTML = '';
  document.getElementById('ieHeaderTitle').innerHTML = `Microsoft Internet Explorer`;
  document.getElementById('ieFooterTitle').innerHTML = `Microsoft Internet Explorer`;

  document.getElementById('body').style.cursor = 'progress';

  setTimeout(() => {
    document.getElementById('urlAdress').innerHTML = 'http://www.download-paradise.net/games/doom/win95/index.html';
    document.getElementById('ieHeaderTitle').innerHTML = `Download Paradise - DOOM (Windows 95) - Microsoft Internet Explorer`;
    document.getElementById('ieFooterTitle').innerHTML = `Download Paradise - DOOM (Windows 95) - Microsoft Internet Explorer`;
    setTimeout(() => {
      document.getElementById('ieContent').classList.add('down-paradise');
      setTimeout(() => {
        document.getElementById('ieContent').innerHTML = `
          <h1>Download Paradise</h1>
          <hr>
          <h2>DOOM <i>(Windows 95)</i></h2>
          <hr>
          <img id="doomImg" src="./medias/images/doom.jpg" style="height: calc(72px * var(--multiplicator)); display: none;" />
          <br>
          <span><b>Type:</b><span style="margin-left: calc(3px * var(--multiplicator));">First-person shooter</span></span>
          <br>
          <span><b>Developer:</b><span style="margin-left: calc(3px * var(--multiplicator));">id Software</span></span>
          <br>
          <span><b>Release year:</b><span style="margin-left: calc(3px * var(--multiplicator));">1993</span></span>
          <br>
          <span><b>Plateform:</b><span style="margin-left: calc(3px * var(--multiplicator));">Windows 95</span></span>
          <br>
          <br>
          <span><b>File:</b><span style="margin-left: calc(3px * var(--multiplicator));">DOOM_WIN95.exe</span></span>
          <br>
          <button id="startGameButton" class="start-game-button" onclick="onStartGameClick()">Download .exe</button>
          <!-- <img src="./medias/images/jolly-roger.gif" style="height: calc(24px * var(--multiplicator));" /> -->
        `;
        setTimeout(() => {
          document.getElementById('doomImg').style.display = 'block';
          document.getElementById('body').style.cursor = 'default';
        }, 1100);
      }, 1800);
    }, 1000);
  }, 1800); 
}

const startGame = () => {
  isComplete = false;
  popupCount = 0;
  closedPopUp = 0;

  setTimeout(() => {
    document.getElementById('ieContent').classList.add('glitch');
    document.getElementById('ieContent').classList.add('inverted');
    glitch.play();

    setTimeout(() => {
      document.getElementById('browserWindowHeader').classList.add('inactive');
      document.getElementById('ieMinimize').setAttribute('disabled', true);
      document.getElementById('ieMaximize').setAttribute('disabled', true);
      document.getElementById('ieClose').setAttribute('disabled', true);
      document.getElementById('ieContent').classList.remove('glitch');

      setTimeout(() => {
        showNewPopup();
        showNewPopup();
        showNewPopup();
  
        startTime = Date.now();
  
        if (!intervalId) {
          intervalId = setInterval(() => {
           showNewPopup();
          }, interval);
        }
      }, 200);
    
    }, 800);
  }, 500);
}

const showNewPopup = () => {
  MAIN.innerHTML += getRandomPopup();
  ding.play();
}

const getRandomPopup = () => {
  const randomPosition = {
    top: getRandomIntegerBetween(0, 90),
    right: getRandomIntegerBetween(0, 90),
  }
  const randomPopup = getRandomPopupObject(isNsfw);
  popupCount += 1;

  return `
    <section id="popup${popupCount}" class="window pop-up" style="top: ${randomPosition.top}%; right: ${randomPosition.right}%;">
      <div class="window-header">
        <img src="./medias/images/ie-16.png" />
        <span>${randomPopup.title}</span>
        <div class="window-header-actions">
          <button disabled="true">
            <img style="width: calc(14px * var(--multiplicator)); height: calc(12px * var(--multiplicator));" src="./medias/images/minimize.png" />
          </button>
          <button disabled disabled="true">
            <img style="width: calc(14px * var(--multiplicator)); height: calc(12px * var(--multiplicator));"  src="./medias/images/maximize.png" />
          </button>
          <button onclick="onPopupClose('${popupCount}')">
            <img style="width: calc(14px * var(--multiplicator)); height: calc(12px * var(--multiplicator));"  src="./medias/images/close.png" />
          </button>
        </div>
      </div>
      <div class="window-contextual-actions">
        <button class="contextual-action"><span>F</span>ichier</button>
        <button class="contextual-action"><span>E</span>dition</button>
      </div>
      <div class="window-content">
        <div class="content-html" style="padding: 0;">
        ${randomPopup.content}
        </div>
      </div>
    </section>
  `;
}

const setIsComplete = () => {
  isComplete = true;
  clearInterval(intervalId);
  intervalId = null;

  endTime = Date.now();
  
  document.getElementById('browserWindowHeader').classList.remove('inactive');
  document.getElementById('ieMinimize').removeAttribute('disabled');
  document.getElementById('ieMaximize').removeAttribute('disabled');
  document.getElementById('ieClose').removeAttribute('disabled');
  
  document.getElementById('ieContent').classList.remove('inverted');
  document.getElementById('ieContent').classList.remove('down-paradise');
  
  document.getElementById('urlAdress').innerHTML = 'http://www.internet-responsable.fr/jeux/pop-up-killer/index.html';
  document.getElementById('ieHeaderTitle').innerHTML = `Internet Responsable - Pop-up Killer - Microsoft Internet Explorer`;
  document.getElementById('ieFooterTitle').innerHTML = `Internet Responsable - Pop-up Killer - Microsoft Internet Explorer`;
  
  const winTitles = [
    `<h1>Félicitations, explorateur de l'Internet !</h1>`,
    `<h1>Bravo, internaute intrépide !</h1>`,
    `<h1>Mission accomplie !</h1>`,
    `<h1>Excellent travail, pionnier du cyberespace !</h1>`,
    `<h1>Victoire éclatante !</h1>`,
    `<h1>Mission réussie !</h1>`,
  ];
  
  const winMessages = [
    `<p>Les pop-ups ont tenté d'envahir ton écran, mais ton clic était trop rapide pour elles.<br>
    Le Web est à nouveau sous ton contrôle.<br>
    Garde le doigt vif et la souris prête, l'aventure ne s'arrête jamais sur la toile !</p>`,
    `<p>Tu as fermé ces fenêtres indésirables plus vite qu'un modem 56K ne se connecte !<br>
    Les pop-ups n'ont pas eu le temps de te submerger.<br>
    Continue d'arpenter le cyberespace avec cette vigilance...<br>
    La prochaine vague pourrait être plus sournoise !</p>`,
    `<p>Les fenêtres intrusives sont hors jeu, et l'écran est libéré.<br>
    Ta réactivité ferait pâlir le meilleur des surfeurs du Web.<br>
    Garde cette énergie car sur Internet, chaque clic compte pour rester maître de ton espace numérique !</p>`,
    `<p>Les pop-ups pensaient t'avoir, mais tu as cliqué avec une précision chirurgicale.<br>
    Ton écran est clair, et le Web t'appartient à nouveau.<br>
    Reste aux aguets, les pièges numériques n'ont pas dit leur dernier mot !</p>`,
    `<p>Tu as repoussé l'invasion des fenêtres intempestives avec la rapidité d'un clic bien placé.<br>
    Continue d'arpenter le réseau avec cette détermination.<br>
    La navigation est à toi, libre et sans encombre !</p>`,
    `<p>Les pop-ups sont vaincues, et ton écran respire.<br>
    La bataille contre les nuisances du Web continue, mais aujourd'hui, tu as prouvé que rien ne peut troubler ton surf maîtrisé.<br>
    Garde le cap et clique sans pitié !</p>`,
  ];
  
  document.getElementById('ieContent').innerHTML = `
    <!--${winTitles[getRandomIntegerBetween(0, winTitles.length - 1)]}-->
    <div class="result-panel">
      <b class="timer ${isNsfw ? 'nsfw-timer' : ''}">${getFormatedMilliseconds(endTime - startTime)}</b>
      <span>(<b>${closedPopUp}</b> pop-ups fermées)</span>
    </div>
    <img style="width: calc(128px * var(--multiplicator));" src="./medias/images/gif/kid.gif" />
    <!--${winMessages[getRandomIntegerBetween(0, winMessages.length - 1)]}-->
  `;

  tada.play();
}



/* ########################################################### */
/* DOM INITIALIZATION */
/* ########################################################### */

requestWakeLock(); // Keep screen awake
setHTMLTitle(APP_NAME);



/* ########################################################### */
/* EXECUTION */
/* ########################################################### */

console.log(`%c${APP_NAME}`, 'font-size: 20px; font-weight: 600;');
console.log(`%cv %c${APP_VERSION}`, 'font-size: 16px; font-weight: 400;', 'font-size: 16px; font-weight: 400; color: aqua;');

document.getElementById('taskbarClockArea').innerHTML = `${getCurrentHour()}`;
setInterval(() => {
  document.getElementById('taskbarClockArea').innerHTML = `${getCurrentHour()}`;
}, 1000); 

const interval = 1300;

let startTime;
let endTime;
let popupCount = 0;
let closedPopUp = 0;
let isComplete = false;

let isNsfw = false;
let clicks = 0;

// variable to store our intervalID
let intervalId;
