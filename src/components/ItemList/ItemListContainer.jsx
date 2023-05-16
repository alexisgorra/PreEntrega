import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { db } from "../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (category) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", category)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })

      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PacmanLoader color="#36d7b7" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
