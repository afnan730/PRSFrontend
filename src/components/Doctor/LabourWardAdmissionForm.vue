<template>
  <div class="row text-center mt-5 mb-3">
    <h3 class="mt-3 ps-2">Labour Ward Admission</h3>
  </div>
  <base-card class="ps-5">
    <form @submit.prevent="validateData">
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Gravida
             <span class="error-hint" v-if="!gravida.isValid">must be greater than zero</span>
          </label>
          <input type="number" class="form-control"
           :class="{invalid:!gravida.isValid}"
            @change="clearError('gravida')"
            v-model="gravida.value" />
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-5">
              <label class="d-block mb-2">Par</label>
              <input
                type="number"
                class="form-control mt-2"
                placeholder="number of pregnancies"
                :class="{invalid:!pregnacyNo.isValid}"
                @change="clearError('pregnacyNo')"
                v-model="pregnacyNo.value"
              />
            </div>
            <div class="col-1 plus">+</div>
            <div class="col-5">
              <label>&nbsp;</label>
              <input
                type="number"
                class="form-control mt-2"
                placeholder="number of abortions"
                :class="{invalid:!abortionNo.isValid}"
                @change="clearError('abortionNo')"
                v-model="abortionNo.value"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">LMP</label>
          <input type="date" class="form-control"
          :class="{invalid:!lmp.isValid}"
          @change="clearError('lmp')"
          v-model="lmp.value" />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">GA (age in weeks)</label>
          <input  type="number"
            step="0.01" class="form-control"
          :class="{invalid:!ga.isValid}"
          @change="clearError('ga')"
          v-model="ga.value" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">C/O</label>
          <input type="text" class="form-control full-width mb-3" 
          v-model.trim="co"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">Relevant past history</label>
          <input type="text" class="form-control full-width mb-3" 
          v-model.trim="pastHistory"/>
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2"> CVS & Chest examination</label>
          <input type="text" class="mb-3 form-control full-width" v-model.trim="chestExamination.value"
            :class="{invalid:!chestExamination.isValid}"  @change="clearError('chestExamination')"/>
        </div>
        <div class="col-md-12 col-11">
          <label for="" class="d-block mb-2">General condition 
          <span v-if="!condition.isValid" class="error-hint">Please select from the choices below or write some information about patient condition </span></label>
          <input type="text" class="mb-2 mx-2 form-control full-width" :class="{invalid:!generalCondition.isValid && !condition.isValid}"
            @change="clearError('generalCondition')"
            v-model="generalCondition.value" />
        </div>
      </div>
      <div class="ms-1 mb-3">
        <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="Pale"
               v-model="condition.value"
               @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox1"
              >Pale</label>
          </div>
        <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="Jaundicw"
               v-model="condition.value"
                @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox2"
              >Jaundicw</label
            >
          </div>
        <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="Cyanosis"
               v-model="condition.value"
                @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox3"
              >Cyanosis</label
            >
          </div>
        <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="Edema"
               v-model="condition.value"
              @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox4"
              >Edema</label
            >
          </div>
        <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="Espll"
               v-model="condition.value"
              @change="clearError('condition')"
            />
            <label class="form-check-label me-5" for="inlineCheckbox5"
              >Espll</label
            >
          </div>
          
      </div>
      <div class="row mb-3">
        <div class="col-md-4">
          <label class="d-block mb-2">Pulse</label>
           <input type="text" class="form-control mb-3 s"
             :class="{invalid:!pulse.isValid}"
            @change="clearError('pulse')"
            v-model.trim="pulse.value" />
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">BP</label>
          <input type="text" class="form-control mb-3 s"
             :class="{invalid:!bP.isValid}"
            @change="clearError('bP')"
            v-model.trim="bP.value" />
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">Temprature</label>
          <input  type="number"
            step="0.01" class="form-control mb-3 s"
             :class="{invalid:!temp.isValid}"
            @change="clearError('temp')"
            v-model="temp.value" />
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">Fundal Hieght
            <span class="error-hint" v-if="!fundalHeight.isValid">must be greater than zero</span>
          </label>
          <input  type="number"
            step="0.01" class="form-control mb-3 s" 
            v-model="fundalHeight.value"
            :class="{invalid:!fundalHeight.isValid}"  @change="clearError('fundalHeight')"/>
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">Lie</label>
          <input type="text" class="form-control mb-3 s"
             v-model.trim="lie.value"
            :class="{invalid:!lie.isValid}"  @change="clearError('lie')" />
        </div>
        <div class="col-md-4">
          <label class="d-block mb-2">Presentation</label>
          <input type="text" class="form-control mb-3 s"
             v-model.trim="presentation.value"
            :class="{invalid:!presentation.isValid}"  @change="clearError('presentation')"
             />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6 mb-3">
          <label class="d-block mb-2">FHR</label>
          <input type="text" class="form-control"
             v-model.trim="FHR.value"
            :class="{invalid:!FHR.isValid}"  @change="clearError('FHR')" />
        </div>
        <div class="col-md-6 mb-3">
          <label class="d-block mb-2">FM</label>
          <input type="text" class="form-control" 
             v-model.trim="FM.value"
            :class="{invalid:!FM.isValid}"  @change="clearError('FM')" />
        </div>
        <div class="col-md-6 mb-3">
          <!-- should be divided by 5 -->
          <label class="d-block mb-2">Engagement (Rule of 5)</label>
          <input type="number" step="0.01" class="form-control"
           v-model="engagementRule.value" :class="{invalid: !engagementRule.isValid}"  @change="clearError('engagementRule')"  />
        </div>
        <div class="col-md-6 mb-3">
          <label class="d-block mb-2">Amount of liquor</label>
          <input type="text" class="form-control"
          v-model.trim="amuntOfLiquor.value" :class="{invalid: !amuntOfLiquor.isValid}"  @change="clearError('amuntOfLiquor')" />
        </div>
        <div class="col-md-12 col-11">
          <label class="d-block mb-2">
            Time of contractions start (i.e. True labour pain)</label
          >
          <input type="time" class="form-control full-width mb-3"
          v-model="startContractionTime.value" :class="{invalid: !startContractionTime.isValid}"  @change="clearError('startContractionTime')" />
        </div>
      </div>
      <div class="row">
        <h4 class="mt-1 mb-4">Vaginal Examination Findings</h4>
        <h5>1. CX</h5>
        <div class="row ms-1">
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Position</label>
            <input type="text" class="form-control" 
            v-model.trim="cxPosition.value" :class="{invalid: !cxPosition.isValid}"  @change="clearError('cxPosition')"/>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Effacement %
              <span class="error-hint" v-if="!effacement.isValid">must be greater than zero</span>
            </label>
            <input  type="number"
            step="0.01" class="form-control" 
             v-model="effacement.value" :class="{invalid: !effacement.isValid}" @change="clearError('effacement')"/>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Consistency</label>
            <select class="form-select mb-3"
             v-model="consistency.value" :class="{invalid: !consistency.isValid}" @change="clearError('consistency')">
              <option value="Hard">Hard</option>
              <option value="Medium">Medium</option>
              <option value="Soft">Soft</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Dilatation (in cm) 
              <span class="error-hint" v-if="!dilation.isValid">must be greater than zero</span></label>
            <input  type="number"
            step="0.01" class="form-control" 
             v-model="dilation.value" :class="{invalid: !dilation.isValid}" @change="clearError('dilation')"/>
          </div>
        </div>
        <h5>2. Presenting part</h5>
        <div class="row ms-1">
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Station</label>
            <select class="form-select mb-3"
            v-model="station.value" :class="{invalid: !station.isValid}" @change="clearError('station')">
              <option value="-3">-3</option>
              <option value="-2">-2</option>
              <option value="-1">-1</option>
              <option value="0">0</option>
              <option value="+1">+1</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Position</label>
            <input type="text" class="form-control" 
             v-model.trim="presentingPartPosition.value" :class="{invalid: !presentingPartPosition.isValid}" @change="clearError('presentingPartPosition')"/>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Caput</label>
            <select class="form-select mb-3"
             v-model="caput.value" :class="{invalid: !caput.isValid}" @change="clearError('caput')">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div class="col-md-6 mb-3">
            <label class="d-block mb-2">Moulding</label>
            <select class="form-select mb-3"
            v-model="moulding.value" :class="{invalid: ! moulding.isValid}"  @change="clearError('moulding')">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <h5>3. Membrane</h5>
        <div class="row ms-1">
          <div class="col-md-12 mb-3">
            <select class="form-select mb-2 full-width" v-model="membrane.value" :class="{invalid: ! membrane.isValid}"  @change="clearError('membrane')">
              <option value="Intact">Intact</option>
              <option value="Reptured">Reptured</option>
            </select>
          </div>
          <div class="row w-100 mb-4" v-if="isReptured">
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Time</label>
              <input type="time" class="form-control" v-model="reptureTime.value" :class="{invalid: ! reptureTime.isValid}" @change="clearError('reptureTime')"/>
            </div>
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Amount</label>
              <select class="form-select mb-3"
              v-model="reptureAmount.value" :class="{invalid: !reptureAmount.isValid}" @change="clearError('reptureAmount')">
                <option value="Low">Low</option>
                <option value="medium">medium</option>
                <option value="Access">Access</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Reptured</label>
              <select class="form-select mb-3"
               v-model="reptureHow.value" :class="{invalid: !reptureHow.isValid}" @change="clearError('reptureHow')">
                <option value="spontaneous">spontaneous</option>
                <option value="ARM">ARM</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label class="d-block mb-2">Meconium</label>
              <select class="form-select mb-3" v-model="meconium.value" :class="{invalid: !meconium.isValid}" @change="clearError('meconium')">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            
          </div>
        </div>
          
        </div>
        <h5>Investigations</h5>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label class="d-block mb-2">HB %
              <span class="error-hint" v-if="!hB.isValid">should be greater than zero</span>
            </label>
            <input  type="number"
            step="0.01" class="form-control s" 
            :class="{invalid: !hB.isValid}"
             @change="clearError('hB')"
            v-model="hB.value"/>
          </div>
          <div class="col-md-4 mb-3">
            <label class="d-block mb-2">Blood group</label>
            <input type="text" class="form-control s" 
            :class="{invalid: !bloodGroup.isValid}"
             @change="clearError('bloodGroup')"
            v-model="bloodGroup.value"/>
          </div>
          <div class="col-md-4 mb-3">
            <label class="d-block mb-2">Urine</label>
            <select class="form-select s" 
            :class="{invalid: !urine.isValid}"
             @change="clearError('urine')"
            v-model="urine.value">
              <option value="clear">clear</option>
              <option value="UTI">UTI</option>
            </select>
          </div>
          <div class="col-12 mb-3">
            <label class="d-block mb-2">CTG</label>
            <input type="text" class="form-control full-width"
            v-model.trim="CTG" />
          </div>
          <div class="col-12 mb-3">
            <label class="d-block mb-2 full-width">USS</label>
            <input type="text" class="form-control full-width" 
            v-model.trim="USS"/>
          </div>
          <div class="col-12 mb-3">
            <label class="d-block mb-2">Others</label>
            <textarea
              class="form-control mb-4 full-width"
              id="exampleFormControlTextarea1"
              rows="2"
               v-model.trim="others"
            ></textarea>
            <p class="error-hint" v-if="!formIsValid">Please enter the above required information</p>
          </div>
        </div>
     
      <div class="col-11 ms-1 mb-4">
        <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
      </div>
    </form>
  </base-card>
  <error-modal :check="checkError" :message="error"></error-modal>
</template>
<script>
export default {
   data() {
    return {
      gravida:{value:null,isValid:true},
      pregnacyNo:{value:null,isValid:true},
      abortionNo:{value:null,isValid:true},
      lmp:{value:null,isValid:true},
      ga:{value:null,isValid:true},
      co:'',
      pastHistory:'',
      chestExamination:{value:'',isValid:true},
      generalCondition:{value:'',isValid:true},
      condition:{value:[],isValid:true},
      pulse:{value:'',isValid:true},
      bP:{value:'',isValid:true},
      temp:{value:null, isValid:true},
      fundalHeight:{value:null,isValid:true},
      lie:{value:'',isValid:true},
      presentation:{value:'',isValid:true},
      startContractionTime:{value:'',isValid:true},
      engagementRule:{value:null,isValid:true},
      amuntOfLiquor:{value:'',isValid:true},
       FHR:{value:'', isValid:true},
      FM:{value:'',isValid:true},
      
      
      //vaginalExamination
      cxPosition:{value:'',isValid:true},
      effacement:{value:null, isValid:true},
      consistency:{value:'', isValid:true},
      dilation:{value:null,isValid:true},
      station:{value:'', isValid:true},
      presentingPartPosition:{value:'', isValid:true},
      caput:{value:'', isValid:true},
      moulding:{value:'', isValid:true},
      membrane:{value:'', isValid:true},
      reptureTime:{value:'', isValid:true},
      reptureAmount:{value:'', isValid:true},
      reptureHow:{value:'', isValid:true},
      meconium:{value:'',isValid:true},
      //investigations
      hB:{value:null, isValid:true},
      bloodGroup:{value:'',isValid:true},
      urine:{value:'', isValid:true},
      CTG:'',
      USS:'',
      others:'',
      formIsValid:true,
       error:''
    };
  },
  computed: {
    isReptured() {
      
      return this.membrane.value === "Reptured";
    },
     checkError(){
      return this.error;
    }
  },
   methods: {
      clearError(input){
                this[input].isValid=true;
            },
    validateData() {
      console.log(this.others);
      console.log(this.CTG);
      console.log(this.USS);
      this.formIsValid=true;
       if(!this.gravida.value || this.gravida.value<0){
        this.gravida.isValid=false;
        this.formIsValid=false;
      }
       if(!this.pregnacyNo.value || this.pregnacyNo.value<=0){
        this.pregnacyNo.isValid=false;
        this.formIsValid=false;
      }
       if(this.abortionNo.value===null|| this.abortionNo.value<0){
        this.abortionNo.isValid=false;
        this.formIsValid=false;
      }
       if(!this.lmp.value){
        this.lmp.isValid=false;
        this.formIsValid=false;
      }
       if(!this.ga.value){
        this.ga.isValid=false;
        this.formIsValid=false;
      }
      if(this.chestExamination.value===''){
        this.chestExamination.isValid=false;
        this.formIsValid=false;
      }
       if(this.generalCondition.value===''){
        this.generalCondition.isValid=false;
        if(this.condition.value.length<1){
          this.condition.isValid=false;
          this.formIsValid=false;
        }
      }
       if(this.pulse.value===''){
        this.pulse.isValid=false;
        this.formIsValid=false;
      }
       if(this.bP.value===''){
        this.bP.isValid=false;
        this.formIsValid=false;
      }
      if(!this.temp.value || this.temp.value<=0){
        this.temp.isValid=false;
        this.formIsValid=false;
      }
       if(!this.fundalHeight.value || this.fundalHeight.value<=0){
        this.fundalHeight.isValid=false;
        this.formIsValid=false;
      }
       if(this.lie.value===''){
        this.lie.isValid=false;
        this.formIsValid=false;
      }
       if(this.presentation.value===''){
        this.presentation.isValid=false;
        this.formIsValid=false;
      }
      if(this.FHR.value===''){
        this.FHR.isValid=false;
        this.formIsValid=false;
      }
       if(this.FM.value===''){
        this.FM.isValid=false;
        this.formIsValid=false;
      }
       if(!this.engagementRule.value || this.engagementRule.value<=0){
        this.engagementRule.isValid=false;
        this.formIsValid=false;
      }
       if(this.amuntOfLiquor.value===''){
        this.amuntOfLiquor.isValid=false;
        this.formIsValid=false;
      }
      if(this.startContractionTime.value===''){
        this.startContractionTime.isValid=false;
        this.formIsValid=false;
      }
     
      //vaginalExamination
      if(this.cxPosition.value===''){
        this.cxPosition.isValid=false;
        this.formIsValid=false;
      }
      if(!this.effacement.value || this.effacement.value<=0){
        this.effacement.isValid=false;
        this.formIsValid=false;
      }
      if(this.consistency.value===''){
        this.consistency.isValid=false;
        this.formIsValid=false;
      }
       if(!this.dilation.value || this.dilation.value<=0){
        this.dilation.isValid=false;
        this.formIsValid=false;
      }
      if(this.station.value===''){
        this.station.isValid=false;
        this.formIsValid=false;
      }
      if(this.presentingPartPosition.value===''){
        this.presentingPartPosition.isValid=false;
        this.formIsValid=false;
      }
      if(this.station.value===''){
        this.station.isValid=false;
        this.formIsValid=false;
      }
      if(this.presentingPartPosition.value===''){
        this.presentingPartPosition.isValid=false;
        this.formIsValid=false;
      }
      if(this.caput.value===''){
        this.caput.isValid=false;
        this.formIsValid=false;
      }
      if(this.moulding.value===''){
        this.moulding.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value===''){
        this.membrane.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value==='Reptured' && this.reptureTime.value===''){
        this.reptureTime.isValid=false;
        this.formIsValid=false;
      }
       if(this.membrane.value==='Reptured' && this.reptureAmount.value===''){
        this.reptureAmount.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value==='Reptured' && this.reptureHow.value===''){
        this.reptureHow.isValid=false;
        this.formIsValid=false;
      }
      if(this.membrane.value==='Reptured' && this.meconium.value===''){
        this.meconium.isValid=false;
        this.formIsValid=false;
      }
      //investigations
      if(!this.hB.value || this.hB.value<=0){
        this.hB.isValid=false;
        this.formIsValid=false;
      }
      if(this.bloodGroup.value===''){
        this.bloodGroup.isValid=false;
        this.formIsValid=false;
      }
      if(this.urine.value===''){
        this.urine.isValid=false;
        this.formIsValid=false;
      }
     this.submitForm();
    },
    async submitForm(){
       if(!this.formIsValid){
        return;
      }
      else{
        const id=this.$route.params.patientId;
        const lmp=this.lmp.value;
        const edd=new Date(lmp);
        edd.setMonth(edd.getMonth()+9);

         const record={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          gravida:this.gravida.value,
          par_1:this.pregnacyNo.value,
          par_2:this.abortionNo.value,
          lmp:this.lmp.value,
          edd:edd,
          ga:this.ga.value,
          c_o: this.co,
          relevant_past_history: this.pastHistory,
          general_condition:this.generalCondition.value,
          condition:this.condition.value.join(),
          bp: this.bP.value,
          pulse: this.pulse.value,
          temp: this.temp.value,
          chest_and_cv_examination: this.chestExamination.value,
          fundal_height: this.fundalHeight.value,
          lie: this.lie.value,
          presentation: this.presentation.value,
          engagement: this.engagementRule.value,
          amount_of_liquor:this.amuntOfLiquor.value,
          fhr: this.FHR.value,
          fm: this.FM.value,
          time_of_contractions_start: this.startContractionTime.value,
          cx_position: this.cxPosition.value,
          cx_effacement: this.effacement.value,
          cx_consistency:this.consistency.value,
          cx_dilatation: this.dilation.value,
          presenting_part_station: this.station.value,
          presenting_part_position: this.presentingPartPosition.value,
          presenting_part_caput: this.caput.value,
          presenting_part_moulding: this.moulding.value,
          membranes:this.membrane.value,
          if_ruptur_time:this.reptureTime.value,
          amount:this.reptureAmount.value,
          how_reptured:this.reptureHow.value,
          meconium:this.meconium.value,
          investigations_hb: this.hB.value,
          investigations_blood_group:this.bloodGroup.value,
          investigations_urine: this.urine.value,
          uss:this.USS,
          ctg: this.CTG,
          others: this.others,
       }

        console.log(record);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:record,
          path:"http://localhost:8000/api/post_vice_doctor_labour_ward_admission_form",
          mutation:"setLabourWardAdmission",
        });
        this.$router.replace(`/doctor/${id}/LabourWardAdmission`);
        }catch(error){
          this.error=error.message;
        } 
      }
    },
  },
};
</script>
<style scoped>
.form-control {
  width: 85%;

  border-radius: 10px;
  background: white;
}
.form-select {
  width: 85%;
}
.s {
  width: 79%;
}

label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 93%;
}
.plus {
  font-weight: 600;
  font-size: 1.15rem;
  margin-top: 6%;
}
.error-hint {
   font-weight: 600;
  color:red;
}
.invalid {
  border: 1px solid red;
}
span{
  font-size: 1rem;
}
</style>