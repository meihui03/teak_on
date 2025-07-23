import cart from "../assets/cart.svg";
import search from "../assets/search.svg";

function Header() {

  return (
    <nav className="flex justify-between items-center py-3 px-6 ">
      <h1 className="text-lg">Teak On</h1>
      <ul className="flex gap-6 text-grey-700">
        <li>Home</li>
        <li>Furniture</li>
        <li>Collections</li>
        <li>About</li>
        <li>Contact</li>
      </ul> 
      <div className="flex gap-4">
        <img src={search} alt="Search" />
        <img src={cart} alt="Cart" />
      </div>
    </nav>
  );
}
export default Header;
