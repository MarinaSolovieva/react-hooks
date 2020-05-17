import React from "react";
import s from "./Preloader.module.css"


const Preloader = props => {
    return <div className="text-center">
        <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>

};

export default Preloader