import React from "react";

interface ICardList {
  title: string;
  listItens: IlistItens[];
}

interface IlistItens {
  name: string;
  isChecked: boolean;
  tagColor: string;
}

export default ICardList;