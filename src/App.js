import GlobalStyles from './components/GlobalStyles'
import {ReactQueryDevtools} from 'react-query-devtools'
import Exchange from './components/Exchange'
//components
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
    
    <GlobalStyles />
      <Nav />
      <ReactQueryDevtools initialIsOpen = {false} />
      <Exchange />
      
      
    </div>
  );
}

export default App;
