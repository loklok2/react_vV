import './App.css';
import { SiTailwindcss } from "react-icons/si";
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import AirQualityHome from './01/AirQualityHome';
import AirQualityInfo from './01/AirQualityInfo';
import AirQualityHomeOut from './01/AirQualityHome';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <BrowserRouter>
        <header className="flex justify-start items-center text-xl font-bold h-20 p-10 bg-slate-500">
          <p><SiTailwindcss /></p>
          <div>K-digital</div>
          <ul className="w-80% grid grid-cols-10 text-sm">
            <li className="mx-2 p-2 hover:bg-red-100"><Link to='/login'>Home</Link></li>
            <li className="mx-2 p-2 hover:bg-red-100"><Link to='/Info'>지하철대기질정보</Link></li>
          </ul>
        </header>
        <main className='grow flex justify-center items-center'>
          <Routes>
            <Route path="/login" element={<AirQualityHome/>} />
            <Route path="/logout" element={<AirQualityHomeOut/>} />
            <Route path="/Info" element={<AirQualityInfo/>} />
          </Routes>
        </main>
        <footer className='flex justify-center items-center text-white bg-slate-700 h-20'>
          ⓒ 2024 loklok2. All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
