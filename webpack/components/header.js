import React 		     from 'react';
import IconVk 		   from '../svg/logo-vk.js';
import IconVkNp 	   from '../svg/logo-vk-np.js';
import IconTopics 	 from '../svg/logo-topics.js';
import IconServices	 from '../svg/logo-services.js';

export default class Header extends React.Component {

  render() {
  	var headerLogo;

  	if(this.props.world == 'services'){
  		headerLogo = <IconServices />;	
  	}
  	else if(this.props.world == 'vk-np'){
  		headerLogo= <IconVk />;
  	}
  	else if(this.props.world == 'topics'){
  		headerLogo= <IconTopics />;
  	}
  	else{
  		headerLogo = <IconVk />;	
  	}  	
    return (
      <header className={"main__header main__header--" + this.props.world}>
      	{headerLogo}
      </header>
    )
  }
}
