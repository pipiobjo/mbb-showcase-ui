import users from './users'

export default {
    /* eslint-disable */
    getAuth () {
        const role = process.env["VUE_APP_ROLE"]
        const code = users[role].code
        return code
    }

  }