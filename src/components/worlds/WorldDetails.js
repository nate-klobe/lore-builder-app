const WorldDetails = ({ world }) => {
    return (
        <div className="world-details">
            <h4>{world.world_name}</h4>
            <p><strong>Players: </strong>5</p>
            <p><strong>Next Session: </strong>Tues Nov 11</p>
            <div className="container">
                <button>View</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default WorldDetails