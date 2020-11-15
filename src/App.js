//react-router-dom
import { BrowserRouter as Router , Redirect, Route , Switch } from 'react-router-dom'

import Layout from "./components/common/Layout"
import { Docs, FeaturesPage, HomePage } from "./components/Pages"


const App = () => {
	return (
		<Router>
		<Layout>
			<Switch>
				<Redirect exact from="/" to='/home' />
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/docs" component={Docs} />
				<Route exact path="/features" component={FeaturesPage} />
			</Switch>
		</Layout>
		</Router>
		
	)
}

export default App
