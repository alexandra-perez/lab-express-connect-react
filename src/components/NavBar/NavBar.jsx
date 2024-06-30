import './NavBar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <Link to="/logs">
          <li>Logs</li>
        </Link>
        <li>Create New Log</li>
      </ul>
    </nav>
  );
}
