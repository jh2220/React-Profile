import React from "react";
import AvatarIMG from "../img/avatar.png";

interface IAppHeader {
  setModalIsOpen: any;
}

const AppHeader: React.FC<IAppHeader> = (props) => {
  const { setModalIsOpen } = props;

  return (
    <header className="App-Header">
      <div>
        <img className="App-Header-Avatar" src={AvatarIMG} alt="" />
        <button
          className="App-Header-ExportJson"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Export Json
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
