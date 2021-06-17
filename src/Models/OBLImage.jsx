import { render } from '@testing-library/react';
import { Component, React } from 'react'

var oblState;
export default class OBL extends Component {
    constructor(oblStates) {
        oblState = oblStates;
        super();
    }
    render() {
        console.log('fromimage' + oblState);
        return (
            <div></div>
        );
    }
}

