import React from 'react';
import ViewActionCreators from 'js/actions/ViewActionCreators';
import Photo from 'js/components/Photo';
import {PHOTOSIZE, PAGING} from '../Constants';

import "styles/components/mainPhoto";

class MainPhoto extends React.Component {
    goLeft(photo){
        ViewActionCreators.selectPhoto(photo, PAGING.LEFT);
    }
    goRight(photo){
        ViewActionCreators.selectPhoto(photo, PAGING.RIGHT);
    }
    toggleShare(showShare){
        ViewActionCreators.showShare(!showShare);
    }
    render() {
        var {photo, showShare} = this.props;
        var photoElement = '';
        if(photo == null){
            photoElement = <p>Please select a photo</p>;
        } else {
            photoElement =  <Photo photo={photo} size={PHOTOSIZE.LARGE}/>
        }
        var showStyle = showShare ? {display:'block'} : {display:'none'}
        return (
            <div className='mainPhotoContainer'>
            <div className='redThing'/>
            <div className='mainPhoto'>
                {photoElement}
                <div className='navLeft'><a href='#' onClick={this.goLeft.bind(this, photo)}> {'<'} </a> </div>
                <div className='navRight'><a href='#' onClick={this.goRight.bind(this, photo)}> {'>'} </a> </div>
                
            </div>
            <div style={showStyle} className='shareBox'></div>
            <div className='title'>{photo.title}
                <div className='share' onClick={ this.toggleShare.bind(this, showShare ) }>SHARE</div>
            </div>
            </div>

        );
    }
};

export default MainPhoto;