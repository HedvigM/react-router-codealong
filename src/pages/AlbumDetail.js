import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AlbumDetail = () => {
  /*  this is destructured så att vi kan använda den i the fetch nedan. */
  const { albumId } = useParams();
  const [albums, setAlbum] = useState([]);

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
      .then((res) => res.json())
      .then((json) => setAlbum(json.album));
    //det skall verkligen vara album här och inte "albumS" för att det står utan "s" i the API.
  }, [albumId]);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <h1>{album.strAlbum}</h1>
          {/* We can include more stuff than just album, its kind of booring since its just the album now, not muck to iterato throw... */}
        </div>
      ))}
    </div>
  );
};
