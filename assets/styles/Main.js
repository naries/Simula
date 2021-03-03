import { StyleSheet } from "react-native";

export default StyleSheet.create({
    topBar: {
        paddingVertical: 20,
        height: 180,
        backgroundColor: '#222'
    },
    title: {
        marginLeft: 20,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    subTitle: {
        fontWeight: '600',
        fontSize: 20,
        color: '#333'
    },
    extraInfo: {
        color: '#555',
        fontSize: 12
    },
    bottomCard: {
        backgroundColor: "#f0f0f0",
        borderTopWidth: 1,
        borderTopColor: '#fff',
        paddingVertical: 5,
        marginTop: 0,
    },
    comeOn: {fontSize: 25, color: '#888', fontWeight:'bold'},
    comeOne: {color: '#888', fontWeight: '600'},
    subTitleCover: {
        paddingVertical: 5
    },
    scrollViewInner:{
        padding: 15, 
        backgroundColor: '#fff', 
        borderRadius: 5, 
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#f8f8f8'
    },
    logoHolder: {

        height: 60,
        width: 60,
        borderRadius: 100,
        padding: 8
    },
    logoHolderInner: {
        borderRadius: 100,
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 1,
        borderColor: '#f8f8f8'
    },
    flexBox: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    bottomPad: {
        paddingBottom: 15,
        marginHorizontal: 30
    },
    subSubTitle: {
        fontSize: 18,
        color: '#444'
    },
    subSubSubTitle: {
        fontSize: 12,
        color: '#444'
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
    mainProgress: {
        borderColor: '#f8f8f8',
        borderWidth: .125,
        overflow: "hidden",
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    progress: {
        backgroundColor: "#00cc00",
        width: '77.7%',
        height: 5,
        borderRadius: 5
    },
    smallInfo: {
        marginTop: 5,
        fontSize: 13,
        color: '#666'
    },
    draw: {
        backgroundColor: '#b9b9b9',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
        borderWidth: .5,
        borderColor: '#f0f0f0',
        marginBottom: 10,
        borderRadius: 5
    },
    abbr: {
        position: "absolute", 
        top:0, 
        bottom: 0, 
        left: 0, 
        right: 0, 

        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    abbrText: {
        color: "#f0f0f0",
        fontSize: 80,
        letterSpacing: 5,
        textAlign: "center",
    },
    formationCover: {
        backgroundColor: '#fff', borderRadius: 20, borderWidth: 1, borderColor: '#f8f8f8'
    },
    formation: {
        textAlign: 'center',
        color: '#666'
    }
})