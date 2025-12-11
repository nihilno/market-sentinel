import Link from "next/link";

function FormSwitch({
  text = "",
  button,
  href,
}: {
  text?: string;
  button: string;
  href: string;
}) {
  return (
    <p className="mt-8 flex items-center justify-center gap-1 text-sm text-white/70">
      {text}
      <Link
        href={href}
        className="text-white transition-colors hover:text-yellow-500 hover:underline"
      >
        {button}.
      </Link>
    </p>
  );
}

export default FormSwitch;
