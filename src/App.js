import Header from './components/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content';
import Footer from './components/Footer';
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
