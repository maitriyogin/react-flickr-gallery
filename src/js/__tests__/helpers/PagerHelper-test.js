var PagerHelperPath = '../../helpers/PagerHelper.js';

jest.dontMock(PagerHelperPath);

import React from 'react/addons';
const PagerHelper = require(PagerHelperPath);

var TestUtils = React.addons.TestUtils;

describe('PagerHelper', function() {
    var page;
    beforeEach(function(){
        page = {
            index: 0,
            page: 2, // the current page
            perpage: 5, // how many thumbnails per page
            total: 20, // total number of thumbnails
            maxPages: 4, // maximum page numbers displayed in the pager
            totalPages: 0 // total number of pages, this is total/perpage
                          // so if we have 20 photos and we want to display
                          // 5 (perpage) thumbnails then we would have 4 pages
        }
    });
    it('page left', function() {
        page = PagerHelper.pageLeft(page);
        expect(page.page).toEqual(1);

        page = PagerHelper.pageLeft(page);
        expect(page.page).toEqual(1);
    });

    it('page right', function() {
        page.page = 2;
        page = PagerHelper.pageRight(page);
        expect(page.page).toEqual(3);

        page = PagerHelper.pageRight(page);
        expect(page.page).toEqual(4);

        page = PagerHelper.pageRight(page);
        expect(page.page).toEqual(4);
    });

    it('page start', function() {
        page.page = 4;
        page = PagerHelper.pageStart(page);
        expect(page.page).toEqual(1);

        page = PagerHelper.pageStart(page);
        expect(page.page).toEqual(1);
    });

    it('page end', function() {
        page.page = 1;
        page = PagerHelper.pageEnd(page);
        expect(page.page).toEqual(4);

        page = PagerHelper.pageEnd(page);
        expect(page.page).toEqual(4);
    });

    it('page position', function() {
        page.page = 1;
        page.total = 100;

        // per page is 5 so we should have 20 pages ...
        var [start, end] = PagerHelper.pagePosition(page);
        expect(page.totalPages).toEqual(20);

        // we're on page 1 so :
        // start should be 1
        // end should be 4
        expect(start).toEqual(1);
        expect(end).toEqual(5);

        page.page = 2;
        [start, end] = PagerHelper.pagePosition(page);
        expect(start).toEqual(2);
        expect(end).toEqual(6);

        // if we page to the end we should still have 5 pages visible
        page.page = 19;
        [start, end] = PagerHelper.pagePosition(page);
        expect(start).toEqual(17);
        expect(end).toEqual(21);

        page.page = 17;
        [start, end] = PagerHelper.pagePosition(page);
        expect(start).toEqual(17);
        expect(end).toEqual(21);

        page.page = 16;
        [start, end] = PagerHelper.pagePosition(page);
        expect(start).toEqual(16);
        expect(end).toEqual(20);

        page.page = 15;
        [start, end] = PagerHelper.pagePosition(page);
        expect(start).toEqual(15);
        expect(end).toEqual(19);

    });
});
