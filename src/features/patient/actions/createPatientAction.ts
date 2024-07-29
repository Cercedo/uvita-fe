'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import createPatient from '../api/createPatient';
import createPatientSchema from '../schemas';

const createPatientAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  let fixedData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value === '' ? null : value,
    ])
  );
  const fixedBirthDate =
    typeof fixedData.birthDate === 'string'
      ? new Date(fixedData.birthDate).toISOString()
      : null;

  const parsedData = createPatientSchema.parse({
    ...fixedData,
    birthDate: fixedBirthDate,
  });

  await createPatient(parsedData);

  revalidatePath('/dashboard/patient');
  redirect('/dashboard/patient');
};

export default createPatientAction;
