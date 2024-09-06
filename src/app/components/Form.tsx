import Link from "next/link";

export function Form({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col gap-5 bg-slate-50 dark:bg-slate-700 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="first_name"
          className="block text-xs"
        >
          <div className="text-slate-600 dark:text-slate-200">First Name</div>
        </label>
        <input
          id="first_name"
          name="first_name"
          type="first_name"
          placeholder="Samuel"
          autoComplete="first_name"
          required
          className="
            mt-1 block w-full px-3 py-2 appearance-none bg-slate-200
            rounded-md sm:text-sm shadow-md
            border border-slate-200 dark:border-slate-900 placeholder-gray-400
            focus:border-black focus:outline-none focus:ring-black
            transition-all duration-300 ease-in-out
          "
        />
      </div>

      <div>
        <label
          htmlFor="last_name"
          className="block text-xs text-slate-600 dark:text-slate-200"
        >
          <div className="text-slate-600 dark:text-slate-200">Last Name</div>
        </label>
        <input
          id="last_name"
          name="last_name"
          type="last_name"
          placeholder="Marks"
          autoComplete="last_name"
          required
          className="
            mt-1 block w-full px-3 py-2 appearance-none bg-slate-200
            rounded-md sm:text-sm shadow-md
            border border-slate-200 dark:border-slate-900 placeholder-gray-400
            focus:border-black focus:outline-none focus:ring-black
            transition-all duration-300 ease-in-out
          "
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs text-slate-600 dark:text-slate-200"
        >
          <div className="text-slate-600 dark:text-slate-200">Email Address</div>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="sam@justcallmesam.com"
          autoComplete="email"
          required
          className="
            mt-1 block w-full px-3 py-2 appearance-none bg-slate-200
            rounded-md sm:text-sm shadow-md
            border border-slate-200 dark:border-slate-900 placeholder-gray-400
            focus:border-black focus:outline-none focus:ring-black
            transition-all duration-300 ease-in-out
          "
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs text-slate-600 dark:text-slate-200"
        >
          <div className="text-slate-600 dark:text-slate-200">Message</div>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How may I help?"
          autoComplete="message"
          required
          className="
            mt-1 block w-full px-3 py-2 appearance-none bg-slate-200
            rounded-md sm:text-sm shadow-md
            border border-slate-200 dark:border-slate-900 placeholder-gray-400
            focus:border-black focus:outline-none focus:ring-black
            transition-all duration-300 ease-in-out
          "
        />
      </div>

      <p className="text-center text-sm text-gray-600">
        {"Optionally provide a password to "}
        <Link href="/register" className="text-blue-700">
          track and manage
        </Link>
        {" contact form requests."}
      </p>

      <div>
        <label
          htmlFor="password"
          className="block text-xs text-slate-600 dark:text-slate-200"
        >
          <div className="text-slate-600 dark:text-slate-200">Password</div>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="
            mt-1 block w-full px-3 py-2 appearance-none bg-slate-200
            rounded-md sm:text-sm shadow-md
            border border-slate-200 dark:border-slate-900 placeholder-gray-400
            focus:border-black focus:outline-none focus:ring-black
            transition-all duration-300 ease-in-out
          "
        />
      </div>

      <p className="text-center text-xs text-gray-600">
        {"You will recieve a confirmation email with a code that you can use to access your submitted requests."}
      </p>
      {children}
    </form>
  );
}
