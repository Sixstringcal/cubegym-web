

var topColor = '#000000';
var bottomColor = '#FFFFFF';
var backColor = '#FFA500';
var frontColor = '#FF0000';
var rightColor = '#00FF00';
var leftColor = '#0000FF';

var state = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 13, 13, 14, 15, 15, 16];

function ud(move) {
    if (move[0] !== 0) { //Do U move.
        if (move[0] < 0) { //Converts negative moves into positive moves.
            move[0] += 12;
        }
        for (var i = 0; i < move[0]; i++) {
            var temp = state[11];
            state[11] = state[0];
            state[0] = state[1];
            state[1] = state[2];
            state[2] = state[3];
            state[3] = state[4];
            state[4] = state[5];
            state[5] = state[6];
            state[6] = state[7];
            state[7] = state[8];
            state[8] = state[9];
            state[9] = state[10];
            state[10] = temp;

        }
    }
    if (move[1] !== 0) { //Do D move.
        if (move[1] < 0) { //Converts negative moves into positive moves.
            move[1] += 12;
        }
        for (var ii = 0; ii < move[1]; ii++) {
            var temp2 = state[23];
            state[23] = state[12];
            state[12] = state[13];
            state[13] = state[14];
            state[14] = state[15];
            state[15] = state[16];
            state[16] = state[17];
            state[17] = state[18];
            state[18] = state[19];
            state[19] = state[20];
            state[20] = state[21];
            state[21] = state[22];
            state[22] = temp2;
        }

    }
}

function doSlash() {
    var temp;
    for (var i = 5; i < 11; i++) {
        temp = state[i];
        state[i] = state[i + 13];
        state[i + 13] = temp;
    }
}

export default class Sq1 {

    constructor() {
        state = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 13, 13, 14, 15, 15, 16];
    }



    doMoves(moves) {
        var lastIsSlash = false;
        if (moves.charAt(moves.length - 1) === '/') {
            lastIsSlash = true;
        }
        var udTogether = moves.split("/");
        for (var i = 0; i < udTogether.length; i++) {
            if (udTogether !== ("")) {
                var tempArray = udTogether[i].split(",");
                var move = [Number(tempArray[0]), Number(tempArray[1])];
                ud(move);
            }
            if (i !== udTogether.length - 1 || (lastIsSlash)) {
                doSlash();
            }

        }

    }



    getState() {
        return state;
    }

    getOBLState() {
        var lasts = [];
        var obl = [topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor, topColor];
        var todo = 0;
        for (var i = 0; i < 24; i++) {
            if (!lasts.includes(state[i])) {
                if (state[i] < 9) {
                    obl[todo] = topColor;
                } else {
                    obl[todo] = bottomColor;
                }
                todo++;
            }
            lasts = [lasts, state[i]];
        }
        if (state[11] % 2 === 0) {
            obl[16] = [0, 0, 0];
        } else if (state[1] === 0) {
            obl[16] = [1, 1, 1];
        } else {
            obl[16] = [-1, -1, -1];
        }

        if (state[23] % 2 === 0) {
            obl[17] = [0, 0, 0];
        } else if (state[13] % 2 === 0) {
            obl[17] = [1, 1, 1];
        } else {
            obl[17] = [-1, -1, -1];
        }
        return obl;
    }


    reverseScramble(scramble) {
        if (scramble.startsWith("/")) {
            scramble = "0,0" + scramble;
        }
        if (scramble.endsWith("/")) {
            scramble += "0,0";
        }
        var reversedScramble = "";
        var endsWithSlash = false;
        if (scramble.charAt(0) === '/') {
            endsWithSlash = true;
        }
        if (scramble.charAt(scramble.length - 1) === '/') {
            reversedScramble = "/";
        }

        var splitScramble = scramble.split("/");

        for (var i = splitScramble.length - 1; i > -1; i--) {

            var x = -1 * Number(splitScramble[i].split(",")[0]);
            var y = -1 * Number(splitScramble[i].split(",")[1]);
            reversedScramble += x + "," + y;
            if (i > 0 || endsWithSlash) {
                reversedScramble += "/";
            }
        }

        return reversedScramble;
    }

    /**
     * Returns the relevant information to the non U/D pieces (also ignores the slice orientation)
     * @return
     */
    getPBLState() {
        var returnState = [backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor, backColor];
        for (var i = 0; i < 24; i++) {
            switch (state[i]) {
                case 1:
                    returnState[i] = backColor;
                    i++;
                    returnState[i] = leftColor;
                    break;
                case 2:
                case 10:
                    returnState[i] = leftColor;
                    break;
                case 3:
                    returnState[i] = leftColor;
                    i++;
                    returnState[i] = frontColor;
                    break;
                case 4:
                case 16:
                    returnState[i] = frontColor;
                    break;
                case 5:
                    returnState[i] = frontColor;
                    i++;
                    returnState[i] = rightColor;
                    break;
                case 6:
                case 14:
                    returnState[i] = rightColor;
                    break;
                case 7:
                    returnState[i] = rightColor;
                    i++;
                    returnState[i] = backColor;
                    break;
                case 8:
                case 12:
                    returnState[i] = backColor;
                    break;
                case 9:
                    returnState[i] = frontColor;
                    i++;
                    returnState[i] = leftColor;
                    break;
                case 11:
                    returnState[i] = leftColor;
                    i++;
                    returnState[i] = backColor;
                    break;
                case 13:
                    returnState[i] = backColor;
                    i++;
                    returnState[i] = rightColor;
                    break;
                case 15:
                    returnState[i] = rightColor;
                    i++;
                    returnState[i] = frontColor;
                    break;
                default:
                    break;
            }
        }
        return returnState;
    }

}