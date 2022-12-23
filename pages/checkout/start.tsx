import { useState } from "react";
import checkIfCustomerExists from "../../helpers/checkIfCustomerExists";

function CustomerForm() {
  const [customerPhoneorEmail, setCustomerPhoneorEmail] = useState("");
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Begin Customer Visit
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                checkIfCustomerExists(customerPhoneorEmail);
                console.log(customerPhoneorEmail);
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone or Email address
                </label>
                <div className="mt-1">
                  <input
                    id="phoneoremail"
                    name="phoneoremail"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Begin Customer Visit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Start() {
  return (
    <>
      <CustomerForm />
    </>
  );
}
