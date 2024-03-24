import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import ViewCourse from './ViewCourse';
import Test from './Secretpage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/viewCourse' element={<ViewCourse />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
