import React, {useEffect, useState } from "react";
import BartenderService from "../services/BartenderService";

function BartenderComponent() {

    const [bartenders, setBartenders] = useState([]);

    useEffect(() => {
        getBartenders()
    }, [])

    const getBartenders = () => {
        BartenderService.getBartenders().then(response => {
            setBartenders(response.data);
        })
    }

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pila de vasos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bartenders.map(
                            bartender => 
                            <tr key={bartender.id}>
                                <td>{bartender.id}</td>
                                <td>{bartender.pilaVasos}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BartenderComponent;