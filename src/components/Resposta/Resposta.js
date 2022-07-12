import Button from '../Button/Button';
import "./style-resposta.css";
import party from '../../assets/images/party.png';
import sad from '../../assets/images/sad.png';

function criaMensagemFinal(newIcones, numRespostas, deck, setMensagemFinal) {
    const erros = newIcones.filter((icone) => icone === "close-circle")
    console.log(newIcones);

    if (numRespostas === (deck.length - 1) && erros.length === 0) {
        const newMensagem = {classe: "visivel", emoji: party, titulo: "Parabéns!", texto: "Você não esqueceu de nenhum flashcard!"}
        setMensagemFinal(newMensagem);
    } else if (numRespostas === (deck.length - 1)) {
        const newMensagem = {classe: "visivel", emoji: sad, titulo: "Putz...", texto: "Ainda faltam alguns... Mas não desanime!"}
        setMensagemFinal(newMensagem);
    }
}

function respondeVermelho(index, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones) {
    deck[index].type = "oculto";
    deck[index].status = "vermelho";
    const newDeck = [...deck];

    setDeck(newDeck);
    setNumRespostas(numRespostas+1);

    const newIcones = [...icones];
    newIcones.push("close-circle")
    setIcones(newIcones);

    criaMensagemFinal(newIcones, numRespostas, deck, setMensagemFinal);
}

function respondeAmarelo(index, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones) {
    deck[index].type = "oculto";
    deck[index].status = "amarelo";
    const newDeck = [...deck];

    setDeck(newDeck);
    setNumRespostas(numRespostas+1);

    const newIcones = [...icones];
    newIcones.push("help-circle")
    setIcones(newIcones);

    criaMensagemFinal(newIcones, numRespostas, deck, setMensagemFinal);
}

function respondeVerde(index, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones) {
    deck[index].type = "oculto";
    deck[index].status = "verde";
    const newDeck = [...deck];

    setDeck(newDeck);
    setNumRespostas(numRespostas+1);

    const newIcones = [...icones];
    newIcones.push("checkmark-circle")
    setIcones(newIcones);

    criaMensagemFinal(newIcones, numRespostas, deck, setMensagemFinal);
}

export default function Resposta({index, text, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones}) {

    return (
        <div className="resposta">
            <div className='imagem-resposta'>
                <img src={text} alt="resposta" />
            </div>
            <div className='botoes'>
                <Button color='vermelho' text='Não lembrei' onClick={() => respondeVermelho(index, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones)} />
                <Button color='amarelo' text='Quase não lembrei' onClick={() => respondeAmarelo(index, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones)} />
                <Button color='verde' text='Lembrei na hora!' onClick={() => respondeVerde(index, deck, setDeck, numRespostas, setNumRespostas, setMensagemFinal, icones, setIcones)} />
            </div>
        </div>
    )
}