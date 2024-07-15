import { useState } from "react"

export const useHeader = () => {
    const [ visivel, setVisivel ] = useState()
    const [ sublistVisivel, setSublistVisivel ] = useState()

    const btnHamburguer = () => {
        setVisivel(true)
    }
    const btnClose = () => {
        setVisivel(false)
        setSublistVisivel(false)
    }
    const btnSublist = () => {
        sublistVisivel ? setSublistVisivel(false) : setSublistVisivel(true)
    }

    return { visivel, btnHamburguer, btnClose, sublistVisivel, btnSublist }
}