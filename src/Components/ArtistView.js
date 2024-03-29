// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = `http://localhost:4000/album/${id}`; // url to get artist data from backend
      const response = await fetch(API_URL);
      const data = await response.json();
      //console.log(data);
      const albums = data.results.filter(
        (item) => item.collectionType === "Album"
      );
      console.log(albums);
      setArtistData(albums);
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const navButtons = () => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>|
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  };

  const display =
    artistData &&
    artistData.map((album) => {
      return (
        <div key={album.collectionId}>
          <p>{album.collectionName}</p>
        </div>
      );
    });

  return (
    <>
      {navButtons()}
      {display}
    </>
  );
}

export default ArtistView;

// In reality we would make a NavBar a seperate file in the components and invoke it in each view.
