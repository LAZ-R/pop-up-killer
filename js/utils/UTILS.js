
/* ######################################################################### */
/* --------------------------------- MATHS --------------------------------- */
/* ######################################################################### */

export const getRandomIntegerBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRoundedPercentage = (part, total) => {
  let num = (part / total) * 100;
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

export const getNumberVariation = (n, percentage = 10) => {
  let variabilityFactor = percentage / 100;
  let factor = (Math.random() * (2 * variabilityFactor)) - variabilityFactor;
  return n + (n * factor);
}

export const roundToDecimals = (num, decimals = 0) => {
  var p = Math.pow(10, decimals);
  var n = (num * p) * (1 + Number.EPSILON);
  return Math.round(n) / p;
}

export const getFormatedMilliseconds = (ms) => {
  if (ms < 0) return "0h 0m 0s";

  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms - (totalSeconds * 1000);

  return `${hours != 0 ? `${hours < 10 ? `0${hours}h` : hours}h` : ''} ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s ${milliseconds}ms`;
}

/* ######################################################################### */
/* -------------------------------- STRINGS -------------------------------- */
/* ######################################################################### */

export const formatNumberWithSpaces = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/* ######################################################################### */
/* ---------------------------------- DOM ---------------------------------- */
/* ######################################################################### */

export const setHTMLTitle = (pageTitle) => {
  document.getElementById('title').innerHTML = pageTitle;
  document.getElementById('appleTitle').setAttribute('content', pageTitle);
}

export const setFavicon = (iconSrc) => {
  document.getElementById('favicon').setAttribute('href', `${iconSrc}`);
}

/* ######################################################################### */
/* -------------------------------- COLORS --------------------------------- */
/* ######################################################################### */

export const getRandomHexColor = () => {
  // Génère un nombre aléatoire entre 0 et 16777215 (0xFFFFFF en hexadécimal)
  let randomColor = Math.floor(Math.random() * 16777215);
  
  // Convertit le nombre en une chaîne hexadécimale, et y ajoute un #
  return `#${randomColor.toString(16).padStart(6, '0')}`;
}

export const bpmToMillisecondsPerBeat = (bpm) => {
  // Convertir le BPM en millisecondes par battement
  let millisecondsPerBeat = (60 * 1000) / bpm;
  return millisecondsPerBeat;
}