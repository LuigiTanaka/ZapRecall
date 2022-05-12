export default function Init({ setScreen }) {
    return (
        <>  
            <img src="images/logo.png" alt='logo'/>
            <h1>ZapRecall</h1>
            <button onClick={() => setScreen('content')}>Iniciar Recall!</button>
        </>
    )
}