import { Teams } from "./Teams"

export const _generateSimulationTeam = (homeId, awayId) => {
    return {
        home: {
            name: Teams[homeId].name,
            dominance: Teams[homeId].dominance,
        },
        homePlayers: [...Teams[homeId].players],
        homeGoalKeeper: {...Teams[homeId].goalKeeper},
        homeColors: Teams[homeId].colors,
        away: {
            name: Teams[awayId].name,
            dominance: Teams[awayId].dominance,
        },
        awayPlayers: [...Teams[awayId].players],
        awayGoalKeeper: {...Teams[awayId].goalKeeper},
        awayColors: Teams[awayId].colors,

        stadium: 'Emirates Stadium',
        weather: '32 degrees',
        condition: 'rainy',
    
        extraTime: false
    }
}