import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const [value, setValue] = useState("");
    const {show} = useContext(AlertContext);

    const onSubmit = event => {
        if (event.key !== "Enter") {
            return
        }
        if (value.trim()) {
            console.log("Make request with:", value)
        } else {
            show("Введите данные пользователя!")
        }
    };

    return (
        <div className="form-group mt-3">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя"
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
};