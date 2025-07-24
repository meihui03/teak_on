import cart from "../assets/cart.svg";
import search from "../assets/search.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex justify-between items-center py-3 px-6 ">
      <Link to="/">
        <h1 className="text-lg font-bold">Teak On</h1>
      </Link>
      <ul className="flex gap-6 text-grey-700">
        <li>Furniture</li>
        <li>Collections</li>
        <li>About</li>
        <li><Link to="/contact">Contact</Link></li> 
      </ul> 
      <div className="flex gap-4">
        <img src={search} alt="Search" />
        <img src={cart} alt="Cart" />
      </div>
    </nav>
  );
}
export default Header;
