import React from "react";
import "./Products.css";

function Products() {
  const [prods, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.recipes);
      });
  }, []);

  return (
    <div className="container">
      {prods.map((p) => {
        return (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="meal">Meal Type: {p.mealType}</p>
            <p className="cuisine">Cuisine : {p.cuisine} </p>
            <p className="rating"> Rating : {p.rating}</p>
            <button> Add to cart </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;