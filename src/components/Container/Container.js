import logoPequeno from '../../assets/images/logo-pequeno.png';
import './style-container.css';
import Flashcards from '../Flashcards/Flashcards'
import BarraInferior from '../BarraInferior/BarraInferior';

export default function Container() {

    return (
        <>
            <div className='topo'>
                <img src={logoPequeno} alt='logo pequeno' />
                <h2>ZapRecall</h2>
            </div>

            <Flashcards />
            <BarraInferior />
        </>
    )
}