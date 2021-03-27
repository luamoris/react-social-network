import React from 'react';
import './Profile.scss';

function Profile() {
	return (
		<div className="profile">
			<div className="person">
				<div className="person__body">
					<div className="person__picture">
						<div className="_body">
							<div className="_title">
								<span>Iosif Isachko</span>
							</div>
							<div className="_content">
								{/* <img src="#" alt="The photo"/> */}
								<div className="img"></div>
							</div>
							<div className="_more">
								<div className="_body"></div>
							</div>
						</div>
					</div>
					<div className="person__info">
						<div className="_body"></div>
					</div>
				</div>
			</div>
			<div className="posts">
				<div className="posts__item"></div>
				<div className="posts__item"></div>
				<div className="posts__item"></div>
				<div className="posts__item"></div>
			</div>
		</div>
	);
};

export default Profile;
