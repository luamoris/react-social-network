import React from 'react';
import FloatMenu from './FloatMenu/FloatMenu.jsx';
import './Menu.scss';

function Menu() {
	return (
		<div className="menu">
			<div className="menu__body">
				<div className="menu__position"></div>
				<FloatMenu />
			</div>
		</div>
	);
};

export default Menu;
