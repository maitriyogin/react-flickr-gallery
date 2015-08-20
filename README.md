# react-flickr-gallery

JS 
--
The js is structured per component with seperate files for the dispatcher, store, proxy and Action creators : one for View and Server actions.  The proxies responsibility is for the backend communication to flickr.

Styles
------
After we spoke I thought I'd try something with sass, after all the talk of inline styles at 'react europe', I thought I'd try and get the styles as close to the components as possible.   Hence the mirrored sass and component files.

App
----
The photos are mine, you may want to change the flickr api key in the FLICKR hash in Constants with your own ..  although it should work with mine.
I'll try and add some more pics in the morning. 

Install/Run
-----------
If you have trouble with node or just want to jump straight in there's a distributable version in the dist dir.
Just open up dist/index.html in your favourite browser ...

I'm asusming you'v got node setup but if not and your on a mac:
brew install node

Follow these steps :

1. Unzip the flickr bundle.

2. cd tmflickr

3. npm install

4. npm start

5. open a browser on http://localhost:8080

I'v tested on chrome, firefox and safari on osx.

For a distribution build:
1. cd into tmflickr
2. run the following : NODE_ENV=production UV_THREADPOOL_SIZE=100 webpack -p
3. you should end up with a app.css, app.js and index.html in the dist dir.  You can directly open the index.html and the app should run.
4. open dist/index.html in a browser directly...

The UV_THREADPOOL_SIZE=100 is for a sass compiler bug ..


