import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiEye, FiMessageCircle, FiUser } from 'react-icons/fi'; // Import Feather icons from react-icons/fi
import './Tabs.css'; // Import CSS file for styling

const Layout = () => {
  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        <ul className="tabs-list">
          <li className="tabs-item" style={{    "fontSize": 30,"fontFamily":"monospace"
}}>
            <NavLink to="/profile" activeClassName="active" className="tab-link">
              {/* <FiEye size={24} color="black" /> */}
              Profiles
            </NavLink>
          </li>
          <li className="tabs-item" style={{    "fontSize": 30,"fontFamily":"monospace"
}}>
            <NavLink to="/chat" activeClassName="active" className="tab-link">
              {/* <FiMessageCircle size={24} color="black" /> */}
              Chats
            </NavLink>
          </li>
          <li className="tabs-item" style={{    "fontSize": 30,"fontFamily":"monospace"
}}>
            <NavLink to="/bio" activeClassName="active" className="tab-link">
              {/* <FiUser size={24} color="black" /> */}
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
