import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './style-init.css';

export default function Init({ setScreen }) {
    return (
        <div className='home-page'>  
            <img src={logo} alt='logo'/>
            <h1>ZapRecall</h1>
            <Link to={'/container'}>
                <button>Iniciar Recall!</button>
            </Link>
        </div>
    )
}