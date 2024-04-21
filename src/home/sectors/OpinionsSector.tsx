import {useEffect, useState} from "react";
interface Opinion {

}

const url = "https://booksy.com/pl-pl/124888_yey-centrum-zdrowia-i-urody_medycyna-estetyczna_21554_sopot"

async function getOpinions(): Promise<Opinion[]> {
    await fetchHtml()
    return []
}

async function fetchHtml(){
    const html = await fetch(url, {
        headers: {
            "Accept": "text/html",
        },
        mode: "cors",

    })

    console.log(html)
}


export const OpinionsSector = () => {
    const [opinions, setOpinions] = useState<Opinion[]>([])
    useEffect(() => {
        getOpinions()
            .then(opinions => setOpinions(opinions))
            .catch(err => {
                console.log(err)
                return []
            })
    }, [])
    console.log(opinions)
    return (
        <div>
            </div>
    )
}