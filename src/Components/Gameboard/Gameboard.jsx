import { useRef } from 'react'
import './Gameboard.css'

export default function Gameboard() {
    // array of arrays:
    // board is array[0], array[1], etc.
    // push into new array each time submit is clicked, that array is pushed into board array

    const colors = ["red", "orange", "yellow", "green"]
    let board = [];
    let newArray = [];

    return (
        <>
            <div className="buttons">
                <input
                    type="button"
                    value={colors[0]}
                    style={{ backgroundColor: `${colors[0]}` }} />
                <input
                    type="button"
                    value={colors[1]}
                    style={{ backgroundColor: `${colors[1]}` }} />
            </div>
        </>
    )
}