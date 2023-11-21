import Gameboard from "../Components/Gameboard/Gameboard";
import TestGameboard from "../Components/Gameboard/test";
import './Gamepage.css'

export default function Gamepage() {
    return (
        <>
            <div className="gamepage">
                {/* <Gameboard /> */}
                <TestGameboard />
            </div>
        </>
    )
}