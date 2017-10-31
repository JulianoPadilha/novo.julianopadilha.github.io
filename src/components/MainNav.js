import React from 'react';

const items = [
	"about",
	"interests",
	"articles",
	"skills",
	"projects",
	"contact",
];

const MainNav = () => (
	<nav className="site-nav">
		<ul>
		{
			items.map((item, index) => {
				return <li key={ index }><a href={ '#'+item }>{ item }</a></li>
			})
		}
		</ul>
	</nav>
)

export default MainNav;