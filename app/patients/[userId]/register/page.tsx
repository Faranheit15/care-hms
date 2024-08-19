import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patients.action";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = params;
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl-text-left">
              © {new Date().getFullYear()}
            </p>
            <Link href="/?admin=true">Admin</Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt="doctor"
        height={1000}
        width={1000}
        className="side-img max-w-[40%]"
      />
    </div>
  );
};

export default Register;
