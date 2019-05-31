import { Component } from "react";
import React from "react";
import { Router, Stack, Scene } from 'react-native-router-flux'
import Catalogue from "./components/Catalogue";
import { StyleSheet } from "react-native";

export default class RouterComponent extends Component {    

    render() {
        return (
            <Router sceneStyle={styles.beeflixStyle}>
                <Stack key="root">
                    <Scene  key="catalogue" component={Catalogue} title="Beeflix" initial
                            navigationBarStyle={styles.beeflixStyle}
                            titleStyle={styles.titleStyle}
                            rightButtonImage={require('./public/img/fav.png')}
                            onRight={() => console.log('sds')}
                    />
                </Stack>
            </Router>
        )
    }

}

const styles = {
    beeflixStyle: {
        backgroundColor: '#000'
    },

    titleStyle: {
        color: '#f00'
    }
} 
