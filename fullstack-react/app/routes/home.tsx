import { PrismaClient } from "@prisma/client";
import type { Route } from "./+types/home";

export async function loader() {
  // this is on server
  console.log('Home loader');
  const db = new PrismaClient();

  const user = await db.user.findFirst({ where: { id: 1 } });
  return user;
}

export default function Home({loaderData}: Route.ComponentProps) {
  console.log('Home Render');
  // this is on browser/client
  return <>
    <h1 className="p-4 text-2xl font-medium">React Router Project</h1>
    <h2>Hallo {loaderData?.firstName}</h2>
  </>;
}
