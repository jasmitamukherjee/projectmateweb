import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import Register from './Register'
import Select from './Select'
import Bio from './Bio';
import Tabs from './Tabs'
import Profile from './Profile';
import Chat from './Chat';
import ChatSelect from './ChatSelect'
import Chatroom from './Chatroom'
export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/select" element={<Select/>} />
        <Route path="/bio" element={<Bio/>} />
        <Route path="/tabs" element={<Tabs/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/chat/select" element={<ChatSelect/>} />
        <Route path="/chat/chatroom" element={<Chatroom/>} />






      </Routes>
    </Router>
  );
}
