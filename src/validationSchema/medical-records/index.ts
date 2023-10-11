import * as yup from 'yup';

export const medicalRecordValidationSchema = yup.object().shape({
  diagnosis: yup.string().required(),
  treatment_plan: yup.string().required(),
  prescription: yup.string().nullable(),
  notes: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
});
