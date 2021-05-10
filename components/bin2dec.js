import React, { useState, useEffect } from 'react'

export default function bin2dec() {

    const [bin, setBinario] = useState('') //Inicia o state com o valor de binário como vazio
    const [dec, setDecimal] = useState(0) //Inicia o state com valor de decimal como 0

    useEffect(() => {
        if (bin.length <= 0) { //Se o valor de binario for vazio ele informará um erro
            setDecimal('Nenhum valor informado!')
        } else {
            const splits = bin.split('') //Divido o valor de binario em um array
            if (splits.filter(value => value == 0 || value == 1).length != splits.length) { //Se houver alguma posição com o valor diferente de 0 ou 1 o valores será considerado como não binario
                setDecimal('Este número não é binário!')
            } else { //Logica para calcular o valor final
                var calc = []
                var binPos = splits.length - 1
                for (let index = 0; index < splits.length; index++) {
                    const binValue = parseInt(splits[index]);
                    const valPos = Math.pow(2, binPos)
                    calc.push(binValue * valPos)
                    binPos--
                }
                const result = calc.reduce((accum, curr) => accum + curr)
                setDecimal(result)
            }
        }
    }, [bin])

    return (
        <form onChange={event => setBinario(event.target.value)}>
            <label htmlFor="bin">
                <span>Valor binário: </span>
                <input type="number" name="bin" className="binario" min="0" />
            </label>
            <br />
            <br />
            <label htmlFor="dec">
                <span>Valor decimal: </span>
                <input name="dec" className="decimal" readOnly={true} value={dec} />
            </label>
        </form>
    )
}