import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons"

import Swiper from "react-native-swiper";

import MovieSlide from "../components/Movies/MovieSlide";
import MovieCard from "../components/Movies/MovieCard";

import movies from "../mockData/movies";
import { TMDB_POSTER_URL, TMDB_BACKDROP_URL } from "../config/constants"
import { ButtonWithIcon } from "../components/Button";
import Container from "../components/Container/Container";
import { getPopularMovies, getNowPlayingMovies } from "../actions/movies";

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Movies",
            headerLeft: <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon name="md-menu" size={24} color="#fff" style={{ padding: 16 }} />
            </TouchableOpacity>
        }
    }

    componentDidMount() {
        this.props.dispatch(getNowPlayingMovies());
        this.props.dispatch(getPopularMovies());
    }

    seeAllPopular = () => {
        this.props.navigation.navigate("MovieListScreen", {
            title: "Popular",
            category: "popular"
        });
    }

    handleNowPlaying = () => {
        this.props.navigation.navigate("MovieListScreen", {
            title: "Now Playing",
            category: "now_playing"
        });
    }

    handleUpcoming = () => {
        this.props.navigation.navigate("MovieListScreen", {
            title: "Upcoming",
            category: "upcoming"
        });
    }

    handleTopRated = () => {
        this.props.navigation.navigate("MovieListScreen", {
            title: "Top Rated",
            category: "top_rated"
        });
    }

    openMovieDetail = (movie) => {
        this.props.navigation.navigate("MovieDetailScreen", {
            id: movie.id,
        })
    }


    render() {
        return (<Container>

            {
                !this.props.nowPlayingMovies.results || !this.props.popularMovies.results ?
                    <ActivityIndicator style={{ flex: 1, alignSelf: "center" }} size={"large"} color={"red"} />
                    :
                    <ScrollView style={styles.container}>
                        <Swiper height={250} autoplay autoplayTimeout={4} loop horizontal showsPagination={false}>
                            {
                                this.props.nowPlayingMovies.results.map(movie => (
                                    <MovieSlide
                                        key={movie.id}
                                        movieId={movie.id}
                                        movieTitle={movie.original_title}
                                        genre="Action"
                                        rating={movie.vote_average}
                                        overview={movie.overview}
                                        poster={{ uri: `${TMDB_POSTER_URL}${movie.poster_path}` }}
                                        backdrop={{ uri: `${TMDB_BACKDROP_URL}${movie.backdrop_path || movie.poster_path}` }}
                                        onButtonPress={() => this.openMovieDetail(movie)}
                                    />)
                                )
                            }
                        </Swiper>

                        <View style={styles.popularTitleWrapper}>
                            <Text style={styles.bigText}>Popular</Text>
                            <TouchableOpacity onPress={this.seeAllPopular}>
                                <Text style={styles.seeAllBtn}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                this.props.popularMovies.results.map(movie => (
                                    <MovieCard
                                        key={movie.id}
                                        movieTitle={movie.original_title}
                                        onPress={() => this.openMovieDetail(movie)}
                                        poster={{ uri: `${TMDB_POSTER_URL}${movie.poster_path}` }}
                                    ></MovieCard>
                                ))

                            }

                        </ScrollView>

                        <View style={{ padding: 16 }}>
                            <ButtonWithIcon iconName="md-play" text="Now Playing" onPress={this.handleNowPlaying}></ButtonWithIcon>
                            <ButtonWithIcon iconName="md-trending-up" text="Top Rated" onPress={this.handleTopRated}></ButtonWithIcon>
                            <ButtonWithIcon iconName="md-recording" text="Upcoming" onPress={this.handleUpcoming}></ButtonWithIcon>
                        </View>

                    </ScrollView>
            }
        </Container>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bigText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    popularTitleWrapper: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    seeAllBtn: {
        fontSize: 18,
        color: "white"
    }

})


const mapStateToProps = (state) => {
    return {
        popularMovies: state.popularMovies,
        nowPlayingMovies: state.nowPlayingMovies,
    }
}

export default connect(mapStateToProps)(HomeScreen);