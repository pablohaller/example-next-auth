import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "../api/auth/[...nextauth]/route";
import Link from "next/link";

const Page = async () => {
  const session = await getServerSession(AUTH_OPTIONS);
  const { email, image, name } = session?.user || {};

  return (
    <Link className="p-2 block" href={`https://github.com/${name}`} passHref>
      <div className="bg-slate-200 hover:bg-slate-100 p-2.5 rounded-xl shadow-xl border border-slate-400 border-dashed gap-2.5 flex flex-col items-center">
        <div className="relative inline-flex justify-center items-center bg-primary size-48 rounded-full overflow-hidden shadow-2xl">
          <img src={image || ""} alt="Avatar" />
        </div>
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-sm">{email}</p>
      </div>
    </Link>
  );
};

export default Page;
