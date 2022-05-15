import React from 'react';
import './style-flashcards.css';
import Card from '../Card/Card';

export default function Flashcards() {
    return (
        <div className='flashcards'>
            <Card type="oculto" text="Pergunta 1"/>
            <Card type="resposta" text="essa é a resposta aaaaaa"/>
            <Card type="pergunta" text="essa é a pergunta aaaaaa"/>
        </div>
    )
}