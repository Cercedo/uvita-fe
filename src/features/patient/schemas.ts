import z from 'zod';

export const IDENTIFIER_TYPE_CHOICES = [
  'OTHER',
  'NATIONAL_ID',
  'PASSPORT',
  'DRIVER_LICENSE',
] as const;
export const SEX_CHOICES = ['MALE', 'FEMALE'] as const;
export const MARITAL_STATUS_CHOICES = [
  'SINGLE',
  'MARRIED',
  'DIVORCED',
  'WIDOWED',
  'SEPARATED',
] as const;
export const INSURANCE_TYPE = ['PUBLIC', 'PRIVATE', 'NONE'] as const;

const createPatientSchema = z.object({
  identifierType: z.enum(IDENTIFIER_TYPE_CHOICES).nullable(),
  sex: z.enum(SEX_CHOICES),
  maritalStatus: z.enum(MARITAL_STATUS_CHOICES).nullable(),
  insuranceType: z.enum(INSURANCE_TYPE),

  firstName: z.string().nullable(),
  middleName: z.string().nullable(),
  patternalLastName: z.string().nullable(),
  maternalLastName: z.string().nullable(),
  identifier: z.string().nullable(),
  birthDate: z.string().datetime().nullable(),
  address: z.string().nullable(),
  cellphone: z.string().nullable(),
  email: z.string().email().nullable(),
});

export type CreatePatientSchemaType = z.infer<typeof createPatientSchema>;

export default createPatientSchema;
