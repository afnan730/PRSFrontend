<template>
  <div class="row text-center mt-5">
    <h3 class="header2 mt-3">Add New INV</h3>
  </div>
  <div class="forms mt-2 p-3 ms-4 me-5 w-100">
    <base-card>
      <form class="ps-5" action="#" @submit.prevent="validateData">
        <!-- Urine Analysis-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Urine Analysis</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" 
            class="form-control mb-3" 
             :class="{ invalid: !urineColor.isValid }"
              v-model.trim="urineColor.value"
              @change="clearError('urineColor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !urineCells.isValid }"
              v-model.trim="urineCells.value"
              @change="clearError('urineCells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Suger</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !urineSugar.isValid }"
              v-model.trim="urineSugar.value"
              @change="clearError('urineSugar')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Proteins</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !urineProteins.isValid }"
              v-model.trim="urineProteins.value"
              @change="clearError('urineProteins')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains</label>
            <input type="text" class="form-control" 
             :class="{ invalid: !urineCramStains.isValid }"
              v-model.trim="urineCramStains.value"
              @change="clearError('urineCramStains')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Zn Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !urineZnStains.isValid }"
              v-model.trim="urineZnStains.value"
              @change="clearError('urineZnStains')"/>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Culture & Sensitivity</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
          :class="{ invalid: !urineCS.isValid }"
              v-model.trim="urineCS.value"
              @change="clearError('urineCS')"/>
        </div>
        <!-- Stool Analysis-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Stool Analysis</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !stoolColor.isValid }"
              v-model.trim="stoolColor.value"
              @change="clearError('stoolColor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !stoolCells.isValid }"
              v-model.trim="stoolCells.value"
              @change="clearError('stoolCells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Suger</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !stoolSugar.isValid }"
              v-model.trim="stoolSugar.value"
              @change="clearError('stoolSugar')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Proteins</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !stoolProteins.isValid }"
              v-model.trim="stoolProteins.value"
              @change="clearError('stoolProteins')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !stoolCramStains.isValid }"
              v-model.trim="stoolCramStains.value"
              @change="clearError('stoolCramStains')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Zn Stains</label>
            <input type="text" class="form-control" 
             :class="{ invalid: !stoolZnStains.isValid }"
              v-model.trim="stoolZnStains.value"
              @change="clearError('stoolZnStains')"/>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Culture & Sensitivity</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
          :class="{ invalid: !stoolCS.isValid }"
              v-model.trim="stoolCS.value"
              @change="clearError('stoolCS')"/>
        </div>

        <!-- CSF-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">CSF</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !CSFcolor.isValid }"
              v-model.trim="CSFcolor.value"
              @change="clearError('CSFcolor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !CSFcells.isValid }"
              v-model.trim="CSFcells.value"
              @change="clearError('CSFcells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Suger</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !CSFsugar.isValid }"
              v-model.trim="CSFsugar.value"
              @change="clearError('CSFsugar')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Proteins</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !CSFproteins.isValid }"
              v-model.trim="CSFproteins.value"
              @change="clearError('CSFproteins')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains</label>
            <input type="text" class="form-control" 
             :class="{ invalid: !CSFcramStains.isValid }"
              v-model.trim="CSFcramStains.value"
              @change="clearError('CSFcramStains')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Zn Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !CSFznStains.isValid }"
              v-model.trim="CSFznStains.value"
              @change="clearError('CSFznStains')"/>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Culture & Sensitivity</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
          :class="{ invalid: !CSFcs.isValid }"
              v-model.trim="CSFcs.value"
              @change="clearError('CSFcs')"/>
        </div>
        <!-- Pleural Fluid-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Pleural Fluid</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !pleuralColor.isValid }"
              v-model.trim="pleuralColor.value"
              @change="clearError('pleuralColor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !pleuralCells.isValid }"
              v-model.trim="pleuralCells.value"
              @change="clearError('pleuralCells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Sugar</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !pleuralSugar.isValid }"
            v-model.trim="pleuralSugar.value"
            @change="clearError('pleuralSugar')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Proteins</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !pleuralProteins.isValid }"
            v-model.trim="pleuralProteins.value"
            @change="clearError('pleuralProteins')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !pleuralCramStains.isValid }"
              v-model.trim="pleuralCramStains.value"
              @change="clearError('pleuralCramStains')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Zn Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !pleuralZNStains.isValid }"
              v-model.trim="pleuralZNStains.value"
              @change="clearError('pleuralZNStains')"/>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Culture & Sensitivity</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
          :class="{ invalid: !pleuralCS.isValid }"
              v-model.trim="pleuralCS.value"
              @change="clearError('pleuralCS')"/>
        </div>
        <!-- Peritoneal Fluid-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Peritoneal Fluid</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !peritonealColor.isValid }"
              v-model.trim="peritonealColor.value"
              @change="clearError('peritonealColor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !peritonealCells.isValid }"
              v-model.trim="peritonealCells.value"
              @change="clearError('peritonealCells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Suger</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !peritonealSuger.isValid }"
              v-model.trim="peritonealSuger.value"
              @change="clearError('peritonealSuger')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Proteins</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !peritonealProteins.isValid }"
              v-model.trim="peritonealProteins.value"
              @change="clearError('peritonealProteins')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !peritonealCramStains.isValid }"
              v-model.trim="peritonealCramStains.value"
              @change="clearError('peritonealCramStains')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Zn Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !peritonealZnStains.isValid }"
              v-model.trim="peritonealZnStains.value"
              @change="clearError('peritonealZnStains')"/>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Culture & Sensitivity</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
          :class="{ invalid: !peritonealCS.isValid }"
              v-model.trim="peritonealCS.value"
              @change="clearError('peritonealCS')"/>
        </div>
        <!-- Vaginal Swap-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Vaginal Swap</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !vaginalSwapColor.isValid }"
              v-model.trim="vaginalSwapColor.value"
              @change="clearError('vaginalSwapColor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !vaginalSwapCells.isValid }"
              v-model.trim="vaginalSwapCells.value"
              @change="clearError('vaginalSwapCells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Sugar</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !vaginalSwapSugar.isValid }"
              v-model.trim="vaginalSwapSugar.value"
              @change="clearError('vaginalSwapSugar')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Proteins</label>
            <input type="text" class="form-control"
            :class="{ invalid: !vaginalSwapProteins.isValid }"
              v-model.trim="vaginalSwapProteins.value"
              @change="clearError('vaginalSwapProteins')" 
            />
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !vaginalSwapCramStains.isValid }"
              v-model.trim="vaginalSwapCramStains.value"
              @change="clearError('vaginalSwapCramStains')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Zn Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !vaginalSwapZnStains.isValid }"
              v-model.trim="vaginalSwapZnStains.value"
              @change="clearError('vaginalSwapZnStains')"/>
          </div>
        </div>

        <div class="row mb-4">
          <label for="" class="d-block mb-2">Culture & Sensitivity</label>
          <input type="text" class="mb-4 mx-2 form-control full-width" 
          :class="{ invalid: !vaginalSwapCS.isValid }"
              v-model.trim="vaginalSwapCS.value"
              @change="clearError('vaginalSwapCS')"/>
        </div>
        <!-- Puss-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Puss</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Color</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !pussColor.isValid }"
              v-model.trim="pussColor.value"
              @change="clearError('pussColor')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cells</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !pussCells.isValid }"
              v-model.trim="pussCells.value"
              @change="clearError('pussCells')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Cram Stains </label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !pussCramStains.isValid }"
              v-model.trim="pussCramStains.value"
              @change="clearError('pussCramStains')"/>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Culture & Sensitivity</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !pussCS.isValid }"
              v-model.trim="pussCS.value"
              @change="clearError('pussCS')"/>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2"> Zn Stains</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !pussZnStains.isValid }"
              v-model.trim="pussZnStains.value"
              @change="clearError('pussZnStains')"/>
          </div>
        </div>
        <!-- Culutures-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Culutures</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Specimen (1)</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !specimen1.isValid }"
              v-model.trim="specimen1.value"
              @change="clearError('specimen1')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Specimen (2)</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !specimen2.isValid }"
              v-model.trim="specimen2.value"
              @change="clearError('specimen2')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Specimen (3)</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !specimen3.isValid }"
              v-model.trim="specimen3.value"
              @change="clearError('specimen3')"/>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Specimen (4)</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !specimen4.isValid }"
              v-model.trim="specimen4.value"
              @change="clearError('specimen4')"/>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2"> Specimen (5)</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !specimen5.isValid }"
              v-model.trim="specimen5.value"
              @change="clearError('specimen5')"/>
          </div>
        </div>
        <!-- Biopsies-->
        <div class="row mb-4">
          <h5 class="mt-3 mb-4">Biopsies</h5>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Specimen (1)</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !BioSpecimen1.isValid }"
              v-model.trim="BioSpecimen1.value"
              @change="clearError('BioSpecimen1')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Specimen (2)</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !BioSpecimen2.isValid }"
              v-model.trim="BioSpecimen2.value"
              @change="clearError('BioSpecimen2')"/>
          </div>
          <div class="col-md-4 col-12">
            <label for="" class="d-block mb-2">Specimen (3)</label>
            <input type="text" class="form-control mb-3" 
            :class="{ invalid: !BioSpecimen3.isValid }"
              v-model.trim="BioSpecimen3.value"
              @change="clearError('BioSpecimen3')"/>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2">Bone Marrow</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !boneMarrow.isValid }"
              v-model.trim="boneMarrow.value"
              @change="clearError('boneMarrow')"/>
          </div>
          <div class="col-md-6 col-12">
            <label for="" class="d-block mb-2"> HIV</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !HIV.isValid }"
              v-model.trim="HIV.value"
              @change="clearError('HIV')"/>
          </div>
          <div class="col-md-6 col-12 mt-3">
            <label for="" class="d-block mb-2"> Hepatitis B</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !hepatitisB.isValid }"
              v-model.trim="hepatitisB.value"
              @change="clearError('hepatitisB')"/>
          </div>
          <div class="col-md-6 col-12 mt-3">
            <label for="" class="d-block mb-2"> Hepatitis C</label>
            <input type="text" class="form-control" 
            :class="{ invalid: !hepatitisC.isValid }"
              v-model.trim="hepatitisC.value"
              @change="clearError('hepatitisC')"/>
          </div>
         </div>

        <div class="row mb-3">
          <label for="" class="d-block mb-2">Others</label>
          <textarea
            class="form-control mb-4 full-width ms-2"
            id="exampleFormControlTextarea1"
            rows="3"
              v-model.trim="others"
          ></textarea>
        </div>

        
        <div class="row mb-4">
          <p v-if="!formIsValid">Please enter the required information above</p>
          <base-button data-bs-toggle="modal" data-bs-target="#exampleModal" width="expand">Save</base-button>
        </div>
      </form>
    </base-card>
    <error-modal @clear-error="clearServerError" :check="checkError" :message="error"></error-modal>
  </div>
</template>
      
<script>
export default {
  data() {
    return {
      urineColor: { value: "", isValid: true },
      urineCells: { value: "", isValid: true },
      urineSugar: { value: "", isValid: true },
      urineProteins: { value: "", isValid: true },
      urineCramStains: { value: "", isValid: true },
      urineZnStains: { value: "", isValid: true },
      urineCS: { value: "", isValid: true },

      stoolColor: { value: "", isValid: true },
      stoolCells: { value: "", isValid: true },
      stoolSugar: { value: "", isValid: true },
      stoolProteins: { value: "", isValid: true },
      stoolCramStains: { value: "", isValid: true },
      stoolZnStains: { value: "", isValid: true },
      stoolCS: { value: "", isValid: true },

      CSFcolor: { value: "", isValid: true },
      CSFcells: { value: "", isValid: true },
      CSFsugar: { value: "", isValid: true },
      CSFproteins: { value: "", isValid: true },
      CSFcramStains: { value: "", isValid: true },
      CSFznStains: { value: "", isValid: true },
      CSFcs: { value: "", isValid: true },

      pleuralColor: { value: "", isValid: true },
      pleuralCells: { value: "", isValid: true },
      pleuralSugar: { value: "", isValid: true },
      pleuralProteins: { value: "", isValid: true },
      pleuralCramStains: { value: "", isValid: true },
      pleuralZNStains: { value: "", isValid: true },
      pleuralCS: { value: "", isValid: true },

      peritonealColor: { value: "", isValid: true },
      peritonealCells: { value: "", isValid: true },
      peritonealSuger: { value: "", isValid: true },
      peritonealProteins: { value: "", isValid: true },
      peritonealCramStains: { value: "", isValid: true },
      peritonealZnStains: { value: "", isValid: true },
      peritonealCS: { value: "", isValid: true },

      vaginalSwapColor: { value: "", isValid: true },
      vaginalSwapCells: { value: "", isValid: true },
      vaginalSwapSugar: { value: "", isValid: true },
      vaginalSwapProteins: { value: "", isValid: true },
      vaginalSwapCramStains: { value: "", isValid: true },
      vaginalSwapZnStains: { value: "", isValid: true },
      vaginalSwapCS: { value: "", isValid: true },

      pussColor: { value: "", isValid: true },
      pussCells: { value: "", isValid: true },
      pussCS: { value: "", isValid: true },
      pussCramStains: { value: "", isValid: true },
      pussZnStains: { value: "", isValid: true },
      
      specimen1: { value: "", isValid: true },
      specimen2: { value: "", isValid: true },
      specimen3: { value: "", isValid: true },
      specimen4: { value: "", isValid: true },
      specimen5: { value: "", isValid: true },

      BioSpecimen1: { value: "", isValid: true },
      BioSpecimen2: { value: "", isValid: true },
      BioSpecimen3: { value: "", isValid: true },

      boneMarrow: { value: "", isValid: true },
      HIV: { value: "", isValid: true },
      hepatitisB: { value: "", isValid: true },
      hepatitisC: { value: "", isValid: true },
      others:'',
      formIsValid:true,
      error:''//in case something wrong happened while submitting the form
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
    clearServerError(){
      this.error="";
      console.log(this.error);
    },
    validateData() {
      this.formIsValid = true;
      this.error='';

      // if (this.Temperature.value === "") {
      //   this.Temperature.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.pulseRate.value === "") {
      //   this.pulseRate.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.respRate.value === "") {
      //   this.respRate.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.Skincolor.value === "") {
      //   this.Skincolor.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.O2.value === "") {
      //   this.O2.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.BP.value === "") {
      //   this.BP.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.Acetone.value === "") {
      //   this.Acetone.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.Suger.value === "") {
      //   this.Suger.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.Protein.value === "") {
      //   this.Protein.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.N.value === "") {
      //   this.N.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.D.value === "") {
      //   this.D.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.Generl.value === "") {
      //   this.Generl.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.LL.value === "") {
      //   this.LL.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.LevelofConaciouancess.value === "") {
      //   this.LevelofConaciouancess.isValid = false;
      //   this.formIsValid = false;
      // }
      // if (this.Remarks.value === "") {
      //   this.Remarks.isValid = false;
      //   this.formIsValid = false;
      // }

      this.submitForm();
    },
    async submitForm() {
      const id=this.$route.params.patientId;
      if (!this.formIsValid) {
        return;
      } else {
          const investigation={
          patient_id: id,
          user_id: localStorage.getItem("userId"),
          urine_analysis_color: this.urineColor.value,
          urine_analysis_cells:this.urineCells.value,
          urine_analysis_sugar: this.urineSugar.value,
          urine_analysis_proteins:this.urineProteins.value,
          urine_analysis_cream_stains: this.urineCramStains.value,
          urine_analysis_zn_stain: this.urineZnStains.value,
          urine_analysis_clutures_and_sensitivity: this.urineCS.value,

          stool_analysis_color: this.stoolColor.value,
          stool_analysis_cells:this.stoolCells.value,
          stool_analysis_sugar: this.stoolSugar.value,
          stool_analysis_proteins: this.stoolProteins.value,
          stool_analysis_cream_stains:this.stoolCramStains.value,
          stool_analysis_zn_stain: this.stoolZnStains.value,
          stool_analysis_clutures_and_sensitivity:this.stoolCS.value ,

          csf_color: this.CSFcolor.value,
          csf_cells:this.CSFcells.value,
          csf_sugar: this.CSFsugar.value,
          csf_proteins:this.CSFproteins.value,
          csf_cream_stains: this.CSFcramStains.value,
          csf_zn_stain: this.CSFznStains.value,
          csf_clutures_and_sensitivity: this.CSFcs.value,

          pleural_fluid_color: this.pleuralColor.value,
          pleural_fluid_cells:this.pleuralCells.value,
          pleural_fluid_sugar: this.pleuralSugar.value,
          pleural_fluid_proteins: this.pleuralProteins.value,
          pleural_fluid_cream_stains:this.pleuralCramStains.value,
          pleural_fluid_zn_stain: this.pleuralZNStains.value,
          pleural_fluid_clutures_and_sensitivity:this.pleuralCS.value ,

          peritoneal_fluid_color: this.peritonealColor.value,
          peritoneal_fluid_cells:this.peritonealCells.value,
          peritoneal_fluid_sugar: this.peritonealSuger.value,
          peritoneal_fluid_proteins:this.peritonealProteins.value,
          peritoneal_fluid_cream_stains: this.peritonealCramStains.value,
          peritoneal_fluid_zn_stain: this.peritonealZnStains.value,
          peritoneal_fluid_clutures_and_sensitivity: this.peritonealCS.value,

          vaginal_swab_color: this.vaginalSwapColor.value,
          vaginal_swab_cells:this.vaginalSwapCells.value,
          vaginal_swab_sugar: this.vaginalSwapSugar.value,
          vaginal_swab_proteins: this.vaginalSwapProteins.value,
          vaginal_swab_cream_stains:this.vaginalSwapCramStains.value,
          vaginal_swab_zn_stain: this.vaginalSwapZnStains.value,
          vaginal_swab_clutures_and_sensitivity:this.vaginalSwapCS.value ,

          puss_color: this.pussColor.value,
          puss_cells:this.pussCells.value,
          puss_cream_stains: this.pussCramStains.value,
          puss_zn_stain: this.pussZnStains.value,
          puss_clutures_and_sensitivity:this.pussCS.value,

          cultures_speciment_1: this.specimen1.value,
          cultures_speciment_2:this.specimen2.value ,
          cultures_speciment_3: this.specimen3.value,
          cultures_speciment_4:this.specimen4.value,
          cultures_speciment_5: this.specimen5.value,

          biopsies_speciment_1:this.BioSpecimen1.value,
          biopsies_speciment_2: this.BioSpecimen2.value,
          biopsies_speciment_3: this.BioSpecimen3.value,

          bone_marrow: this.boneMarrow.value,
          hiv: this.HIV.value,
          hepatitis_b:this.hepatitisB.value,
          hepatitis_c: this.hepatitisC.value,
          other: this.others,         
       }
        console.log(investigation);
         try{
        await this.$store.dispatch('Nurse/addData',{
          value:investigation,
          path:"http://localhost:8000/api/post_nurse_investigation_form",
          mutation:"pushInvestigation",
        });
       this.$router.replace(`/nurse/${id}/viewinvestigations`);
        }catch(error){
          this.error=error.message;
        }
      }
    },
  },
};
 
</script>
        
<style scoped>
p {
  color: red;
}
.invalid {
  border: 1px solid red;
}
.form-control {
  width: 85%;
  border-radius: 10px;
  background: white;
}
.form-select {
  width: 85%;
}

label {
  font-weight: 600;
  font-size: 1.15rem;
}
.full-width {
  width: 91%;
}
.header2,
.forms {
  margin-left: -4rem;
}

@media only screen and (max-width: 900px) {
  /* For desktop: */
  .header2,
  .forms {
    margin-left: -2.7rem;
  }
}
</style>