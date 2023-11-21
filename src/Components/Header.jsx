import { useNavigate } from 'react-router-dom'
import './Components.css'

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-title" onClick={() => navigate("/")}>Mastermind</div>
            <div className="header-subtitle">Crack the code, save the world.</div>
        </div>
    )
}