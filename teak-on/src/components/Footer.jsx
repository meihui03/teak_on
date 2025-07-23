import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-10 px-6 md:px-20 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-bold mb-2">Teak On</h4>
          <p>Premium teakwood furniture for modern living rooms, bedrooms, and everything in between.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Collections</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Categories</h4>
          <ul>
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Kitchen</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact Info</h4>
          <div className="flex items-center space-x-2">
            <img src={phone} alt="Phone" className="w-4 h-4" />
            <p> +1 (123) 123-4567</p>
          </div>
        <div className="flex items-center space-x-2">
            <img src={mail} alt="Mail" className="w-4 h-4" />
            <p> @gmail.com</p>
            </div>
          <div className="flex items-center space-x-2">
            <img src={location} alt="Location" className="w-4 h-4" />
            <p>99 Furniture St, City, State 12345</p>
            </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-10">© 2025 Teak On. All rights reserved.</p>
    </footer>
  );
};

export default Footer;