import Link from "next/link";

/**
 * In this case, the back button can simply be a link
 * Without using the router, we can render this component on the server
 */
function BackButton() {
  return (
    <div>
      <Link href="/" className="border-transparent text-[#104EE9]">
        {" "}
        &lt; Back
      </Link>
    </div>
  );
}

export default BackButton;
