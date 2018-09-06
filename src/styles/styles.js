export default {
    container: {
        backgroundColor: 'black',
        color: 'white',
        minHeight: window.innerHeight
    },
    currentContent: {
        backgroundColor: 'grey',
        backgroundImage: 'radial-gradient(grey, black)'
    },
    videoContainer: {
        backgroundColor: 'black',
        width: '100%'
    },
    video: {
        height: 'calc(100vw / 1.5)',
        width: '100vw',
        maxHeight: 467,
        maxWidth: 750
    },
    videoSuggestionContainer: {
        backgroundColor: 'white',
        display: 'flex',
        margin: '10px 0',
        overflowX: 'scroll',
        width: '100%',
        maxWidth: 700
    },
    videoSuggestion: {
        height: 150,
        margin: 10,
        width: 300
    },
    left: {
        position: 'relative',
        bottom: 120,
        left: 10
    },
    right: {
        position: 'relative',
        bottom: 120,
        left: window.innerWidth < 1274 ? 'calc(100vw * 0.55 - 123px)' : 578
    },
    descContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 10px',
        minHeight: 'calc(100vh - 70px)'
    },
    break: {
        backgroundColor: 'white',
        height: 2
    },
    descContent: {
        flex: 1
    },
    obsession: {
        cursor: 'pointer',
        display: 'flex',
        float: 'right',
        margin: '0 20px 95px auto',
        maxWidth: 430
    },
    obsImg: {
        height: 150,
        width: 200
    },
    obsDesc: {
        alignSelf: 'center',
        margin: '0 10px'
    },
    rating: {
        color: '#5280F7'
    },
    socialContainer: {
        cursor: 'pointer',
        padding: 10,
        position: 'absolute',
        top: 380,
        right: 0,
        width: 200,
        zIndex: 1
    }
};
