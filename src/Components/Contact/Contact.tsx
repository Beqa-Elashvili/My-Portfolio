import { CONTACT } from "src@/Constants";

export function Contact() {
  return (
    <div className="flex flex-col gap-2 items-center border-neutral-800 border-t py-4">
      <h1 className="text-4xl">GET IN TOUCH</h1>
      <p>{CONTACT.number}</p>
      <a href="#" className="hover:underline">
        {CONTACT.gmail}
      </a>
    </div>
  );
}
