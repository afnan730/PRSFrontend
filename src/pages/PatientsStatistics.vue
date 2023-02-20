<template>
    <nav-bar></nav-bar>
<div class="view">
<div class="container">

  <div class="row mt-5 mb-1">
        <h3>Patients Dashboard</h3>
        <statistic-card icon="users" class="col-3" circleStyle="background-color:rgba(66, 66, 99,0.8);;
        padding-left:1.5rem">
          <h3>{{TotalPatients}}</h3>
          <p>Total Patients</p>
        </statistic-card>
      
      <statistic-card icon="chart-line" class="col-3" circleStyle="background-color:rgb(255, 99, 132);padding-left:1.75rem">
          <h3>{{TotalDeath}}</h3>
          <p>Total Deaths</p>
        </statistic-card>
        <statistic-card icon="hospital-user" class="col-3" circleStyle="background-color:rgba(9, 174, 229,0.8);
        padding-left:1.75rem">
          <h3>{{TodayPatients}}</h3>
          <p>Today Patients</p>
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
          <p>Death States</p>
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
    TodayPatients(){
      return this.$store.getters["Statistician/TodayPatients"];
    },
    TotalDeath(){
      return this.$store.getters["Statistician/TotalDeath"];
    },
    TotalPatients(){
      return this.$store.getters["Statistician/TotalPatients"];
    }
    
  },
  beforeUnmount(){
    this.$router.go();
  },
  mounted(){  
    this.fetchData(
      {
        path:'http://localhost:8000/api/Newborn_status_count',
        mutation:'setNewBorn',
      //  store:'newBornstates'
        }
      );
      this.fetchData(
      {
        path:'http://localhost:8000/api/Baby_female_male_count',
        mutation:'setMaleFemaleCount',
      //  store:'newBornstates'
        }
      );
      this.fetchData(
      {
        path:'http://localhost:8000/api/patients_condition_upon_exit_counts',
        mutation:'setPatientsCondition',
      //  store:'newBornstates'
        }
      );
      
    console.log('spaaa')
    // console.log(this.$store.getters['Statistician/getNewBornStates']);
    this.fetchData(
      {
        path:'http://localhost:8000/api/today_patient_count',
        mutation:'setTodayPatients',
        // store:'todayPatients'
        }
      );
      this.fetchData(
      {
        path:'http://localhost:8000/api/get_all_front_desk_patients_counts',
        mutation:'setTotalPatients',
        // store:'totalP'
        }
      );
      this.fetchData(
      {
        path:'http://localhost:8000/api/die_patients_counts',
        mutation:'setTotalDeath',
        //  store:'totalDeaths'
        }
      );
    this.fetchData(
      {
        path:'http://localhost:8000/api/year_pationt_count',
        mutation:'setYearlyPatientsRate',
        //  store:'totalDeaths'
        }
      );
    // this.drawLinChart('patientsLineChart','Monthly Patients Rate',[180,188,199,160,200,222,220,190,199,180,200,220],'rgb(75, 192, 192)');
    this.drawLinChart('deathChart','Deaths States Count',[10,20,12,12,2,11,10,9,7,22,20,22],'rgb(255, 99, 132)');
    
    
    this.Male_count=localStorage.getItem("male")
    this.Female_count=localStorage.getItem("female")
    // this.drawBarChart();
    
    //pie chart
  },
  methods:{
    async fetchData(payload){           
            try{
              await this.$store.dispatch('Statistician/getStatistics',payload);
            }
            catch(error){
              this.errors=error.message ||" Something went wrong!";
            }
            console.log(this.$store.getters['Statistician/getNewBornStates']);
            if(payload.mutation==='setNewBorn'){
              const data=this.$store.getters['Statistician/getNewBornStates'];
              const dataset=[data.Alive_count+3,data.Dead_count+1,data.Scavenger_count+2,data.Died_after_birth_count+1]
              this.drawPieChart(dataset);
            }
            else if(payload.mutation==='setPatientsCondition'){
              const data=this.$store.getters['Statistician/getPatientsCondition'];
              console.log(data);
              const dataset=[
                data.Died_count+6,
                data.Recovered_count+12,
                data.No_improvement_count+5,
                data.Escaped_count+3,
                data.Better_condition_count+9,
                data.Was_not_treated_count+6];
              this.drawPolarChart(dataset);
            } 
            else if(payload.mutation==='setMaleFemaleCount'){
              const data=this.$store.getters['Statistician/MaleFemaleCount'];
              // console.log("here male female count");
              // console.log(data);
              const dataset=[
                data.male+6,
                data.female+12,
               ];
              this.drawBarChart(dataset);
            } 
            else if(payload.mutation==='setYearlyPatientsRate'){
              const data=this.$store.getters['Statistician/YearlyPatientsRate'];
              console.log("here year");
              const dataset=[];
              for(var i=0;i<12;i++){
                console.log(data[i].count);
                dataset.push(data[i].count + i+1);
              }
              console.log(dataset);
              this.drawLinChart('patientsLineChart','Patients Count',dataset,'rgb(75, 192, 192)');
              
            }
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
      drawBarChart(dataset){     
          const ctx=document.getElementById('barChart');
          new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Male', 'Female'],
            datasets: [{
              label: '# of Newborn',
              data: dataset,
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
      drawPolarChart(dataset){
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
                label: 'States',
                data: dataset,
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
      drawPieChart(dataset){ 
        console.log(localStorage.getItem('newBornstates'));
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
            label: 'Newborn states',
            data: dataset,
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
  background-color: white;
  /* background-color: rgb(250, 249, 255); */
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