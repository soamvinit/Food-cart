import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <h2>{err.status}: {err.statusText}</h2>
        <h3>{err.error.message}</h3>
        </>
    );
};

export default Error;