import React from "react";
import AvatarIMG from "../img/avatar.png";

const AppHeader = () => {
  return (
    <header className="App-Header">
      <div>
        <img className="App-Header-Avatar" src={AvatarIMG} />
        <button className="App-Header-ExportJson">Export Json</button>
      </div>
    </header>
  );
};

export default AppHeader;
