import { PATIENT_ENDPOINTS } from '../config';
import { PatientEntity } from '../types';

const listPatient = async (): Promise<PatientEntity[]> => {
  let patients: PatientEntity[] = [];

  const url = PATIENT_ENDPOINTS.list();
  const init: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // TODO: handle errors
  const response = await fetch(url, init);
  patients = await response.json();

  return patients;
};

export default listPatient;
