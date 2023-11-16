import Gameboard from "../Components/Gameboard/Gameboard";
import SubmitGuesses from "../Components/Gameboard/SubmitGuesses";
import Header from "../Components/Header";
import './Gamepage.css'

export default function Gamepage() {
    return (
        <>
            <Header />
            <div className="gamepage">
                <Gameboard />
                <SubmitGuesses />
            </div>
        </>
    )
}