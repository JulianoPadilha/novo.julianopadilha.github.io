import React from 'react';

import Logo from './Logo';
import MainNav from './MainNav';

const Header = () => (
<header>
	<div className="header-position">
		<Logo />
		<MainNav />
		<div className="mobile-nav-toggle">
			<span></span>
		</div>
	</div>
</header>
)

export default Header;