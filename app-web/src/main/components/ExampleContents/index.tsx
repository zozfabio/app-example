import React, { ReactElement } from 'react';
import logo from '../../resources/logo.svg';
import './styles.css';

export default function ExampleContents(): ReactElement {
    return (
        <div id="component-example-contents" className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/main/components/ExampleContents/index.tsx</code> and save to reload.
                </p>
                <p>{process.env.NODE_ENV}</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}
