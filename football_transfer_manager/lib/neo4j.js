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

export async function addPlayer(name, surname, age, country, position, attacking, strength, defense, club, contract, value) {
    try {
        const result = await session.run(
            'CREATE (:Player {name: $name, surname: $surname, age: $age, country: $age, position: $position, attacking: $attacking, strngth: $strength, defense: $defense, club: $club, contract:$contract, value:$value})',
            { name, surname, age, country, position, attacking, strength, defense, club, contract, value }
        );
        alert(`${name} ${surname} added to database!`)
    } catch (error) {
        console.error('Error adding player: ', error.message);
    } finally {
        await session.close();
    }
}

export async function addManager(name, surname, age, country, club, contract, salary) {
    try {
        const result = await session.run(
            'CREATE (:Manager {name: $name, surname: $surname, age: $age, country: $country, club: $club, contract: $contract, salary: $salary})',
            { name, surname, age, country, club, contract, salary }
        )
        alert(`${name} ${surname} added to database!`)
    } catch (error) {
        console.error('Error adding manager: ', error.message);
    }
    finally {
        await session.close()
    }
}

export async function addCoach(name, surname, age, country, club, category, experience, contract, salary) {
    try {
        const result = await session.run(
            'CREATE (:Manager {name: $name, surname: $surname, age: $age, country: $country, club: $club, category: $category, experience: $experience, contract: $contract, salary: $salary})',
            { name, surname, age, country, club, category, experience, contract, salary }
        )
        alert(`${name} ${surname} added to database!`)
    } catch (error) {
        console.error('Error adding manager: ', error.message);
    }
    finally {
        await session.close()
    }
}

