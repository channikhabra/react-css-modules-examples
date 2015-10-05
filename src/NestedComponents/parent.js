import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './parent.css';
import Child from './child';

class Parent extends React.Component {
    render () {
        let items;

        items = [1, 2, 3, 4, 5, 6].map((num) => <span className={this.props.styles.item} key={num}>{num}</span>);

        return <Child
                   items={items}
               />
    }
}

export default CSSModules(Parent, styles);
