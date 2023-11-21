import { useRef } from 'react'
import './Gameboard.css'

export default function Gameboard() {
    // array of arrays:
    // board is array[0], array[1], etc.
    // push into new array each time submit is clicked, that array is pushed into board array
    //https://medium.com/@saphieabayomi/create-a-dynamic-form-in-react-5f7dbdd56a69

    const colors = ["red", "orange", "yellow", "green"]
    let board = [];
    let newArray = [];

    function onClick(e) {
        e.preventDefault();
        newArray.push(e.target.value)
        console.log(newArray)
    }
    function onSubmit(e) {
        e.preventDefault();
        board.push(newArray)
    }

    return (
        <>
            <div className="buttons">
                <form onSubmit={onSubmit} >
                    <input
                        type="button"
                        value={colors[0]}
                        style={{ backgroundColor: `${colors[0]}` }}
                        onClick={onClick} />

                    <input
                        type="button"
                        value={colors[1]}
                        style={{ backgroundColor: `${colors[1]}` }}
                        onClick={onClick} />
                    <input type="submit" value="Submit"
                    />
                </form>
            </div>
            <div className="guesses">
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>
        </>
    )
}
