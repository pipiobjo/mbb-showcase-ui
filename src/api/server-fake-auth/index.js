import axios from 'axios'
import auth from './fakeAuth'
export default {
  baseHost : "http://http://137.116.251.242",
  //baseHost : "http://localhost",
  fetchMovieCollection(name) {
    return axios
      .get(this.baseHost + '/episode', {
        headers: {
          "Authorization": 'Basic ' + auth.getAuth(),
        }
      })
      .then(response => response.data)
      .catch(e => {
        e
      })
  },

  fetchSingleMovie (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}