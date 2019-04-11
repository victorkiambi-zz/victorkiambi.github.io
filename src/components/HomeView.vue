<template>
<span>
    <v-container  fluid fill-height class ="home-hero">
        <v-layout justify-center align-left column pa-5>
          
            <div transition="scale-transition" class="display-2 font-weight-black white--text text-sm-left stuff">Hi, I'm Victor Mwenda,</div>
            <div class="display-1 font-weight-black white--text text-sm-left mb-3">Full-Stack & DevOps Engineer</div>
            <!-- <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div> -->
            <!-- <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn> -->
        </v-layout> 
        
    </v-container>
     <v-divider insent id="about"> </v-divider>

<v-container >

<v-layout align-center justify-center row fill-height />
<template  >
  <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section" 
  >
    <v-layout row wrap>

      <v-flex tag="h1" class="headline title">About Me</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card hover >
              <v-card-text class="lorem">{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
          
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
</v-container>


    <v-container>
       <template>
         <h3 class="headline"> Work Experience </h3>
           <v-divider insent> </v-divider>


   <v-timeline light>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-3">
        <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`">{{year.title}}</h2>
        <div class="text" >
         {{year.text}} 
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
  <v-divider insent> </v-divider>
</template>
    </v-container>

 <v-container>
   <template>
     <h3 class="headline"> Skills </h3>
           <v-divider insent> </v-divider>
  <div>
    <div class="d-flex justify-between align-center mb-3">
      <v-btn @click="all">all</v-btn>
      <v-btn @click="none">none</v-btn>
    </div>

    <v-expansion-panel
      v-model="panel"
      expand
    >
      <v-expansion-panel-content
        v-for="(item,i) in stuff"
        :key="i"
      >
        <template v-slot:header>
          <div class="card-text">{{item.lang}}</div>
        </template>
        <v-card>
          <v-card-text class="card-text">{{item.text}}</v-card-text>
          <v-progress-linear v-model="item.value"> </v-progress-linear>

        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>


  </v-container> 

<v-container fluid grid-list-sm >
<template >
  <div id="skills">
   <h3  class="headline"> Portfolio </h3>
   <br>
  <v-layout row wrap >
    <v-flex  
    xs12 sm4 md4 v-for="(item, idx) in items" :key="idx">
      <v-card hover raised >
        <v-responsive>

        <img height="250px" width="" :src="item.src"/>
        </v-responsive>
        <v-card-title primary-title>
          <div  >
            <h3 class="headline mb-0">{{item.title}}</h3>
             </div>
            <div> {{ item.card_text }} </div>
         
        </v-card-title>

        <v-card-actions>
          <!-- <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
  </v-container>



</span>
    
</template>

<script>
// import { timeout } from 'q';

  

export default {
    name: 'HomeHero',
  
  
    data(){
      return {
        interval: {},
        value: 0,
         panel: [],
        valueDeterminate: 50,
        stuff: [
          {lang: "Java",
          text: "Everything Java: Both Back-end and JavaFx for front-end. ",
          value:70 },
          {lang: "MySql",
           text: "Wealth of experience in MySql and Sqlite relational databases",
           value:70},
          {lang:"Docker and Kubernetes",
           text: "Containerization, Dockerization => Virtualization : Proven containerization expertise for effective deployment and scaling",
          value:60},
          {lang:"Vue",
          text: "Vue Js experience just like the code used for this page.",
          value:50}
          ],


        years: [
        {
          color: 'cyan',
          year: '2018 - present',
          title:"Nano Digital",
          text: "Lead developer for real-time bidding advertising system. " +
          "Developed the software using open source platforms. Successfully set up the back-end. " +
          "Dockerized the applications and set up kubernetes clusters." +
          "Lead developer for USSD platform. Succesfully built the front and back-end." 
        },
        {
          color: 'green',
          year: '2017',
          title: "Lawsavic Investments Ltd.",
          text: "Development of Lawsavic Investments Limited, rental management software which is currently under the prototype stage."+
          "Ensured computers and printers are regularly updated and maintained."+
          "Trained directors and employees on digital skills and how to work with the Safaricom M-pesa portal."
        },
        {
          color: 'pink',
          year: '2017',
          title: "Manyatta Investments Limited",
          text: "Succesfully developed mpm kenya rental property Website. "
        },
        {
          color: 'amber',
          year: '2016',
          title: "Ministry of Environment and Forestry",
          text: "Updated, maintained and configured printers and computers. "+
          "Installed, maintained and assisted in troubleshooting software related issues."+
          "Trained digital literacy skills to employees"
        }
      ],

     items: [
                { src: require('../assets/demo_swarm.png'),
                  title:"Rtb4Free",
                  },
                { src: require('../assets/openssp.png'),
                  title:"OpenSsp "
                 },
                { src: require('../assets/javaport.png'),
                  title:"Rental/Registration system"
                },
                { src: require('../assets/ussd.png'),
                  title:"USSD"
                },
                { src: require('../assets/lv.png'),
                  title:"Laravel and Vue"
                },
               
            ],

      // card_text : " Mechanically minded, with a methodical approach to working and an eagerness to learn and develop skills in a practical setting.",
      lorem: "I am highly motivated and hardworking with experience working in software development and deployment. I am very passionate about back-end and front-end technologies, and strive to better myself as a developer, and the development community as a whole." 

      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },

    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(...this.stuff).keys()].map(_ => true)
      },
      // Reset the panel
      none () {
        this.panel = []
      }
    }


}
      
      
 
 
      
   

</script>

<style scoped>


@import url('https://fonts.googleapis.com/css?family=Patrick+Hand');

.home-hero {
    background: url('../assets/stuff.jpg');
    background-size: cover;
    width: 100%;
    height: 350px;
    background-size:cover;
  box-shadow:inset 0 0 0 2000px rgba(5, 5, 5, 0.3);
    /* max-height: auto; */
    /* max-width: inherit;  */
}

.headline{
  text-align: center;
  font-family: fantasy;
}
.title{
font-family: fantasy;
}
.card-text{

  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* make keyframes that tell the start state and the end state of our object */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.home-hero {
  opacity:0;  /* make things invisible upon start */
  -webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.lorem{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px
}
.text{
  font-size: 15px
}
 .v-progress-circular{
    margin: 1rem;
 }
</style>