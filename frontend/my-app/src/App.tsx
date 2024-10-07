import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { SearchHousing } from './components/SearchHousing/SearchHousing';
import ScrollToTop from './components/auxiliary/ScrollToTop';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/shelter-service' element={<HomeScreen />}></Route>
          <Route path='/shelter-service/search' element={<SearchHousing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
