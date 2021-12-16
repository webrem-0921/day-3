import { useEffect, useState } from 'react'

function CoastersList(props) {

    const [coasters, setCoasters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        fetch(`${process.env.REACT_APP_HOST}/coasters/getAllCoasters`)
            .then(response => response.json())
            .then(coasters => {
                setCoasters(coasters)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

    }, [])


    return (
        <section>
            <h1>Listado de montañas rusas</h1>
            <hr />
            {
                isLoading ? coasters.map(elm => <p>{elm.title}</p>) : <h1>Cargando...</h1>
            }
        </section>
    )
}

export default CoastersList