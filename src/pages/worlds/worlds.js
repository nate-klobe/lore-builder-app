import { useEffect, useState } from "react"

//components
import WorldDetails from '../../components/worlds/WorldDetails'

const Worlds = () => {
    const[worlds, setWorlds] = useState(null)

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
        <div className="worlds">
                {worlds && worlds.map((world) => (
                    <WorldDetails key={world._id} world = {world} />
                ))}
        </div>
    )


}

export default Worlds