/* eslint-disable */
import axios from 'axios'
import client from 'api-client'

export default {
  baseHost : "http://52.169.251.198",
  
  fetchMovieCollection (name) {
    console.log("search query=", name)
    return this.fetchMBBMovieCollection()
    // let ourMovies = this.fetchMovieCollection(name);
    // ourMovies.content.forEach(function (arrayItem) {
    //   var imdbid = arrayItem.imdbid
    //   arrayItem.poster = this.getPoster(imdbid)
    // });
    // return ourMovies
  },

  getPoster(imdbid){
    axios.get('http://www.omdbapi.com/?i='+imdbid+'&apikey=67e5fbfd').then( response => {
      return response.data.Poster
    })
  },


  fetchMBBMovieCollection() {
    return axios
      .get(this.baseHost + '/episode')
      .then(response => response.data)
      .catch(e => {
        e
      })
  },


  fetchSingleMovie (id) {
    return axios.get(this.baseHost + '/episode/id/' + id)
      .then(response => {
        return response.data
      })
      .catch(e => {
        e
      })
  }


}
