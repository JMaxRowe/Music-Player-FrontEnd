import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";

import Homepage from "./components/pages/Homepage/Homepage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SignUpPage from "./components/pages/user/Sign-Up/Sign-Up.jsx";
import SignInPage from "./components/pages/user/Sign-In/Sign-In.jsx";
import CreatePlaylist from "./components/pages/playlists/CreatePlaylist/CreatePlaylist.jsx";
import ExplorePlaylists from "./components/pages/playlists/ExplorePlaylists/ExplorePlaylists.jsx";
import Profile from "./components/pages/profiles/something.jsx";
import LikedSongs from "./components/pages/profiles/Liked-songs.jsx";
import CreatedPlaylists from "./components/pages/profiles/CreatedPlaylists.jsx";
import BookmarkedPlaylists from "./components/pages/profiles/Bookmarked-playlists.jsx";
import Songs from "./components/pages/Songs/Songs.jsx";
import ShowPlaylist from "./components/pages/playlists/ShowPlaylist/ShowPlaylist.jsx";
import EditPlaylist from "./components/pages/playlists/EditPlaylist/EditPlaylist.jsx";
import Player from "./components/Player/Player.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/user/sign-up" element={<SignUpPage />} />
        <Route path="/user/sign-in" element={<SignInPage />} />
        <Route path="/playlists/create-playlist" element={<CreatePlaylist />} />
        <Route path="/playlists" element={<ExplorePlaylists />} />
        <Route path="/playlists/:playlistId" element={<ShowPlaylist />} />
        <Route path="/playlists/:playlistId/edit" element={<EditPlaylist />} />
        <Route path="/user/:userId/profile" element={<Profile />} />
        <Route
          path="/user/:userId/created-playlists"
          element={<CreatedPlaylists />}
        />
        <Route
          path="/user/:userId/bookmarked-playlists"
          element={<BookmarkedPlaylists />}
        />
        <Route path="/user/:userId/liked-songs" element={<LikedSongs />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
      <Player />
    </>
  );
}

export default App;
