import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black min-h-24 flex flex-col justify-center items-center">
      <p className="">
        Vytvořeno na akci{" "}
        <Link href="https://hackthechurch.cz/" target="_blank">
          hackthechurch.cz
        </Link>
        .
      </p>
    </footer>
  );
}
