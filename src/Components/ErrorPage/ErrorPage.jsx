import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div>
            <h1>Page Not fount</h1>
            {
                <p>{error.status || error.message}</p>
            }
            
        </div>
    );
};

export default ErrorPage;