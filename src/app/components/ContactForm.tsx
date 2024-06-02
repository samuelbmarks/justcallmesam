import { useFormState, useFormStatus } from 'react-dom'
import { createUser } from '@/app/actions'
import React, { useState } from 'react';

const ContactForm = () => {
    const initialState = {
        message: ""
    }
    
    const [state, formAction] = useFormState(createUser, initialState)
    const [preferredContact, setPreferredContact] = useState("prefers_email");
    const [confirmationEmail, setConfirmationEmailChange] = useState(true);
    const [confirmationText, setConfirmationTextChange] = useState(false);
    const [phone, setPhone] = useState('');
    const [confirmationTextDisabled, setConfirmationTextDisabled] = useState(true);

    const { pending } = useFormStatus()

    const handlePreferredContactChange = (event: any) => {
      setPreferredContact(event.target.value);
    };  
    const handleConfirmationEmailChange = () => {
      setConfirmationEmailChange(!confirmationEmail);
    };  
    const handleConfirmationTextChange = () => {
      setConfirmationTextChange(!confirmationText);
    };  

    const formatPhone = (input: any) => {
      const cleaned = input.replace(/\D/g, '').substring(0, 10);
      const areaCode = cleaned.substring(0, 3);
      const middle = cleaned.substring(3, 6);
      const last = cleaned.substring(6, 10);

      if (last.length == 4) {
        setConfirmationTextDisabled(false);
      } else {
        setConfirmationTextDisabled(true);
      }
  
      if (cleaned.length > 6) {
        return `(${areaCode}) ${middle} - ${last}`;
      } else if (cleaned.length > 3) {
        return `(${areaCode}) ${middle}`;
      } else if (cleaned.length > 0) {
        return `(${areaCode}`;
      }
      return cleaned;
    };
  
    const handlePhoneChange = (event: any) => {
      const input = event.target.value;
      setPhone(formatPhone(input));
    };

    return (
      <form className="absolute mb-[100px] top-[150px] z-20 flex flex-col gap-7 w-[450px] max-w-[80%]" action={formAction}>
        <div className="relative z-0 w-full group">
          <input 
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required 
          />
          <label 
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >First Name *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input 
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required 
          />
          <label 
            htmlFor="last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Last Name *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input 
            type="email"
            id="email"
            name="email"
            className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required 
          />
          <label 
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email Address *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input 
            type="tel"
            name="phone"
            id="phone"
            className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            value={phone}
            onChange={handlePhoneChange}
          />
          <label 
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Phone Number
          </label>
        </div>

        <div className="flex gap-20">
          <fieldset>
            <legend className="text-sm mb-4">Preferred Contact</legend>

            <div className="flex items-center mb-4 group">
              <input 
                type="radio"
                id="prefers_email"
                name="preferred_contact"
                value="prefers_email"
                className="w-4 h-4 border-gray-300 dark:focus:bg-indigo-600 dark:bg-gray-700 dark:border-gray-600"
                checked={preferredContact === "prefers_email"}
                onChange={handlePreferredContactChange}
              />
              <label 
                htmlFor="prefers_email"
                className="block ms-2 text-sm font-medium text-gray-300"
              >Email
              </label>
            </div>

            <div className="flex items-center mb-4 group">
              <input 
                type="radio"
                id="prefers_text"
                name="preferred_contact"
                value="prefers_text"
                className="w-4 h-4 border-gray-300 dark:focus:bg-indigo-600 dark:bg-gray-700 dark:border-gray-600"
                checked={preferredContact === "prefers_text"}
                onChange={handlePreferredContactChange}
                disabled={confirmationTextDisabled}
              />
              <label 
                htmlFor="prefers_text"
                className="block ms-2 text-sm font-medium text-gray-300"
              >Phone (Text)
              </label>
            </div>

            <div className="flex items-center mb-4 group">
              <input 
                type="radio"
                id="prefers_call"
                name="preferred_contact"
                value="prefers_call"
                className="w-4 h-4 border-gray-300 dark:focus:bg-indigo-600 dark:bg-gray-700 dark:border-gray-600"
                checked={preferredContact === "prefers_call"}
                onChange={handlePreferredContactChange}
                disabled={confirmationTextDisabled}
              />
              <label 
                htmlFor="prefers_call"
                className="block ms-2 text-sm font-medium text-gray-300"
              >Phone (Call)
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm mb-4">Receive Confirmation?</legend>

            <div className="flex items-center mb-4 group">
              <input 
                id="confirmation_email"
                type="checkbox"
                value="confirmation_email"
                className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                checked={confirmationEmail}
                onChange={handleConfirmationEmailChange}
              />
              <label 
                htmlFor="confirmation_email"
                className="ms-2 text-sm font-medium text-gray-300"
              >Confirmation Email
              </label>
            </div>

            <div className="flex items-center mb-4 group">
                <input 
                  id="confirmation_text"
                  type="checkbox"
                  value="confirmation_text"
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  checked={confirmationText}
                  onChange={handleConfirmationTextChange}
                  disabled={confirmationTextDisabled}
                />
                <label 
                  htmlFor="confirmation_text"
                  className="ms-2 text-sm font-medium text-gray-300"
                >Confirmation Text
                </label>
            </div>
          </fieldset>
        </div>


        <div className="relative z-0 w-full group">
          <textarea 
            name="message"
            id="message"
            className="block py-5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
          />
          <label 
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Message
          </label>
        </div>
        
        <button 
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-[green] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"
        >Submit
        </button>

        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>

      </form>
    )
};

export default ContactForm;
