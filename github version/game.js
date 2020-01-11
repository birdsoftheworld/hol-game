var gameWindow = document.getElementById("game");
var context = gameWindow.getContext("2d");

var blankRoom = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

var randomRooms = [
    [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[10,0]],[[10,0],[9,0],[29,0],[10,0],[10,0],[9,0],[10,0],[10,0],[29,0],[9,0],[10,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[10,0],[10,0],[9,0],[9,0],[10,0],[10,0],[10,0],[9,0],[10,0]],[[9,0],[9,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[9,0],[9,0]],[[10,0],[9,0],[10,0],[10,0],[10,0],[9,0],[9,0],[10,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[29,0],[10,0],[10,0],[9,0],[10,0],[10,0],[29,0],[9,0],[10,0]],[[10,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]],
    [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0]],[[9,0],[9,0],[29,0],[9,0],[9,0],[29,0],[9,0],[9,0],[29,0],[9,0],[9,0]],[[10,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]],
    [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0],[9,0],[29,0],[9,0],[10,0],[10,0]],[[10,0],[10,0],[29,0],[10,0],[10,0],[29,0],[10,0],[9,0],[10,0],[9,0],[10,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0],[9,0],[10,0],[10,0]],[[10,0],[29,0],[10,0],[10,0],[29,0],[10,0],[10,0],[9,0],[10,0],[9,0],[10,0],[10,0]],[[9,0],[9,0],[10,0],[9,0],[9,0],[9,0],[10,0],[9,0],[29,0],[9,0],[9,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[10,0],[9,0],[9,0],[9,0],[10,0],[9,0],[10,0]],[[10,0],[10,0],[10,0],[29,0],[10,0],[29,0],[10,0],[10,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]],
    [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[10,0],[10,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[29,0],[9,0],[10,0],[10,0]],[[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[9,0],[10,0],[9,0],[9,0],[10,0],[10,0]],[[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0]],[[10,0],[10,0],[10,0],[29,0],[10,0],[29,0],[10,0],[9,0],[10,0],[29,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0],[29,0],[10,0],[9,0],[10,0]],[[10,0],[29,0],[10,0],[10,0],[10,0],[29,0],[10,0],[9,0],[10,0],[29,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]],
    [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[9,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[10,0],[9,0],[9,0],[29,0],[9,0],[9,0],[10,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[29,0],[10,0],[10,0],[10,0],[29,0],[10,0]],[[10,0],[9,0],[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0]],[[9,0],[9,0],[10,0],[29,0],[10,0],[29,0],[10,0],[10,0],[10,0],[9,0],[9,0]],[[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[29,0],[9,0],[10,0],[29,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[10,0],[9,0],[10,0],[9,0],[10,0],[9,0],[10,0]],[[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[29,0],[10,0],[9,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]],
];

var currentRoom;

var solids = [
    1, 3, 10, 12, 14, 15, 16, 17, 18, 19, 20, 21, 24
];

var anim = {
    26: [[26, 27], 10]
};

var properties = {
    9: ["light"],
    11: ["reset"],
    29: ["random"],
    30: ["goal"],
    31: ["glitch"],
    42: ["help"]
};

var timerActive = false;
var timeLeft = 180;
var markersLeft = 9;
var goalFound = false;

// tilemap sprites
var tilemap = new Image();
tilemap.src = "tilemap.png";

var x = 5;
var y = 5;
var dimension = 0;

var roomPosX = 0;
var roomPosY = 0;
var otherRoomPosX = 0;
var otherRoomPosY = 0;

var randomRoomX = Math.floor(Math.random() * 11 - 5);
var randomRoomY = Math.floor(Math.random() * 11 - 5);
while((Math.abs(randomRoomX) + Math.abs(randomRoomY)) < 5) {
    randomRoomX = Math.floor(Math.random() * 11 - 5);
    randomRoomY = Math.floor(Math.random() * 11 - 5);
}

var queuedKey;
var tickValue = 0;

function drawSprite(spriteOffsetX, spriteOffsetY, x, y, rotation) {
    // take 8x8 sprite from tilemap with offset
    rotation = rotation || 0;
    context.save();
    context.translate(x, y);
    context.translate(4, 4);
    context.rotate(rotation * Math.PI / 180);
    context.drawImage(tilemap, spriteOffsetX * 8, spriteOffsetY * 8, 8, 8, -4, -4, 8, 8);
    context.restore();
};

function drawMap(room) {
    // draw the room
    var tileBeingDrawn;
    for(var row in room) {
        for(var column in room[row]) {
            tileBeingDrawn = room[row][column][0] || room[row][column];
            if(tileBeingDrawn !== -1) {
                if(!(tileBeingDrawn in anim)) {
                    drawSprite(tileBeingDrawn % 32, Math.floor(tileBeingDrawn / 32), parseInt(column) * 8, parseInt(row) * 8, room[row][column][1]);
                }
                else {
                    var tileAnimation = anim[tileBeingDrawn][0];
                    var animTick = Math.floor(tickValue / anim[tileBeingDrawn][1]);
                    drawSprite(tileAnimation[Math.floor(animTick % tileAnimation.length)] % 32, Math.floor(tileAnimation[animTick % tileAnimation.length] / 32), parseInt(column) * 8, parseInt(row) * 8, room[row][column][1]);
                }
            }
        }
    }
}

function drawCredits() {
    clearInterval(tickInterval);
    currentRoom = [[[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[115,0],[103,0],[96,0],[109,0],[106,0],[114,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[101,0],[110,0],[113,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[111,0],[107,0],[96,0],[120,0],[104,0],[109,0],[102,0],[122,0],[1,0],[1,0]],[[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[108,0],[96,0],[99,0],[100,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[97,0],[120,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[109,0],[104,0],[106,0],[110,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[97,0],[120,0],[100,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]],[[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]]];
    drawMap(currentRoom);
}

function tileActions() {
    for(var row in currentRoom) {
        for(var column in currentRoom[row]) {
            var currentTile = currentRoom[row][column][0];
            var property = properties[currentTile] || [];
            if(property.includes("light")) {
                timerActive = true;
                if((row == y - 1 || row == y || row == y + 1) && (column == x - 1 || column == x || column == x + 1) || editor || goalFound) {
                    let tileBeingDrawn = currentRoom[row][column][0];
                    drawSprite(tileBeingDrawn % 32, Math.floor(tileBeingDrawn / 32), parseInt(column) * 8, parseInt(row) * 8, currentRoom[row][column][1]);
                }
                else {
                    let tileBeingDrawn = currentRoom[row][column][0];
                    drawSprite(tileBeingDrawn % 32 + 1, Math.floor(tileBeingDrawn / 32), parseInt(column) * 8, parseInt(row) * 8, currentRoom[row][column][1]);
                }
            }
            if(property.includes("reset")) {
                timeLeft = 180;
                timerActive = false;
            }
            if(property.includes("random")) {
                timerActive = true;
                if(!editor) {
                    let tileBeingDrawn = 9;
                    drawSprite(tileBeingDrawn % 32 + 1, Math.floor(tileBeingDrawn / 32), parseInt(column) * 8, parseInt(row) * 8, currentRoom[row][column][1]);
                }
                if(!editor) {
                    var isSolid = Math.random() >= 0.5;
                    currentRoom[row][column] = isSolid? [10, 0] : [9, 0];
                }
            }
            if(property.includes("goal")) {
                if(row == y && column == x) {
                    goalFound = true;
                    currentRoom[row][column] = 9;
                    rooms[[randomRoomX, randomRoomY]] = currentRoom;
                    roomPosX = Math.floor(Math.random() * 11 - 5);
                    roomPosY = Math.floor(Math.random() * 11 - 5);
                    currentRoom = rooms[[roomPosX, roomPosY]];
                    if(!currentRoom) {
                        currentRoom = $.extend(true, [], randomRooms[Math.floor(Math.random() * randomRooms.length)]);
                    }
                    for(var yPos = 4; yPos <= 6; yPos++) {
                        for(var xPos = 4; xPos <= 6; xPos++) {
                            currentRoom[yPos][xPos] = 9;
                        }
                    }
                }
            }
            if(property.includes("glitch")) {
                if(goalFound) {
                    anim[31] = [[58, 59, 60, 61, 62, 63], 1];
                }
                if(row == y && column == x && goalFound) {
                    drawCredits();
                }
            }
            if(property.includes("help")) {
                if(row == y && column == x) {
                    currentRoom[row][column] = 13;
                    alert("Use arrow keys to move and space to place or pick up a neon marker while in the maze. To win, save your friend and escape.");
                }
            }
        }
    }
}

// keyboard controls
window.addEventListener("keydown", event => {
    queuedKey = event.key;
});

// draw character sprite on page load
function onLoad() {
    drawSprite(2, 0, x * 8, y * 8);
    currentRoom = rooms[[0, 0]];
    drawMap(currentRoom);
};

function changeDimension() {
    dimension = dimension? 0 : 1;
                var buffer = rooms;
                rooms = otherRooms;
                otherRooms = buffer;
                buffer = roomPosX;
                roomPosX = otherRoomPosX;
                otherRoomPosX = buffer;
                buffer = roomPosY;
                roomPosY = otherRoomPosY;
                otherRoomPosY = buffer;
                currentRoom = rooms[[roomPosX, roomPosY]];
}

function tick() {
    tickValue++;

    context.clearRect(0, 0, gameWindow.width, gameWindow.height);
    var key = queuedKey;

    // try-catch blocks for edge of screen
    if(key == "ArrowLeft") {
        try {
            if(!(solids.includes(currentRoom[y][x - 1][0]))) {
                x -= 1;
            }
            if((currentRoom[y][x][0]) == 26) {
                changeDimension();
            }
        }
        catch (e) {
            x -= 1;
        }
    }
    if(key == "ArrowUp") {
        try {
            if(!(solids.includes(currentRoom[y - 1][x][0]))) {
                y -= 1;
            }
            if((currentRoom[y][x][0]) == 26) {
                changeDimension();
            }
        }
        catch (e) {
            y -= 1;
        }
    }
    if(key == "ArrowRight") {
        try {
            if(!(solids.includes(currentRoom[y][x + 1][0]))) {
                x += 1;
            }
            if((currentRoom[y][x][0]) == 26) {
                changeDimension();
            }
        }
        catch (e) {
            x += 1;
        }
    }
    if(key == "ArrowDown") {
        try {
            if(!(solids.includes(currentRoom[y + 1][x][0]))) {
                y += 1;
            }
            if((currentRoom[y][x][0]) == 26) {
                changeDimension();
            }
        }
        catch (e) {
            y += 1;
        }
    }
    if(key == " ") {
        if(markersLeft > 0 && currentRoom[y][x][0] == 9) {
            markersLeft--;
            currentRoom[y][x][0] = 28;
        }
        else if (currentRoom[y][x][0] == 28) {
            markersLeft++;
            currentRoom[y][x][0] = 9;
        }
    }

    // changing rooms
    if(y < 0) {
        rooms[[roomPosX, roomPosY]] = currentRoom;
        roomPosY--;
        currentRoom = rooms[[roomPosX, roomPosY]];
        y = 10;
    }
    if(x < 0) {
        rooms[[roomPosX, roomPosY]] = currentRoom;
        roomPosX--;
        currentRoom = rooms[[roomPosX, roomPosY]];
        x = 10;
    }
    if(y >= 11) {
        rooms[[roomPosX, roomPosY]] = currentRoom;
        roomPosY++;
        currentRoom = rooms[[roomPosX, roomPosY]];
        y = 0;
    }
    if(x >= 11) {
        rooms[[roomPosX, roomPosY]] = currentRoom;
        roomPosX++;
        currentRoom = rooms[[roomPosX, roomPosY]];
        x = 0;
    }
    // set room to blank room if it doesn't exist
    if(!currentRoom) {
        // copy array so it isn't the same every time
        if(dimension == 0) {
            currentRoom = $.extend(true, [], blankRoom);
        }
        else {
            currentRoom = $.extend(true, [], randomRooms[Math.floor(Math.random() * randomRooms.length)]);
        }
    }
    if(dimension == 1) {
        if(roomPosX >= 5) {
            currentRoom[5][10][0] = 10;
        }
        if(roomPosX <= -5) {
            currentRoom[5][0][0] = 10;
        }
        if(roomPosY >= 5) {
            currentRoom[10][5][0] = 10;
        }
        if(roomPosY <= -5) {
            currentRoom[0][5][0] = 10;
        }
    }
    drawMap(currentRoom, tick);
    tileActions();
    drawSprite(2, 0, x * 8, y * 8);

    if(timerActive) {
        if(!(tickValue % (goalFound? 15 : 20))) {
            timeLeft -= 1;
        }
        if(timeLeft < 0 && !editor) {
            location.reload();
            timeLeft = 0;
        }
        var timeAsString = timeLeft.toString();
        for(var i = timeAsString.length; i > 0; i--) {
            if(goalFound) {
                drawSprite(Math.floor(Math.random() * 10), 2, 11 * 8 - i * 8, 10 * 8);
            } else {
                drawSprite(parseInt(timeAsString[timeAsString.length - i]), 1, 11 * 8 - i * 8, 10 * 8);
            }
        }
    }

    drawSprite(markersLeft, 1, 0, 10 * 8);

    queuedKey = "";
}

var rooms;
var otherRooms = {
    "0,0": [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[29,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[29,0],[10,0]],[[10,0],[29,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[9,0],[29,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[29,0],[29,0],[29,0],[9,0],[9,0],[10,0]],[[10,0],[9,0],[29,0],[29,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[10,0]],[[9,0],[9,0],[9,0],[29,0],[9,0],[26,0],[9,0],[29,0],[9,0],[9,0],[9,0]],[[10,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[29,0],[29,0],[9,0],[10,0]],[[10,0],[9,0],[9,0],[29,0],[29,0],[29,0],[9,0],[9,0],[9,0],[9,0],[10,0]],[[10,0],[29,0],[9,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[29,0],[10,0]],[[10,0],[29,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[29,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]]
};
otherRooms[[randomRoomX, randomRoomY]] = [[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]],[[10,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[29,0],[29,0],[29,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[9,0],[9,0],[9,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[10,0]],[[9,0],[9,0],[29,0],[29,0],[9,0],[30,0],[9,0],[29,0],[29,0],[9,0],[9,0]],[[10,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[9,0],[9,0],[9,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[10,0]],[[10,0],[9,0],[29,0],[9,0],[29,0],[29,0],[29,0],[9,0],[29,0],[9,0],[10,0]],[[10,0],[29,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[9,0],[29,0],[10,0]],[[10,0],[10,0],[10,0],[10,0],[10,0],[9,0],[10,0],[10,0],[10,0],[10,0],[10,0]]];

var tickInterval;

fetch("map.json")
    .then(res => {return res.json()})
    .then(res => {rooms = res})
    .then(() => gameWindow.style = "display: block")
    .then(onLoad)
    .then(tickInterval = setInterval(tick, 50));