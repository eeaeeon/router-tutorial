import React from "react";
import { useParams } from "react-router-dom";

const data = {
  jaeyeon: {
    name: "jaeyeon",
    description: "I hate react",
  },
  gildong: {
    name: "hong gil dong",
    description: "I don't know react",
  },
};

const Profile = () => {
  const { userName } = useParams();
  const profile = data[userName];

  if (!profile) {
    return <div>not exist user!!</div>;
  }

  return (
    <div>
      <h3>
        {userName}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
