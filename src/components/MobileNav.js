import React from 'react';

const items = [
	"about",
	"interests",
	"articles",
	"skills",
	"projects",
	"contact",
];

const MobileNav = () => (
	<div className="mobile-nav">
		<ul>
			{
			items.map((item, index) => {
				return <li key={ index }><a href={ '#'+item }>{ item }</a></li>
			})
		}
		</ul>
	</div>
)

export default MobileNav;