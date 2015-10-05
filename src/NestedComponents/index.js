import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import Parent from './parent';

export default class extends React.Component {
    render () {
        let props;

        return <div style={{width: 400}}>
        <Parent />
        </div>;
    }
};
