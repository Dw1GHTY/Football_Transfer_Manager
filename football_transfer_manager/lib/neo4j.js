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
{/*console.log("URI:", process.env.NEO4J_URI);
console.log("Username:", process.env.NEO4J_USERNAME);
console.log("Password:", process.env.NEO4J_PASSWORD);*/}
//#endregion


//#region UTILITY_FUNCTIONS
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
//#endregion


export async function getAllPlayers() {
    const cypher = 'MATCH (p:Player) RETURN p';

    try {
        const players = await read(cypher);
        return players;
    } catch (error) {
        console.error('Error getting all players:', error.message);
        throw error;
    }
}
export async function addPlayer(name, surname, age, country, position, attacking, strength, defense, club, contract, value) {

    const doesClubExist = await clubExists(club);

    if (!doesClubExist) {
        alert(`Club ${club} does not exist`);
        return;
    }

    const cypher = `
        MATCH (c:Club {name: $club})
        CREATE (p:Player {
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
        CREATE (p)-[:PLAYS_FOR]->(c)
        CREATE (c)-[:EMPLOYS]->(p)
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
export async function findPerson(person, name) {

    let pom = '';

    if (person === 'Player') {
        pom = 'p';
    } else if (person === 'Manager') {
        pom = 'm';
    } else if (person === 'Coach') {
        pom = 'c';
    }

    if (person === 'Player' || person === 'Manager' || person === 'Coach') {
        const cypher = `
      MATCH (${pom}:${person})
      WHERE toLower(${pom}.name) CONTAINS toLower($name) OR toLower(${pom}.surname) CONTAINS toLower($name)
      RETURN ${pom}
    `;
        const params = { person, name };

        try {
            const result = await read(cypher, params);
            const persons = result;
            console.log(persons);
            return result;
        } catch (error) {
            console.error('Error finding player:', error);
            throw error;
        }
    }
}

export async function buyPlayer(clubName, playerName, playerSurname) {
    try {
        const buyPlayerQuery = `
            MATCH (club:Club {name: $clubName})
            MATCH (player:Player {name: $playerName, surname: $playerSurname})
            OPTIONAL MATCH (player)-[rel1:PLAYS_FOR]->(formerClub:Club)
            DELETE rel1
            WITH player, formerClub, club
            OPTIONAL MATCH (formerClub)-[rel2:EMPLOYS]->(player)
            DELETE rel2
            CREATE (club)-[:EMPLOYS]->(player)
            CREATE (player)-[:PLAYS_FOR]->(club)
            WITH club, player
            SET club.funds = toInteger(club.funds) - toInteger(player.value)
            RETURN club.funds
        `;

        const updatedFundsResult = await write(buyPlayerQuery, { clubName, playerName, playerSurname });
        const updatedFunds = updatedFundsResult[0]?.club?.funds;

        if (updatedFunds !== undefined) {
            alert('Successful');
            console.log(`Transaction successful. Club '${clubName}' has funds: ${updatedFunds}`);
        } else {
            //console.log('Club or player not found.');
        }
    } catch (error) {
        console.error('Error in buyPlayer:', error);
    }
}



export async function getAllManagers() {
    const cypher = 'MATCH (m:Manager) RETURN m';

    try {
        const managers = await read(cypher);
        return managers;
    } catch (error) {
        console.error('Error getting all managers:', error.message);
        throw error;
    }
}

export async function addManager(name, surname, age, country, club, contract, salary) {

    const doesClubExist = await clubExists(club);

    if (!doesClubExist) {
        alert(`Club ${club} does not exist`);
        return;
    }

    const cypher = `
        MATCH (c:Club {name: $club})
        CREATE (m:Manager {
            name: $name,
            surname: $surname,
            age: $age,
            country: $country,
            club: $club,
            contract: $contract,
            salary: $salary
        })
        CREATE (m)-[:WORKS_FOR]->(c)
        CREATE (c)-[:EMPLOYS]->(m)
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
export async function getAllCoaches() {
    const cypher = 'MATCH (c:Coach) RETURN c';

    try {
        const coaches = await read(cypher);
        return coaches;
    } catch (error) {
        console.error('Error getting all coaches:', error.message);
        throw error;
    }
}

export async function addCoach(name, surname, age, country, club, category, experience, contract, salary) {

    const doesClubExist = await clubExists(club);

    if (!doesClubExist) {
        alert(`Club ${club} does not exist`);
        return;
    }

    const cypher = `
        MATCH (c:Club {name: $club})
        CREATE (coach:Coach {
            name: $name,
            surname: $surname,
            age: $age,
            country: $country,
            category: $category,
            experience: $experience,
            club: $club,
            contract: $contract,
            salary: $salary
        })
        CREATE (coach)-[:WORKS_AT]->(c)
        CREATE (c)-[:EMPLOYS]->(coach)
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


//#region 
export async function addClub(name, country, league, funds) {

    const doesClubExist = await clubExists(name);

    if (doesClubExist) {
        alert(`Club ${name} already exists`);
        return;
    }

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
export async function clubExists(name) {
    const cypher = 'MATCH (c:Club {name: $name}) RETURN count(c) as count';
    const params = { name };

    try {
        const result = await read(cypher, params);
        const count = result[0].count;
        return count > 0;
    } catch (error) {
        console.error('Error checking club existence:', error.message);
        throw error;
    }
}
export async function getAllClubs() {
    const cypher = 'MATCH (c:Club) RETURN c';

    try {
        const clubs = await read(cypher);
        console.log(clubs);
        return clubs;
    } catch (error) {
        console.error('Error getting all clubs:', error.message);
        throw error;
    }
}
//#endregion


export async function makeRecomendation(searchParameter) {
    const cypher = '';
}