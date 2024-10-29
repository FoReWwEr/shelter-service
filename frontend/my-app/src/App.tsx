import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { SearchHousing } from './components/SearchHousing/SearchHousing';
import { HousingDetails } from './components/HousingDetails/HousingDetails';
import { ProvideHousing } from './components/ProvideHousing/ProvideHousing';
import { AuthorizationMenu } from './components/AuthorizationMenu/AuthorizationMenu';
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu';
import ScrollToTop from './components/auxiliary/ScrollToTop';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { useEffect } from 'react';

const App = () => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/shelter-service' element={<HomeScreen />}></Route>
          <Route path='/shelter-service/search' element={<SearchHousing />}></Route>
          <Route path='/shelter-service/search/:id' element={<HousingDetails />}></Route>
          <Route path='/shelter-service/provide' element={<ProvideHousing />}></Route>
          <Route path='/shelter-service/profile' element={<ProfileMenu />}></Route>
        </Routes>

        {isModalOpen && <AuthorizationMenu />}
      </BrowserRouter>
    </div>
  );
}

export default App;
