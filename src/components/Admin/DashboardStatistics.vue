
<template>
<div class="view">
<div class="container">
  
  <div class="row mt-5 mb-1">
        <h2>Dashboard</h2>
        <statistic-card class=" col-3" icon="users" circleStyle="background-color:rgba(66, 66, 99,0.8);font-size:20px;padding:0.7rem 1rem">
          <h3>{{usersCount}}</h3>
          <p>Total users</p>
        </statistic-card>
      
      <statistic-card icon="user-pen" class=" col-3" circleStyle="background-color:rgba(255, 30, 105,0.8);font-size:22px;padding-top:0.75rem">
          <h3>{{statician}}</h3>
          <p>Statistician</p>
        </statistic-card>
        <statistic-card icon="user-nurse" class=" col-3" circleStyle="background-color:rgba(9, 174, 229,0.8)">
          <h3>{{nurse}}</h3>
          <p>Nurse</p>
        </statistic-card>
        <!-- <div class="left rounded-circle col-2"  style="background-color:rgba(9, 174, 229,0.8)">
            <font-awesome-icon icon="user-nurse" style="font-size:24px;"/>
        </div> -->
      <statistic-card icon="user-doctor" class=" col-3" circleStyle="background-color:rgba(127, 31, 211,0.5)">
          <h3>{{vicDoctor}}</h3>
          <p>Vice Doctor</p>
        </statistic-card>
      <statistic-card icon="user-tie" class=" col-3"  circleStyle="background-color:rgba(9, 74, 80,0.8)">
          <h3>{{generalDoctor}}</h3>
          <p>General Doctor</p>
        </statistic-card>
     </div>
     <div class="row ">
       <div class="col-10">
       <base-card style="max-width:98%; margin-left:2px">
       <div class="row">
       <div class="col-5">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="exampleFormControlInput1">Start date</label>
              <input type="datetime-local" class="form-control"  v-model="startDate" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">End date</label>
              <input type="datetime-local" class="form-control" v-model="endtDate" id="exampleFormControlInput1" >
            </div>
            <div class="text-center my-3">
            <button  class="btn btn-dark send">Show Result</button>
            </div>
          </form>
        </div>
        <div class="left-icon col-1">
           <font-awesome-icon icon="user"  />
        </div>
        <div class="col-2 text-center form-result">
          <h1>{{formResult}}</h1>
          <p>Total Users</p>
          
        </div>
        <div class="col-2 mt-5"><router-link :to="`users/${startDate}/${endtDate}`" class="btn btn-dark mt-3" v-if="formResult!=0">View Users</router-link></div>
        </div>
        </base-card>
        </div>
     </div>
     <div class="row">
      <div class="card col-4 me-5">
        <canvas id="barChart" width="300" height="300"></canvas>
      </div>
      <div class="space"></div>
      <div class="card col-4 ms-5">
        <canvas id="pieChart" width="300" height="300"></canvas>
      </div>
      </div>
</div>
</div>
</template>
<script>
import Chart from 'chart.js/auto'
import StatisticCard from '../UI/StatisticCard.vue';
export default{
  components: { StatisticCard },
  data(){
    return{
      all_user:6,
      Vice_Doctor_count:3,
      Statistician_count:1,
      Nurse_count:1,
      General_Doctor_count:1,
      Male_count:100,
      Female_count:200,
      Vice_count:0,
      Advisor_count:0,
      Specialist_count:0,
      General_count:0,
      Excellence_count:0,
      National_Service_count:0,
      Collaborator_count:0,
      endtDate:null,
      startDate:null,
      formResult:0,
      showResult:false,
      
    }
  },
  computed:{
    usersCount(){
     return this.all_user;
    },
    statician(){
     return this.Statistician_count;
    },
    nurse(){
      return this.Nurse_count;
    },
    vicDoctor(){
      return this.Vice_Doctor_count;
    },
    generalDoctor(){
      return this.General_Doctor_count;
    },
    femaleCount(){
      return this.Female_count;
    }
  },
  beforeUnmount(){
    this.$router.go();
  },
  mounted(){  
    this.fetchData();
    console.log(this.all_user);
    this.Male_count=localStorage.getItem("male")
    this.Female_count=localStorage.getItem("female")
    // this.drawBarChart();
    this.drawPieChart();
    
  //pie chart
  
  },
  methods:{
    async fetchData(){
            var self=this;
            try{
              await this.$store.dispatch('admin/getStatistics');
            }
            catch(error){
              this.errors=error.message ||" Something went wrong!";
            }
            this.isLoading = false;
            console.log(this.$store.getters['admin/statistics']);
            // console.log(self.all_user)
          const statistics=this.$store.getters['admin/statistics'];

          self.all_user=statistics.all_user;
          self.Vice_Doctor_count=statistics.Vice_Doctor_count;
          self.Nurse_count=statistics.Nurse_count;
          self.Statistician_count=statistics.Statistician_count;
          self.General_Doctor_count=statistics.General_Doctor_count;
          self.Female_count=statistics.Female_count;
          self.Male_count=statistics.Male_count;
          console.log("female"+self.Female_count);
          self.Vice_count=statistics.Vice_count;
          self.Advisor_count=statistics.Advisor_count;
          self.Specialist_count=statistics.Specialist_count;
          self.General_count=statistics.General_count;
          self.Excellence_count=statistics.Excellence_count;
          self.National_Service_count=statistics.National_Service_count;
          self.Collaborator_count=statistics.Collaborator_count;
          this.drawBarChart();


          //this.drawPieChart();
          
      },
      async submitForm(){
        if(!this.startDate||!this.endtDate){
          this.formResult=0;
          this.showResult=false;
        }
        else{
          console.log(this.endtDate+"  "+this.endtDate);
          try{
            
          await this.$store.dispatch('admin/countUsersByDate',{
          start:this.startDate,
          end:this.endtDate
        });
        this.formResult=this.$store.getters['admin/getUsersCount'];
        console.log(this.$store.getters['admin/getUsersCount']);
            }
            catch(error){
              this.errors=error.message ||" Something went wrong!";
            }
        }
      },
      drawBarChart(){
        var self=this;
          const ctx=document.getElementById('barChart');
          new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Advisor', 'Collaborator', 'Excellence', 'National Service', 'Specialist', 'General','Vice'],
            datasets: [{
              label: '# of Users',
              data: [self.Advisor_count, self.Collaborator_count, self.Excellence_count,self.National_Service_count,self.Specialist_count, self.General_count,self.Vice_count],
              borderWidth: 1,
              
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      },
      drawPieChart(){
        var self=this;
        console.log("Co"+this.femaleCount);
        // const male_count=this.$store.getters['admin/maleCount'];
        //console.log(male_count);
          const ptx=document.getElementById('pieChart');
          new Chart(ptx, {
            type: 'doughnut',
            data: {
          labels: [
            
            'Female','Male',
          ],
          datasets: [{
            label: 'Users Count',
            data: [self.Female_count, self.Male_count],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              
            ],
            hoverOffset: 4
          }]
        },
          });
      }
  }
}
</script>

<style scoped>
.view{
  overflow-x:hidden ;
}
.container{
  min-width: 120%;  
}
.card {
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border:none;
  margin: 1rem;
  max-width: 100%;
  padding: 0.8rem;
  z-index: 0;
}
.left-icon{
  font-size:40px;
  color:#3f535f;
  margin-left:14rem;
  margin-top:2.7rem
}
.form-result{
  margin-left: -6%;
}
.form-result h1{
  color:#3f535f ;
  font-size: 3rem;
  margin-bottom: 2px;
}
.form-result p{
  font-weight: 700;
  color: #3f535f;
}
.space{
  width:5rem;
}
</style>