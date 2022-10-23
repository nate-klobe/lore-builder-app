const WorldDetails = ({ world }) => {
    return (
        <div className="world-details">
            <h4>{world.world_name}</h4>
            <p>5 Active Stories</p>
            <p><strong>Last Edited: </strong>{world.updatedAt}</p>
            <div>
                <button>Delete</button>
                <button>View</button>
            </div>
        </div>
    )
}

export default WorldDetails