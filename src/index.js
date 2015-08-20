import React from 'react';
import Gallery from './js/components/Gallery';
import 'styles/base';
import 'styles/components/container'

//React.render(<HelloMessage name="Sebastian" />, document.getElementById('app'));

React.render(<div className='container'><Gallery /></div>, document.getElementById('app'));
