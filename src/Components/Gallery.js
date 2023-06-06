import GalleryItem from "./GalleryItem";

function Gallery({ data }) {
  const display = data.map((item, i) => {
    return <GalleryItem key={i} item={item} />;
  });
  return <div>{display}</div>;
}

export default Gallery;

// The Gallery , much like our App.js, is a wrapper.
// i - index
