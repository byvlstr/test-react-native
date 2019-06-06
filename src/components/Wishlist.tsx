import { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { Movie } from "../common/movie";
import { connect } from "react-redux";
import React from "react";
import MovieItem from "./MovieItem";
import { selectMovie } from '../actions'

class Wishlist extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    renderMovieItem(item: Movie): JSX.Element {
        return (
            <MovieItem movie={item} onMovieItemClick={this.props.selectMovie}></MovieItem>
        )
    }

    render(): JSX.Element {
        if (this.props.wishlist.length === 0) {
            return (
                <Text style={styles.emptyWishlist}>Oops... You should add something to your wishlist.</Text>
            )
        } else {
            return (
                <View>
                    <FlatList
                        numColumns={3}
                        data={this.props.wishlist}
                        renderItem={({item}) => this.renderMovieItem(item)}
                        keyExtractor={(item: Movie) => item.imdbID}
                    />
                </View>
            )
        }

    }
}

const mapStateToProps = (state: any) => {
    return {
        wishlist: state.wishlist.wishlist
    };
};
  
export default connect(mapStateToProps, { selectMovie })(Wishlist);

interface Props {
    wishlist: Movie[],
    selectMovie(movie: Movie): any
}

const styles = {
    emptyWishlist: {
        color: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32
    }
}