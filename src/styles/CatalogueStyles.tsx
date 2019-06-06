import RF from "react-native-responsive-fontsize"

export const ITEM_WIDTH = 100;
export const ITEM_HEIGHT = 150;

export const styles = {
    sectionTitle: {
        fontWeight: "bold",
        color: '#fff',
        fontSize: RF(3),
        marginBottom: 8,
        marginTop: 16,
        marginLeft: 8
    },

    movieItem: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        backgroundColor: '#2c2c2c',
        marginRight: 8,
        marginBottom: 8
    },

    missingMovie: {
        color: '#fff',
        marginLeft: 8
    },

    movieTitle: {
        color: '#fff',
        margin: 16
    }
}