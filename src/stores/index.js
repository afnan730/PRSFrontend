import { createStore } from "vuex";

import authentication from "./modules/auth.js";
import adminModule from "./modules/admin.js";
import generalDoctorModule from "./modules/generalDoctor";
import NurseModule from "./modules/nurse";
import Statistician from "./modules/statistician";
import DoctorModule from "./modules/doctor";
const store = createStore({
  modules: {
    auth: authentication,
    admin: adminModule,
    generalDoctor: generalDoctorModule,
    Nurse: NurseModule,
    Statistician,
    doctor: DoctorModule,
  },
});
export default store;
