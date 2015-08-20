import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';
import photoHelper from '../helpers/PhotoHelper';

class Photo extends React.Component {
    selectMe(photo){
        ViewActionCreators.selectPhoto(photo);
        console.log('selectMe');
    }
    render() {
        var {size, count, active} = this.props;
        var style = `photo-${size}`;
        style += count == 1 ? ' start':'';
        style += count == 4 ? ' end':'';
        style += active ? ' active' : '';
        return (
          <div className={style} key={this.props.photo.id} onClick={this.selectMe.bind(this, this.props.photo)}> 
            <img src={photoHelper.imageUrlFromPhoto(this.props.photo, this.props.size)} />
          </div>
        );
    }
};

export default Photo;