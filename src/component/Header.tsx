import React, { Dispatch, SetStateAction } from "react";
import AvatarIMG from "../img/avatar.png";
import AppBox from "./AppBox";
import AppButton from "./AppButton";

interface IAppHeader {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AppHeader: React.FC<IAppHeader> = (props) => {
  const { setModalIsOpen } = props;

  return (
    <header className="App-Header">
      <div>
        <img className="App-Header-Avatar" src={AvatarIMG} alt="" />
        <AppBox margin={"0 0 0 25px"}>
          <AppButton
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Export Json
          </AppButton>
        </AppBox>
      </div>
    </header>
  );
};

export default AppHeader;
