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

  <v-container v-else-if="noData">
    <div class="text-xs-center">
    <h2>No Movie in API with {{this.name}}</h2>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in movieResponse"
        :key="index"
        mb-2>
        <v-card>
          <!--
          <v-img
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>
-->
          <v-card-title primary-title>
            <div>
              <h2>{{item.Title || item.episodeName}}</h2>
              <div>Year: {{item.firstAired}}</div>
              <div>Type: {{item.isMovie}}</div>
              <div>IMDB-id: {{item.imdbid}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn flat
              color="green"
              @click="singleMovie(item.imdbid)"
              >View</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import movieApi from '@/services/MovieApi'

export default {
  props: ['name'],
  data () {
    return {
      movieResponse: [],
      loading: true,
      noData: false
    }
  },
  methods: {
    singleMovie (id) {
      this.$router.push('/episodes/' + id)
    },

    fetchResult (value) {
      movieApi.fetchMovieCollection(value)
        .then(response => {
          if (response.Response === 'True') {
            this.movieResponse = response.content
            this.loading = false
            this.noData = false
          } else {
            this.noData = true
            this.loading = false
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchResult(this.name)
  },
  watch: {
    name (value) {
      this.fetchResult(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
