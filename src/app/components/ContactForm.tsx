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
      <form className="z-20 flex flex-col gap-7 w-[400px] max-w-[80%]" action={formAction}>
        <div className="relative z-0 w-full group">
          <input 
            type="text"
            name="first_name"
            id="first_name"
            className="
              block py-2.5 w-full text-sm
              text-slate-500 focus:text-slate-700 
              border-slate-400 focus:border-slate-700 
              dark:text-slate-400 dark:focus:text-slate-100
              dark:border-slate-400 dark:focus:border-slate-100
              border-0 border-b-2 bg-transparent
              focus:outline-none focus:ring-0 peer
            "
            placeholder=" "
            required 
          />
          <label 
            htmlFor="first_name"
            className="
              absolute scale-75 top-3 -z-10
              text-sm peer-focus:font-medium 
              text-slate-500 peer-focus:text-slate-700
              dark:text-slate-400 dark:peer-focus:text-slate-100
              origin-[0] peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-100 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
              transition-all duration-300 transform -translate-y-6
            "
          >First Name *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input 
            type="text"
            name="last_name"
            id="last_name"
            className="
              block py-2.5 w-full text-sm
              text-slate-500 focus:text-slate-700 
              border-slate-400 focus:border-slate-700 
              dark:text-slate-400 dark:focus:text-slate-100
              dark:border-slate-400 dark:focus:border-slate-100
              border-0 border-b-2 bg-transparent
              focus:outline-none focus:ring-0 peer
            "
            placeholder=" "
            required 
          />
          <label 
            htmlFor="last_name"
            className="
              absolute scale-75 top-3 -z-10
              text-sm peer-focus:font-medium 
              text-slate-500 peer-focus:text-slate-700
              dark:text-slate-400 dark:peer-focus:text-slate-100
              origin-[0] peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-100 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
              transition-all duration-300 transform -translate-y-6
            "
          >Last Name *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input 
            type="email"
            id="email"
            name="email"
            className="
              block py-2.5 w-full text-sm
              text-slate-500 focus:text-slate-700 
              border-slate-400 focus:border-slate-700 
              dark:text-slate-400 dark:focus:text-slate-100
              dark:border-slate-400 dark:focus:border-slate-100
              border-0 border-b-2 bg-transparent
              focus:outline-none focus:ring-0 peer
            "
            placeholder=" "
            required 
          />
          <label 
            htmlFor="email"
            className="
              absolute scale-75 top-3 -z-10
              text-sm peer-focus:font-medium 
              text-slate-500 peer-focus:text-slate-700
              dark:text-slate-400 dark:peer-focus:text-slate-100
              origin-[0] peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-100 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
              transition-all duration-300 transform -translate-y-6
            "
          >Email Address *
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input 
            type="tel"
            name="phone"
            id="phone"
            className="
              block py-2.5 w-full text-sm
              text-slate-500 focus:text-slate-700 
              border-slate-400 focus:border-slate-700 
              dark:text-slate-400 dark:focus:text-slate-100
              dark:border-slate-400 dark:focus:border-slate-100
              border-0 border-b-2 bg-transparent
              focus:outline-none focus:ring-0 peer
            "
            placeholder=" "
            value={phone}
            onChange={handlePhoneChange}
          />
          <label 
            htmlFor="phone"
            className="
              absolute scale-75 top-3 -z-10
              text-sm peer-focus:font-medium 
              text-slate-500 peer-focus:text-slate-700
              dark:text-slate-400 dark:peer-focus:text-slate-100
              origin-[0] peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-100 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
              transition-all duration-300 transform -translate-y-6
            "
          >Phone Number
          </label>
        </div>

        <div className="flex gap-10 max-xs:flex-col">
          <fieldset>
            <legend className="text-sm text-medium text-slate-600 dark:text-slate-200 mb-4">Preferred Contact *</legend>

            <div className="flex items-center mb-4 group">
              <input 
                type="radio"
                id="prefers_email"
                name="preferred_contact"
                value="prefers_email"
                className="
                  form-radio w-4 h-4 
                  checked:bg-blue-500 dark:checked:bg-blue-400
                  transition-all duration-300 ease-in-out
                "
                checked={preferredContact === "prefers_email"}
                onChange={handlePreferredContactChange}
              />
              <label 
                htmlFor="prefers_email"
                className="
                  ms-2 text-sm 
                  text-slate-600 dark:text-slate-200 
                  transition-all duration-300 ease-in-out
                "
              >Email
              </label>
            </div>

            <div className="flex items-center mb-4 group">
              <input 
                type="radio"
                id="prefers_text"
                name="preferred_contact"
                value="prefers_text"
                className="
                  form-radio w-4 h-4 peer
                  checked:bg-blue-500 dark:checked:bg-blue-400
                  disabled:opacity-50
                  transition-all duration-300 ease-in-out
                "
                checked={preferredContact === "prefers_text"}
                onChange={handlePreferredContactChange}
                disabled={confirmationTextDisabled}
              />
              <label 
                htmlFor="prefers_text"
                className="
                  peer-disabled:opacity-50 
                  ms-2 text-sm 
                  text-slate-600 dark:text-slate-200 
                  transition-all duration-300 ease-in-out"
              >Phone (Text)
              </label>
            </div>

            <div className="flex items-center mb-4 group">
              <input 
                type="radio"
                id="prefers_call"
                name="preferred_contact"
                value="prefers_call"
                className="
                  w-4 h-4 peer
                  checked:bg-blue-500 dark:checked:bg-blue-400
                  disabled:opacity-50 
                  transition-all duration-300 ease-in-out
                "
                checked={preferredContact === "prefers_call"}
                onChange={handlePreferredContactChange}
                disabled={confirmationTextDisabled}
              />
              <label 
                htmlFor="prefers_call"
                className="
                  peer-disabled:opacity-50 
                  ms-2 text-sm 
                  text-slate-600 dark:text-slate-200 
                  transition-all duration-300 ease-in-out
              "
              >Phone (Call)
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4 text-sm text-slate-600 dark:text-slate-200 transition-all duration-300 ease-in-out">Receive Confirmation?</legend>

            <div className="flex items-center mb-4 group">
              <input 
                id="confirmation_email"
                type="checkbox"
                value="confirmation_email"
                className="
                  form-checkbox w-4 h-4 rounded-sm peer 
                  checked:bg-blue-500 dark:checked:bg-blue-400
                  transition-all duration-300 ease-in-out
                "
                checked={confirmationEmail}
                onChange={handleConfirmationEmailChange}
              />
              <label 
                htmlFor="confirmation_email"
                className="
                  ms-2 text-sm 
                  text-slate-600 dark:text-slate-200 
                  transition-all duration-300 ease-in-out
                "
              >Confirmation Email
              </label>
            </div>

            <div className="flex items-center mb-4 group">
                <input 
                  id="confirmation_text"
                  type="checkbox"
                  value="confirmation_text"
                  className="
                    form-checkbox w-4 h-4 rounded-sm peer 
                    disabled:opacity-50 
                    checked:bg-blue-500 dark:checked:bg-blue-400
                    transition-all duration-300 ease-in-out
                    "
                  checked={confirmationText}
                  onChange={handleConfirmationTextChange}
                  disabled={confirmationTextDisabled}
                />
                <label 
                  htmlFor="confirmation_text"
                  className="
                    ms-2 text-sm 
                    peer-disabled:opacity-50
                    text-slate-600 dark:text-slate-200 
                    transition-all duration-300 ease-in-out
                  "
                >Confirmation Text
                </label>
            </div>
          </fieldset>
        </div>


        <div className="relative z-0 w-full group">
          <textarea 
            name="message"
            id="message"
            className="
              block py-2.5 w-full text-sm
              text-slate-500 focus:text-slate-700 
              border-slate-400 focus:border-slate-700 
              dark:text-slate-400 dark:focus:text-slate-100
              dark:border-slate-400 dark:focus:border-slate-100
              border-0 border-b-2 bg-transparent
              focus:outline-none focus:ring-0 peer
            "
            placeholder=" "
          />
          <label 
            htmlFor="message"
            className="
              absolute scale-75 top-3 -z-10
              text-sm peer-focus:font-medium 
              text-slate-500 peer-focus:text-slate-700
              dark:text-slate-400 dark:peer-focus:text-slate-100
              origin-[0] peer-focus:start-0 
              rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-700 peer-focus:dark:text-slate-100 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
              transition-all duration-300 transform -translate-y-6
            "
          >Message
          </label>
        </div>
        
        <button 
          type="submit"
          className="
            font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center
            text-slate-100 dark:text-slate-700
            bg-slate-700 hover:bg-slate-800 dark:bg-slate-300 dark:hover:bg-slate-100
            transition-all duration-300 ease-in-out
            focus:ring-3 focus:outline-none focus:ring-[green]
          "
        >Submit
        </button>

        <p aria-live="polite" className={`
          text-center transition-all duration-300 ease-in-out
          flex flex-col gap-2
          ${state?.success ? 'text-blue-600 dark:text-blue-300' : 'text-red-500 dark:text-red-300'}
        `}>
          <span className="text-slate-100">{state?.message.body}</span>
          <span className="text-sm">{state?.message.uuid}</span>
        </p>

      </form>
    )
};

export default ContactForm;
