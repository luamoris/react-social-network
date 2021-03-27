import React from 'react';
import './Content.scss';
import Profile from './Profile/Profile.jsx';

function Content() {
	return (
		<main className="content">
			<div className="content__body">
				<Profile />
			</div>
		</main>
	);
};

export default Content;
