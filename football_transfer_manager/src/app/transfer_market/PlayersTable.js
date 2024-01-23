

export default function PlayersTable(props) {

    const allPlayers = props.players.map(player => {
        const properties = player.p.properties;
        return {
            name: properties.name,
            surname: properties.surname,
            age: properties.age,
            country: properties.country,
            position: properties.position,
            attack: properties.attacking,
            strength: properties.strength,
            defense: properties.defense,
            club: properties.club,
            contract: properties.contract,
            value: properties.value
        };
    });

    //console.log(allPlayers);

    return (
        <div class='max-w-screen-xl mx-6 dark:bg-slate-900 rounded'>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Surname
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ATK
                        </th>
                        <th scope="col" class="px-6 py-3">
                            STR
                        </th>
                        <th scope="col" class="px-6 py-3">
                            DEF
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Club
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Contract
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Value
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Purchase</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allPlayers.map((player, index) => (
                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">
                                    {player.name}
                                </td>
                                <td class="px-6 py-4">
                                    {player.surname}
                                </td>
                                <td class="px-6 py-4">
                                    {player.age}
                                </td>
                                <td class="px-6 py-4">
                                    {player.country}
                                </td>
                                <td class="px-6 py-4">
                                    {player.position}
                                </td>
                                <td class="px-6 py-4">
                                    {player.attack}
                                </td>
                                <td class="px-6 py-4">
                                    {player.strength}
                                </td>
                                <td class="px-6 py-4">
                                    {player.defense}
                                </td>
                                <td class="px-6 py-4">
                                    {player.club}
                                </td>
                                <td class="px-6 py-4">
                                    {player.contract}
                                </td>
                                <td class="px-6 py-4">
                                    {player.value}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Purchase</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
