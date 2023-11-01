import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2 text-orange-800">
        <li key="homepage">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li key="reviewpage">
          <Link href="/reviews" className="hover:underline">
            Reviews
          </Link>
        </li>
        <li key="aboutpage">
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
