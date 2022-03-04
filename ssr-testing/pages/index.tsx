import * as React from "react";

import Link from "next/link";

export default function Homepage() {
  return (
    <main>
      <h1>SSR Testing</h1>
      <ul>
        <li>
          <Link href="/button">Id</Link>
        </li>
      </ul>
    </main>
  );
}
