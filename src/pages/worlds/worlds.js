import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

//components
import WorldDetails from '../../components/worlds/WorldDetails'

const Worlds = () => {
    const[worlds, setWorlds] = useState(null)

    let navigate = useNavigate()

    const create = () => {
        navigate('/worlds/create')
    }

    useEffect(() => {
        const fetchWorlds = async () => {
            const response = await fetch('/worlds')
            const json = await response.json()

            if(response.ok){
                setWorlds(json)
            }
        }
        fetchWorlds()

    }, [])

    return (
        <div>
            <button onClick={create}>Create World</button>
            <div className="worlds">
                {worlds && worlds.map((world) => (
                    <WorldDetails key={world._id} world = {world} />
                ))}
        </div>
        </div>

    )


}

export default Worlds