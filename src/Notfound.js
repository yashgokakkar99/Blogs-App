import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops !!</h2>
            <h2>Page not found ...</h2>
            <Link to={'/'}>
                Back to home page .....
            </Link>
        </div>
     );
}
 
export default Notfound;