import Express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../src/store/createStore';
import Routes from '../src/routes';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';

const app = new Express();
const port = 3000;

var complier = webpack(webpackConfig);
var publicPath = webpackConfig.output.publicPath;
app.use(webpackDev(complier,{noInfo:true,publicPath:publicPath}));
app.use(webpackHot(complier));

app.use(function(req,res){
	const preloadedState = {};
	const store = configureStore(preloadedState);
	const context = {};
	const html = renderToString(
		<Provider store={store}>
			<StaticRouter
				context={context}
				location={req.url}
			>
				<Routes />
			</StaticRouter>
		</Provider>
	);
	const finalState = store.getState();

	res.send(renderPage(html,finalState));

});

function renderPage(content,state){
	return `
		<!doctype html>
	    <html>
	      <head>
	        <title>测试项目</title>
	      </head>
	      <body>
	        <div id="app">${content}</div>
	        <script>
	          window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\x3c')}
	        </script>
	        <script src="/static/bundle.js"></script>
	      </body>
    	</html>
	`
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
