import { Component } from "react";
import { Text, SectionList, FlatList, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { fetchMovies, selectMovie, addToWishlist } from '../actions'
import { MovieType, Movie } from "../common/Movie";
import { Category, MovieCategory } from "../common/Category";
import { styles } from "../styles/CatalogueStyles";
import MovieItem from "./MovieItem";

class Catalogue extends Component<Props> {

    loadingPages: Map<MovieCategory, number> = new Map<MovieCategory, number>();

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        categories.forEach(category => {
            var categoryLoadingPage = this.loadingPages.get(category.subject);
            if (!categoryLoadingPage || categoryLoadingPage! < 1) {
                this.loadingPages.set(category.subject, 1);
                this.props.fetchMovies(category.subject, category.year, category.type)
            }
        })
    }

    renderMovieItem(item: Movie): JSX.Element {
        return (
            <MovieItem movie={item} onMovieItemClick={this.props.selectMovie} onMovieLongPress={this.props.addToWishlist} />
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
                    onEndReached={() => this.handleLoadMore(category)}
                    onEndReachedThreshold={0.2}
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

    handleLoadMore(category: Category) {
        const nextPage = this.props.pages.get(category.subject)! + 1;
        var categoryLoadingPage = this.loadingPages.get(category.subject);
        if (!categoryLoadingPage || categoryLoadingPage! < nextPage) {
            this.loadingPages.set(category.subject, 1);
            this.props.fetchMovies(category.subject, category.year, category.type, nextPage);
        }
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
    fetchMovies(searchText: string, year: number, type: MovieType, page?: number): any,
    selectMovie(movie: Movie): any,
    movies: Map<MovieCategory, Movie[]>,
    pages: Map<MovieCategory, number>,
    addToWishlist(movie: Movie): any,
    error: any
}

const mapStateToProps = (state: any) => {
    return {
        movies: state.catalogue.movies,
        pages: state.catalogue.pages,
        error: state.catalogue.error
    };
};
  
export default connect(mapStateToProps, { fetchMovies, selectMovie, addToWishlist })(Catalogue);

