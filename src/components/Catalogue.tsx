import { Component } from "react";
import { Text } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from '../actions'
import { State } from "../common/State";

interface Props {
    fetchMovies(searchText: string): any
}

class Catalogue extends Component<Props> {

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchMovies('horror');
    }

    render(): JSX.Element {
        return (
            <Text>Hello App !</Text>
        );
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        movies: state.catalogue.movies
    };
};
  
export default connect(mapStateToProps, { fetchMovies })(Catalogue);