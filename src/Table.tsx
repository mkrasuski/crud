import { useContext, useEffect, useState } from "react";
import { ApiContext } from "./Crud";

export default function Table() {

    const { adapter, list } = useContext(ApiContext)
    const [Data, setData] = useState([]);

    useEffect(() => {
        list().then(r => setData(r.data))
    }, [])

    return (
        <table>
            <tr>
                <th>id</th>
                <th>ext</th>
                <th>mode</th>
                <th>path</th>
                <th>mth</th>
                <th>creds</th>
            </tr>
            {Data.map(e => <tr>
                <td>{adapter.getValue(e, "id")}</td>
                <td>{adapter.getValue(e, "ext")}</td>
                <td>{adapter.getValue(e, "mode")}</td>
                <td>{adapter.getValue(e, "path")}</td>
                <td>{adapter.getValue(e, "method")}</td>
                <td>{adapter.getValue(e, "creds")}</td>
            </tr>)}
        </table>
    )
}



