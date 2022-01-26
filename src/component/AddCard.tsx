import React, { Dispatch, SetStateAction } from "react";
import { FaPlus } from "react-icons/fa";
import ICardList from "../interface/ListContent";

interface IAddCard {
  listContent: any; //ICardList[];
  setListContent: Dispatch<SetStateAction<ICardList[] | undefined>>;
}

const AddCard: React.FC<IAddCard> = (props) => {
  const { listContent, setListContent } = props;

  const onAddCardList = () => {

    if(listContent != undefined){

      setListContent([
        ...listContent,
        {
          title: "New Card",
          listItens: [{ name: "List Item", isChecked: false, tagColor: "#09f" }],
        },
      ]);

    }else{

      setListContent([
        {
          title: "New Card",
          listItens: [{ name: "List Item", isChecked: false, tagColor: "#09f" }],
        },
      ]);

    }

  };

  return (
    <div className="Card-Plus" onClick={onAddCardList}>
      Adicionar Card <FaPlus className="icon" />
    </div>
  );
};

export default AddCard;