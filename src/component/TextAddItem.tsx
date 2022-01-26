import React, { Dispatch, SetStateAction, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TextEditable from "./TextEditable";
import { BlockPicker } from "react-color";
import ICardList from "../interface/ListContent";

interface ITextAddItem {
  index: number;
  listContent: ICardList[];
  setListContent: Dispatch<SetStateAction<ICardList[] | undefined>>;
}

const TextAddItem: React.FC<ITextAddItem> = (props) => {
  const { listContent, setListContent, index } = props;

  const [newItem, setNewItem] = useState("");
  const [palletOpen, setPalletOpen] = useState(false);
  const [colorState, setStateColor] = useState("#6e00ff");

  const addItem = () => {
    if (newItem === "" || newItem === undefined) {
      return;
    }

    const newList = [...listContent];
    newList[index].listItens = [
      ...listContent[index].listItens,
      { name: newItem, isChecked: false, tagColor: colorState },
    ];

    setListContent(newList);
    setNewItem("");
  };

  return (
    <li className="item-plus">
      <FaPlus className="icon" />
      <TextEditable
        TextValue={newItem}
        onChange={setNewItem}
        onBlur={addItem}
        underlines={false}
        placeHolder="Adicionar Item"
      />
      <div>
        <button
          style={{ background: colorState }}
          className="item-plus-color"
          onClick={() => {
            setPalletOpen(!palletOpen);
          }}
        />
      </div>
      {palletOpen ? (
        <div className="item-plus-pallet">
          <BlockPicker
            color={colorState}
            onChangeComplete={(color) => {
              setStateColor(color.hex);
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

export default TextAddItem;
