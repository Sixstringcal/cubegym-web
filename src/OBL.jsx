import React, { useState } from 'react';
import Sq1 from './Models/Sq1';
import ReactDOM from 'react-dom';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
import { List } from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';



var algs;
var sq1 = new Sq1();
var currentScramble = "";
var reversedScramble = "";
var currentSliceCount = '0';
var hasRetrieved = false;
var algSliceCount;



var timing = false;
var startTime;

var timerStarted = false;

function OBL() {
    var [times, setTimes] = useState([]);
    var [oblState, setOblState] = useState(["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"])

    const useKey = (key) => {
        const [pressed, setPressed] = useState(false);

        const match = event => key.toLowerCase() === event.key;

        const onDown = event => {
            if (match(event)) {
                setPressed(true);
                if (!timerStarted) {
                    const timerStarting = (
                        <p>starting</p>
                    );
                    ReactDOM.render(timerStarting, document.getElementById('timer'));
                    timerStarted = true;
                    timing = false;
                }
                else if (timing) {
                    //TODO: get time
                    var result = ((performance.now() - startTime) / 1000).toFixed(3);
                    times = times.concat(result);
                    console.log(times);
                    setTimes(times);
                    console.log(times);
                    const timerStopping = (
                        <p>{result}</p>
                    );



                    ReactDOM.render(timerStopping, document.getElementById('timer'));
                    timerStarted = false;
                }
            }
        }
        const onUp = event => {
            if (match(event)) {
                setPressed(false);
                if (timerStarted) {
                    startTime = performance.now();
                    const timerTime = (
                        <p>timing...</p>
                    );
                    timing = true;
                    ReactDOM.render(timerTime, document.getElementById('timer'));
                }
            }
        }

        useEffect(() => {
            window.addEventListener('keydown', onDown);
            window.addEventListener('keyup', onUp);
            return () => {
                window.removeEventListener('keydown', onDown);
                window.removeEventListener('keyup', onUp);
            }
        }, [key])

        return pressed;
    }


    const spacebar = useKey(' ');

    const getOBLAlgs = () => {
        if (hasRetrieved && algSliceCount === currentSliceCount) {
            var index = Math.floor(Math.random() * algs.length)
            sq1 = new Sq1();
            currentScramble = algs[index];
            reversedScramble = sq1.reverseScramble(algs[index]);
            sq1.doMoves(sq1.reverseScramble(algs[index]));
            oblState = sq1.getOBLState();
            setOblState(oblState);
            times = [];
            setTimes(times);
            hasRetrieved = true;
            algSliceCount = currentSliceCount;
            var setupView = (<p>{"Setup: " + reversedScramble}</p>);
            var algView = (<p id='alg'>{"Algorithm: " + currentScramble}</p>);


            ReactDOM.render(setupView, document.getElementById('setup'));
            ReactDOM.render(algView, document.getElementById('alg'));
        } else {
            fetch("https://api.cubegym.net/getOBL", {
                //fetch("http://localhost:626/getOBL", {

                method: "POST",
                body: JSON.stringify({
                    sliceCount: currentSliceCount
                }),
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then((response) => response.json())
                .then((responseJSON) => {
                    algs = responseJSON.algs;
                    var index = Math.floor(Math.random() * algs.length)
                    sq1 = new Sq1();
                    currentScramble = algs[index];
                    reversedScramble = sq1.reverseScramble(algs[index]);
                    sq1.doMoves(sq1.reverseScramble(algs[index]));
                    oblState = sq1.getOBLState();
                    setOblState(oblState);
                    times = [];
                    setTimes(times);
                    hasRetrieved = true;
                    algSliceCount = currentSliceCount;
                    var setupView = (<p>{"Setup: " + reversedScramble}</p>);
                    var algView = (<p id='alg'>{"Algorithm: " + currentScramble}</p>);



                    ReactDOM.render(setupView, document.getElementById('setup'));
                    ReactDOM.render(algView, document.getElementById('alg'));


                });
        }
    }
    if (!hasRetrieved) {
        getOBLAlgs();
    }


    return (
        <div>
            <div id='selectors' className='selectorDiv'>
                <FormControl >
                    <InputLabel htmlFor="uncontrolled-native">Slice Count</InputLabel>
                    <NativeSelect
                        onChange={(value) => { currentSliceCount = value.target.value; }}
                        defaultValue={currentSliceCount}
                        inputProps={{
                            name: "name",
                            id: "uncontrolled-native"
                        }}
                    >
                        <option value={0}>All</option>
                        <option value={1}>One slice</option>
                        <option value={2}>Two slices</option>
                        <option value={3}>Three slices</option>
                        <option value={4}>Four slices</option>
                        <option value={5}>Five slices</option>
                        <option value={6}>Six slices</option>

                    </NativeSelect>
                </FormControl>


                <Button variant="contained" color="primary" onClick={getOBLAlgs}>
                    Next
                </Button>
            </div>
            <div className='centered'>

                <div id='setup'><p>{"loading... " + reversedScramble}</p></div>
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
                <div id='alg'><p>{" " + currentScramble}</p></div>


                <div id='timer'>
                    <p> Press spacebar to begin timing. </p>
                </div>

            </div>
            <div id='time-box'>
                {times.map((time, index) =>
                    (<p>{time}</p>)
                )}
            </div>

        </div>
    );

}


OBL.defaultProps = { reversedScramble: "", currentScramble: "", oblState: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"] }


export default OBL;