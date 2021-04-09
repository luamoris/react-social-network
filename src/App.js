import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import './scss/app.scss';
import Profile from './components/Content/Profile/Profile.jsx';
import Messages from './components/Content/Messages/Messages.jsx';
import Music from './components/Content/Music/Music.jsx';
import News from './components/Content/News/News.jsx';
import Settings from './components/Content/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<div className="container">
					<div className="app__body">
						<Header />
						<Menu />
						<main className="content">
							<div className="content__body">
								<Route path="/profile" component={Profile} />
								<Route path="/messages" component={Messages} />
								<Route path="/music" component={Music} />
								<Route path="/news" component={News} />
								<Route path="/settings" component={Settings} />
							</div>
						</main>
						<Footer />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
