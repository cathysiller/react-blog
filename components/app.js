import React from 'react';
import Body from './body'
import Header from './header'
import Footer from './footer'


class App extends React.Component {
	render() {
		return (
			<span>
			     <Header />
			     <Body />
			     <Footer />
			</span>
		)
	}
}

export default App;