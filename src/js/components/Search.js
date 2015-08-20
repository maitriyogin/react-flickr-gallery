import React from 'react';
import {ENTER_KEY} from '../Constants';
import ViewActionCreators from '../actions/ViewActionCreators';
import 'styles/components/search';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    filterMe(event){
        console.log("-- which:" + event.which);
        if (event.which === ENTER_KEY) {
            var filterText = event.target.value;
            if(!filterText || filterText.length == 0){
                filterText = '';
            }
            ViewActionCreators.loadPhotos(filterText);
            this.setState({
                filterText : filterText
            });
        }
    }

    render(){
        return (
            <div className='search'>
                <input type='text' placeholder='Search' onKeyDown={this.filterMe.bind(this)} />
            </div>
        );
    }
};

export default Search;