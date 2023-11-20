import Gameboard from "../Components/Gameboard/Gameboard";
import Header from "../Components/Header";
import './Gamepage.css'

export default function Gamepage() {
    return (
        <>
            <Header />
            <div className="gamepage">
                <Gameboard />
            </div>
        </>
    )
}