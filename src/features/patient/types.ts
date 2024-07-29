export type IdentifierTypeChoices =
  | 'OTHER'
  | 'NATIONAL_ID'
  | 'PASSPORT'
  | 'FOREIGN_CARD';

export type SexChoices = 'MALE' | 'FEMALE';

export type MaritalStatusChoices =
  | 'SINGLE'
  | 'MARRIED'
  | 'DIVORCED'
  | 'WIDOWED'
  | 'SEPARATED';

export type InsuranceTypeChoices = 'NONE' | 'PUBLIC' | 'PRIVATE';

export interface PatientEntity {
  // Choices
  identifierType: IdentifierTypeChoices | null;
  sex: SexChoices;
  maritalStatus: MaritalStatusChoices | null;
  insuranceType: InsuranceTypeChoices;

  // Fields
  //// Personal data
  id: number;
  firstName: string | null;
  middleName: string | null;
  patternalLastName: string | null;
  maternalLastName: string | null;
  identifier: string | null;
  birthDate: Date | string | null;
  age: number | null;
  address: string | null;
  cellphone: string | null;
  email: string | null;
  isActive: boolean;
  //// Medical data
  code: string;
  isIdentified: boolean;

  // Meta
  createdAt: Date;
  updatedAt: Date;
}
