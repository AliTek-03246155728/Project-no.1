 import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm]= useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Geoffrey", bio: "The tall storyteller.", isFollowed: false, avatar: "https://i.postimg.cc/3wfMqmwg/images-(1).jpg" },
    { id: 2, name: "Barnaby", bio: "The clever strategist.", isFollowed: false, avatar: "https://i.postimg.cc/c4Prptrm/images-(2).jpg" },
     { id: 3, name: "Ali", bio: "Very hardworking.", isFollowed: false, avatar: "https://i.postimg.cc/yxNpFy1Z/ali_hassan  .jpg" },
     { id: 4, name: "SRK", bio: "Very hardworking.", isFollowed: false, avatar: "https://i.postimg.cc/0jpRBfgG/images.jpg" },
     { id: 5, name: "iqra", bio: "Very hardworking.", isFollowed: false, avatar: "https://i.postimg.cc/HxF52yY1/images-(3).jpg" },
     { id: 6, name: "Abubakar", bio: "Very hardworking.", isFollowed: false, avatar: "https://i.postimg.cc/kXv6VZbb/images-(4).jpg" },
     { id: 7, name: "Hammad", bio: "Very hardworking.", isFollowed: false, avatar: "https://i.postimg.cc/TPrZGrsB/images-(5).jpg" }
  ]);

  useEffect(() => { console.log("Follow status updated in state:" , users);} , [users]); 

  const toggleFollow = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isFollowed: !user.isFollowed } : user
    ));
  };
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header>
        <h1>Profile Gallery</h1>
        <div className = "controls">
          <input type="text" placeholder="Search by name..." clasName="search_bar" 
          onChange= {(e) => setSearchTerm(e.target.value)}/>
        <button onClick={() => setDarkMode(!darkMode)}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
       </div>
      </header>

      <div className="card-container">
        {filteredUsers.map(user => (
          <ProfileCard 
            key={user.id} 
            {...user} 
            onFollow={() => toggleFollow(user.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;