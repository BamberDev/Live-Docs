"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { createRoom } from "@/lib/actions/room.actions";
import { useRouter } from "next/navigation";

const AddDocumentButton = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const handleAddDocument = async () => {
    try {
      const room = await createRoom({ userId, email });

      if (room) {
        router.push(`/documents/${room.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="submit"
      onClick={handleAddDocument}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="add-icon"
        width={24}
        height={24}
      />
      <p className="hidden sm:block">Create new document</p>
    </Button>
  );
};

export default AddDocumentButton;
