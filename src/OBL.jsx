import React from 'react';
import Sq1 from './Models/Sq1';

var algs;
var oblState = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var sq1 = new Sq1();
function getOBLAlgs(uLayer, dLayer) {
    fetch("http://localhost:625/OBl/getOBL", {
        method: "POST",

    }).then((response) => response.json())
        .then((responseJSON) => {
            algs = responseJSON.algorithms;
            sq1.doMoves(sq1.reverseScramble(algs[0].alg));
            console.log(sq1.getOBLState());
        });;
}

export default function OBL() {


    getOBLAlgs('all', 'all');







    return (
        <div>

            <div>

                <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110"><defs>

                </defs>
                    <polygon
                        id="1"
                        points="0,35 0,0 35,0 49,49"
                        fill={oblState[0]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="2"
                        points="0,63 0,35 49,49"
                        fill={oblState[1]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="3"
                        points="0,63 0,98 35,98 49,49"
                        fill={oblState[2]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="4"
                        points="35,98 63,98 49,49"
                        fill={oblState[3]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="5"
                        points="98,63 98,98 63,98 49,49"
                        fill={oblState[4]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="6"
                        points="98,63 98,35 49,49"
                        fill={oblState[5]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="7"
                        points="98,35 98,0 63,0 49,49"
                        fill={oblState[6]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="8"
                        points="35,0 63,0 49,49"
                        fill={oblState[7]}
                        stroke="gray"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div>
                <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110"><defs>

                </defs>
                    <polygon
                        id="1"
                        points="0,35 0,0 35,0 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="2"
                        points="0,63 0,35 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="3"
                        points="0,63 0,98 35,98 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="4"
                        points="35,98 63,98 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="5"
                        points="98,63 98,98 63,98 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="6"
                        points="98,63 98,35 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="7"
                        points="98,35 98,0 63,0 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="8"
                        points="35,0 63,0 49,49"
                        fill="white"
                        stroke="gray"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );

}