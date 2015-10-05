import React from 'react';
import ReactDOM from 'react-dom';

import UsingStyleName from './UsingStyleName';

import UsingStylesProperty from './UsingStylesProperty';
import UsingStylesPropertyStyles from './UsingStylesProperty/custom.css';

import UsingDecorator from './UsingDecorator';

import NestedComponents from './NestedComponents';

ReactDOM.render(<div>
    <UsingStyleName />
    <UsingStylesProperty styles={UsingStylesPropertyStyles} />
    <UsingDecorator />
    <NestedComponents />
</div>, document.querySelector('#app'));
