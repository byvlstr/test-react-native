import { Component } from "react";
import { Text, SectionList, FlatList, View, TouchableNativeFeedback, Image, TouchableHighlight } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { fetchMovies, selectMovie, addToWishlist } from '../actions'
import { MovieType, Movie } from "../common/Movie";
import { Category, MovieCategory } from "../common/Category";
import { styles } from "../styles/CatalogueStyles";
import MovieItem from "./MovieItem";

class Catalogue extends Component<Props> {

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        categories.forEach(category => this.props.fetchMovies(category.subject, category.year, category.type))
    }

    renderMovieItem(item: Movie): JSX.Element {

        return (
            <MovieItem movie={item} onMovieItemClick={this.props.selectMovie}></MovieItem>
        );
    }

    onMovieItemClick(item: Movie) {
        this.props.selectMovie(item);
    }

    renderCategoryMovieList(category: Category): JSX.Element {
        const currentMovieList = this.props.movies.get(category.subject);
        if (currentMovieList) {
            return (
                <FlatList
                    horizontal
                    data={currentMovieList}
                    renderItem={({item}) => this.renderMovieItem(item)}
                    keyExtractor={(item: Movie) => item.imdbID}
                />
            )
        } else {
            return (
                <Text style={styles.missingMovie}>Oops... Currently no movie in here!</Text>
            )
        }
    }

    render(): JSX.Element {
        return (
            <View>
                <SectionList
                    renderItem={({item}) => this.renderCategoryMovieList(item)}
                    renderSectionHeader={({section: {title}}) => (
                        <View>
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
    {subject: MovieCategory.STAR, year: 2018, type: MovieType.MOVIE}, 
    {subject: MovieCategory.BEE, year: 2015, type: MovieType.MOVIE},
    {subject: MovieCategory.HOPE, year: 2017, type: MovieType.MOVIE},
    {subject: MovieCategory.BATTLE, year: 2000, type: MovieType.MOVIE},
    {subject: MovieCategory.SUN, year: 2004, type: MovieType.MOVIE},
]

const sections = categories.map(category => {
    const sectionTitle = category.subject + ' movies in ' + category.year;
    return {title: sectionTitle, data: [category]};
})

interface Props {
    fetchMovies(searchText: string, year: number, type: MovieType): any,
    selectMovie(movie: Movie): any,
    movies: Map<MovieCategory, Movie[]>
}

const mapStateToProps = (state: any) => {
    return {
        movies: state.catalogue.movies
    };
};
  
export default connect(mapStateToProps, { fetchMovies, selectMovie })(Catalogue);

