function Header() {
  return (
    <nav className="flex justify-between items-center py-3 px-6 border-b">
      <h1 className="font-bold text-lg">Teak On</h1>
      <ul className="flex gap-6 text-grey-700">
        <li>Home</li>
        <li>Furniture</li>
        <li>Collections</li>
        <li>About</li>
        <li>Contact</li>
      </ul> 
      <div className="flex gap-4">
        {/* <span>🔍</span> */}
        {/* <span>🛒</span> */}
      </div>
    </nav>
  );
}
export default Header;
