import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './child.css';

class Child extends React.Component {
    render () {
        return <div styleName="wrapper">
            {this.props.items}
        </div>;
    }
}

export default CSSModules(Child, styles);
