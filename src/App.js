import { Cli, Cloud, Languages, Layout, Showcase, Stats } from './components'

const App = () => {
	return (
		<Layout>
			<Showcase />
			<Stats />
      <Cli />
      <Cloud />
      <Languages />
		</Layout>
	)
}

export default App
