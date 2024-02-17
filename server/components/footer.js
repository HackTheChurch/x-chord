import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      Vytvořeno na akci{" "}
      <Link href="https://hackthechurch.cz/" target="_blank">
        hackthechurch.cz
      </Link>
      .
    </footer>
  );
}
