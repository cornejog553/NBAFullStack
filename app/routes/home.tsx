import type { Route } from "./+types/home";
import {Login} from "../login/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NBA Fullstack" },
    { name: "description", content: "Welcome to NBA Fullstack!" },
  ];
}

export default function Home() {
  return <Login />;
}
