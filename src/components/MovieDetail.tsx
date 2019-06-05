import { Component } from "react";
import { Text, View, Image, Button } from "react-native";
import React from "react";
import { connect } from "react-redux";
import { Movie } from "../common/movie";
import { styles } from "../styles/MovieDetailStyles";
import { addToWishlist } from '../actions'
import WishlistReducer from "../reducers/WishlistReducer";

class MovieDetail extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    addMovieToWishlist() {
        this.props.addToWishlist(this.props.movie);
    }

    renderWishlistButton() {
        var buttonLabel = 'Add to my list';
        var buttonDisabled = false;

        if (this.props.wishlist.find(movie => movie.imdbID === this.props.movie.imdbID)) {
            buttonLabel = 'Added to list';
            buttonDisabled = true;
        }
        
        return (
            <Button
                onPress={() => this.addMovieToWishlist()}
                title={buttonLabel}
                color="#2c2c2c"
                disabled={buttonDisabled}
            />
        )
    }

    render(): JSX.Element {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <View style={{width: '60%'}}>
                        <View style={styles.yearRuntimeLine}>
                            <Text style={[styles.whiteText, styles.releaseYear]}>{this.props.movie.Year}</Text>
                            <View style={styles.fillEmptySpace} />
                            <Text style={[styles.whiteText]}>{this.props.movie.Language}</Text>
                            <View style={styles.fillEmptySpace} />
                            <Text style={[styles.whiteText, styles.runtime]}>{this.props.movie.Runtime}</Text>
                        </View>
                        <View style={styles.countryContainer}>
                            <Image source={require('../public/img/flag.png')} />
                            <Text style={[styles.whiteText, styles.iconLabelMargin]}>{this.props.movie.Country}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Image source={require('../public/img/rating.png')} />
                            <Text style={[styles.whiteText, styles.iconLabelMargin]}>{this.props.movie.imdbRating}</Text>
                        </View>
                        <View style={styles.addToListButton}>
                            {this.renderWishlistButton()}
                        </View>
                    </View>
                    <View style={styles.movieItem}>
                        <Image
                            style={{flex: 1}}
                            source={{uri: this.props.movie.Poster}}
                        />
                    </View>
                </View>

                <Text style={[styles.whiteText, styles.actorsContainer, styles.descriptionTexts]}>With: {this.props.movie.Actors}</Text>
                <Text style={[styles.whiteText, styles.descriptionTexts]}>Director: {this.props.movie.Director}</Text>
                <Text style={[styles.whiteText, styles.plotContainer, styles.descriptionTexts]}>{this.props.movie.Plot}</Text>
            </View>
        )
    }
}

interface Props {
    movie: Movie,
    addToWishlist(movie: Movie): any,
    wishlist: Movie[]
}

const mapStateToProps = (state: any) => {
    return {
        movie: state.moviedetail.selectedMovie,
        wishlist: state.wishlist.wishlist
    };
};
  
export default connect(mapStateToProps, { addToWishlist })(MovieDetail);

