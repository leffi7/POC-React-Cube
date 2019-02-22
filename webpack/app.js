// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html
// https://github.com/kidjp85/react-id-swiper
import React            	from 'react';
import ReactDOM         	from 'react-dom';
import Swiper 				from 'react-id-swiper';
import Nav					from './components/nav.js';
import VK					from './pages/vk.js';
import DeVolkskrant			from './pages/de-volkskrant.js';
import Topics				from './pages/topics.js';
import Services				from './pages/services.js';

export default class LayOut extends React.Component {
  render() {
	const params = {
		effect: 'cube',
        pagination: '.nav',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + ' ' + className + '--' + (index + 1) + '"></span>';
        },		
		hashnav: true,
		loop: false,
		grabCursor: true,
		setWrapperSize: true,
		cube: {
			shadow: false,
			slideShadows: false
		}
	}

  	return (
	    <div className="wrapper">
		    <Swiper {...params}>
		    	<div><VK /></div>
		    	<div><DeVolkskrant /></div>
		    	<div><Topics /></div>
		    </Swiper>
		    <Nav />	
	    </div>
    )
  }
}

ReactDOM.render(
  <LayOut />, document.querySelector("#main")
)

/*
import React            		from 'react';
import ReactDOM         		from 'react-dom';
import HLN						from './pages/HLN.js';
import { Router, Route, Link, browserHistory }	from 'react-router'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={HLN}/>
    <Route path="/hln" component={HLN}/>
  </Router>
);

ReactDOM.render(
  routes, document.querySelector("#main")
);
*/