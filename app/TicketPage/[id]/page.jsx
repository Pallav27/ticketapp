"use client";
import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const TicketPage = ({ params }) => {
  // Unwrap the params Promise using React.use()
  const unwrappedParams = React.use(params);

  return (
    
    <div className="bg-red-400">
      <TicketForm/>
      TicketPage {unwrappedParams.id}
    </div>
  );
};

export default TicketPage;