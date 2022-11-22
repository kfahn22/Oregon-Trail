
// temporary
const SETTINGS = {
  "sound": true,
  scale: 2
}

let data;
let stateManager;

function preload() {
  data = loadJSON('data/slide_data.json');
}

let slideManager;

let playerInput;

function setup() {
  createCanvas(280 * SETTINGS.scale, 192 * SETTINGS.scale);

  stateManager = new GameStateManager();

  slideManager = new SlideManager(data);
  playerInput = new Input(slideManager.getCurrentSlide());
}


function keyPressed() {
  const result = playerInput.addKey(key, keyCode);

  slideManager.performAction(result-1);
  playerInput.updateParent(slideManager.getCurrentSlide());
}


function draw() {
  background(0);
  slideManager.render();
  playerInput.render();
}

function toggleSetting(setting) {
  SETTINGS[setting] = !SETTINGS[setting];
}