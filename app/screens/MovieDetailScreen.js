import React, { Component } from 'react';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import Swiper from "react-native-swiper"
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"
import ScrollableTabView from 'react-native-scrollable-tab-view';
import moment from 'moment';


import { MovieInfoTab, MovieCastsTab } from '../components/Tab';
import Container from '../components/Container/Container';
import { MovieDetailView } from '../components/Movies';

import { TMDB_BACKDROP_URL, TMDB_POSTER_URL } from '../config/constants';
import MovieTrailersTab from '../components/Tab/MovieTrailersTab';
import { getMovieDetail } from '../actions/movies';

class MovieDetailScreen extends Component {
    static navigationOptions = () => {
        return {
            header: null
        }
    }

    componentDidMount() {
        this.props.dispatch(getMovieDetail(this.props.navigation.state.params.id))
    }

    handleBackPress = () => {

        this.props.navigation.goBack();
        //or
        // this.props.navigation.navigate("HomeScreen");

    }

    render() {
        const { movieDetail } = this.props;


        const director = movieDetail.casts ? movieDetail.casts.crew.find(crew => {
            return crew.job === "Director"
        }) : {}

        return <Container>

            <TouchableOpacity style={styles.closeButton} onPress={this.handleBackPress}>
                <Icon name="md-close" size={36} color={"white"} style={styles.closeIcon}></Icon>
            </TouchableOpacity>

            {
                !movieDetail.id || movieDetail.loading ?

                    <ActivityIndicator
                        style={{ flex: 1 }} color={"#EA0000"}
                        size="large" />
                    :
                    <>
                        <View style={{ height: 200 }}>
                            <Swiper autoplay autoplayTimeout={3} showsPagination={false} >
                                {
                                    movieDetail.images.backdrops.map(backdrop => {
                                        return <Image
                                            key={backdrop.file_path}
                                            style={{ flex: 1, opacity: 0.5 }}
                                            source={{ uri: `${TMDB_BACKDROP_URL}/${backdrop.file_path}` }}
                                        ></Image>
                                    })
                                }
                            </Swiper>
                        </View>
                        <MovieDetailView
                            movieTitle={movieDetail.original_title}
                            genres={movieDetail.genres}
                            overview={movieDetail.overview}
                            poster={{ uri: `${TMDB_POSTER_URL}/${movieDetail.poster_path}` }}
                            rating={movieDetail.vote_average}
                            tagline={movieDetail.tagline}
                        ></MovieDetailView>

                        <ScrollableTabView
                            tabBarTextStyle={{ color: "white" }}
                            tabBarActiveTextColor={"white"}
                            tabBarUnderlineStyle={{ backgroundColor: "red" }}
                            tabBarBackgroundColor={"#222"}
                            initialPage={0}
                        >

                            <MovieInfoTab
                                tabLabel="INFO"
                                overview={movieDetail.overview}
                                budget={movieDetail.budget}
                                director={director.name}
                                releaseDate={moment(movieDetail.releaseDate).format("MMMM DD, YYYY")}
                            ></MovieInfoTab>

                            <MovieCastsTab
                                tabLabel="CASTS"
                                data={movieDetail.casts.cast}
                            ></MovieCastsTab>

                            <MovieTrailersTab
                                tabLabel="TRAILERS"
                                data={movieDetail.videos.results}
                            ></MovieTrailersTab>


                        </ScrollableTabView>
                    </>
            }
        </Container>
    }
}

const styles = StyleSheet.create({
    closeButton: {
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 999
    },
    closeIcon: {
        margin: 8
    }
})

const mapStateToProps = (state) => {
    return {
        movieDetail: state.details || {}
    }
}

export default connect(mapStateToProps)(MovieDetailScreen);