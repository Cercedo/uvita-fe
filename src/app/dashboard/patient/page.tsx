import listPatient from '@/features/patient/api/listPatient';
import PatientList from '@/features/patient/components/PatientList';

const PatientPage = async () => {
  const patients = await listPatient();

  return (
    <div>
      <h1>PatientPage</h1>
      <PatientList patients={patients} />
    </div>
  );
};

export default PatientPage;
