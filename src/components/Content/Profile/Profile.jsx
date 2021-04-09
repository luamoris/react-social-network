import React from 'react';
import Person from './Person';
import Posts from './Posts';
import './Profile.scss';

const Profile = () => {
	return (
		<div className="profile">
			<div className="profile__body">
				<Person />
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
