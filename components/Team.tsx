import React from "react";
import TeamTitle from "./team/TeamTitle";
import TeamDetails from "./team/TeamDetails";
import Container from "./global/Container";

function Team() {
  return (
    <div className="bg-cyan-100 flex md:flex-row flex-col justify-center py-10 sm:gap-24 gap-5  ">
      <TeamTitle />
      <TeamDetails />
    </div>
  );
}

export default Team;
