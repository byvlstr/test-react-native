import React, { Component } from "react";
import { Image, TouchableHighlight, View, Text } from "react-native";
import { Movie } from "../common/movie";
import { styles } from "../styles/CatalogueStyles";

class MovieItem extends Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    renderMovieItemContent(item: Movie): JSX.Element {
        if (item.Poster && item.Poster !== 'N/A') {
            return (
                <Image
                    style={{flex: 1}}
                    source={{uri: item.Poster}}
                />
            )
        } else {
            return (
                <Text style={styles.movieTitle} numberOfLines={3} ellipsizeMode="tail">{item.Title}</Text>
            )
        }
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this.props.onMovieItemClick(this.props.movie)}>
                <View style={styles.movieItem}>
                    {this.renderMovieItemContent(this.props.movie)}
                </View>
            </TouchableHighlight>
        )
    }
}

interface Props {
    movie: Movie,
    onMovieItemClick: any
}

export default MovieItem;