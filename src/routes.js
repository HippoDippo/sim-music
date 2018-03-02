import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Songs from './components/Songs';
import SongDetails from './components/SongDetails';
import AddSong from './components/AddSong';
import EditSong from './components/EditSong';
import Playlist from './components/Playlist';
import AllPlaylist from './components/AllPlaylist';


return (
  <Switch>
    <Route path="/" component={Login}/>
    <Route path="/songs" component={Songs} />
    <Route path="/songdetails" component={SongDetails} />
    <Route path="/addsong" component={AddSong} />
    <Route path="/editsong" component={EditSong} />
    <Route path="/playlist" component={Playlist} />
    <Route path="/allplaylist" component={AllPlaylist} />
  </Switch>
);
