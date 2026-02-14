import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Commands from './pages/Commands';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/commands" element={<Commands />} />
            </Routes>
        </Router>
    );
}

export default App;
