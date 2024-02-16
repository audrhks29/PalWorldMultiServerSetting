import { memo } from 'react';
import Header from './layout/Header';

const App = memo(() => {

  return (
    <div className='wrap dark:bg-black'>
      <Header />

    </div>
  );
});

export default App;