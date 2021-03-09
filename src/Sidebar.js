import { FaTimes } from "react-icons/fa";
import { links, social } from './data';

const Sidebar = () => {
  return (
    <aside classNmae={`sidebar show-sidebar`}>
      <div className="sidebar-container">
        <button className="close-btn"><FaTimes /></button>
      </div>
      <ul className="links">
        {links.map(link => {
          const {id,url,text,icon} = link;
          return (
            <li key={id}>
              <a href={url}>{icon} {text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map(link => {
          const {id, url, icon} = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
