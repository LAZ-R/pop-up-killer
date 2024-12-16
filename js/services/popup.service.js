import { getRandomIntegerBetween } from "../utils/UTILS.js"

// LOTERY /////////////////////////////////////////////////////////////////////////////////////////

const objects = [
  { name: 'PHILIPS Lecteur CD', img: 'philips.png' },
  { name: 'Playstation', img: 'playstation.jpg' },
  { name: 'SONY Dualshock', img: 'dualshock.jpg' },
  { name: 'APPLE iMac G3', img: 'imac.webp' },
  { name: 'GAME BOY Color', img: 'gbc.png' },
  { name: 'SONY CCD-CR1 Ruvi', img: 'ruvi.png' },
  { name: 'Lecteur DVD TOSHIBA', img: 'toshDvd.png' },
  { name: 'Ecran Trinitron 13.5"', img: 'trinitron.png' },
];
const lotteryBgColors = [
  '#f9ffdb',
  '#bcecf0',
  '#c7ffc8',
];
const lotteryBlinkColors = [
  'red',
  'green',
  'blue',
  'rebeccapurple',
];

export const getRandomLotteryPopupObject = () => {
  const lotteryBgColor = lotteryBgColors[getRandomIntegerBetween(0, lotteryBgColors.length - 1)];
  const lotteryBlinkColor = lotteryBlinkColors[getRandomIntegerBetween(0, lotteryBlinkColors.length - 1)];
  const style = `
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center; 
    padding: calc(4px * var(--multiplicator)); 
    background-color: ${lotteryBgColor}; 
    text-wrap: nowrap;
    gap: calc(16px * var(--multiplicator));
    font-family: 'Comic Sans MS';
  `;
  const object = objects[getRandomIntegerBetween(0, objects.length - 1)];

  return {
    title: `Gratuit ${object.name}`,
    content: `
    <div style="${style}">
      <span style="color: black; font-size: calc(16px * var(--multiplicator)); line-height: calc(16px * var(--multiplicator)); animation: ${lotteryBlinkColor}-blink .2s infinite;">★★★ VOUS AVEZ GAGNE ★★★</span>
      <span style="font-size: calc(32px * var(--multiplicator)); color: red; line-height: calc(32px * var(--multiplicator));">${object.name}</span>
      <img style="width: calc(128px * var(--multiplicator));" src="./medias/images/gif/${object.img}" />
      <span style="color: black; font-size: calc(16px * var(--multiplicator)); line-height: calc(16px * var(--multiplicator));">Récupérez votre lot ici</span>
      <span style="color: blue; text-decoration: underline;">http://phishing.net/index.php</span>
    </div>`
  }
}

// CHAT ROOMS /////////////////////////////////////////////////////////////////////////////////////
const chatNames = [
  'Ashley',
  'Britney',
  'Cindy',
  'Tiffany',
  'Kimberly',
  'Sandy',
  'Candy',
  'Brandy',
  'Tracy',
  'Mandy',
  'Stacy',
  'Crystal',
  'Amber',
  'Chloe',
  'Melody',
  'Jessica',
  'Brittany',
  'Kylie',
  'Madison',
  'Vanessa',
  'Courtney',
  'Kaylee',
  'Heather',
  'Destiny',
];
const chatBgColors = [
  '#f1e4df',
  '#eddff1',
  '#ffe0e0',
  '#ffdbfc',
  '#ffdbdb',
];
const chatGifs = [
  'kiss.gif',
  'kiss2.webp',
  'kiss3.gif',
  'kiss4.gif',
  'kiss5.webp',
];
const chatNameColors = [
  'red',
  'green',
  'rebeccapurple',
  'purple',
  'magenta',
];

const chatStyle = `
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  padding: calc(4px * var(--multiplicator)); 
  background-color: white; 
  text-wrap: nowrap;
  gap: calc(16px * var(--multiplicator));
  font-family: Impact;
  text-align: center;
`;

export const getRandomChatPopupObject = () => {
  const name = chatNames[getRandomIntegerBetween(0, chatNames.length - 1)];
  const chatTitle = `Rencontre avec ${name}`;
  const chatBgColor = chatBgColors[getRandomIntegerBetween(0, chatBgColors.length - 1)];
  const chatGif = chatGifs[getRandomIntegerBetween(0, chatGifs.length - 1)];

  return {
    title: `${chatTitle}`,
    content: `
      <div style="${chatStyle} background-color: ${chatBgColor};">
        <h3>Rencontres près de chez toi</h3>
        <span style="font-size: calc(14px * var(--multiplicator));"><span style="color: ${chatNameColors[getRandomIntegerBetween(0, chatNameColors.length - 1)]}">${name}</span><br>veux tchatter avec toi !</span>
        <span style="color: blue; text-decoration: underline;">CLIQUER ICI POUR TCHATER</span>
        <img style="width: calc(128px * var(--multiplicator));" src="./medias/images/gif/${chatGif}" />
      </div>
    `
  }
}

// PORN ///////////////////////////////////////////////////////////////////////////////////////////

const pornGifs = [
  'bite1.gif',
  'porn1.gif',
  'porn2.gif',
  'porn3.gif',
  'porn4.gif',
  'porn5.gif',
  'porn6.gif',
  'porn7.gif',
  'porn8.gif',
  'porn9.gif',
  'porn10.gif',
  'porn11.gif',
  'porn11.gif',
  'porn12.gif',
  'porn13.png',
  //'porn14.gif',
  'porn15.gif',
  'porn16.gif',
  'porn17.gif',
  'porn18.gif',
  'porn19.png',
  'porn20.webp',
  'porn20.webp',
  'porn21.gif',
  'porn22.gif',
  //'porn23.gif',
  //'porn24.gif',
  'porn25.webp',
  'porn26.gif',
  'porn27.gif',
  'porn28.gif',
  'porn29.webp',
  'porn30.gif',
  'porn31.webp',
];

const pornTitles = [
  'XXX GRATUIT',
  'MILFS CHAUDES',
  'SEXE 100% GARANTI',
  'RENCONTRES SEXY',
];

export const getRandomPornPopupObject = () => {
  const pornTitle = pornTitles[getRandomIntegerBetween(0, pornTitles.length - 1)];
  const pornGif = pornGifs[getRandomIntegerBetween(0, pornGifs.length - 1)];
  return {
    title: `${pornTitle}`,
    content: `
    <img style="width: calc(256px * var(--multiplicator));" src="./medias/images/gif/${pornGif}" />
    `
  }
}

// BITE ///////////////////////////////////////////////////////////////////////////////////////////

const biteGifs = [
  'bite2.jpg',
  'bite3.jpg',
  'bite4.jpg',
  'bite5.jpg',
  'bite6.jpg',
  'bite7.jpg',
];

const biteTitles = [
  'BITE GEANTE',
  'XXL DONG - Pleasure women',
  'PETIT PENIS ? LA SOLUTION',
  'RESULTATS GARANTIS',
];

export const getRandomBitePopupObject = () => {
  const biteTitle = biteTitles[getRandomIntegerBetween(0, biteTitles.length - 1)];
  const biteGif = biteGifs[getRandomIntegerBetween(0, biteGifs.length - 1)];
  return {
    title: `${biteTitle}`,
    content: `<img style="width: calc(256px * var(--multiplicator));" src="./medias/images/gif/${biteGif}" />`
  }
}

// VIRUS //////////////////////////////////////////////////////////////////////////////////////////
const virusStyle = `
  display: flex; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  padding: calc(4px * var(--multiplicator)); 
  background-color: white; 
  text-wrap: nowrap;
  gap: calc(16px * var(--multiplicator));
  font-family: Impact;
  text-align: center;
`;
const virus = [
  {
    title: `WARNING Windows Virus Detected`,
    content: `<img style="width: calc(256px * var(--multiplicator));" src="./medias/images/gif/virus1.png" />`
  },
  {
    title: `ATTENTION (6) Virus sur votre ordinateur`,
    content: `
    <div style="${virusStyle}">
      <span style="display: flex; align-items: center; gap:calc(4px * var(--multiplicator)); font-size: calc(32px * var(--multiplicator)); color: red; line-height: calc(32px * var(--multiplicator)); animation: alert-blink .2s infinite;">
        <img style="width: calc(64px * var(--multiplicator));" src="./medias/images/gif/warning.gif" />
        <span>ATTENTION</span>
        <img style="width: calc(64px * var(--multiplicator));" src="./medias/images/gif/warning.gif" />
      </span>
      <span style="color: black; font-size: calc(16px * var(--multiplicator)); line-height: calc(16px * var(--multiplicator));">Le système a détecté (6) VIRUS<br>sur votre ordinateur</span>
      <span style="color: red; font-size: calc(16px * var(--multiplicator)); line-height: calc(16px * var(--multiplicator));">VOUS DONNÉES PERSONNELLES SONT MENACÉES</span>
      <span style="color: blue; text-decoration: underline;">0 800 756 235</span>
    </div>`
  },
  {
    title: `Ordinateur infecté`,
    content: `
    <div style="${virusStyle} background-color: black; color: white;">
      <span style="display: flex; align-items: center; gap:calc(4px * var(--multiplicator)); font-size: calc(32px * var(--multiplicator)); color: red; line-height: calc(32px * var(--multiplicator)); animation: alert-blink .2s infinite;">
        <img style="width: calc(64px * var(--multiplicator));" src="./medias/images/gif/computer.gif" />
        <span>VIRUS DETECTE</span>
        <img style="width: calc(64px * var(--multiplicator));" src="./medias/images/gif/computer.gif" />
      </span>
      <span style="font-size: calc(16px * var(--multiplicator)); line-height: calc(16px * var(--multiplicator));">Le système a détecté des virus<br>sur votre ordinateur</span>
      <span style="color: blue; text-decoration: underline;">0 800 756 235</span>
    </div>`
  },
];

export const getRandomVirusPopupObject = () => {
  return virus[getRandomIntegerBetween(0, virus.length - 1)];
}

////////////////////////////////////////////////////////////////////////////////////////

export const getRandomPopupObject = (isNsfw) => {
  const percentage = getRandomIntegerBetween(0, 100);
  if (isNsfw) {
    return getRandomPornPopupObject();
  } else {
    if (percentage <= 25) {
      return getRandomLotteryPopupObject();
    } else if (percentage > 25 && percentage <= 50) {
      return getRandomBitePopupObject();
    } else if (percentage > 50 && percentage <= 75) {
      return getRandomChatPopupObject();
    } else if (percentage > 75 && percentage <= 100) {
      return getRandomVirusPopupObject();
    }
  }
}