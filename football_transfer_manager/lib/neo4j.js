import neo4j from 'neo4j-driver';

//#region konekcija
const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(
        process.env.NEO4J_USERNAME,
        process.env.NEO4J_PASSWORD
    )
)
const session = driver.session()
//#endregion

//#region provera prisutnosti kredencijala
/*console.log("URI:", process.env.NEO4J_URI);
console.log("Username:", process.env.NEO4J_USERNAME);
console.log("Password:", process.env.NEO4J_PASSWORD);*/
//#endregion

export async function getAllNodes() {
    const result = await session.run('MATCH (n) RETURN n')
    const nodes = result.records.map(record => record.get('n'))

    return nodes;
}

export async function deleteAllNodes() {
    await session.run('MATCH (n) DETACH DELETE n')
}

export async function addPlayer(name, country, age, value) {
    try {
        const result = await session.run(
            'CREATE (:Player {name: $name, country: $country, age: $age, value: $value})',
            { name, country, age, value }
        );

        console.log(`Player ${name} added successfully.`);
    } catch (error) {
        console.error('Error adding player:', error.message);
    } finally {
        await session.close();
    }
}



