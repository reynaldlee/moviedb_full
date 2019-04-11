import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Container from '../components/Container/Container';
import { connect } from "react-redux";

import movies from "../mockData/movies"
import MovieListItem from '../components/ListItem/MovieListItem';
import { TMDB_POSTER_URL } from '../config/constants';
import { getMovieList, clearMovieList } from '../actions/movies';

class MovieListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }

    constructor(props) {
        super(props);
        this.page = 1;
    }

    componentDidMount() {
        this.props.dispatch(getMovieList({
            category: this.props.navigation.state.params.category,
            page: this.page
        }));
    }

    componentWillUnmount() {
        this.props.dispatch(clearMovieList());
    }

    openMovieDetail = (movie) => {
        this.props.navigation.navigate("MovieDetailScreen", {
            id: movie.id,
        })
    }

    renderItem = ({ item }) => {
        return <MovieListItem
            movieId={item.id}
            movieTitle={item.original_title}
            rating={item.vote_average}
            poster={{ uri: `${TMDB_POSTER_URL}${item.poster_path}` }}
            releaseYear={new Date(item.release_date).getFullYear()}
            overview={item.overview}
            onPress={() => this.openMovieDetail(item)}
        />
    }

    loadMoreData = () => {
        this.props.dispatch(getMovieList({
            category: this.props.navigation.state.params.category,
            page: ++this.page
        }))
    }

    render() {
        return <Container>
            {
                !this.props.movieList.results ?

                    <ActivityIndicator style={{ flex: 1, alignSelf: "center" }} size={"large"} color={"red"} />
                    :
                    <FlatList
                        onEndReached={this.loadMoreData}
                        data={this.props.movieList.results}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderItem}
                    ></FlatList>

            }


        </Container>
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.list,
    }
}

export default connect(mapStateToProps)(MovieListScreen);