class Tile {
	public ground: number;
	public player: Player | null;
	public bomb: number;
	public effect: number;
	public sky: number;
	constructor(ground=0, player = null, bomb = 0, effect=0, sky=0){
		this.ground = 	ground;
		this.player = 	player;
		this.bomb = 	bomb;
		this.effect = 	effect;
		this.sky = 		sky;
	}
}

const map = [
	[new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(), new Tile(1)],
	[new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1), new Tile(1)]
]


const groundPlane: 	HTMLElement = <HTMLElement> document.getElementById('ground-plane');
const playerPlane: 	HTMLElement = <HTMLElement> document.getElementById('player-plane');
const bombPlane: 	HTMLElement = <HTMLElement> document.getElementById('bomb-plane');
const effectPlane: 	HTMLElement = <HTMLElement> document.getElementById('effect-plane');
const skyPlane:		HTMLElement = <HTMLElement> document.getElementById('sky-plane');

function clearPlanes(){
	while (groundPlane.firstChild) {
		groundPlane.removeChild(groundPlane.firstChild);
	}
	while (bombPlane.firstChild) {
		bombPlane.removeChild(bombPlane.firstChild);
	}
	while (playerPlane.firstChild) {
		playerPlane.removeChild(playerPlane.firstChild);
	}
	while (effectPlane.firstChild) {
		effectPlane.removeChild(effectPlane.firstChild);
	}
	while (skyPlane.firstChild) {
		skyPlane.removeChild(skyPlane.firstChild);
	}
}


function drawPlanes() {
	clearPlanes();
	for (let y in map) {
		for (let x in map[y]) {
			
			// GROUND ======================================================
			const groundPos = map[y][x]['ground'];
			const groundEl: HTMLDivElement = document.createElement("div");
			groundEl.classList.add('block')
			if (groundPos === 0) {	
				groundEl.classList.add('ground_0')
			} else if (groundPos === 1) {	
				groundEl.classList.add('ground_1')
			} else if (groundPos === 2) {	
				groundEl.classList.add('ground_2')
			}  
			groundPlane.appendChild(groundEl);

			// PLAYER ======================================================
			const playerPos = map[y][x]['player'];
			const playerEl: HTMLDivElement = document.createElement("div");
			playerEl.classList.add('block')
			if (playerPos) {	
				playerEl.classList.add('player01')
			} 
			playerPlane.appendChild(playerEl);

			// EFFECT ======================================================
			const effectPos = map[y][x]['effect'];
			const effectEl: HTMLDivElement = document.createElement("div");
			effectEl.classList.add('block')
			if (effectPos === 0) {	
				
			} else if (effectPos === 1) {	
				effectEl.classList.add('effect_1')
			} 
			effectPlane.appendChild(effectEl);


			// BOMB ======================================================
			const bombPos = map[y][x]['bomb'];
			const bombEl: HTMLDivElement = document.createElement("div");
			bombEl.classList.add('block')
			if (bombPos && bombPos > Date.now()+1000) {	
				bombEl.classList.add('bomb_2')
			} else if (bombPos && bombPos > Date.now()) {   
				bombEl.classList.add('bomb_1')
			} 
			bombPlane.appendChild(bombEl);

			// SKY ======================================================
			const skyPos = map[y][x]['sky'];
			const skyEl: HTMLDivElement = document.createElement("div");
			skyEl.classList.add('block')
			if (skyPos === 0) {	
				
			} else if (skyPos === 1) {	
				skyEl.classList.add('skys_1')
			} 
			skyPlane.appendChild(skyEl);

		}
	}

}
drawPlanes();


document.onkeydown = function(e){
	if (e['keyCode'] === 37){
		console.log("37 - LEFT")
		moveLeft();
	} else if (e['keyCode'] === 38){
		console.log("38 - UP")
		moveUp();
	} else if (e['keyCode'] === 39){
		console.log("39 - RIGHT")
		moveRight();
	} else if (e['keyCode'] === 40){
		console.log("40 - DOWN")
		moveDown();
	} else if (e['keyCode'] === 32){
		console.log("32 - Space")
		dropBomb();
	}
}

function moveLeft(){
	if (
		map[ player['y'] ][ player['x'] -1 ]['ground'] != 1 && 
		map[ player['y'] ][ player['x'] -1 ]['bomb'] === 0
	) {
		map[ player['y'] ][ player['x'] -1 ]['player'] = map[ player['y'] ][ player['x'] ]['player']
		map[ player['y'] ][ player['x'] ]['player'] = null;
		player['x'] -= 1;
	}
	drawPlanes();
}
function moveRight(){
	if (
		map[ player['y'] ][ player['x'] +1 ]['ground'] != 1 && 
		map[ player['y'] ][ player['x'] +1 ]['bomb'] === 0
	) {
		map[ player['y'] ][ player['x'] +1 ]['player'] = map[ player['y'] ][ player['x'] ]['player']
		map[ player['y'] ][ player['x'] ]['player'] = null;
		player['x'] += 1;
	}
	drawPlanes();

}
function moveUp(){
	if (
		map[ player['y'] -1 ][ player['x'] ]['ground'] != 1 && 
		map[ player['y'] -1 ][ player['x'] ]['bomb'] === 0
	) {
		map[ player['y'] -1 ][ player['x'] ]['player'] = map[ player['y'] ][ player['x'] ]['player']
		map[ player['y'] ][ player['x'] ]['player'] = null;
		player['y'] -= 1;
	}
	drawPlanes();
}
function moveDown(){
	if (
		map[ player['y'] +1 ][ player['x'] ]['ground'] != 1 && 
		map[ player['y'] +1 ][ player['x'] ]['bomb'] === 0
	) {
		map[ player['y'] +1 ][ player['x'] ]['player'] = map[ player['y'] ][ player['x'] ]['player']
		map[ player['y'] ][ player['x'] ]['player'] = null;
		player['y'] += 1;
	}
	drawPlanes();
}
function dropBomb(){
	map[ player['y'] ][ player['x'] ]['bomb'] = Date.now() + 4000;
	drawPlanes();
}








class Player {
	constructor(
		public name: string = 'guest_player', 
		public health: number = 100, 
		public x: number = 3, 
		public y: number = 3, 
		public points: number = 0
	) {
		this.name = name;
		this.health = health;
		this.x = x;
		this.y = y;
		this.points = points;
	}
}

const player = new Player('Player1');
map[player['y']][player['x']]['player'] = player;
drawPlanes();

// const players: Player[] = [];
// function addNewPlayer(){
// 	let playerInstance = new Player('Player1', 100, 4, 4, 0);
// 	players.push(playerInstance);
// 	map[playerInstance['y']][playerInstance['x']]['player'] = playerInstance;
// 	drawPlanes();
// }
// addNewPlayer();


function checkEffects(){
	console.log("Checking effects...");
	const currentTime = Date.now();
	for (let y in map) {
		for (let x in map[y]) {
			if (map[y][x]['bomb'] && map[y][x]['bomb'] < currentTime) {
				map[y][x]['bomb'] = 0;
			} 
		}
	}
	drawPlanes();
	setTimeout(checkEffects,100);
}
checkEffects();
