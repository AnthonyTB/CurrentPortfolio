import React, { FunctionComponent, useState, useEffect } from 'react';
import './Boundary.css'
import { Redirect, Link } from 'react-router-dom';

const Boundary: FunctionComponent = () => {
const [redirect, setRedirect] = useState<boolean>(false);

useEffect(() => {
setTimeout(() => setRedirect(true), 4000);
}, []);

    return (
        <div className="Boundary">
            <h2>Hello looks like you're lost here I'll redirect you to the home page or <Link to="/">Click Me</Link>.</h2>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
}

export default Boundary;