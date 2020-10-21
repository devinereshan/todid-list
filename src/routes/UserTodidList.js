import React from "react";
import TodidList from "../components/TodidList";
import UserDrawer from "../components/UserDrawer";

function UserTodidList() {
  return (
    <UserDrawer>
      <TodidList />
    </UserDrawer>
  );
}

export default UserTodidList;
