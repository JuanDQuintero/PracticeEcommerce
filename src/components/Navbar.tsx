import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container px-5 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">My eCommerce</Link>
            <Link to="/cart" className="text-lg">Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar
