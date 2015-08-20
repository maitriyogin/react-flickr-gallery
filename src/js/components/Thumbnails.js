import React from 'react';
import Photo from './Photo';
import {PHOTOSIZE, ROWCOUNT} from '../Constants';

import 'styles/components/thumbnails';

class Thumbnails extends React.Component{
    buildThumbnails(photos, selectedPhoto){
        var count = 0;
        var rowcount = photos.photo && photos.photo.length < ROWCOUNT ? photos.photo.length : ROWCOUNT;
        return photos.photo.map(function(thumbnail) {
            count = count == rowcount ? 0 : count;
            var active = selectedPhoto != null && thumbnail.id == selectedPhoto.id;
            return (  <Photo photo={thumbnail} size={PHOTOSIZE.THUMBNAIL} key={thumbnail.id} count={count++} rowcount={rowcount} active={active}/>
            );
        }, this)
    }

    render() {
        var {photos} = this.props.photos;
        var {selectedPhoto} = this.props;
        return (
            <div className='thumbnails'>
                {this.buildThumbnails(photos, selectedPhoto)}
            </div>
        );
    }
};

export default Thumbnails;