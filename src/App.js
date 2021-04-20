import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Foo from './Components/Foo'
import Bar from './Components/Bar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Foo>
        hello Foo
      </Foo>
      <Bar>
        hello Bar
      </Bar>
    </ThemeProvider>
  );
}

export default App;
