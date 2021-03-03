import { 
    possibleShortPlayedFreekickCommentary,
    possibleLongPlayedFreekickFromDeepCommentary,
    possibleShortIndirectFreekickCommentary,
    possibleShortDirectFreekickGoalsCommentary,
    possibleShortDirectFreekickCommentary,
    possibleWideCommentary,
    possibleThrowInCommentary,
    possibleGoalCommentary,
    possibleCornerCommentary,
    possibleOverCommentary,
    possibleSavesCommentary,
    possibleOffThePostCommentary,
} from '../Commentary'

export const __commentarySelectorEngine = (action) => {
    if(action === 'goal') {
        let pointer = Math.floor(Math.random() * (possibleGoalCommentary.length))
        let commentary = possibleGoalCommentary[pointer]
        return commentary
    }
    if(action === 'over') {
        let pointer = Math.floor(Math.random() * (possibleOverCommentary.length))
        let commentary = possibleOverCommentary[pointer]
        return commentary
    }
    if(action === 'throw in') {
        let pointer = Math.floor(Math.random() * (possibleThrowInCommentary.length))
        let commentary = possibleThrowInCommentary[pointer]
        return commentary
    }
    
    if(action === 'off the post') {
        let pointer = Math.floor(Math.random() * (possibleOffThePostCommentary.length))
        let commentary = possibleOffThePostCommentary[pointer]
        return commentary
    }

    if(action === 'wide') {
        let pointer = Math.floor(Math.random() * (possibleWideCommentary.length))
        let commentary = possibleWideCommentary[pointer]
        return commentary
    }
    if(action === 'corner') {
        let pointer = Math.floor(Math.random() * (possibleCornerCommentary.length))
        let commentary = possibleCornerCommentary[pointer]
        return commentary
    }

    if(action === 'save') {
        let pointer = Math.floor(Math.random() * (possibleSavesCommentary.length))
        let commentary = possibleSavesCommentary[pointer]
        return commentary
    }
    if(action === 'freekick') {
        // choose distance
        let distance = Math.random(), commentary, pointer, commentaryPick, type = Math.random()
        if(distance < 0.333) { // short freekick
            // direct or indirect
            const goalCheck = Math.random()
            if (type < 0.5) { // Player goes direct
                commentaryPick = possibleShortDirectFreekickCommentary
                if(goalCheck < 0.5) { //The direct freekick resulted in a goal
                    commentaryPick = possibleShortDirectFreekickGoalsCommentary
                }
            } else { // player goes indirect
                commentaryPick = possibleShortIndirectFreekickCommentary
                
            }
        }

        if(distance >= 0.333 && distance < 0.666) {//long distance freekicks
            // long or short
            if (type < 0.333) { //The player played it short
                commentaryPick = possibleShortPlayedFreekickCommentary
            }
            if (type >= 0.333) { // The player played it long
                commentaryPick = possibleLongPlayedFreekickCommentary
            }
            // check if it converts into goal
        }
        
        if(distance >= 0.666 && distance < 0.999) { //freekicks from deep
            // taken long or short
            if (type < 0.6) { //The player takes the ball short
                commentaryPick = possibleShortPlayedFreekickCommentary
            }
            if (type >= 0.6) { // The player decides to go long
                commentaryPick = possibleLongPlayedFreekickFromDeepCommentary
            }
        }

        pointer = Math.floor(Math.random() * (commentaryPick.length))
        commentary = commentaryPick[pointer]
        if(goalCheck < 0.5){ // freekick resulted in a goal
            commentary = {...commentary, redialForgoals: true}
        }
        return commentary
    }
}