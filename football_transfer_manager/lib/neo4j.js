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
console.log("URI:", process.env.NEO4J_URI);
console.log("Username:", process.env.NEO4J_USERNAME);
console.log("Password:", process.env.NEO4J_PASSWORD);
//#endregion


export async function read(cypher, params = {}) {
    // 1. Open a session
    const session = driver.session()

    try {
        // 2. Execute a Cypher Statement
        const res = await session.executeRead(tx => tx.run(cypher, params))

        // 3. Process the Results
        const values = res.records.map(record => record.toObject())

        return values
    }
    finally {
        // 4. Close the session 
        await session.close()
    }
}

export async function write(cypher, params = {}) {
    // 1. Open a session
    const session = driver.session()

    try {
        // 2. Execute a Cypher Statement
        const res = await session.executeWrite(tx => tx.run(cypher, params))

        // 3. Process the Results
        const values = res.records.map(record => record.toObject())

        return values
    }
    finally {
        // 4. Close the session 
        await session.close()
    }
}

export async function getAllPlayers() {
    const cypher = 'MATCH (p:Player) RETURN p.name AS name, p.surname AS surname';

    try {
        const players = await read(cypher);
        return players;
    } catch (error) {
        console.error('Error getting all players:', error.message);
        throw error;
    }
}

export async function addPlayer(name, surname, age, country, position, attacking, strength, defense, club, contract, value) {
    const cypher = `
        CREATE (:Player {
            name: $name,
            surname: $surname,
            age: $age,
            country: $country,
            position: $position,
            attacking: $attacking,
            strength: $strength,
            defense: $defense,
            club: $club,
            contract: $contract,
            value: $value
        })
    `;

    const params = {
        name,
        surname,
        age,
        country,
        position,
        attacking,
        strength,
        defense,
        club,
        contract,
        value
    };

    try {
        await write(cypher, params);
        alert(`${name} ${surname} added to the database!`);
    } catch (error) {
        console.error('Error adding player:', error.message);
        throw error;
    }
}


export async function addManager(name, surname, age, country, club, contract, salary) {
    const cypher = `
        CREATE (:Manager {
            name: $name,
            surname: $surname,
            age: $age,
            country: $country,
            club: $club,
            contract: $contract,
            salary: $salary
        })
    `;

    const params = {
        name,
        surname,
        age,
        country,
        club,
        contract,
        salary
    };

    try {
        await write(cypher, params);
        alert(`${name} ${surname} added to the database as a Manager!`);
    } catch (error) {
        console.error('Error adding manager:', error.message);
        throw error;
    }
}

export async function addCoach(name, surname, age, country, club, category, experience, contract, salary) {
    const cypher = `
        CREATE (:Coach {
            name: $name,
            surname: $surname,
            age: $age,
            country: $country,
            club: $club,
            category: $category,
            experience: $experience,
            contract: $contract,
            salary: $salary
        })
    `;

    const params = {
        name,
        surname,
        age,
        country,
        club,
        category,
        experience,
        contract,
        salary
    };

    try {
        await write(cypher, params);
        alert(`${name} ${surname} added to the database as a Coach!`);
    } catch (error) {
        console.error('Error adding coach:', error.message);
        throw error;
    }
}

export async function addClub(name, country, league, funds) {
    const cypher = `
        CREATE (:Club {
            name: $name,
            country: $country,
            league: $league,
            funds: $funds
        })
    `;

    const params = {
        name,
        country,
        league,
        funds
    };

    try {
        await write(cypher, params);
        alert(`${name} added to the database as a Club!`);
    } catch (error) {
        console.error('Error adding club:', error.message);
        throw error;
    }
}
