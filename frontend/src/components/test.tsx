import { useEffect, useState } from "react"



const Test = () => {

    const [itensA, setItensA] = useState<any>()


    useEffect(() => {

        fetch("http://localhost:9999/passenger").then((response) => 
            response.json()
            ).then((dados) => setItensA(dados))
        
        
    },[])

    console.log(itensA)

    return (
        <div className="test">

            {
                itensA && itensA.map((passenger:any) => <div > <ul>{passenger.name}</ul></div>)
            }

        </div>
    )


}

export default Test