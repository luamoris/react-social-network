import React from 'react';
import FloatItem from './FloatItem.jsx';

const MENU = [
	{
		title: 'Profile',
		link: '/profile',
	},
	{
		title: 'Messages',
		link: '/messages',
	},
	{
		title: 'Music',
		link: '/music',
	},
	{
		title: 'News',
		link: '/news',
	},
	{
		title: 'Settings',
		link: '/settings',
	},
];

const FloatMenu = () => {
	const renderFloatItem = (item, key) => (
		<li key={key}>
			<FloatItem 
				title={item.title}
				link={item.link}
			/>
		</li>
	);
	return (
		<div className="float-menu">
			<div className="float-menu__body">
				<ul className="float-menu__list">
					{MENU.map(renderFloatItem)}
				</ul>
			</div>
		</div>
	);
};

export default FloatMenu;
