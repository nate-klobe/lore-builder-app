import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/"><h1>Lore Builder</h1></Link>
                <Link to="/worlds">Worlds</Link>
                <Link to="/stories">Stories</Link>
            </div>
        </header>
        
    )
}

export default Navbar