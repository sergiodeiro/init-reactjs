import React, {useState, useEffect} from 'react'

export default props => {
    const [contador, setContador] = useState(0) 
    const [status, setParouImpar] = useState('Par')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        contador % 2 === 0 ? setParouImpar('Par') : setParouImpar('Impar')
    })

    return(
        <div>
            <h4>{contador}</h4>
            <h4>{status}</h4>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    )
}

// Informations: https://pt-br.reactjs.org/docs/hooks-rules.html