import { PATIENT_ENDPOINTS } from '../config';
import { CreatePatientSchemaType } from '../schemas';
import { PatientEntity } from '../types';

const createPatient = async (
  data: CreatePatientSchemaType
): Promise<PatientEntity> => {
  const url = PATIENT_ENDPOINTS.create();
  const init: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, init);
  const patient = await response.json();

  return patient;
};

export default createPatient;
