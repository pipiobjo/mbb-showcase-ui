import axios from 'axios'

export default {
  fetchPosts () {
    return axios
      .get('o/pipiobjo/greetings', {
      })
      .then(response => response.data)
      .catch(e => {
        e
      })
  }
}