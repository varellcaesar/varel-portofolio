import { redirect } from "next/navigation";
import PAGE_NAME from "@varel-web/constants/page_name";

export default function RootPage() {
  redirect(PAGE_NAME.home);
}
