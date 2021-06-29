import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard, setCardClicked } from "../../features/cardSlice";
import "./Card.css";

function Card() {
  const isCardClicked = useSelector(selectCard);
  console.log(isCardClicked);
  const dispatch = useDispatch();
  return (
    <div>
      {isCardClicked ? (
        "Cards are clicked"
      ) : (
        <div
          className="Card"
          onClick={() => {
            dispatch(setCardClicked(true));
          }}
        >
          <div className="cardTop">
            <i className="fas fa-chevron-left"></i>
            <i class="fas fa-cog"></i>
          </div>
          <div className="cardImage">
            <img
              src="https://picsum.photos/seed/picsum/200/300/ff"
              alt="nature images"
            />
          </div>
          <div className="cardBottom">
            <hr className="hrElement" />I am the card cardBottom
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
