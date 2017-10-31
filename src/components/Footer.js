import React from 'react';

import github from '../assets/images/github.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import behance from '../assets/images/behance.svg';
import codepen from '../assets/images/codepen.svg';
import linkedin from '../assets/images/linkedin.svg';

const Footer = () => (
<footer className="home-footer" id="contact">
	<a className="email-contact">sistemas.padilha@gmail.com</a>
	<div className="social-media flex flex--center">
		<a href="https://github.com/JulianoPadilha?tab=repositories"><img src={ github } alt="Github" /></a>
		<a href="https://www.facebook.com/JulianoPadilha"><img src={ facebook } alt="Facebook" /></a>
		<a href="https://twitter.com/padilhano?lang=pt-br"><img src={ twitter } alt="Twitter" /></a>
		<a href="https://www.behance.net/julianopadilha"><img src={ behance } alt="Behance" /></a>
		<a href="codepen.io/julianopadilha/"><img src={ codepen } alt="" /></a>
		<a href="https://br.linkedin.com/in/julianopadilha"><img src={ linkedin } alt="LinkedIn" /></a>
	</div>
</footer>
)

export default Footer;