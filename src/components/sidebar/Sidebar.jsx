import { Link } from 'react-router-dom'
import {
  FaHome,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCog,
} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        Admin Panel (Shivam Jivrakh)
      </h1>

      <nav className="space-y-4">
        <Link className="flex items-center gap-3" to="/">
          <FaHome /> Dashboard
        </Link>

        <Link className="flex items-center gap-3" to="/users">
          <FaUsers /> Users 
        </Link>

        <Link className="flex items-center gap-3" to="/products">
          <FaBox /> Products
        </Link>

        <Link className="flex items-center gap-3" to="/orders">
          <FaShoppingCart /> Orders
        </Link>

        <Link className="flex items-center gap-3" to="/settings">
          <FaCog /> Settings
        </Link>
         <Link className="flex items-center gap-3" to="/settings">
          <FaCog /> Terms & Conditions
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar