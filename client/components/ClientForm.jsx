/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendClientData } from '../actions'

function ClientForm() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()

  const initialData = {
    id: '',
    name: '',
    email: '',
    areaOfLaw: '',
    parties: '',
    details: '',
    outcome: '',
    contractQ: '',
    file: '',
    anythingElse: '',
  }
  const [form, setForm] = useState(initialData)
  const dispatch = useDispatch()

  function handleChange(e) {
    console.log('I am e.target', e.target.value)
    const { name, value } = e.target
    setForm({ ...form, [name]: value }) // spread (...) allows us to keep all the data that was there, but update/over-write the part that has changed.
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(sendClientData(form))
    //setForm(initialData)
  }

  return (
    <>
      <div className=" w-3/4 flex flex-col justify-around align-center bg-yellow-100 py-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
              >
                Full name:
              </label>
              <input
                type="text"
                id="small-input"
                value={form.name}
                name="name"
                className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300"
            >
              Email:
            </label>
            <input
              type="text"
              id="small-input"
              value={form.email}
              name="email"
              className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <p>Please tick the area of law that applies to your case:</p>
          <fieldset name="areaOfLaw">
            <legend className="sr-only">Areas of Law</legend>

            <div className="flex items-center mb-4">
              <input
                id="country-option-2"
                type="radio"
                name="areaOfLaw"
                value="money"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'money'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-2"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-black-300"
              >
                Money trouble (Work and Income, credit and debt, fines and court
                fines, problems with goods and services)
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-3"
                type="radio"
                name="areaOfLaw"
                value="tenancy"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'tenancy'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-3"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tenancy and housing issues
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="areaOfLaw"
                value="employment"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'employment'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Employment problems
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="option-disabled"
                type="radio"
                name="areaOfLaw"
                value="maori"
                className="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                disabled=""
                checked={form.areaOfLaw === 'maori'}
                onChange={handleChange}
              />
              <label
                htmlFor="option-disabled"
                className="block ml-2 text-sm font-medium text-gray-300 dark:text-gray-700"
              >
                Māori land Issues for young people (family matters, problems at
                school, youth justice)
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="areaOfLaw"
                value="health"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'health'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Health-related matters (ACC, health and disability, mental
                health)
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="areaOfLaw"
                value="civil"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'civil'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Human, civil and privacy rights Family matters (caring for
                children, Child, Youth and Family)
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="areaOfLaw"
                value="violence"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'violence'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Domestic violence and other forms of violence
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="areaOfLaw"
                value="criminal"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                checked={form.areaOfLaw === 'criminal'}
                onChange={handleChange}
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Criminal matters
              </label>
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Parties involved (insert full legal name(s)):
            </label>
            <input
              type="text"
              id="small-input"
              value={form.parties}
              name="parties"
              className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              What has happened?
            </label>
            <input
              type="text"
              id="large-input"
              value={form.details}
              name="details"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="large-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              What is your ideal outcome?
            </label>
            <input
              type="text"
              id="large-input"
              value={form.outcome}
              name="outcome"
              className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Is there anything you would like us to look at specifically in
              your contract?
            </label>
            <input
              type="text"
              id="base-input"
              value={form.contractQ}
              name="contractQ"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="user_avatar"
          >
            Upload file/relevant documentation
          </label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            name="file"
            value={form.value}
            onChange={handleChange}
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          ></div>
          <div className="mb-6">
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Anything else we should know?
            </label>
            <input
              type="text"
              id="base-input"
              value={form.anythingElse}
              name="anythingElse"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default ClientForm
