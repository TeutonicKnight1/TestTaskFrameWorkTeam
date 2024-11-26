import classes from './index.module.scss';

import CardGrid from './components/CardGrid';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <main className={classes.container}>
        <Search />
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
