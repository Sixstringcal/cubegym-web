import React from 'react';
import Sq1 from './Models/Sq1';
import OBLImage from './Models/OBLImage'
import { Component } from 'react';
import ReactDOM from 'react-dom';


var algs;
var oblState = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
var sq1 = new Sq1();
var oblView = (<OBLImage oblState={oblState} id="obl-image" />);


function getOBLAlgs(uLayer, dLayer) {
    fetch("http://api.cubegym.net/getOBL", {
        method: "POST",

    }).then((response) => response.json())
        .then((responseJSON) => {
            algs = responseJSON.algorithms;
            sq1.doMoves(sq1.reverseScramble(algs[2].alg));
            oblState = sq1.getOBLState();
            console.log(oblState);
            var oblView = (<div id="obl-image">
                <div>
                    <div>
                        <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" > <defs>

                        </defs>
                            < polygon
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

                        <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" > <defs>

                        </defs>
                            < polygon
                                id="9"
                                points="0,35 0,0 35,0 49,49"
                                fill={oblState[8]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="10"
                                points="0,63 0,35 49,49"
                                fill={oblState[9]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="11"
                                points="0,63 0,98 35,98 49,49"
                                fill={oblState[10]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="12"
                                points="35,98 63,98 49,49"
                                fill={oblState[11]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="13"
                                points="98,63 98,98 63,98 49,49"
                                fill={oblState[12]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="14"
                                points="98,63 98,35 49,49"
                                fill={oblState[13]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="15"
                                points="98,35 98,0 63,0 49,49"
                                fill={oblState[14]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="16"
                                points="35,0 63,0 49,49"
                                fill={oblState[15]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>

            </div>);
            ReactDOM.render(oblView, document.getElementById('obl-image'));

        });
}
class OBL extends Component {

    update() {

    }

    defaultProps = { oblState: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"] }

    constructor() {
        getOBLAlgs('all', 'all');

        super();
    }






    render() {
        return (
            <div id="obl-image">

                <div>
                    <div>
                        <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" > <defs>

                        </defs>
                            < polygon
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

                        <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" > <defs>

                        </defs>
                            < polygon
                                id="9"
                                points="0,35 0,0 35,0 49,49"
                                fill={oblState[8]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="10"
                                points="0,63 0,35 49,49"
                                fill={oblState[9]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="11"
                                points="0,63 0,98 35,98 49,49"
                                fill={oblState[10]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="12"
                                points="35,98 63,98 49,49"
                                fill={oblState[11]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="13"
                                points="98,63 98,98 63,98 49,49"
                                fill={oblState[12]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="14"
                                points="98,63 98,35 49,49"
                                fill={oblState[13]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="15"
                                points="98,35 98,0 63,0 49,49"
                                fill={oblState[14]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                            <polygon
                                id="16"
                                points="35,0 63,0 49,49"
                                fill={oblState[15]}
                                stroke="gray"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>

            </div >
        );

    }
}

export default OBL;