import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024")
      .then((res) => res.json())
      .then((json) => {
        setAlbums(json.album);
      });
  });

  // By having an empty dependencie list we are only fetching when its mounted.
  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          {/* to be able to add this slash preview we had to make the img thingie
          a template literal... */}
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum} />
          <h2>
            <Link to={`/albums/${album.idAlbum}`}>{album.strAlbum}</Link>
          </h2>
          <h3>{album.strArtist}</h3>
        </div>
      ))}
    </div>
  );
};
