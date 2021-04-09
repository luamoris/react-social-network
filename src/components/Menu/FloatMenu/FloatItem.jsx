import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const FloatItem = (props) => {
	return (
		<div className="float-menu__item">
			<NavLink className="float-menu__link" to={props.link} activeClassName="active">
				<span className="float-menu__title">{props.title}</span>
			</NavLink>
		</div>
	);
};

FloatItem.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default FloatItem;
