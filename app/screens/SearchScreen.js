import React, { Component } from 'react';
import { TextInput, StyleSheet, FlatList } from 'react-native';
import { connect } from "react-redux";

import Container from '../components/Container/Container';
import MovieListItem from '../components/ListItem/MovieListItem';

import { TMDB_POSTER_URL } from '../config/constants';
import { searchMovie } from '../actions/movies';

class SearchScreen extends Component {
    state = {
        query: ""
    }

    static navigationOptions = () => {
        return {
            title: "Search"
        }
    }

    openMovieDetail = (movie) => {
        this.props.navigation.navigate("MovieDetailScreen", {
            id: movie.id
        })
    }

    handleChangeText = (text) => {
        this.setState({
            query: text
        })
    }

    handleOnSubmit = () => {
        this.props.dispatch(searchMovie(this.state.query))
    }

    renderItem = ({ item }) => {
        return <MovieListItem
            movieId={item.id}
            movieTitle={item.original_title}
            poster={{ uri: `${TMDB_POSTER_URL}${item.poster_path}` }}
            rating={item.vote_average}
            releaseYear={new Date(item.release_date).getFullYear()}
            overview={item.overview}
            onPress={() => this.openMovieDetail(item)}

        />
    }


    render() {
        return (<Container>
            <TextInput style={styles.input}
                onSubmitEditing={this.handleOnSubmit}
                onChangeText={this.handleChangeText}
                returnKeyType="search"
                value={this.state.query}></TextInput>
            <FlatList
                data={this.props.searchResults.results || []}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </Container>)
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        margin: 16,
        borderRadius: 3,
    }
})

const mapStateToProps = state => ({
    searchResults: state.searchResults
})

export default connect(mapStateToProps)(SearchScreen);