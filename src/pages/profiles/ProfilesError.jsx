import { Link, useRouteError } from "react-router-dom";
export default function ProfilesError() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="profiles-error">
            <h2>Error!</h2>
            <p>{error.message}</p>
            <Link to="/profiles">Gå tillbaka profilerna</Link>
        </div>
    )
}