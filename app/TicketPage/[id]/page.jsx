"use client";
import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get ticket");
    }
    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};

const TicketPage = ({ params }) => {
  const unwrappedParams = React.use(params);

  const EDITMODE = unwrappedParams.id === "new"?false:true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = unwrappedParams.id;
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    
    <div>
      <TicketForm/>
      TicketPage {unwrappedParams.id}
    </div>
  );
};

export default TicketPage;