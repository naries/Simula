/**
 * This file contains the teams and players of the PL and their ratings.
 * 
 * Premier league teams all represented in array
 * Arsenal, Manchester United, Chelsea, Aston Villa, Leicester, Fulham,
 * West Bromwich Albion, Liverpool, Leeds United, Wolverhampton Wanderers, 
 * Sheffield United, Tottenham, Everton, Brighton and Hove Albion, Newcastle United, 
 * Crystal Palace Burnley, Manchester City, Southampton, West Ham United
 * 
 * All ratings are based on fifa 21 ratings!
 */
export const Teams = [
    {
        id: 1,
        name: 'Arsenal',
        dominance: 7933,
        players: [
            {
                name: 'Martin Odegaard',
                shirtNumber: 11,
                position: 'AM',
                rating: 83,
                morale: 32
            },
            {
                name: 'Pierre-Emerick Aubameyang',
                shirtNumber: 14,
                position: 'AML',
                rating: 87,
                morale: 32
            },
            {
                name: 'Alexander Lacazette',
                shirtNumber: 9,
                position: 'CF',
                rating: 83,
                morale: 32
            },
            {
                name: 'Nicolas Pepe',
                shirtNumber: 17,
                position: 'AMR',
                rating: 82,
                cornerPicker: true,
                morale: 32
            },
            {
                name: 'Hector Bellerin',
                shirtNumber: 2,
                position: 'RB',
                rating: 79,
                morale: 32
            },
            {
                name: 'Granit Xhaka',
                shirtNumber: 34,
                position: 'DM',
                rating: 81,
                morale: 32
            },
            {
                name: 'Thomas Partey',
                shirtNumber: 18,
                position: 'CM',
                rating: 84,
                morale: 32
            },
            {
                name: 'Kieran Tierney',
                shirtNumber: 3,
                position: 'RB',
                rating: 81,
                morale: 32
            },
            {
                name: 'Bukayo Saka',
                shirtNumber: 18,
                position: 'ML',
                rating: 78,
                morale: 32
            },
            {
                name: 'David Luiz',
                shirtNumber: 23,
                position: 'DC',
                rating: 80,
                morale: 32
            },
        ],
        goalKeeper: {
            name: 'Bernd Leno',
            shirtNumber: 1,
            attributes: {
                composure: 8400,
                positioning: 8500,
                confidence: 8000,
            },
        },
        colors: '#e9471f',
    }, {
        id: 2,
        name: 'Manchester United',
        dominance: 8175,
        players: [
            {
                name: 'Bruno Fernandez',
                shirtNumber: 28,
                position: 'AM',
                rating: 88,
                morale: 99,
                cornerPicker: true,
            },
            {
                name: 'Paul Pogba',
                shirtNumber: 6,
                position: 'DMR',
                rating: 86,
                morale: 99
            },
            {
                name: 'Victor Lindelof',
                shirtNumber: 2,
                position: 'DC',
                rating: 79,
                morale: 99
            },
            {
                name: 'Harry Maguire',
                shirtNumber: 5,
                position: 'AMR',
                rating: 81,
                morale: 32
            },
            {
                name: 'Aaron Wan Bisaka',
                shirtNumber: 29,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Luke Shaw',
                shirtNumber: 23,
                position: 'LB',
                rating: 80,
                morale: 99
            },
            {
                name: 'Marcus Rashford',
                shirtNumber: 10,
                position: 'ML',
                rating: 85,
                morale: 99
            },
            {
                name: 'Edinson Cavani',
                shirtNumber: 3,
                position: 'RB',
                rating: 84,
                morale: 99
            },
            {
                name: 'Fred',
                shirtNumber: 31,
                position: 'ML',
                rating: 81,
                morale: 32
            },
            {
                name: 'Mason Greenwood',
                shirtNumber: 9,
                position: 'MR',
                rating: 77,
                morale: 32
            },
        ],
        goalKeeper: {
            name: 'David De Gea',
            shirtNumber: 1,
            attributes: {
                composure: 8557,
                positioning: 8623,
                confidence: 8092,
            },
        },
        colors: '#be3b2c',
    },      {
        id: 3,
        name: 'Chelsea',
        dominance: 8166,
        players: [
            {
                name: 'Caesar Azpilicueta',
                shirtNumber: 28,
                position: 'DC',
                rating: 83,
                morale: 99
            },
            {
                name: 'Antonio Rudiger',
                shirtNumber: 2,
                position: 'DC',
                rating: 81,
                morale: 99
            },
            {
                name: 'Thiago Silva',
                shirtNumber: 6,
                position: 'DR',
                rating: 85,
                morale: 99
            },
            {
                name: 'Marcos Alonso',
                shirtNumber: 3,
                position: 'LB',
                rating: 79,
                morale: 99
            },
            {
                name: 'Jorginho',
                shirtNumber: 5,
                position: 'AM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Kovacic',
                shirtNumber: 17,
                position: 'DM',
                rating: 83,
                morale: 99
            },
            {
                name: 'Reece James',
                shirtNumber: 24,
                position: 'RB',
                rating: 78,
                morale: 99
            },
            {
                name: 'Mason Mount',
                shirtNumber: 19,
                position: 'RW',
                rating: 80,
                morale: 99
            },
            {
                name: 'Timo Werner',
                shirtNumber: 11,
                position: 'LW',
                rating: 85,
                morale: 32
            },
            {
                name: 'Tammy Abraham',
                shirtNumber: 9,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Edouard Mendy',
            shirtNumber: 16,
            attributes: {
                composure: 7800,
                positioning: 8000,
                confidence: 8100,
            },
        },
        colors: '#03448f',
    }, {
        id: 4,
        name: 'Aston Villa',
        dominance: 7966,
        players: [
            {
                name: 'Mings',
                shirtNumber: 5,
                position: 'DL',
                rating: 75,
                morale: 99
            },
            {
                name: 'Konsa',
                shirtNumber: 4,
                position: 'DC',
                rating: 72,
                morale: 99
            },
            {
                name: 'Barkley',
                shirtNumber: 20,
                position: 'AM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Targett',
                shirtNumber: 18,
                position: 'LB',
                rating: 76,
                morale: 99
            },
            {
                name: 'Douglas Luiz',
                shirtNumber: 6,
                position: 'DM',
                rating: 75,
                morale: 99,
            },
            {
                name: 'McGinn',
                shirtNumber: 7,
                position: 'DM',
                rating: 76,
                morale: 99
            },
            {
                name: 'Cash',
                shirtNumber: 2,
                position: 'RB',
                rating: 75,
                morale: 99
            },
            {
                name: 'Traore',
                shirtNumber: 15,
                position: 'RMF',
                rating: 76,
                morale: 99
            },
            {
                name: 'Grealish',
                shirtNumber: 10,
                position: 'LMF',
                rating: 80,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Watkins',
                shirtNumber: 11,
                position: 'CF',
                rating: 76,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Emiliano Martinez',
            shirtNumber: 26,
            attributes: {
                composure: 8000,
                positioning: 7800,
                confidence: 7400,
            },
        },
        colors: '#76293C',
    }, {
        id: 5,
        name: 'Leicester City',
        dominance: 8033,
        players: [
            {
                name: 'Fofana',
                shirtNumber: 3,
                position: 'DL',
                rating: 71,
                morale: 99
            },
            {
                name: 'Evans',
                shirtNumber: 6,
                position: 'DC',
                rating: 80,
                morale: 99
            },
            {
                name: 'Maddison',
                shirtNumber: 10,
                position: 'AM',
                rating: 81,
                morale: 99
            },
            {
                name: 'James Justin',
                shirtNumber: 2,
                position: 'LB',
                rating: 73,
                morale: 99
            },
            {
                name: 'Ndidi',
                shirtNumber: 25,
                position: 'DM',
                rating: 84,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Tielemans',
                shirtNumber: 8,
                position: 'DM',
                rating: 81,
                morale: 99
            },
            {
                name: 'Castagne',
                shirtNumber: 27,
                position: 'RB',
                rating: 77,
                morale: 99
            },
            {
                name: 'Marc Albrighton',
                shirtNumber: 11,
                position: 'RMF',
                rating: 76,
                morale: 99
            },
            {
                name: 'Barnes',
                shirtNumber: 15,
                position: 'LMF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Vardy',
                shirtNumber: 9,
                position: 'CF',
                rating: 86,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Kasper Schmeichel',
            shirtNumber: 1,
            attributes: {
                composure: 8304,
                positioning: 8398,
                confidence: 8202,
            },
        },
        colors: '#00509b',
    }, {
        id: 6,
        name: 'Fulham',
        dominance: 7433,
        players: [
            {
                name: 'Aina',
                shirtNumber: 34,
                position: 'DL',
                rating: 83,
                morale: 99
            },
            {
                name: 'Adarabioyo',
                shirtNumber: 16,
                position: 'DC',
                rating: 81,
                morale: 99
            },
            {
                name: 'Andersen',
                shirtNumber: 5,
                position: 'DR',
                rating: 85,
                morale: 99
            },
            {
                name: 'Robinson',
                shirtNumber: 33,
                position: 'LB',
                rating: 79,
                morale: 99
            },
            {
                name: 'Anguissa',
                shirtNumber: 29,
                position: 'CM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Reed',
                shirtNumber: 21,
                position: 'CM',
                rating: 83,
                morale: 99
            },
            {
                name: 'Decordova-Reid',
                shirtNumber: 14,
                position: 'RB',
                rating: 78,
                morale: 99
            },
            {
                name: 'Loftus Cheek',
                shirtNumber: 15,
                position: 'RMF',
                rating: 80,
                morale: 99
            },
            {
                name: 'Lookman',
                shirtNumber: 19,
                position: 'LMF',
                rating: 85,
                morale: 32
            },
            {
                name: 'Ivan Cavaleiro',
                shirtNumber: 17,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Alphonse Areola',
            shirtNumber: 1,
            attributes: {
                composure: 8153,
                positioning: 8235,
                confidence: 8097,
            },
        },
        colors: '#000000',
    }, {
        id: 7,
        name: 'West Bromwich Albion',
        dominance: 7300,
        players: [
            {
                name: "O'shea",
                shirtNumber: 27,
                position: 'DL',
                rating: 68,
                morale: 99
            },
            {
                name: 'Ajayi',
                shirtNumber: 6,
                position: 'DC',
                rating: 73,
                morale: 99
            },
            {
                name: 'Mattheus Pereira',
                shirtNumber: 12,
                position: 'AM',
                rating: 76,
                morale: 99
            },
            {
                name: 'Townsend',
                shirtNumber: 14,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Sawyers',
                shirtNumber: 19,
                position: 'CM',
                rating: 73,
                morale: 99,
                cornerPicker: true,
            },
            {
                name: 'Livermore',
                shirtNumber: 8,
                position: 'CM',
                rating: 74,
                morale: 99
            },
            {
                name: 'Furlong',
                shirtNumber: 2,
                position: 'RB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Snodgrass',
                shirtNumber: 23,
                position: 'RMF',
                rating: 60,
                morale: 99
            },
            {
                name: 'Diangana',
                shirtNumber: 11,
                position: 'LMF',
                rating: 73,
                morale: 32
            },
            {
                name: 'Robinson',
                shirtNumber: 7,
                position: 'CF',
                rating: 72,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Sam Johnstone',
            shirtNumber: 1,
            attributes: {
                composure: 7700,
                positioning: 7620,
                confidence: 7583,
            },
        },
        colors: '#0d2350',
    }, {
        id: 8,
        name: 'Liverpool',
        dominance: 8533,
        players: [
            {
                name: 'Henderson',
                shirtNumber: 14,
                position: 'DL',
                rating: 86,
                morale: 99
            },
            {
                name: 'Fabinho',
                shirtNumber: 3,
                position: 'DR',
                rating: 87,
                morale: 99
            },
            {
                name: 'Milner',
                shirtNumber: 7,
                position: 'CM',
                rating: 80,
                morale: 99
            },
            {
                name: 'Robertson',
                shirtNumber: 26,
                position: 'LB',
                rating: 87,
                morale: 99
            },
            {
                name: 'wijnaldum',
                shirtNumber: 5,
                position: 'DM',
                rating: 87,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Thiago',
                shirtNumber: 6,
                position: 'CM',
                rating: 85,
                morale: 99
            },
            {
                name: 'Alexander-Arnold',
                shirtNumber: 66,
                position: 'RB',
                rating: 87,
                morale: 99
            },
            {
                name: 'Salah',
                shirtNumber: 11,
                position: 'RWF',
                rating: 90,
                morale: 99
            },
            {
                name: 'Mane',
                shirtNumber: 10,
                position: 'LWF',
                rating: 90,
                morale: 99
            },
            {
                name: 'Firmino',
                shirtNumber: 9,
                position: 'CF',
                rating: 87,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Alisson Becker',
            shirtNumber: 1,
            attributes: {
                composure: 9218,
                positioning: 9000,
                confidence: 8903,
            },
        },
        colors: '#bc381b',
    }, {
        id: 9,
        name: 'Leeds United',
        dominance: 7533,
        players: [
            {
                name: 'Cooper',
                shirtNumber: 6,
                position: 'DL',
                rating: 73,
                morale: 99
            },
            {
                name: 'Struijk',
                shirtNumber: 21,
                position: 'DC',
                rating: 62,
                morale: 99
            },
            {
                name: 'Dallas',
                shirtNumber: 15,
                position: 'AM',
                rating: 73,
                morale: 99
            },
            {
                name: 'Alioski',
                shirtNumber: 10,
                position: 'LB',
                rating: 73,
                morale: 99
            },
            {
                name: 'Phillips',
                shirtNumber: 23,
                position: 'DM',
                rating: 77,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Klich',
                shirtNumber: 43,
                position: 'CM',
                rating: 74,
                morale: 99
            },
            {
                name: 'Castagne',
                shirtNumber: 27,
                position: 'RB',
                rating: 78,
                morale: 99
            },
            {
                name: 'Raphinha',
                shirtNumber: 18,
                position: 'RMF',
                rating: 81,
                morale: 99
            },
            {
                name: 'Harrison',
                shirtNumber: 22,
                position: 'LMF',
                rating: 74,
                morale: 32
            },
            {
                name: 'Bamford',
                shirtNumber: 9,
                position: 'CF',
                rating: 72,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Illan Meslier',
            shirtNumber: 1,
            attributes: {
                composure: 6200,
                positioning: 6922,
                confidence: 7200,
            },
        },
        colors: '#BC9B60',
    }, {
        id: 10,
        name: 'Wolverhampton Wanderers',
        dominance: 7900,
        players: [
            {
                name: 'Coady',
                shirtNumber: 16,
                position: 'DC',
                rating: 79,
                morale: 99
            },
            {
                name: 'Boly',
                shirtNumber: 15,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Saiss',
                shirtNumber: 27,
                position: 'DL',
                rating: 78,
                morale: 99
            },
            {
                name: 'Nouri',
                shirtNumber: 3,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Joao Moutinho',
                shirtNumber: 28,
                position: 'CM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Ruben Neves',
                shirtNumber: 8,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Nelson Semedo',
                shirtNumber: 22,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Adama Traore',
                shirtNumber: 37,
                position: 'RWF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Pedro Neto',
                shirtNumber: 7,
                position: 'LMF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Willian Jose',
                shirtNumber: 12,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Rui Patricio',
            shirtNumber: 11,
            attributes: {
                composure: 8237,
                positioning: 8444,
                confidence: 8300,
            },
        },
        colors: 'gold',
    }, {
        id: 11,
        name: 'Sheffield United',
        dominance: 7366,
        players: [
            {
                name: 'Egan',
                shirtNumber: 12,
                position: 'DC',
                rating: 79,
                morale: 99
            },
            {
                name: 'Ampadu',
                shirtNumber: 22,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Basham',
                shirtNumber: 6,
                position: 'DL',
                rating: 78,
                morale: 99
            },
            {
                name: 'stevens',
                shirtNumber: 3,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Norwood',
                shirtNumber: 16,
                position: 'CM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Lundstram',
                shirtNumber: 7,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Bogle',
                shirtNumber: 20,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Fleck',
                shirtNumber: 4,
                position: 'CM',
                rating: 79,
                morale: 99
            },
            {
                name: 'McGoldrick',
                shirtNumber: 17,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'McBurnie',
                shirtNumber: 9,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Aaron Ramsdale',
            shirtNumber: 1,
            attributes: {
                composure: 7500,
                positioning: 7234,
                confidence: 8200,
            },
        },
        colors: '#e64728',
    }, {
        id: 12,
        name: 'Tottenham',
        dominance: 8433,
        players: [
            {
                name: 'Dier',
                shirtNumber: 15,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Aldewiereld',
                shirtNumber: 4,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Ndombele',
                shirtNumber: 28,
                position: 'AM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Reguillon',
                shirtNumber: 3,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Hojberg',
                shirtNumber: 5,
                position: 'CM',
                rating: 83,
                morale: 32,
            },
            {
                name: 'Sissoko',
                shirtNumber: 17,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Aurier',
                shirtNumber: 24,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Bergwijn',
                shirtNumber: 23,
                position: 'RWF',
                rating: 79,
                morale: 99,
            },
            {
                name: 'Son',
                shirtNumber: 7,
                position: 'LMF',
                rating: 72,
                morale: 99,
                cornerPicker: true,
            },
            {
                name: 'Harry Kane',
                shirtNumber: 10,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Hugo Lloris',
            shirtNumber: 1,
            attributes: {
                composure: 8793,
                positioning: 8777,
                confidence: 8509,
            },
        },
        colors: '#0A1C56',
    }, {
        id: 13,
        name: 'Everton',
        dominance: 7966,
        players: [
            {
                name: 'Keane',
                shirtNumber: 5,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Mina',
                shirtNumber: 13,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Sigurdson',
                shirtNumber: 10,
                position: 'AM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Digne',
                shirtNumber: 12,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Allan',
                shirtNumber: 6,
                position: 'DM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Doucoure',
                shirtNumber: 16,
                position: 'DM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Godfrey',
                shirtNumber: 22,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Rodriguez',
                shirtNumber: 19,
                position: 'RMF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Richarlison',
                shirtNumber: 7,
                position: 'LMF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Calvert-Lewin',
                shirtNumber: 9,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Jordan Pickford',
            shirtNumber: 1,
            attributes: {
                composure: 8043,
                positioning: 8122,
                confidence: 8983,
            },
        },
        colors: '#284488',
    }, {
        id: 14,
        name: 'Brighton and Hove Albion',
        dominance: 7566,
        players: [
            {
                name: 'Dunk',
                shirtNumber: 5,
                position: 'DC',
                rating: 79,
                morale: 99
            },
            {
                name: 'White',
                shirtNumber: 3,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Webster',
                shirtNumber: 4,
                position: 'DL',
                rating: 78,
                morale: 99
            },
            {
                name: 'March',
                shirtNumber: 20,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Allister',
                shirtNumber: 10,
                position: 'CM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Bissouma',
                shirtNumber: 8,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Veltman',
                shirtNumber: 34,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'GroB',
                shirtNumber: 13,
                position: 'CM',
                rating: 79,
                morale: 99
            },
            {
                name: 'Trossard',
                shirtNumber: 11,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Maupay',
                shirtNumber: 9,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Robert Sanchez',
            shirtNumber: 31,
            attributes: {
                composure: 6400,
                positioning: 6500,
                confidence: 6209,
            },
        },
        colors: '#025DAB',
    }, {
        id: 15,
        name: 'Newcastle United',
        dominance: 7633,
        players: [
            {
                name: 'Clark',
                shirtNumber: 2,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Lascelles',
                shirtNumber: 6,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Almiron',
                shirtNumber: 24,
                position: 'AM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Lewis',
                shirtNumber: 15,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Shelvey',
                shirtNumber: 8,
                position: 'CM',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Hayden',
                shirtNumber: 14,
                position: 'DM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Manquillo',
                shirtNumber: 19,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Willock',
                shirtNumber: 28,
                position: 'CM',
                rating: 79,
                morale: 99
            },
            {
                name: 'Gayle',
                shirtNumber: 12,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Saint-Maximin',
                shirtNumber: 10,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Karl Darlow',
            shirtNumber: 26,
            attributes: {
                composure: 7283,
                positioning: 7319,
                confidence: 7892,
            },
        },
        colors: 'black',
    }, {
        id: 16,
        name: 'Crystal Palace',
        dominance: 7533,
        players: [
            {
                name: 'Cahill',
                shirtNumber: 24,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Kouyate',
                shirtNumber: 8,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'McArthur',
                shirtNumber: 18,
                position: 'CM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Mitchell',
                shirtNumber: 27,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Eze',
                shirtNumber: 25,
                position: 'LMF',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Milivojevic',
                shirtNumber: 4,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Clyne',
                shirtNumber: 17,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Townsend',
                shirtNumber: 10,
                position: 'RMF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Zaha',
                shirtNumber: 11,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Benteke',
                shirtNumber: 20,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Vicente Guaita',
            shirtNumber: 31,
            attributes: {
                composure: 8000,
                positioning: 8290,
                confidence: 7909,
            },
        },
        colors: 'purple',
    }, {
        id: 17,
        name: 'Burnley',
        dominance: 7600,
        players: [
            {
                name: 'Mee',
                shirtNumber: 6,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Tarkowski',
                shirtNumber: 5,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Brownhill',
                shirtNumber: 8,
                position: 'CM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Taylor',
                shirtNumber: 3,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'McNeil',
                shirtNumber: 11,
                position: 'LMF',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Westwood',
                shirtNumber: 18,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Lowton',
                shirtNumber: 2,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Gudmundson',
                shirtNumber: 7,
                position: 'RMF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Barnes',
                shirtNumber: 10,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Wood',
                shirtNumber: 9,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Nick Pope',
            shirtNumber: 1,
            attributes: {
                composure: 8100,
                positioning: 8200,
                confidence: 8023,
            },
        },
        colors: '#612132',
    }, {
        id: 18,
        name: 'Manchester City',
        dominance: 8500,
        players: [
            {
                name: 'Ruben Dias',
                shirtNumber: 3,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Stones',
                shirtNumber: 5,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Gundogan',
                shirtNumber: 8,
                position: 'CM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Joao Cancelo',
                shirtNumber: 27,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Mahrez',
                shirtNumber: 26,
                position: 'LWF',
                rating: 83,
                morale: 32,
            },
            {
                name: 'De Bruyne',
                shirtNumber: 17,
                position: 'CM',
                rating: 82,
                morale: 99,
                cornerPicker: true,
            },
            {
                name: 'Walker',
                shirtNumber: 2,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Sterling',
                shirtNumber: 7,
                position: 'LWF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Aguero',
                shirtNumber: 10,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Rodri',
                shirtNumber: 12,
                position: 'DM',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Ederson Moraes',
            shirtNumber: 31,
            attributes: {
                composure: 9003,
                positioning: 8888,
                confidence: 9283,
            },
        },
        colors: '#69a8d8',
    }, {
        id: 19,
        name: 'Southampton',
        dominance: 7700,
        players: [
            {
                name: 'Vestergaard',
                shirtNumber: 4,
                position: 'DL',
                rating: 79,
                morale: 99
            },
            {
                name: 'Bednarek',
                shirtNumber: 35,
                position: 'DR',
                rating: 80,
                morale: 99
            },
            {
                name: 'Oriol Romeu',
                shirtNumber: 6,
                position: 'CM',
                rating: 78,
                morale: 99
            },
            {
                name: 'Bertrand',
                shirtNumber: 3,
                position: 'LB',
                rating: 71,
                morale: 99
            },
            {
                name: 'Armstrong',
                shirtNumber: 17,
                position: 'LMF',
                rating: 83,
                morale: 32,
                cornerPicker: true,
            },
            {
                name: 'Ward-Prowse',
                shirtNumber: 8,
                position: 'CM',
                rating: 82,
                morale: 99
            },
            {
                name: 'Walker-Peters',
                shirtNumber: 2,
                position: 'RB',
                rating: 83,
                morale: 99
            },
            {
                name: 'Walcott',
                shirtNumber: 32,
                position: 'RMF',
                rating: 79,
                morale: 99
            },
            {
                name: 'Adams',
                shirtNumber: 10,
                position: 'CF',
                rating: 72,
                morale: 32
            },
            {
                name: 'Ings',
                shirtNumber: 9,
                position: 'CF',
                rating: 78,
                morale: 99
            },
        ],
        goalKeeper: {
            name: 'Lukasz Fabianski',
            shirtNumber: 1,
            attributes: {
                composure: 8092,
                positioning: 8127,
                confidence: 8093,
            },
        },
        colors: '#782C39',
    }
]