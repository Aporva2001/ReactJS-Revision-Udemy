import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong,removeSong } from "../store";
// useSelector hook is used to retrieve the state from the store 
function SongPlaylist() {
  // To Do:
  // Get list of songs
  const dispatch= useDispatch() // This is the same dispatch function which we have in our redux store.
  // Here we need to update the songPlaylist so we will use useSelector and pass a function which will take state as an argument and we will return the data which we want to pass in this array.
  // const songPlaylist = [];
const songPlaylist= useSelector((state)=>{
  // console.log(state);
  return state.songs;
})
  const handleSongAdd = (song) => {
    // const action = addSong(song);
    // console.log(action);
    dispatch( addSong(song))
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song))

  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
