import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Instructions from "../Components/Instructions";


export default function Welcome() {
    const navigate = useNavigate();
    return (
        <>
        <Header/>
        <div onClick={() => navigate("/play")} className="link">Play</div>
        <div>Instructions</div>
        </>
    )
}