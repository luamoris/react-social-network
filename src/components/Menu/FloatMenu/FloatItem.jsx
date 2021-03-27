import React from 'react';

function FloatItem(props) {
	return (
		<div className="float-menu__item">
			<a className="_link" href="#">
				<span className="_title">{props.title}</span>
			</a>
		</div>
	);
};

export default FloatItem;
