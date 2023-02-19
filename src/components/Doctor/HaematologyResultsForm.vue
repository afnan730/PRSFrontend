
 <template>
  <div class="row text-center mt-5 mb-3">
    <h3 class="mt-3 ps-2">Haematology Results Form</h3>
  </div>
  <base-card class="basecard">
    <form @submit.prevent="validateData">
      <div class="row mb-3">
        <div class="col-md-3 mb-4">
          <label class="d-block">HB</label>
          <input
            type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !HB.isValid }"
            @change="clearError('HB')"
            v-model="HB.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">WBCs</label>
          <input
            type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !WBCs.isValid }"
            @change="clearError('WBCs')"
            v-model="WBCs.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Neuirophils</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Neuirophils.isValid }"
            @change="clearError('Neuirophils')"
            v-model="Neuirophils.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Lymphocytes</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Lymphocytes.isValid }"
            @change="clearError('Lymphocytes')"
            v-model="Lymphocytes.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Eosinophils</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Eosinophils.isValid }"
            @change="clearError('Eosinophils')"
            v-model="Eosinophils.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Baseophils</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Baseophils.isValid }"
            @change="clearError('Baseophils')"
            v-model="Baseophils.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Monocytes</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Monocytes.isValid }"
            @change="clearError('Monocytes')"
            v-model="Monocytes.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Platelets</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Platelets.isValid }"
            @change="clearError('Platelets')"
            v-model="Platelets.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Retlculocytes</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Retlculocytes.isValid }"
            @change="clearError('Retlculocytes')"
            v-model="Retlculocytes.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">ESR</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !ESR.isValid }"
            @change="clearError('ESR')"
            v-model="ESR.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Hematocrit(PCV)</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Hematocrit.isValid }"
            @change="clearError('Hematocrit')"
            v-model="Hematocrit.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">MCV</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !MCV.isValid }"
            @change="clearError('MCV')"
            v-model="MCV.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">MCH</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !MCH.isValid }"
            @change="clearError('MCH')"
            v-model="MCH.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">MCHC</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !MCHC.isValid }"
            @change="clearError('MCHC')"
            v-model="MCHC.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">RBCs</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !RBCs.isValid }"
            @change="clearError('RBCs')"
            v-model="RBCs.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Peripheral blood</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !Peripheralblood.isValid }"
            @change="clearError('Peripheralblood')"
            v-model="Peripheralblood.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Bone Marrow</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !bone.isValid }"
            @change="clearError('bone')"
            v-model="bone.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">HB electrophoresis</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !HBelectrophoresis.isValid }"
            @change="clearError('HBelectrophoresis')"
            v-model="HBelectrophoresis.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Coombs test</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !Coombstest.isValid }"
            @change="clearError('Coombstest')"
            v-model="Coombstest.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Prothrombin(PT)</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !Prothrombin.isValid }"
            @change="clearError('Prothrombin')"
            v-model="Prothrombin.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">INR</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !INR.isValid }"
            @change="clearError('INR')"
            v-model="INR.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Bleeding time</label>
          <input
            type="time"
            class="form-control"
            :class="{ invalid: !Bleedingtime.isValid }"
            @change="clearError('Bleedingtime')"
            v-model="Bleedingtime.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Clotting time</label>
          <input
            type="time"
            class="form-control"
            :class="{ invalid: !Clottingtime.isValid }"
            @change="clearError('Clottingtime')"
            v-model="Clottingtime.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Stickling test</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !Sticklingtest.isValid }"
            @change="clearError('Sticklingtest')"
            v-model="Sticklingtest.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Serum B12</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !SerumB12.isValid }"
            @change="clearError('SerumB12')"
            v-model="SerumB12.value"
          />
        </div>
        <div class="col-md-3 mb-4">
          <label class="d-block">Folic acid</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !Folicacid.isValid }"
            @change="clearError('Folicacid')"
            v-model="Folicacid.value"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Serum lron-Ferritin</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !SerumlronFerritin.isValid }"
            @change="clearError('SerumlronFerritin')"
            v-model="SerumlronFerritin.value"
          />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">TIBCS</label>
          <input
             type="number"
            step="0.01"
            class="form-control"
            :class="{ invalid: !TIBCS.isValid }"
            @change="clearError('TIBCS')"
            v-model="TIBCS.value"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-6">
          <label class="d-block mb-2">Partial thromboplastin time(PT)</label>
          <input
            type="time"
            class="form-control"
            :class="{ invalid: !Partialthromboplastin.isValid }"
            @change="clearError('Partialthromboplastin')"
            v-model="Partialthromboplastin.value"
          />
        </div>
        <div class="col-md-6">
          <label class="d-block mb-2">Serum protein electrophoresis</label>
          <input
             type="text"
            class="form-control"
            :class="{ invalid: !Serumprotein.isValid }"
            @change="clearError('Serumprotein')"
            v-model.trim="Serumprotein.value"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-12">
          <label class="d-block mb-2">Others</label>
          <input  type="text"
            class="form-control"
             v-model.trim="others" />
        </div>
        <p class="error-hint" v-if="!formIsValid">
          Please enter the above required information
        </p>
      </div>

      <div class="col-12 ms-1 mb-4">
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
      error:"",
      others:'',
      HB: { value: "", isValid: true },
      WBCs: { value: "", isValid: true },
      Neuirophils: { value: "", isValid: true },
      Lymphocytes: { value: "", isValid: true },
      Eosinophils: { value: "", isValid: true },
      Baseophils: { value: "", isValid: true },
      Monocytes: { value: "", isValid: true },
      Platelets: { value: "", isValid: true },
      Retlculocytes: { value: "", isValid: true },
      ESR: { value: "", isValid: true },
      Hematocrit: { value: "", isValid: true },
      MCV: { value: "", isValid: true },
      MCH: { value: "", isValid: true },
      MCHC: { value: "", isValid: true },
      RBCs: { value: "", isValid: true },
      Peripheralblood: { value: "", isValid: true },
      bone: { value: "", isValid: true },
      HBelectrophoresis: { value: "", isValid: true },
      Coombstest: { value: "", isValid: true },
      Prothrombin: { value: "", isValid: true },
      INR: { value: "", isValid: true },
      Bleedingtime: { value: "", isValid: true },
      Clottingtime: { value: "", isValid: true },
      Sticklingtest: { value: "", isValid: true },
      SerumB12: { value: "", isValid: true },
      Folicacid: { value: "", isValid: true },
      SerumlronFerritin: { value: "", isValid: true },
      TIBCS: { value: "", isValid: true },
      Partialthromboplastin: { value: "", isValid: true },
      Serumprotein: { value: "", isValid: true },
      formIsValid: true,
    };
  },
   computed:{
    checkError(){
      return this.error;
    }
  },
  methods: {
    clearError(input) {
      this[input].isValid = true;
    },
    validateData() {
      this.formIsValid = true;

      if (!this.Lymphocytes.value) {
        this.Lymphocytes.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Neuirophils.value) {
        this.Neuirophils.isValid = false;
        this.formIsValid = false;
      }
      if (!this.WBCs.value) {
        this.WBCs.isValid = false;
        this.formIsValid = false;
      }
      if (!this.HB.value) {
        this.HB.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Platelets.value) {
        this.Platelets.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Monocytes.value) {
        this.Monocytes.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Baseophils.value) {
        this.Baseophils.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Eosinophils.value) {
        this.Eosinophils.isValid = false;
        this.formIsValid = false;
      }
      if (!this.MCV.value) {
        this.MCV.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Hematocrit.value) {
        this.Hematocrit.isValid = false;
        this.formIsValid = false;
      }
      if (!this.ESR.value) {
        this.ESR.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Retlculocytes.value) {
        this.Retlculocytes.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Peripheralblood.value) {
        this.Peripheralblood.isValid = false;
        this.formIsValid = false;
      }
      if (!this.RBCs.value) {
        this.RBCs.isValid = false;
        this.formIsValid = false;
      }
      if (!this.MCHC.value) {
        this.MCHC.isValid = false;
        this.formIsValid = false;
      }
      if (!this.MCH.value) {
        this.MCH.isValid = false;
        this.formIsValid = false;
      }
      if (!this.INR.value) {
        this.INR.isValid = false;
        this.formIsValid = false;
      }
      if (!this.bone.value) {
        this.bone.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Prothrombin.value) {
        this.Prothrombin.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Coombstest.value) {
        this.Coombstest.isValid = false;
        this.formIsValid = false;
      }
      if (!this.HBelectrophoresis.value) {
        this.HBelectrophoresis.isValid = false;
        this.formIsValid = false;
      }
      if (!this.SerumB12.value) {
        this.SerumB12.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Sticklingtest.value) {
        this.Sticklingtest.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Clottingtime.value) {
        this.Clottingtime.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Bleedingtime.value) {
        this.Bleedingtime.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Folicacid.value) {
        this.Folicacid.isValid = false;
        this.formIsValid = false;
      }
      if (!this.TIBCS.value) {
        this.TIBCS.isValid = false;
        this.formIsValid = false;
      }
      if (!this.SerumlronFerritin.value) {
        this.SerumlronFerritin.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Partialthromboplastin.value) {
        this.Partialthromboplastin.isValid = false;
        this.formIsValid = false;
      }
      if (!this.Serumprotein.value) {
        this.Serumprotein.isValid = false;
        this.formIsValid = false;
      }

      this.submitForm();
    },
    async submitForm() {
      if (!this.formIsValid) {
        return;
      } else {
         const id=this.$route.params.patientId;
         const result={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          hb: this.HB.value,
          wbcs:this.WBCs.value,
          neutrophils:this.Neuirophils.value,
          lymphocytes: this.Lymphocytes.value,
          eosinophils: this.Eosinophils.value,
          basophils: this.Baseophils.value,
          monocytes:this.Monocytes.value,
          platelets: this.Platelets.value,
          retlculocytes:this.Retlculocytes.value,
          esr: this.ESR.value,
          haematocrit_pcv: this.Hematocrit.value,
          mcv: this.MCV.value,
          mch:this.MCH.value,
          mchc: this.MCHC.value,
          rbcs:this.RBCs.value,
          peripheral_blood: this.Peripheralblood.value,
          bone_marrow: this.bone.value,
          hb_electrophoresis:this.HBelectrophoresis.value,
          coombs_test: this.Coombstest.value,
          prothrombin_pt: this.Prothrombin.value,
          inr: this.INR.value,
          partial_thromboplastin_time_pt:this.Partialthromboplastin.value,
          bleeding_time:this.Bleedingtime.value,
          clotting_time:this.Clottingtime.value,
          sickling_test: this.Sticklingtest.value,
          serum_b12: this.SerumB12.value,
          folic_acid: this.Folicacid.value,
          serum_iron_ferritin: this.SerumlronFerritin.value,
          tibcs: this.TIBCS.value,
          serum_protein_electrophoresis: this.Serumprotein.value,
          others: this.others

       }

        console.log(result);
        try{
         await this.$store.dispatch('doctor/addData',{
          value:result,
          path:"http://localhost:8000/api/post_vice_doctor_haematology_results",
          mutation:"pushHaematologyResults",
        });
        this.$router.replace(`/doctor/${id}/haematologyResults`);
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
  width: 100%;
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
  color: red;
}
.invalid {
  border: 1px solid red;
}
span {
  font-size: 1rem;
}
</style>