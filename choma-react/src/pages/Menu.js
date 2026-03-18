import { useState } from "react";
import { motion } from "framer-motion";
import '../styles/Menu.css';

// Sample menu items (can later move to JSON or API)
const menuItems = [
  {
    name: "Grilled Steak",
    category: "Steak",
    desc: "Premium beef grilled perfectly.",
    price: "$25",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    name: "Italian Pizza",
    category: "Pizza",
    desc: "Stone baked authentic pizza.",
    price: "$18",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    name: "Luxury Burger",
    category: "Burger",
    desc: "Juicy beef burger with cheese.",
    price: "$14",
    img: "https://images.unsplash.com/photo-1559847844-d721426d6edc"
  }
];

function Menu() {
  const [orderItem, setOrderItem] = useState(null); // selected item for order popup
  const [filter, setFilter] = useState("All"); // category filter

  const categories = ["All", "Steak", "Pizza", "Burger"];

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      {/* Filter Buttons */}
      <div className="menu-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active-filter" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-container">
        {filteredItems.map((item, index) => (
          <motion.div
            className="menu-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="menu-item-image">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="menu-item-body">
              <h3>{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>

              <div className="menu-bottom">
                <span className="price">{item.price}</span>
                <button className="menu-btn" onClick={() => setOrderItem(item)}>
                  Order
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download Menu */}
      <a className="menu-download" href="/menu.pdf" download>
        Download Full Menu
      </a>

      {/* Order Popup */}
      {orderItem && (
        <div className="order-popup" onClick={() => setOrderItem(null)}>
          <div className="order-popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Order: {orderItem.name}</h3>
            <p>Price: {orderItem.price}</p>
            <p>{orderItem.desc}</p>
            <button onClick={() => { alert(`You ordered: ${orderItem.name}`); setOrderItem(null); }}>
              Confirm Order
            </button>
            <button className="close-btn" onClick={() => setOrderItem(null)}>Cancel</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;