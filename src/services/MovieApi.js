import axios from 'axios'
import client from 'api-client'

export default {

  fetchMovieCollection (name) {
    return client.fetchMovieCollection(name)
  },

  fetchSingleMovie (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}
