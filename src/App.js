import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
import './scss/app.scss';

const App = () => {
	return (
		<div className="app">
			<div className="conteiner">
				<div className="app__body">
					<Header />
					<Menu />
					<Content />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
