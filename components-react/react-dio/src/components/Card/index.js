import { useState } from "react"

const Card = () => {

    const [value, setValue] = useState(0)

    function Adicionar() {
        setValue(value + 1)
    }

    function Remover() {
        setValue(value - 1)
    }

    return (
        <div className="card">
            <h5 className="card-header">
                Featured
            </h5>
            <div className="card-body">
                <button 
                    type="button"
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </button>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card