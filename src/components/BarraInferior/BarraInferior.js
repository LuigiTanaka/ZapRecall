import './style-barra-inferior.css';

export default function BarraInferior({children}) {
    return (
        <div className="barra-inferior">
            {children}
        </div>
    )
}