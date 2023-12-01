import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default async function ProfileServer() {
  const session = await getSession();

  return (
    session?.user && (
      <div>
        <Image
          src={session.user.picture}
          alt={session.user.name}
          width={100}
          height={100}
        />
        <h2>{session.user.name}</h2>
        <p>{session.user.email}</p>
      </div>
    )
  );
}
