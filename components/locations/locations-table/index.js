export default function LocationsTable() {
    return (
        <table className="border border-black text-2xl">
            <thead>
                <tr>
                    <th className="border border-black">id</th>
                    <th className="border border-black">title</th>
                    <th className="border border-black">visited date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-black">
                        1
                    </td>
                    <td className="border border-black">Paris</td>
                    <td className="border border-black">Jul 2017</td>
                </tr>
                <tr>
                    <td className="border border-black">
                        2
                    </td>
                    <td className="border border-black">London</td>
                    <td className="border border-black">Jul 2018</td>
                </tr>
            </tbody>
        </table>
    )
}