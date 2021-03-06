import React from "react";
import Sq1 from "./Models/Sq1"

export default function PBL() {
    var sq1 = new Sq1();
    sq1.doMoves(sq1.reverseScramble("1,0/-3,0/3,3/0,-3/-1,0"));
    var state = sq1.getPBLState();
    return (
        <div>
            <div>
                <svg width="100" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 130.5 136">
                    <style type="text/css">

                    </style>
                    <polygon id="_1" fill="#000000" stroke="#808080" strokeWidth="2" points="15.5,54 15.5,19 50.5,19 64.5,68 " />
                    <polygon id="_2" fill="#000000" stroke="#808080" strokeWidth="2" points="15.5,82 15.5,54 64.5,68 " />
                    <polygon id="_3" fill="#000000" stroke="#808080" strokeWidth="2" points="15.5,82 15.5,117 50.5,117 64.5,68 " />
                    <polygon id="_4" fill="#000000" stroke="#808080" strokeWidth="2" points="50.5,117 78.5,117 64.5,68 " />
                    <polygon id="_5" fill="#000000" stroke="#808080" strokeWidth="2" points="113.5,82 113.5,117 78.5,117 64.5,68 " />
                    <polygon id="_6" fill="#000000" stroke="#808080" strokeWidth="2" points="113.5,82 113.5,54 64.5,68 " />
                    <polygon id="_7" fill="#000000" stroke="#808080" strokeWidth="2" points="113.5,54 113.5,19 78.5,19 64.5,68 " />
                    <polygon id="_8" fill="#000000" stroke="#808080" strokeWidth="2" points="50.5,19 78.5,19 64.5,68 " />
                    <rect x="11.5" y="19" fill={state[1]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="11.5" y="54" fill={state[2]} stroke="#808080" strokeWidth="2" width="4" height="27.6" />
                    <rect x="11.5" y="82" fill={state[3]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="113.5" y="19" fill={state[9]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="113.5" y="54" fill={state[8]} stroke="#808080" strokeWidth="2" width="4" height="27.6" />
                    <rect x="113.5" y="82" fill={state[7]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="78.5" y="15" fill={state[10]} stroke="#808080" strokeWidth="2" width="35" height="4" />
                    <rect x="50.5" y="15" fill={state[11]} stroke="#808080" strokeWidth="2" width="27.6" height="4" />
                    <rect x="15.5" y="15" fill={state[0]} stroke="#808080" strokeWidth="2" width="35" height="4" />
                    <rect x="78.5" y="117" fill={state[6]} stroke="#808080" strokeWidth="2" width="35" height="4" />
                    <rect x="50.5" y="117" fill={state[5]} stroke="#808080" strokeWidth="2" width="27.6" height="4" />
                    <rect x="15.5" y="117" fill={state[4]} stroke="#808080" strokeWidth="2" width="35" height="4" />

                </svg>
            </div>
            <div>

                <svg width="100" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 130.5 136">
                    <style type="text/css">

                    </style>
                    <polygon id="_1" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="15.5,54 15.5,19 50.5,19 64.5,68 " />
                    <polygon id="_2" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="15.5,82 15.5,54 64.5,68 " />
                    <polygon id="_3" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="15.5,82 15.5,117 50.5,117 64.5,68 " />
                    <polygon id="_4" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="50.5,117 78.5,117 64.5,68 " />
                    <polygon id="_5" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="113.5,82 113.5,117 78.5,117 64.5,68 " />
                    <polygon id="_6" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="113.5,82 113.5,54 64.5,68 " />
                    <polygon id="_7" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="113.5,54 113.5,19 78.5,19 64.5,68 " />
                    <polygon id="_8" fill="#FFFFFF" stroke="#808080" strokeWidth="2" points="50.5,19 78.5,19 64.5,68 " />
                    <rect x="11.5" y="19" fill={state[13]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="11.5" y="54" fill={state[14]} stroke="#808080" strokeWidth="2" width="4" height="27.6" />
                    <rect x="11.5" y="82" fill={state[15]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="113.5" y="19" fill={state[21]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="113.5" y="54" fill={state[20]} stroke="#808080" strokeWidth="2" width="4" height="27.6" />
                    <rect x="113.5" y="82" fill={state[19]} stroke="#808080" strokeWidth="2" width="4" height="35" />
                    <rect x="78.5" y="15" fill={state[22]} stroke="#808080" strokeWidth="2" width="35" height="4" />
                    <rect x="50.5" y="15" fill={state[23]} stroke="#808080" strokeWidth="2" width="27.6" height="4" />
                    <rect x="15.5" y="15" fill={state[12]} stroke="#808080" strokeWidth="2" width="35" height="4" />
                    <rect x="78.5" y="117" fill={state[18]} stroke="#808080" strokeWidth="2" width="35" height="4" />
                    <rect x="50.5" y="117" fill={state[17]} stroke="#808080" strokeWidth="2" width="27.6" height="4" />
                    <rect x="15.5" y="117" fill={state[16]} stroke="#808080" strokeWidth="2" width="35" height="4" />

                </svg>
            </div>
        </div>
    );

}