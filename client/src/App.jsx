import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Page404 from './pages/Page404/Page404';

const App = () => {
  return (
    <main>
      <Routes preserverScrollPosition={true}>
        <Route index path="/" element={<Homepage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
};

export default App;
