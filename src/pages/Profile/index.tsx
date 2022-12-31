import { useState } from "react";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { Form } from "./Form";

export const Profile = () => {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  return (
    <>
      <Hero />
      <Menu selectedId={selectedId} setSelectedId={setSelectedId} />
      {selectedId === 1 && <Form />}
    </>
  );
};
