import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateWorld = () => {
    const [world_name, setName] = useState('')
    //creator does not need to be set, only by the application itself
    const [creator] = useState('6350b3c3a3e1fd75bc11e868')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    let navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const world = {world_name, creator, description}

        const response = await fetch('/worlds', {
            method: 'POST',
            body: JSON.stringify(world),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            //Don't need to reset state since we are navigating away
            console.log('New World Added', json)
            
            navigate("/worlds")
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new World</h3>

            <label>World Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={world_name}
            />
            <label>Description:</label>
            <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button>Create World</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default CreateWorld
