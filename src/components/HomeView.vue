<template>
<span>
    <v-container  fluid fill-height class ="home-hero">
        <v-layout justify-center align-left column pa-5>
          
            <div transition="scale-transition" class="display-2 font-weight-black white--text text-sm-left stuff">Hi, I'm Victor Mwenda,</div>
            <div class="display-1 font-weight-black white--text text-sm-left mb-3">Software & DevOps Engineer</div>
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
             <br>
            <div> 
              {{ item.card_text }} 

            </div>
         
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

<v-container>


  </v-container>


</span>
    
</template>

<script>
import { callbackify } from 'util';
// import { timeout } from 'q';

  

export default {
    name: 'HomeHero',
  
  
    data(){
      return {
        interval: {},
        value: 0,
         panel: [],
        valueDeterminate: 50,
        dialog: false,
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
          value:50},
           {lang:"Laravel",
          text: "Building Laravel applications and API's.",
          value:50}
          ],


        years: [
        {
          color: 'cyan',
          year: '2019 - present',
          title:"MobiGlobe Limited",
          text: "Lead developer for real-time advertising system which introduced new markets for the company in advertising and increased our revenue by over 50%. " +
          "Collaborated and assisted in working through the documentation and setting up the infrastructure using open source platforms. " +
          "Containerized MediaPal applications using docker and setup kubernetes infrastructure for scale. " +
          "Assisted in the design and development of MediapalDemand side platform and integrations with SSPs." 
        },
        {
          color: 'green',
          year: '2018',
          title: "Nano Digital Ltd.",
          text: "Developed, designed and tested our USSD application which currently has over 2000 subscribers." +
          "Assisted in setting up the web platform for seamless user experience and navigation for users coming from the USSD platform. "+
          "Responsible for API integrations, most notably integrating with M-Pesa API's to enhance user experience when paying for the company's services."
            },
        {
          color: 'pink',
          year: '2017',
          title: "Manyatta Investments Limited",
          text: "Successfully developed the mpmkenya website increasing awareness on residential and commercial buildings owned by the company by 10%. "
        },
        {
          color: 'amber',
          year: '2016',
          title: "Ministry of Environment and Forestry",
          text: "Assisted in troubleshooting and maintaining the organizations' software as well as disinfecting malware from compromised systems. "+ 
                "Configured, updated and maintained hardware within the organization e.g printers." +
                "Trained company staff on digital literacy skills, hence improving productivity with the use of new technologies."
        }
      ],

     items: [
                { src: require('../assets/mediapal1.png'),
                  title:"Mediapal Demand Side Platform",
                  card_text:"Laravel and Vue application for programmatic media buying. "
                  },
              
                { src: require('../assets/ussd.png'),
                  title:"USSD",
                  card_text:"Designed and Developed Juana ussd social platform"

                },
                { src: require('../assets/dockerkubernetes.png'),
                  title:"Docker and Kubernetes",
                  card_text: "Deployed mediapal apps and configurations to kubernetes. "
                },
                 { src: require('../assets/api.jpeg'),
                  title:"API intergrations",
                  card_text:"Api configurations and intergratons for Google and M-pesa"
                },
                 { src: require('../assets/javaport.png'),
                  title:"Rental/Registration system",
                  card_text: "Design and development of Java Desktop applications "
                },
               
              
               
            ],

      // card_text : " Mechanically minded, with a methodical approach to working and an eagerness to learn and develop skills in a practical setting.",
      lorem: "I am highly motivated and hardworking with experience working in software development and deployment. I am very passionate about back-end and front-end technologies, and strive to better myself as a developer, and the development community as a whole. Mechanically minded with a methodical approach to working and an eagerness to solve problems in any environment"
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