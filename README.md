## REACT SOCIAL NETWORK
__`Project - training`__

### Links

> + [Source code on GitHub][solution-repository]
<!-- > + [Live Site][deploy] -->

### Content
> + [Install](#Install)
> + [Explored](#Explored)
> + [Process](#Process)


---

## Install


#### Get `started`

```console
	git clone https://github.com/luamoris/react-social-network
	cd react-social-network
	npm i
	npm start
```

#### For `build`

```console
	npm run build
```

#### For `eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

```console
	npm run eject
```

#### For `lint`

- [stylelint][stylelint] - lint SCSS files

```console
	npm run stylelint
```


---



## Explored

> ### Content
> + [Style Modules](#style-modules)
> + [Prop Types](#prop-types)
> + [Browser Router](#browser-router)
<!-- > + [](#) -->


#### Style Modules
```css
	/* App.module.css */

	.app {
		width: 100%;
		height: 100vh;
	}

	.content {
		margin: auto;
		width: 500px;
		height: 300px;
		background-color: #d64545;
	}
```
```jsx
	/* App.jsx */

	import React from 'react';
	import style from 'App.module.css'

	/*
	* style.app: App_app__[hash:5]
	* style.content: App_content__[hash:5]
	*/

	const App = () => {
		return (
			<div className={style.app}>
				<div className={style.content}></div>
			</div>
		);
	};

	export default App;
```


#### Prop Types
```console
	npm install prop-types
```
```jsx
	import PropTypes from 'prop-types';

	const Item = (props) => {
		return (
			<div className="item">
				<a href={ props.link }>{ props.title }</a>
			</div>
		);
	};

	Item.propTypes = {
		link: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	};
```
```jsx
	PropTypes = {
		string, 		// string
		number, 		// integer, float
		object, 		// object {}
		objectOf(),		// type of fields does the object have
		array, 			// array []
		arrayOf(), 		// type of fields does the array have

		isRequired,		// ???
	}
```


#### Browser Router
```console
	npm install react-router-dom
```
```jsx
	import { BrowserRouter, Route, NavLink } from 'react-router-dom';

	const Profile = () => ( <div className="profile"></div> );
	const About = () => ( <div className="about"></div> );

	const App = () => {
		return (
			<BrowserRouter>
				<div className="app">
					<div className="links">
						<NavLink to="/profile" activeClassName="active">Profile</NavLink>
						<NavLink to="/about" activeClassName="active">About</NavLink>
					</div>
					<div className="content">
						<Route path="/profile" component={Profile} />
						<Route path="/about" component={About} />
					</div>
				</div>
			</BrowserRouter>
		);
	};
```



---



## Process

### Built with

> - Semantic HTML5 markup
> - CSS custom properties
> - CSS Flexbox, Grid
> - Mobile-first workflow
> - [React][react] - JS library

<!-- ### What I learned -->
<!-- >  +  -->

<!-- ### Useful resources -->
<!-- > +  -->

### Author

<p align="left">
	<a href="https://github.com/luamoris">
		<img width="50" src="https://avatars.githubusercontent.com/u/70754306?s=460&u=922c28870849f7c9528034f0512e69fb77339c84&v=4 alt="Iosif Luamoris"/>
	</a>
</p>


[solution-repository]: https://github.com/luamoris/react-social-network
[deploy]: https://

[stylelint]: https://stylelint.io/
[react]: https://reactjs.org/