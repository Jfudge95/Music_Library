import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import GalleryItem from "./GalleryItem";

function Gallery({}) {
  const data = useContext(DataContext);
  const display = data.map((item, i) => {
    return <GalleryItem key={i} item={item} />;
  });
  return <div>{display}</div>;
}

export default Gallery;

// We've imported the Hook { useContext } and we've imported the Context itself { DataContext }
// The Gallery , much like our App.js, is a wrapper.
// i - index
