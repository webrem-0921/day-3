import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddApartmentPage() {

    const [title, setTitle] = useState("")
    const [pricePerDay, setPricePerDay] = useState(1)

    const navigate = useNavigate()


    const handleSubmit = e => {

        e.preventDefault()

        const body = { title, pricePerDay }

        axios
            .post("https://ironbnb-m3.herokuapp.com/apartments", body)
            .then(() => {
                setTitle("")
                setPricePerDay(1)
                navigate('/')
            })
    }


    return (
        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="headline"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <label>Price per Day</label>
                <input
                    type="number"
                    name="pricePerDay"
                    onChange={(e) => setPricePerDay(e.target.value)}
                    value={pricePerDay}
                />

                <button type="submit">Create Apartment</button>

            </form>
        </div>
    );
}

export default AddApartmentPage;
