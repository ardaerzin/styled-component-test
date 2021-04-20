import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Foo from './Components/Foo'
import Bar from './Components/Bar'
import Baz from './Components/Baz'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Foo>
        Foo is working properly
      </Foo>
      <Bar>
        Bar is working properly
      </Bar>
      <Baz>
        Baz is NOT working properly
      </Baz>
    </ThemeProvider>
  );
}

export default App;
