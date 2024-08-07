import CollabRoom from "@/components/CollabRoom";
import { getRoom } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  const room = await getRoom({
    roomId: id,
    userId: clerkUser.emailAddresses[0].emailAddress,
  });

  if (!room) {
    redirect("/");
  }

  return (
    <main className="flex w-full flex-col items-center">
      <CollabRoom roomId={id} roomMetadata={room.metadata} />
    </main>
  );
};

export default Document;
