import {Link} from 'react-router-dom';

//link prevent server request

const Navbar =() =>{
    return(
        <nav className = "navbar">
            <h1>The Testing blogspot</h1>
            <div className ="links">
                <Link to="/">Homepage</Link>  
                <Link to="/create" >Add New Blog</Link>
            </div>
        </nav>

    );
}
export default Navbar