import React from 'react';
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <h3>SMS </h3> <h5>Admin-Panel</h5>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillArchiveFill className="icon" /> Courses
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillGrid3X3GapFill className="icon" /> Teachers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsPeopleFill className="icon" /> Students
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsListCheck className="icon" /> User Managment
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
