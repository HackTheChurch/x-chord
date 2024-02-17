export default function IconInput({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-transfer-in ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
      <path d="M4 14h9" />
      <path d="M10 11l3 3l-3 3" />
    </svg>
  );
}
