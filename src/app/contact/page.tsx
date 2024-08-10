import { Form } from '../components/Form';
import { SubmitButton } from '../components/SubmitButton';
import SocialIcons from '../components/SocialIcons';

export default function Contact() {
  return (
    <main className="relative flex flex-col gap-10 py-10 justify-center items-center w-full h-auto">
      <SocialIcons />

      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-900 shadow-xl">
        <div className="
          flex flex-col items-center justify-center gap-2 
          px-4 py-6 pt-8 text-center sm:px-16
          border-b border-slate-200 dark:border-slate-900
          bg-slate-200 dark:bg-slate-900"
        >
          <div className="text-xl font-semibold text-slate-900 dark:text-slate-100">Contact Form</div>
          <div className="text-sm flex flex-col gap-1">
            <div className="text-slate-900 dark:text-slate-100">Please fill out the form below.</div>
            <div className='text-slate-900 dark:text-slate-100'>You may also <a className="text-blue-700" href="mailto:sam@justcallmesam.com">send me an email directly.</a></div>
          </div>
        </div>

        <Form
          action={async (formData: FormData) => {
            "use server";
            console.log("form server action")
          }}
        >
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </div>
    </main>
  );
}
