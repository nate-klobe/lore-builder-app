import { useEffect, useState } from "react"

const Journals = () => {
    const[stories, setJournals] = useState(null)

    useEffect(() => {
        const fetchJournals = async () => {
            const response = await fetch('http://localhost:5000/journals/')
            const json = await response.json()

            if(response.ok){
                setJournals(json)
            }
        }
        fetchJournals()

    }, [])

    return (
        <div className="Journals">
            <h2>Journals</h2>
        </div>

    )


}

export default Journals