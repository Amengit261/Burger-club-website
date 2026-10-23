
import './Menu.css';
function Menu() {
  const burgers = [
    {
      id: 1,
      name: "Classic Burger",
      description: "A delicious classic burger with fresh toppings.",
      price: 250,
      image: "/images/burger.jpg",
    },
    {
      id: 2,
      name: "Cheese Burger",
      description: "A tasty burger with melted cheese and fresh vegetables.",
      price: 300,
      image: "/images/bur.jpg",
    },
    {
      id: 3,
      name: "Special Burger",
      description: "A flavorful burger made for true burger lovers.",
      price: 350,
      image: "/images/good.jpg",
    },
    {
      id: 4,
      name: "Double Burger",
      description: "A satisfying double burger packed with flavor.",
      price: 400,
      image: "/images/newburger.jpg",
    },
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="menu-heading">
        <p className="menu-subtitle">FRESH & DELICIOUS</p>
        <h2>Our Delicious Burgers</h2>
        <p>Discover your favorite burger at Burger Club.</p>
      </div>

      <div className="menu-container">
        {burgers.map((burger) => (
          <div className="menu-card" key={burger.id}>
            <img src={burger.image} alt={burger.name} />

            <div className="menu-card-content">
              <h3>{burger.name}</h3>
              <p>{burger.description}</p>

              <div className="menu-card-bottom">
                <span className="burger-price">
                  {burger.price} ETB
                </span>

                <button
                  className="add-cart-button"
                  onClick={() => alert(`${burger.name} selected!`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;

