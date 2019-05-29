import { Component } from "react";
import React from "react";
import { Router, Stack, Scene } from 'react-native-router-flux'
import Catalogue from "./components/Catalogue";

export default class RouterComponent extends Component {

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="catalogue" component={Catalogue} title="Beeflix" initial/>
                </Stack>
            </Router>
        )
    }
}