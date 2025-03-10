import classes from './index.module.scss';

import CardGrid from '@components/CardGrid/CardGrid';
import Header from '@components/Header/Header';
import Search from '@components/Search/Search';

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
