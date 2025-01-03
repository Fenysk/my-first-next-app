import { currentUser } from "@/data/connected-user.data";

export default function Home() {
  return (
    <div className="p-8">
      Hello {currentUser ? (<>{currentUser.pseudo}</>) : (<>world</>)} !
    </div>
  );
}
