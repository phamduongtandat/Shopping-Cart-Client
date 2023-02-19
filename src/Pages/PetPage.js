import React from "react";

import PetList from "../Component/PetList";

function PetPage({ keyWord }) {
  return (
    <div>
      <PetList keyWord={keyWord} />
    </div>
  );
}

export default PetPage;
