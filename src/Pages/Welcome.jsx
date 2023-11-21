import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Instructions from "../Components/Instructions";
import { useEffect, useState } from "react";
import InstructionText from "../Components/Instructions";


export default function Welcome() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false)

    function showHideInstructions () {
        isVisible ? setIsVisible(true) : setIsVisible(false)
    }


    useEffect(() => {
        setIsVisible(false);
    }, []);

    return (
        <>
            <Header />
            <div onClick={() => navigate("/play")} className="link">Play</div>
            <div className="link" onClick={showHideInstructions}>Instructions</div>
            {isVisible ? (
                <>
                    <InstructionText />
                </>
            ) : (
                <></>
            )}

        </>
    )
}