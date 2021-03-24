import React from 'react';
import FloatingMenu from './FloatingMenu';

function Menu() {
	return (
		<div className="menu">
			<div className="menu__body">
				<div className="scroll-ad-position"></div>
				<FloatingMenu />
			</div>
		</div>
	);
};

export default Menu;
