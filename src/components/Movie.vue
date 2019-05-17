<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
        <v-progress-circular
          indeterminate
          :size="150"
          :width="8"
          color="green">
        </v-progress-circular>
      </div>
  </v-container>

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="singleMovie.Poster"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
              <p>{{ singleMovie.Plot}} </p>
              <h4>Name:</h4> {{singleMovie.episodeName}}
              <h4>Overview:</h4> {{singleMovie.overview}}
              <h4>Director:</h4>{{singleMovie.director}}
               <p>Genre: {{singleMovie.Genre}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center">
        <v-dialog
          v-model="dialog"
          width="500">
          <v-btn
            slot="activator"
            color="green"
            dark>
            View Ratings
          </v-btn>
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Ratings
            </v-card-title>
            <v-card-text>
              <table style="width:100%" border="1" >
                <tr>
                  <th>Source</th>
                  <th>Ratings</th>
                </tr>
                <th></th>
                <v-rating
                v-model="ratings"
                background-color="purple lighten-3"
                color="purple"
                small></v-rating>
              </table>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from '@/services/MovieApi'
export default {
  props: ['id'],

  data () {
    return {
      singleMovie: '',
      dialog: false,
      loading: true,
      ratings: ''
    }
  },

  mounted () {
    movieApi.fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response
        this.ratings = this.singleMovie.rating
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
