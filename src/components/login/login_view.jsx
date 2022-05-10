import FormField from "../reusables/form_field";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";

export default function LoginPage() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-1/3 h-2/3 self-center bg-glass backdrop-blur rounded-2xl shadow-shadow-color shadow-lg  px-8 py-12">
        <h1 className="font-bold text-primary text-2xl mb-8">
          Login to continue
        </h1>
        <FormField title="Email" icon={MailIcon} />
        <FormField title="Password" icon={LockClosedIcon} type="password" />
      </div>
    </div>
  );
}
