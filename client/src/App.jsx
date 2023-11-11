import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Page404 from './pages/Page404/Page404';
import Leaderboard from './pages/Leaderboard/Leaderboard';

const App = () => {
  return (
    <main>
      <Routes preserverScrollPosition={true}>
        <Route index path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
};

export default App;
