import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/" element={<LoginPage/>} />
          </Routes>
        </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
