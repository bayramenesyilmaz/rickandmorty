import { Route, Routes } from 'react-router-dom';
import Locations from './pages/Locations/Locations';
import Layout from './Layout';
import LocationDetail from './pages/LocationDetail/LocationDetail';
import CharacterDetail from './pages/CharacterDetail/CharacterDetail';
import Characters from './pages/Characters/Characters';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Locations />} />
        <Route path='/location-detail/:id' element={<LocationDetail />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/character-detail/:id' element={<CharacterDetail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
