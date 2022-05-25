import { useState } from "react"
import axios from "axios"

export default function Index() {
    const [qtdInteiras, setQtdInteiras] = useState(0);
    const [qtdMeias, setQtdMeias] = useState(0);
    const [diaDaSemana, setDiadaSemana] = useState('')
    const [Nacionalidade, setNacionalidade] = useState('')
    const [Total, setTotal] = useState(0);

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema',{
            a: qtdInteiras,
            b: qtdMeias,
            c: diaDaSemana,
            d: Nacionalidade
        } )

        setTotal(resp.data.Total);

    }

    return (
        <main>
            <h1>Ingresso</h1>


                <div>
                Qtd de inteiras: <input type='text' value={qtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} ></input>
                </div>
                <div>
                Qtd de meias: <input type='value'  value={qtdMeias} onChange={e => setQtdMeias(Number(e.target.value))}></input>
                </div>
                <div>
                Dia da semana: <input type='text' value={diaDaSemana} onChange={e => setDiadaSemana(e.target.value)}></input>
                </div>
                <div>
                Nacionalidade: <input type='text' value={Nacionalidade} onChange={e => setNacionalidade(e.target.value)}></input>
                </div>

                <div>
                    <button onClick={calcular}> Calcular valor</button>
                </div>

                <div> 
                    O valor total vai ser: {Total}
                </div>
        </main>

    )

}