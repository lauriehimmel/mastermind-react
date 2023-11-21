import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Instructions from "../Components/Instructions";
import { useEffect, useState } from "react";
import InstructionText from "../Components/Instructions";


export default function Welcome() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false)

    function showHideInstructions() {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }


    useEffect(() => {
        setIsVisible(false);
    }, []);

    return (
        <div className="welcome">
            {/* <Header /> */}
            <div onClick={() => navigate("/play")} className="welcome-text link">Play</div>
            {isVisible ? (
                <div className="welcome-text-container">
                    <div className="welcome-text link" onClick={showHideInstructions}>Instructions ^</div>
                    <InstructionText />
                </div>
            ) : (
                <div className="welcome-text-container">
                    <div className="welcome-text link" onClick={showHideInstructions}>Instructions v</div>
                </div>
            )}

        </div>
    )
}