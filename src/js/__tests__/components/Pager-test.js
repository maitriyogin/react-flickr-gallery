var PagerPath = '../../components/Pager.js';
var PagerHelperPath = '../../helpers/PagerHelper.js';
var ViewActionCreatorsPath = '../../actions/ViewActionCreators';

jest.dontMock(PagerPath);
jest.dontMock(PagerHelperPath);

import React from 'react/addons';
const Pager = require(PagerPath);
const PagerHelper = require(PagerHelperPath);

const ViewActionCreatorsMock = require(ViewActionCreatorsPath);

var TestUtils = React.addons.TestUtils;

describe('Pager', function() {
    var page;
    beforeEach(function() {
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
    it('creates a pager according to a page object', function() {

        var PagerComp = TestUtils.renderIntoDocument(<Pager page={page} />);

        // make sure we have an element
        var element = TestUtils.findRenderedDOMComponentWithClass(PagerComp, 'pagerContainer');
        expect(element).toBeDefined();

        // make sure that we have the correct number of pages
        var pageLinks = TestUtils.scryRenderedDOMComponentsWithTag(PagerComp, 'a');
        expect(pageLinks.length).toBe(8); // includes the end,left, pages, right, start

        // filter on roles
        var goToPageLinks = pageLinks.filter(function(link) {
            var dom = React.findDOMNode(link);
            if (dom.className && dom.className.indexOf('goToPage') >=0 ) {
                return true;
            } else {
                return false;
            }
        });
        expect(goToPageLinks.length).toBe(4);

        // simulate the click
        var start = React.findDOMNode(pageLinks[0]);
        var left = React.findDOMNode(pageLinks[1]);
        var two = React.findDOMNode(pageLinks[3]);
        var right = React.findDOMNode(pageLinks[6]);
        var end = React.findDOMNode(pageLinks[7]);

        TestUtils.Simulate.click(start);
        expect(page.page).toEqual(1);

        TestUtils.Simulate.click(right);
        expect(page.page).toEqual(2);


        TestUtils.Simulate.click(end);
        expect(page.page).toEqual(4);

        TestUtils.Simulate.click(left);
        expect(page.page).toEqual(3);

        TestUtils.Simulate.click(two);

        expect(page.page).toEqual(2);

    });
});
