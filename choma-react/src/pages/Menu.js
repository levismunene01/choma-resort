import { useState } from "react";
import { motion } from "framer-motion";
import '../styles/Menu.css';

// Sample menu items
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
  const [orderItem, setOrderItem] = useState(null);
  const [filter, setFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    notes: ""
  });

  const categories = ["All", "Steak", "Pizza", "Burger"];

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Received:
Item: ${orderItem.name}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Quantity: ${formData.quantity}
Notes: ${formData.notes}`);
    // Reset form
    setFormData({ name: "", email: "", phone: "", quantity: 1, notes: "" });
    setOrderItem(null);
  };

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

      {/* Order Popup Form */}
      {orderItem && (
        <div className="order-popup" onClick={() => setOrderItem(null)}>
          <div className="order-popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Order: {orderItem.name}</h3>
            <p>Price: {orderItem.price}</p>
            <form onSubmit={handleSubmit} className="order-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
              <textarea
                name="notes"
                placeholder="Special instructions"
                value={formData.notes}
                onChange={handleChange}
              />
              <button type="submit">Confirm Order</button>
              <button type="button" className="close-btn" onClick={() => setOrderItem(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Menu;