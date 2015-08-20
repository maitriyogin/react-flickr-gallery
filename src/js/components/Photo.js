import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';
import photoHelper from '../helpers/PhotoHelper';

class Photo extends React.Component {
    selectMe(photo){
        ViewActionCreators.selectPhoto(photo);
    }
    render() {
        var {size, count, active, rowcount} = this.props;
        var style = `photo-${size}`;
        style += count == 0 ? ' start':'';
        style += count == rowcount-1 ? ' end':'';
        style += active ? ' active' : '';
        return (
          <div className={style} key={this.props.photo.id} onClick={this.selectMe.bind(this, this.props.photo)}> 
            <img src={photoHelper.imageUrlFromPhoto(this.props.photo, this.props.size)} />
          </div>
        );
    }
};

export default Photo;