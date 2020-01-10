import React from 'react'

// Propriedas de Child do Sobrenome do Elemento
export function ChildProps(props){
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props})
    })
}

// Gera em cima de um Array Varias Uli
export const generateItens = itens => {
    return itens.map(item => <li key={item} >{item}</li>)
} 

// Notificacao via alert 
export const notifyOut = 
    lugar => alert(`Liberado para ${lugar}`)
