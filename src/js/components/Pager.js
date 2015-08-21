import React from 'react';
import ViewActionCreators from '../actions/ViewActionCreators';
import PagerHelper from '../helpers/PagerHelper';

import "styles/components/pager";

class Pager extends React.Component {
    page(page, pageNo){
        page.page = pageNo;
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageLeft(page){
        page = PagerHelper.pageLeft(page);
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageRight(page){
        page = PagerHelper.pageRight(page);
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageStart(page){
        page = PagerHelper.pageStart(page);
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageEnd(page){
        page = PagerHelper.pageEnd(page);
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    render() {
        var {page} = this.props;
        
        var pages = [];

        var [start, end] = PagerHelper.pagePosition(page);

        for (let i=start; i<end; i++) {
            var key = `pageNo-${i}`;
            var style = 'goToPage';
            style += i==page.page?' active':'';
            pages.push(<a href='#' className={style} onClick={this.page.bind(this, page,i)} key={key} role='goToPage'> {i} </a>);
        }

        return (
            <nav className='pagerContainer' role='pager'>
                <div/>
                <div className='pager'>
                    <a href='#' onClick={this.pageStart.bind(this, page)}> {'<<'} </a>
                    <a href='#' onClick={this.pageLeft.bind(this, page)}> {'<'} </a>
                    {pages}
                    <a href='#' onClick={this.pageRight.bind(this, page)}> {'>'} </a>
                    <a href='#' onClick={this.pageEnd.bind(this, page)}> {'>>'} </a>
                </div>
            </nav>
        );
    }
};

export default Pager;
