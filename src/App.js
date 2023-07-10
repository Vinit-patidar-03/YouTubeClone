import './App.css';
import Home from './pages/Home';
import AppContext from './context/AppContext';
import UpperNavbar from './components/UpperNavbar';
import LeftNavbar from './components/LeftNavbar';
import SearchResults from './pages/SearchResults'
import {Routes,Route} from 'react-router-dom'
import VideoDetails from './pages/VideoDetails';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ChannelDetails from './pages/ChannelDetails';
import ShortVideos from './components/ShortVideos'
import PlaylistDetails from './components/PlaylistDetails'

function App() {
  const location = useLocation();

  useEffect(()=>{},[location])

  return (
     <>
       <AppContext>
            <UpperNavbar/>
            {location.pathname === '/' ?<LeftNavbar/>:''}
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='searchResults/:query' element={<SearchResults/>} />
                <Route path='video/:id/:cid' element={<VideoDetails />}/>
                <Route path='channelDetails/:cid' element={<ChannelDetails />}/>
                <Route path='shorts/:id' element={<ShortVideos/>} />
                <Route path='playlist/:pid' element={ <PlaylistDetails/>} />
            </Routes>
       </AppContext> 
     </>
  );
}

export default App;
