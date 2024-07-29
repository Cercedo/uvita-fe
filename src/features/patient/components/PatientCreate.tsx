import createPatientAction from '../actions/createPatientAction';

const PatientCreate = () => {
  return (
    <form action={createPatientAction} className="max-w-sm">
      <div className="mb-4">
        <label
          htmlFor="input-label-firstName"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          First Name
        </label>
        <input
          type="text"
          id="input-label-firstName"
          name="firstName"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="First name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-middleName"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Middle Name
        </label>
        <input
          type="text"
          id="input-label-middleName"
          name="middleName"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Middle name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-patternalLastName"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Paternal Last Name
        </label>
        <input
          type="text"
          id="input-label-patternalLastName"
          name="patternalLastName"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Paternal Last name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-maternalLastName"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Maternal Last Name
        </label>
        <input
          type="text"
          id="input-label-maternalLastName"
          name="maternalLastName"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Maternal Last name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-sex"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Sex
        </label>
        <select
          id="input-label-sex"
          name="sex"
          defaultValue={'MALE'}
          className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        >
          <option value={'MALE'}>Male</option>
          <option value={'FEMALE'}>Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-insuranceType"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Insurance Type
        </label>
        <select
          id="input-label-insuranceType"
          name="insuranceType"
          defaultValue={'NONE'}
          className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        >
          <option value={'NONE'}>None</option>
          <option value={'PUBLIC'}>Public</option>
          <option value={'PRIVATE'}>Private</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-maritalStatus"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Marital Status
        </label>
        <select
          id="input-label-maritalStatus"
          name="maritalStatus"
          defaultValue={''}
          className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        >
          <option value={''}>Choose an option...</option>
          <option value={'SINGLE'}>Single</option>
          <option value={'MARRIED'}>Married</option>
          <option value={'DIVORCED'}>Divorced</option>
          <option value={'WIDOWED'}>Widowed</option>
          <option value={'SEPARATED'}>Separated</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-identifierType"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Identifier Type
        </label>
        <select
          id="input-label-identifierType"
          name="identifierType"
          defaultValue={''}
          className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        >
          <option value={''}>Choose an option...</option>
          <option value={'OTHER'}>Other</option>
          <option value={'NATIONAL_ID'}>National ID</option>
          <option value={'PASSPORT'}>Passport</option>
          <option value={'FOREIGN_CARD'}>Foreign card</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-identifier"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Identifier Number
        </label>
        <input
          type="text"
          id="input-label-identifier"
          name="identifier"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="87654321"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-birthDate"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Birth Date
        </label>
        <input
          type="date"
          id="input-label-birthDate"
          name="birthDate"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="YYYY-MM-DD"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-address"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Address
        </label>
        <input
          type="text"
          id="input-label-address"
          name="address"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Address"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-cellphone"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Cellphone
        </label>
        <input
          type="text"
          id="input-label-cellphone"
          name="cellphone"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Cellphone"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="input-label-email"
          className="block text-sm font-medium mb-2 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="input-label-email"
          name="email"
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="you@site.com"
        />
      </div>
      <div className="">
        <button
          type="submit"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PatientCreate;
