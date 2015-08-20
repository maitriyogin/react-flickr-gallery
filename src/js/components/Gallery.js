import React from 'react';
import PhotoStore from 'js/stores/PhotoStore';
import ViewActionCreators from 'js/actions/ViewActionCreators';
import {PHOTOSIZE, ENTER_KEY, PAGING} from 'js/Constants';

import Header from 'js/components/Header';
import MainPhoto from 'js/components/MainPhoto';
import Thumbnails from 'js/components/Thumbnails';
import Pager from 'js/components/Pager';

// styles
import "styles/config/colors";
import "styles/utilities/clearfix";
import "styles/components/gallery";

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = PhotoStore.getState();
    }

    handleChange(){
        this.setState(PhotoStore.getState());
    }

    componentDidMount() {
        // subscribe change events on the PhotoStore 
        PhotoStore.addChangeListener(this.handleChange.bind(this));
        // load all photos
        ViewActionCreators.loadPhotos('', this.state.perPage, this.state.page);
    }

    componentWillUnmount() {
        PhotoStore.removeChangeListener(this.handleChange)
    }

    render() {
        if (!this.state.loaded) {
            return <div>Loading...</div>;
        }
        var {photos, selectedPhoto, page, showShare} = this.state;
        return (
            <div className='gallery'>
                <Header />
                <MainPhoto photo={selectedPhoto} showShare={showShare}/>
                <hr/>
                <Thumbnails photos={photos} selectedPhoto={selectedPhoto}/>
                <hr/>
                <Pager page={page}/>
            </div>
        );
    }
};

export default Gallery;
