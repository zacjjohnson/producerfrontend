import { useContext, useEffect, useState } from "react";
import axios from "axios";
// import Cart from "../cart/cart.component";
import "../music/music.styles.css";
import { CartContextWrapper } from "../../context/cart.context";
import { CartContext } from "../../context/cart.context";
import SpotifyEmbed from "../spotify/spotify.component";
import AppleMusicEmbed from "../appleMusic/appleMusic.component";
import BeatStarsEmbed from "../beatStars/beatStars.component";
const API_URL = "https://producerdashboardserver.vercel.app";

const Music = () => {
  const [beats, setBeats] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);
  console.log(cartItems, addToCart);

  useEffect(() => {
    axios
      .get(`${API_URL}/music`)
      .then((response) => setBeats(response.data.beats))
      .catch((error) => console.log(error));
    console.log({ BREAK: beats });
  }, []);

  return (
    <CartContextWrapper>
      <div className="music-container">
        <h2>
          If you like anything you hear, please reach out to setup a beat
          purchase.
        </h2>
      </div>
      <div className="musiccontent">
        <div className="spotify">
          <SpotifyEmbed />
        </div>

        <div className="beatstars">
          <BeatStarsEmbed />
        </div>
        {/* {beats.map(beat => (
                <div className="for-sale-beat-container">
                  <li className="onsale-beats" key={beat._id}>
                    <h3>{beat.name}</h3>
                    <h4>${beat.price}</h4>
                    <audio controls>
                      <source src={beat.link} type="audio/wav"/>
                    </audio>
                    <button onClick={() => addToCart(beat)} className="add-to-cart">Add To Cart</button>
                  </li>
                </div>
              ))} */}
      </div>
    </CartContextWrapper>
  );
};

export default Music;
