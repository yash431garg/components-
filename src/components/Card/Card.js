import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard, setCardClicked } from "../../features/cardSlice";
import "./Card.css";

function Card(props) {
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
          <div>
            <div className="cardTop">
              <i className="fas fa-chevron-left"></i>
              <i class="fas fa-cog"></i>
            </div>
            <hr className="hrElement" />
          </div>
          <div className="cardImage">
            <img src={props.img} alt="nature images" />
          </div>
          <div className="cardBottom">I am the card cardBottom</div>
        </div>
      )}
    </div>
  );
}

export default Card;
