import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Opps</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>
                        Page Not Found
                    </h2>
                    <p>Goback where you from</p>
                    <Link><button to="/">Home</button></Link>
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;