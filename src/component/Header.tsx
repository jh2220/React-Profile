import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import AppBox from "./AppBox";
import AppButton from "./AppButton";
import { AvatarGenerator } from 'random-avatar-generator';

interface IAppHeader {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AppHeader: React.FC<IAppHeader> = (props) => {
  const { setModalIsOpen } = props;

  const avaterGenerator = new AvatarGenerator();
  const [avatarImage, setAvatarImage] = useState(avaterGenerator.generateRandomAvatar());

  return (
    <header className="App-Header">
      <div>
        <img className="App-Header-Avatar" src={avatarImage} alt="" />
        <AppBox margin={"0 0 0 10px"}>
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
