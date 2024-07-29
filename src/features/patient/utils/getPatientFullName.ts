import { PatientEntity } from '../types';

const getPatientFullName = (patient: PatientEntity): string => {
  let fullName = 'Unknown';

  const names = [
    patient.firstName,
    patient.middleName,
    patient.patternalLastName,
    patient.maternalLastName,
  ];
  const filteredNames = names.filter((name) => name !== null);
  fullName = filteredNames.length >= 1 ? filteredNames.join(' ') : fullName;

  return fullName;
};

export default getPatientFullName;
