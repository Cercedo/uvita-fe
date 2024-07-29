import React from 'react';

import { PatientEntity } from '../types';
import getPatientFullName from '../utils/getPatientFullName';

interface PatientEntityProps {
  patients: PatientEntity[];
}

const PatientList: React.FC<PatientEntityProps> = ({ patients }) => {
  return (
    <ul>
      {patients.map((patient) => (
        <li key={patient.id}>{getPatientFullName(patient)}</li>
      ))}
    </ul>
  );
};

export default PatientList;
