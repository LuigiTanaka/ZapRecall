import './style-card.css';
import Button from '../Button/Button';
import setinha from '../../assets/images/setinha.png';

export default function Card({type, text}) {
    if (type === "oculto") {
        return (
            <div className="oculto">
                <h4>{text}</h4>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        )
    } else if (type === "pergunta") {
        return (
            <div className="pergunta">
                <p>{text}</p>
                <img src={setinha} alt='setinha' />
            </div>
        )
    } else {
        return (
            <div className="resposta">
                <p>{text}</p>
                <div>
                    <Button color='vermelho' text='Não lembrei' />
                    <Button color='amarelo' text='Quase não lembrei' />
                    <Button color='verde' text='Zap!' />
                </div>
            </div>
        )
    }

}