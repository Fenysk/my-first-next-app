import { currentUser } from "@/data/connected-user.data";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello {currentUser ? (<>{currentUser.pseudo}</>) : (<>world</>)} !
      <ul>
        <li>
          <Link href="/products" className="underline">Go to Products</Link>
        </li>
        <li>
          <Link href="/products/games/Mario/4?type=Plateform" className="underline">Go to <b>/Mario/4/?type=Plateform</b></Link>
        </li>
      </ul>
    </div>
  );
}
