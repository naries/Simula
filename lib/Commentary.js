export const possibleShortPlayedFreekickCommentary = [
    {
        fix: false,
        comment: 'Freekick awarded and is taken short!'
    },
    {
        fix: true,
        comment: '',
        toFix: ' takes it short'
    },
    {
        fix: false,
        comment: 'He passes to his closest team mate'
    },
]

export const possibleLongPlayedFreekickFromDeepCommentary = [
    {
        fix: false,
        comment: 'He goes long.'
    },
    {
        fix: true,
        comment: '',
        toFix: 'He tries to find a player up front'
    },
]


export const possibleShortIndirectFreekickCommentary = [
    {
        fix: false,
        comment: 'He\'s taken it long, Now what?'
    },
    {
        fix: true,
        comment: '',
        toFix: ' takes it and...'
    },
]

export const possibleShortDirectFreekickGoalsCommentary = []

export const possibleShortDirectFreekickCommentary = [
    {
        fix: false,
        comment: 'He goes direct.'
    },
    {
        fix: true,
        comment: '',
        toFix: 'He takes aim and ...'
    },
    {
        fix: false,
        comment: 'He decides to test the keeper from that distance.'
    }
]

export const possibleShortIndirectFreekickGoalsCommentary = []

export const possibleLongPlayedFreekickCommentary = []

export const possibleWideCommentary = [
    {
        fix: true,
        comment: '',
        toFix: ' has played it wide.'
    },
    {
        fix: true,
        comment: 'Half a chance here, half a chance there and it will definitely be in.',
        toFix: ' he\'s misses by a little. '
    },
    {
        fix: false,
        comment: 'That was way off'
    },
    {
        fix: false,
        comment: 'That is wayward!',
    },
]

export const possibleThrowInCommentary = [
    {
        fix: true,
        comment: '',
        toFix: ' will throw the ball in.'
    }, 
    {
        fix: false,
        comment: 'The ball is out for a throw in!'
    },
    {
        fix: false,
        comment: 'It\'s a throw in.'
    },
    {
        fix: false,
        comment: 'The game will restart with a throw in.'
    }
]

export const possibleGoalCommentary = [
    {   
        fix: true,
        comment: 'It\'s in. The keeper could not do anything about it.',
        toFix: ' scores. '
    },
    {
        fix: false,
        comment: 'He sends the ball where the keeper could not reach and it\'s in the net'
    },
    {
        fix: false,
        comment: 'It\'s there. This game just got more interesting!'
    }

]

export const possibleCornerCommentary = [
    {
        fix: false,
        comment: 'The ball is out for a corner'
    },
    {
        fix: true,
        comment: '',
        toFix: ' will take the corner'
    },
    {
        fix: true,
        comment: ' All it needs is a player to get on the end of it.',
        toFix: ' takes the corner and delivers it almost perfectly.'
    }
]


export const possibleOverCommentary = [
    {
        fix: false,
        comment: 'That was wayward!'
    },
    {
        fix: true,
        comment: 'He\'s put the ball over the top',
        toFix: ' missed. '
    }
]

export const possibleOffThePostCommentary = [
    {
        fix: false,
        comment: 'And it\'s off the post.',
    }, 
    {
        fix: false,
        comment: 'It\'s hit the crossbar.'
    }
]

export const possibleSavesCommentary = [
    {
        fix: false,
        comment: 'What a save! That was brillant!',
    },
    {
        fix: false,
        comment: 'The keeper was able to get his hands on it.'
    },
    {
        fix: false,
        comment: 'It would have gone in but the goalkeeper wouldn\'t let it.'
    },
    {
        fix: false,
        comment: 'The keeper didn\'t have to stress himself to keep that out.'
    }
]



const possibleEndOfMatchCommentary = [
    {
        fix: false,
        comment: "It was a goal fest this one. The game is ended!"
    },
    {
        fix: false,
        comment: 'An interesting game could not bring us a winner. The teams matched in every department!'
    }
]