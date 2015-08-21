# react-flickr-gallery

JS 
--
The js is structured per component with seperate files for the dispatcher, store, proxy and Action creators : one for View and Server actions.  The proxies responsibility is for the backend communication to flickr.

Styles
------
The styling is done using sass with componitised sass files. Hence for every component theres a corresponding sass component that holds it's style.
App
----
The photos are mine, you may want to change the flickr api key in the FLICKR hash in Constants with your own.

Install/Run
-----------
Follow these steps :

Run
-------

1. clone this repo

2. cd react-flickr-gallery

3. npm install

5. npm start

6. open a browser on http://localhost:8080

Test
-------

The tests are written in Jest.  Jest requires node 10.*, so if your on the cutting edge and have a later version of node
then please install nvm.
nvm, will enable you to install different node versions.

Distribution
------------

1. cd into react-flickr-gallery
2. run the following : NODE_ENV=production UV_THREADPOOL_SIZE=100 webpack -p
3. you should end up with a app.css, app.js and index.html in the dist dir.  You can directly open the index.html and the app should run.
4. open dist/index.html in a browser directly...

The UV_THREADPOOL_SIZE=100 is for a sass compiler bug ..


