import { Component } from "react";
import React from "react";
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import Catalogue from "./components/Catalogue";
import MovieDetail from "./components/MovieDetail";
import Wishlist from "./components/Wishlist";

export default class RouterComponent extends Component {    

    render() {
        return (
            <Router sceneStyle={styles.beeflixStyle}>
                <Stack key="root">
                    <Scene  key="catalogue" component={Catalogue} title="Beeflix" initial
                            navigationBarStyle={styles.beeflixStyle}
                            titleStyle={styles.titleStyle}
                            rightButtonImage={require('./public/img/fav.png')}
                            onRight={() => this.onWishlistButtonClick()}
                    />
                    <Scene  key="moviedetail" component={MovieDetail}
                            headerTintColor="#fff"
                            navigationBarStyle={styles.beeflixStyle}
                            titleStyle={styles.whiteTitleStyle}
                    />
                    <Scene  key="wishlist" component={Wishlist}
                            headerTintColor="#fff"
                            title="Wishlist"
                            navigationBarStyle={styles.beeflixStyle}
                            titleStyle={styles.whiteTitleStyle}
                    />
                </Stack>
            </Router>
        )
    }

    onWishlistButtonClick() {
        Actions.wishlist();
    }
}

const styles = {
    beeflixStyle: {
        backgroundColor: '#000'
    },

    titleStyle: {
        color: '#f00'
    },

    whiteTitleStyle: {
        color: '#fff'
    }
} 
