import { Component } from "react";
import { Text, SectionList, FlatList, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from '../actions'
import { State } from "../common/State";
import { MovieType, Movie } from "../common/Movie";
import { Category } from "../common/Category";
import RF from "react-native-responsive-fontsize"

class Catalogue extends Component<Props> {

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchMovies('star', 2018, MovieType.MOVIE);
    }

    renderMovieItem(item, index): JSX.Element {
        return (
            <View style={styles.movieItem}>

            </View>
        )
    }

    renderCategoryMovieList(item, index, section): JSX.Element {
        return (
            <FlatList
                horizontal
                data={this.props.movies}
                renderItem={({item, index}) => this.renderMovieItem(item, index)}
                keyExtractor={(item, index) => item.imdbID}
            />
        )
    }

    render(): JSX.Element {
        return (
            <View>
                <SectionList
                    renderItem={({item, index, section}) => this.renderCategoryMovieList(item, index, section)}
                    renderSectionHeader={({section: {title, data}}) => (
                        <View style={{marginTop: 16}}>
                            <Text style={styles.sectionTitle}>{title}</Text>
                        </View>
                    )}
                    sections={sections}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

const categories: Category[] = [
    {subject: 'Star', year: 2018, type: MovieType.MOVIE}, 
    {subject: 'Bee', year: 2015, type: MovieType.MOVIE},
    {subject: 'Hope', year: 2017, type: MovieType.MOVIE},
    {subject: 'Battle', year: 2000, type: MovieType.MOVIE},
]

const sections = categories.map(category => {
    const sectionTitle = category.subject + ' movies in ' + category.year;
    return {title: sectionTitle, data: [category]};
})

interface Props {
    fetchMovies(searchText: string, year: number, type: MovieType): any
    movies: Movie[]
}

const mapStateToProps = (state: any) => {
    return {
        movies: state.catalogue.movies
    };
};
  
export default connect(mapStateToProps, { fetchMovies })(Catalogue);

const styles = {
    sectionTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: RF(3),
        marginBottom: 8
    },

    movieItem: {
        width: 100,
        height: 150,
        backgroundColor: '#f00',
        marginRight: 8,
        marginBottom: 8
    }
}