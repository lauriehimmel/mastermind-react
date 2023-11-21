import { useNavigate } from 'react-router-dom'
import './Components.css'

export default function Header () {
    const navigate = useNavigate();

    return (
        <div className='"Header'>
        <div className="header-title link"  onClick={() => navigate("/")}>Mastermind</div>
        <div className="header-subtitle">Break the code, save the world.</div>
        </div>
    )
}