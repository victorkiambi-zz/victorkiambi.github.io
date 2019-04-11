  <template>
  <v-footer
    height="auto"
    color="light-blue darken-4">
    <v-layout
      justify-center row wrap>
      <!-- <router-link :to="{path: link}">  -->
      <v-btn v-for="link in links" :key="link" color="white" flat round>
        {{ link }}
      </v-btn>
      <!-- </router-link> -->
      <v-flex
       light-blue darken-4 py-3 text-xs-center white--text xs12>
        &copy;2018 — <strong>victormwenda</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>

  export default {
    name: 'BottomNav',
    data: () => ({
      links: [
        'home',
         'about',
          'contact'
        
      ]
    })
  }
</script>