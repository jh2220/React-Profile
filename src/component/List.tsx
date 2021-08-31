import React, { Dispatch, SetStateAction, useEffect } from "react";
import ICardList from "../interface/ListContent";
import TextEditable from "./TextEditable";

interface IList {
  listContent: ICardList[];
  setListContent: Dispatch<SetStateAction<ICardList[] | undefined>>;
}

const List: React.FC<IList> = (props) => {
  const { listContent, setListContent } = props;

  const updateTitleTable = (value: string, index: number) => {
    const newList = [...listContent];
    const newObject = { ...listContent[index], title: value };
    newList[index] = newObject;

    setListContent(newList);
  };

  const updateCheckBox = (value: boolean, index: number, itemIndex: number) => {
    const newList = [...listContent];
    const newObject = { ...listContent[index].listItens[itemIndex], isChecked: value };
    newList[index].listItens[itemIndex] = newObject;

    setListContent(newList);
  };

  const updateItemName = (value: string, index: number, itemIndex: number) => {
    const newList = [...listContent];
    const newObject = { ...listContent[index].listItens[itemIndex], name: value };
    newList[index].listItens[itemIndex] = newObject;

    setListContent(newList);
  };

  return (
    <>
      {listContent.map((listContentItem: any, Listindex: number) => {
        return (
          <>
            <div className="list-section">
              <TextEditable
                TextValue={listContent[Listindex].title}
                onChange={(value) => {
                  updateTitleTable(value, Listindex);
                }}
              />
              <ul>
                {listContentItem.listItens.map((listItem: any, itemIndex: number) => {
                  return (
                    <li className="List-Section-Item">
                      <div className="List-Section-Text">
                        <span style={{ background: listItem.tagColor }} />
                        <div
                          className="List-Section-Item-Text"
                          style={
                            listItem.isChecked
                              ? { textDecoration: "line-through" }
                              : { textDecoration: "none" }
                          }
                        >
                          <TextEditable
                            TextValue={listItem.name}
                            onChange={(value) => {
                              updateItemName(value, Listindex, itemIndex);
                            }}
                            underlines={false}
                          />
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={listItem.isChecked}
                        onChange={(e) => {
                          updateCheckBox(e.target.checked, Listindex, itemIndex);
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
