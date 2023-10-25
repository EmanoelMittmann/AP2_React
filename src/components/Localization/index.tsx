import { CSSProperties, useState } from "react"
import { Button } from "../atoms/button"

type Props = {
    name: string
}
type CEP = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
}

export const Localization = ({name}: Props) => {
    const [data, setData] = useState<CEP>()

    const Listcss: CSSProperties = {
        display: 'flex',
        gap: '8em'
    }


    const getCep = async () => {
        const response = await fetch('https://viacep.com.br/ws/01001000/json/')
        const data = await response.json();
        setData(data)
    }

    return (
        <div style={{
            width: '100%'
        }}>
            <h1>Seja Bem vindo, {name}</h1>
            <Button onClick={() => getCep()} title="Buscar Localização"/>
            <div style={Listcss}>
                <div>
                    <h1> CEP: {data && data?.cep} </h1>
                    <h1>BAIRRO: {data && data?.bairro}</h1>
                    <h1>HORÁRIO: {data && data?.siafi}</h1>
                </div>
                <div>
                    <h1>AV/RUA: {data && data.logradouro}</h1>
                    <h1>CIDADE: {data && data.localidade}</h1>
                </div>
            </div>
        </div>
    )
}
