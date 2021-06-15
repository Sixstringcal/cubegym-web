import React from 'react';


async function getOBLAlgs(uLayer, dLayer) {
    const res = fetch("http://api.cubegym.net/getOBL", {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(res);
}

export default function OBL() {

    

    var algs = getOBLAlgs('all', 'all');



    console.log(algs);

    return (
        <div>

            <div>

                <svg width="100" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110"><defs>

                </defs>
                    <polygon
                        id="1"
                        points="0,35 0,0 35,0 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="2"
                        points="0,63 0,35 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="3"
                        points="0,63 0,98 35,98 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="4"
                        points="35,98 63,98 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="5"
                        points="98,63 98,98 63,98 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="6"
                        points="98,63 98,35 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="7"
                        points="98,35 98,0 63,0 49,49"
                        fill="black"
                        stroke="gray"
                        strokeWidth="2"
                    />
                    <polygon
                        id="8"
                        points="35,0 63,0 49,49"
                        fill="black"
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