import React from 'react';
import GalleryClass from './js/components/Gallery';
import 'styles/base';
import 'styles/components/container'
require('babel-core/polyfill')

var Gallery = React.createFactory(GalleryClass);

React.render(<div className='container2'><GalleryClass/></div>, document.getElementById('gallery1'));
React.render(<div className='container2'><GalleryClass/></div>, document.getElementById('gallery2'));