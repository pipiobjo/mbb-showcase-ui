import axios from 'axios'
import auth from './fakeAuth'
export default {
  baseHost : "http://localhost:8080",
  fetchMovieCollection() {
    return axios
      .get('http://localhost:8080' + '/episode', {
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