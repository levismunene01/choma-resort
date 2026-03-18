function Menu() {
  const items = [
    {
      name: "Grilled Steak",
      desc: "Premium beef grilled perfectly.",
      price: "$25",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947"
    },
    {
      name: "Italian Pizza",
      desc: "Stone baked authentic pizza.",
      price: "$18",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },
    {
      name: "Luxury Burger",
      desc: "Juicy beef burger with cheese.",
      price: "$14",
      img: "https://images.unsplash.com/photo-1559847844-d721426d6edc"
    }
  ];

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="menu-container">
        {items.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-image">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="menu-item-body">
              <h3>{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>

              <div className="menu-bottom">
                <span className="price">{item.price}</span>
                <button className="menu-btn">Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a className="menu-download" href="/menu.pdf" download>
        Download Full Menu
      </a>
    </section>
  );
}

export default Menu;