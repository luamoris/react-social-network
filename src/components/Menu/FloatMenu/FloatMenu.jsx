import React from 'react';
import FloatItem from './FloatItem.jsx';

function FloatMenu() {
	return (
		<div className="float-menu">
			<div className="float-menu__body">
				<ul className="float-menu__list">
					<li><FloatItem title="My profile" /></li>
					<li><FloatItem title="Message" /></li>
					<li><FloatItem title="Music" /></li>
					<li><FloatItem title="News" /></li>
				</ul>
				<ul className="float-menu__list">
					<li><FloatItem title="Settings" /></li>
				</ul>
			</div>
		</div>
	);
};

export default FloatMenu;
