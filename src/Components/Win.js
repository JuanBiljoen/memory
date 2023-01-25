//importing necasarry child components, images and libraries
import React from "react";
import Card from "./Card";
import Help from "./Help";
import 'bootstrap/dist/css/bootstrap.css';
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
//Here I created a class component storing state and binding functions
class Win extends React.Component {

    constructor(props) {
        super(props);
        // binding so I can use this in the callback
        this.onCardClick = this.onCardClick.bind(this)
        this.state = {
            //adding all properties to state and card properties as objects in an array
            showModal: true,
            firstChosen: null,
            secondChosen: null,
            win: false,
            cards: [
                { id: 0, value: "a", flipped: false, src: image1 },
                { id: 1, value: "a", flipped: false, src: image1 },
                { id: 2, value: "b", flipped: false, src: image2 },
                { id: 3, value: "b", flipped: false, src: image2 },
                { id: 4, value: "c", flipped: false, src: image3 },
                { id: 5, value: "c", flipped: false, src: image3 },
                { id: 6, value: "d", flipped: false, src: image4 },
                { id: 7, value: "d", flipped: false, src: image4 },
                { id: 8, value: "e", flipped: false, src: image5 },
                { id: 10, value: "e", flipped: false, src: image5 },
                { id: 11, value: "f", flipped: false, src: image6 },
                { id: 12, value: "f", flipped: false, src: image6 }
            ].sort(() => 0.5 - Math.random())
        };

    }

    //Here all the logic of the game is created
    onCardClick(card) {
        console.log("click")
        if (this.state.firstChosen === null) {
            let cards = [...this.state.cards]
            let selectedCard = cards.find((e) => e.id === card.id)
            selectedCard.flipped = true
            this.setState({
                cards: cards,
                firstChosen: selectedCard
            })

        } else {

            if (this.state.secondChosen === null) {
                let cards = [...this.state.cards]
                let selectedCard = cards.find((e) => e.id === card.id)
                selectedCard.flipped = true
                this.setState({
                    cards: cards,
                    secondChosen: selectedCard
                }, () => {
                    //a settimeout function to flip the cards back over after 1second
                    if (this.state.firstChosen.value !== this.state.secondChosen.value) {
                        setTimeout(() => {
                            let cards = [...this.state.cards]
                            let firstCard = cards.find((e) => e.id === this.state.firstChosen.id)
                            let secondCard = cards.find((e) => e.id === this.state.secondChosen.id)
                            firstCard.flipped = false
                            secondCard.flipped = false
                            this.setState({
                                cards: cards,
                                firstChosen: null,
                                secondChosen: null
                            })
                        }, 1000)

                    }
                    else {
                        this.setState({
                            firstChosen: null,
                            secondChosen: null
                        })
                        //looping through cards object to set up a win if all flipped values are true
                        let win = true
                        for (let i = 0; i < this.state.cards.length; i++) {
                            const card = this.state.cards[i];
                            win = win && card.flipped

                        }
                        this.setState({ win: win })

                    }
                })



            }



        }


    }


    //passing down state to child components to be rendered on screen
    render() {
        let dialog
        if (this.state.win === true) {
            dialog = <dialog className="won-banner" open>GOOD JOB!</dialog>
        }
        return (
            <div className="cards">
                <h3 className="win-header">Match the random images.</h3>
                <Help />
                {this.state.cards.map((card) =>

                    <Card onCardClick={this.onCardClick}
                        key={card.id}
                        data={card}
                        winningCard={this.state.winningCard} />
                )}
                {dialog}
                <button className="reset-button" onClick={() => window.location.reload()}>Reset</button>
            </div>
        )
    }
}


export default Win

