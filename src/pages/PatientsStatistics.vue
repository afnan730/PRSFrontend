<template>
    <nav-bar></nav-bar>
<div class="view">
<div class="container">
  
  <div class="row mt-5 mb-1">
        <h3>Patients Dashboard</h3>
        <statistic-card icon="users" class="col-3" circleStyle="background-color:rgba(66, 66, 99,0.8);;
        padding-left:1.5rem">
          <h3>{{usersCount}}</h3>
          <p>Total patients</p>
        </statistic-card>
      
      <statistic-card icon="chart-line" class="col-3" circleStyle="background-color:rgb(255, 99, 132);padding-left:1.75rem">
          <h3>{{statician}}</h3>
          <p>Total deaths</p>
        </statistic-card>
        <statistic-card icon="hospital-user" class="col-3" circleStyle="background-color:rgba(9, 174, 229,0.8);
        padding-left:1.75rem">
          <h3>{{nurse}}</h3>
          <p>Today patients</p>
        </statistic-card>
     
     </div>
     <!-- start date and end date patients statistics -->
     <div class="row ">
       <div class="col-10">
       <base-card style="max-width:95%; margin-left:2px">
       <div class="row">
       <div class="col-5">
          <form @submit.prevent="submitPatientForm">
            <div class="form-group">
              <label for="exampleFormControlInput1">Start date</label>
              <input type="datetime-local" v-model="patientStartDate" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">End date</label>
              <input type="datetime-local" v-model="patientEndDate" class="form-control" id="exampleFormControlInput1" >
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
          <h1>{{FormPatients}}</h1>
          <p>Total Patients</p>
        </div>
        <div class="col-2 mt-5"><router-link :to="`/patients/${patientStartDate}/${patientEndDate}`" class="btn btn-dark mt-3" v-if="FormPatients!=0">View Patients</router-link></div>
        </div>
        </base-card>
        </div>
     </div>
      <!-- start date and end date death statistics -->
     <div class="row ">
       <div class="col-10">
       <base-card style="max-width:95%; margin-left:2px">
       <div class="row">
       <div class="col-5">
          <form @submit.prevent="submitDeathForm">
            <div class="form-group">
              <label for="exampleFormControlInput1">Start date</label>
              <input type="datetime-local" v-model="deathStartDate" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">End date</label>
              <input type="datetime-local" v-model="deathEndDate" class="form-control" id="exampleFormControlInput1" >
            </div>
            <div class="text-center my-3">
            <button class="btn btn-dark send">Show Result</button>
            </div>
          </form>
        </div>
        <div class="left-icon col-1">
           <font-awesome-icon icon="user"  />
        </div>
        <div class="col-2 text-center form-result">
          <h1>{{deathStates}}</h1>
          <p>Death states</p>
        </div>
        <div class="col-2 mt-5"><router-link :to="`/deathStates/${deathStartDate}/${deathEndDate}`" class="btn btn-dark mt-3" v-if="deathStates!=0">View States</router-link></div>
        </div>
        </base-card>
        </div>
     </div>
      <div class="title">
        <h3>Mother charts</h3>
     </div>
     <div class="row ms-1">
       <div class="card col-5">
        <canvas id="patientsLineChart" height="400"></canvas>
      </div>
      <div class="space"></div>
      <div class="card col-4">
        <canvas id="patientStatusChart" style="max-height:98%"></canvas>
      </div>
     </div>
     <div class="row ms-1 my-5">
       <div class="card col-9">
        <canvas id="deathChart" height="300"></canvas>
      </div>
     </div>
     <div class="title">
        <h3>Newborn charts</h3>
     </div>
     <div class="row ms-1">
      <div class="card col-4 me-5">
        <canvas id="barChart" width="50" height="50"></canvas>
      </div>
      <div class="space"></div>
      <div class="card col-4 ms-5">
        <canvas id="pieChart" ></canvas>
      </div>
      
      </div>
</div>
</div>
</template>
<script>
import Chart from 'chart.js/auto'

export default{
 
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
      Collaborator_count:0 ,
      FormPatients:0,
      patientEndDate:null,
      patientStartDate:null,
      deathStates:0,
      deathStartDate:null,
      deathEndDate:null,
      deathFormResult:false,
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
    this.drawLinChart('patientsLineChart','Monthly Patients Rate',[180,188,199,160,200,222,220,190,199,180,200,220],'rgb(75, 192, 192)');
    this.drawLinChart('deathChart','Monthly Deaths Rate',[10,20,12,12,2,11,10,9,7,22,20,22],'rgb(255, 99, 132)');
    this.drawPolarChart();

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
      async submitPatientForm(){
        if(!this.patientStartDate||! this.patientEndDate){
          return;
          // this.deathFormResult=false;
        }
        else{
          console.log(this.patientStartDate+"  "+this.patientEndDate);
          const patientsForm={
            start:this.patientStartDate,
          end:this.patientEndDate
          }
          try{  
          await this.$store.dispatch('Statistician/countByDate',{
           value:patientsForm,
          path:"http://localhost:8000/api/front_desk_patients_start_end_date_count",
          mutation:"setPatientCount",
        });
        this.FormPatients=this.$store.getters['Statistician/getPatientCount'];
        console.log(this.$store.getters['Statistician/getPatientCount']);
            }
            catch(error){
              this.errors=error.message ||" Something went wrong!";
            }
        }
      },

      async submitDeathForm(){
        if(!this.deathStartDate||! this.deathEndDate){
          return;
          // this.deathFormResult=false;
        }
        else{
          console.log(this.deathStartDate+"  "+this.deathEndDate);
          const deathDates={
            start:this.deathStartDate,
          end:this.deathEndDate
          }
          try{  
          await this.$store.dispatch('Statistician/countByDate',{
           value:deathDates,
          path:"http://localhost:8000/api/die_patients_start_end_date_count",
          mutation:"setDeathCount",
        });
        this.deathStates=this.$store.getters['Statistician/getDeathCount'];
        console.log(this.$store.getters['Statistician/getDeathCount']);
            }
            catch(error){
              this.errors=error.message ||" Something went wrong!";
            }
        }
      },
      viewDeathStates(){
        this.$router.push('/deathStates');
      },

      drawBarChart(){
       
          const ctx=document.getElementById('barChart');
          new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Male', 'Female'],
            datasets: [{
              label: '# of Newborn',
              data: [20,30],
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
      drawPolarChart(){
        const ltx=document.getElementById('patientStatusChart');
        const data = {
              labels: [
                'Died',
                'Recovered',
                'No improvement',
                'Escaped',
                'Better Condition',
                'Not treated'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [11, 16, 7, 8, 14,10],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(75, 192, 192)',
                  'rgb(255, 205, 86)',
                  'rgb(201, 203, 207)',
                  'rgb(54, 162, 235)',
                   'rgb(100, 62, 235)'
                ]}]
              };
          new Chart(ltx, {
            type: 'polarArea',
            data: data,
            options: {}
          });
      },
      drawLinChart(elementId,title,dataset,color){
        const ltx=document.getElementById(elementId);
        const labels = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const data = {
          labels: labels,
          datasets: [{
            label: title,
            data: dataset,
            fill: false,
            borderColor: color,
            tension: 0.1
          }]
        };
          new Chart(ltx, {
            type: 'line',
            data: data,
          });
      },
      drawPieChart(){
  
        console.log("Co"+this.femaleCount);
        // const male_count=this.$store.getters['admin/maleCount'];
        //console.log(male_count);
          const ptx=document.getElementById('pieChart');
          new Chart(ptx, {
            type: 'doughnut',
            data: {
          labels: [
            
            'Alive','Dead','Scavenged','Died After Birth',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [44, 23,13,20],
            backgroundColor: [
              'rgb(0, 188, 212)',
              'rgb(233, 30, 99)', 
              'rgb(96, 125, 139)', 
              'rgb(255, 193, 7)',   
                      
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
  height: 100vh;
  background-color: rgb(250, 249, 255);
  margin-top:-2rem;
  padding-top:2rem  ;
   overflow-x:hidden;
}
.container{
    margin:5rem 1rem 2rem 10rem;

  max-width: 100%;
  
}
.left-icon{
  font-size:40px;
  color:#64415b;
  margin-left:14rem;
  margin-top:2.7rem
}
.form-result{
  margin-left: -8%;
}
.form-result h1{
  color:#5e4056 ;
  font-size: 3rem;
  margin-bottom: 2px;
}
.form-result p{
  font-weight: 700;
  color: #64415b;
}
h3{
   color:rgb(43, 61, 70);
}
.title{
  color:rgb(59, 79, 88);
  padding:0 0 2rem 1rem;
}
.space{
  width:4.2rem;
}

</style>