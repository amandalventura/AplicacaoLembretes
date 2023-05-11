import GlobalStyles from './styles/global';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <h1>Hello world!</h1>
    </ThemeProvider>
  )
}

export default App
