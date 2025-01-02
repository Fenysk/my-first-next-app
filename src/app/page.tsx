import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello world !
      <br></br>
      <Link href="/products/games/Mario/4?type=Plateform" className="underline">Go to <b>/Mario/4/?type=Plateform</b></Link>
    </div>
  );
}
