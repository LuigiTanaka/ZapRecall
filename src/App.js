import React from 'react';
import Init from "./Init";
import Content from './Content'

export default function App() {
    const [screen, setScreen] = React.useState('init');

    return (
        screen === 'init' ? <Init setScreen={setScreen} /> : <Content />
    )
}