import axios from "axios";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const navigate = useNavigate();
  const {
    review,
    restaurant_id,
    text,
    setText,
    user,
    setUser,
    stars,
    setStars,
  } = useContext(AppContext);

  function buttonhandler() {
    navigate("/restaurant");
  }

  let a = (
    <>
      <FaStar color="orange" /> <FaStar color="orange" />{" "}
      <FaStar color="orange" /> <FaStar color="orange" />{" "}
      <FaStar color="orange" />
    </>
  );
  let b = (
    <>
      <FaStar color="orange" /> <FaStar color="orange" />{" "}
      <FaStar color="orange" /> <FaStar color="orange" />{" "}
    </>
  );
  let c = (
    <>
      <FaStar color="orange" /> <FaStar color="orange" />{" "}
      <FaStar color="orange" />{" "}
    </>
  );
  let d = (
    <>
      <FaStar color="orange" /> <FaStar color="orange" />{" "}
    </>
  );
  let e = (
    <>
      <FaStar color="orange" />
    </>
  );

  function inputhandler(e) {
    e.preventDefault();

    if (Number(restaurant_id)) {
      axios
        .post("https://finalproject-server-9oal.onrender.com/reviews", {
          user,
          text,
          stars,
          restaurant_id,
        })
        .then((res) => console.log(res));

      e.target.input.value = "";
      e.target.textarea.value = "";
      e.target.rating.value = "";
    }
  }

  return (
    <div className="review1">
      <button className="reviewbutton" onClick={buttonhandler}>
        {" "}
        back
      </button>
      <form onSubmit={inputhandler}>
        <input
          type="text"
          name="input"
          placeholder="enter your name"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          placeholder="rating"
          name="rating"
          type="number"
          onChange={(e) => setStars(Number(e.target.value))}
        />

        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="10"
          placeholder="type your comments"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
      <div className="reviews">
        {review
          .filter((i) => i.restaurant_id == restaurant_id)
          .map((i, j) => (
            <div className="reviewlist" key={j}>
              {" "}
              {i.user} {i.text}
              <div className="stars">
                {i.stars === 5 ? (
                  <p>{a}</p>
                ) : i.stars === 4 ? (
                  <p> {b}</p>
                ) : i.stars === 3 ? (
                  <p>{c}</p>
                ) : i.stars === 2 ? (
                  <p>{d}</p>
                ) : (
                  <p>{e}</p>
                )}{" "}
              </div>
            </div>
          ))}

        {/* {review.find(i => i.restaurant_id == restaurant_id)?.stars ===5? <p>5</p> : 
review.find(i => i.restaurant_id == restaurant_id)?.stars ===4 ? <p>4</p> : 3

 
 }  */}
      </div>
    </div>
  );
}

export default Reviews;
