import React from 'react';

import listPatient from '../api/listPatient';
import getPatientFullName from '../utils/getPatientFullName';

const PatientList: React.FC<{}> = async () => {
  const patients = await listPatient();

  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>{getPatientFullName(patient)}</li>
      ))}
    </ul>
  );
};

export default PatientList;
