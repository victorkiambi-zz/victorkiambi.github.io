<template>
<span>
    <v-navigation-drawer app v-model="drawer" class="light-blue darken-4" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
    
<v-toolbar class="toolbar" app color="light-blue darken-4" dark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-btn flat="" head class="font-weight-bold" style="font-family: 'Courier New', Courier, monospace;font-weight:900; font-size: 20px">
        <router-link class="nav-link" to="/"> {{appTitle}}</router-link>
        
    </v-btn>
    <!-- <v-btn flat class="hidden-sm-and-down">Menu</v-btn> -->
        <v-spacer class="hidden-sm-and-down"></v-spacer>

    <v-btn flat head class="hidden-sm-and-down text-none" style="font-size: 18px">
        <router-link class="nav-link" to="#about"> About Me </router-link>
        </v-btn>
    <v-btn flat head class="hidden-sm-and-down text-none" style="font-size: 18px">
    <router-link class="nav-link" to="#skills"> Portfolio </router-link>

        </v-btn>

    <!-- <v-btn color="deep-purple lighten-3" class="hidden-sm-and-down">Portfolio</v-btn> -->
</v-toolbar>




</span>
    
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Victor Mwenda',
            drawer: false,
            items: [
                { title: 'Home' },
                { title: 'About Me' }, 
                { title: 'Portfolio' },
               
            ]
        };
    }
};
</script>

<style scoped>

a {
    color: white;
    text-decoration: none;
    
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.toolbar {  
  /* This section calls the slideInFromLeft animation we defined above */
  animation: 2s ease-out 0s 1 slideInFromLeft;
  
  background: #333;
  padding: 5px;
}
</style>