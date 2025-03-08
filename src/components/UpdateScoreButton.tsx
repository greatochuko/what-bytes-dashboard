"use client";

import React, { useState } from "react";
import UpdateScoreModal from "./UpdateScoreModal";

export default function UpdateScoreButton() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="rounded-md border-2 border-black bg-blue-900 px-6 py-2 text-sm font-semibold text-white"
      >
        Update
      </button>
      <UpdateScoreModal
        open={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </>
  );
}
