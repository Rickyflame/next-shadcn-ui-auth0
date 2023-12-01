import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <Button className="mr-4">Shadcn ready!</Button>
      <a className="mr-4" href="/api/auth/login">
        Login
      </a>
      <a className="mr-4" href="/api/auth/logout">
        Logout
      </a>
      <Link href="/profile">Profile</Link>
    </main>
  );
}
