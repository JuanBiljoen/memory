import React from "react";
import '../App.css';
//Here the front and the back of the card is layed out with css styles added in ternarys to add the css animation of the card fliping
function Card(props) {

    return (

        <div onClick={() => props.onCardClick(props.data)} className="poster-container" >
            <div className={props.data.flipped ? "poster flipped" : "poster"}>
                <img className="pic" src="https://i.pinimg.com/564x/7f/89/c1/7f89c1ae58a1fb6a01e026367807a87b.jpg" />
                <img className="pic back" src={props.data.src}></img>
                {/* <div className="pic back">{props.data.value} </div> */}

            </div>
        </div>
    );
}

export default Card;


