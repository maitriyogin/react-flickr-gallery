import React from 'react';
import ViewActionCreators from 'js/actions/ViewActionCreators';

import "styles/components/pager";

class Pager extends React.Component {
    page(page, pageNo){
        page.page = pageNo;
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageLeft(page){
        page.page --;
        if(page.page <= 0) {
            page.page = 1;
        }
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageRight(page){
        page.page ++;
        var maxPages = Math.ceil(page.total / page.perpage);
        if(page.page > maxPages) {
            page.page = maxPages;
        }
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageStart(page){
        page.page = 1;
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    pageEnd(page){
        page.page = Math.ceil(page.total / page.perpage);
        ViewActionCreators.loadPhotos( page.text, page.perpage, page.page);
    }
    render() {
        var {page} = this.props;
        
        var pages = [];
        var totalPages = Math.ceil(page.total / page.perpage);
        var start = page.page;
        var end = page.maxPages + page.page;
        if(end > totalPages +1){
            end = totalPages+1;
            var maxPages = totalPages < page.maxPages ? totalPages : page.maxPages;
            start = end - maxPages;
        }

        for (let i=start; i<end; i++) {
            var key = `pageNo-${i}`;
            var activePage = i==page.page?'active':'';
            pages.push(<a href='#' className={activePage} onClick={this.page.bind(this, page,i)} key={key}> {i} </a>);
        }

        return (
            <div className='pagerContainer'>
                <div/>
                <div className='pager'>
                    <a href='#' onClick={this.pageStart.bind(this, page)}> {'<<'} </a>
                    <a href='#' onClick={this.pageLeft.bind(this, page)}> {'<'} </a>
                    {pages}
                    <a href='#' onClick={this.pageRight.bind(this, page)}> {'>'} </a>
                    <a href='#' onClick={this.pageEnd.bind(this, page)}> {'>>'} </a>
                </div>
            </div>
        );
    }
};

export default Pager;
