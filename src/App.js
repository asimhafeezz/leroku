import { Cli, Cloud, Layout, Showcase, Stats } from './components'

const App = () => {
	return (
		<Layout>
			<Showcase />
			<Stats />
      <Cli />
      <Cloud />
		</Layout>
	)
}

export default App
