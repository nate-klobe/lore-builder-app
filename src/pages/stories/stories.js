import { useEffect, useState } from "react"

const Stories = () => {
    const[stories, setStories] = useState(null)

    useEffect(() => {
        const fetchStories = async () => {
            const response = await fetch('http://localhost:5000/stories/')
            const json = await response.json()

            if(response.ok){
                setStories(json)
            }
        }
        fetchStories()

    }, [])

    return (
        <div className="Stories">
            <h2>Stories</h2>
        </div>

    )


}

export default Stories