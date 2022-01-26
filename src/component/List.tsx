import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ICardList from "../interface/ListContent";
import cardsService from "../service/cardsService";
import TextAddItem from "./TextAddItem";
import Alpha from "./TextAddItem";
import TextEditable from "./TextEditable";

interface IList {
  listContent: ICardList[];
  setListContent: Dispatch<SetStateAction<ICardList[] | undefined>>;
}

const List: React.FC<IList> = (props) => {
  const { listContent, setListContent } = props;

  const [callUpdater, setCallUpdater] = useState(false);

  const serviceCards = new cardsService();

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

  const removeItemName = (value: string, index: number, itemIndex: number) => {
    if (value === "") {
      const newList = [...listContent];
      const newObject = [];

      for (let i = 0; i < listContent[index].listItens.length; i++) {
        if (listContent[index].listItens[i].name !== "") {
          newObject.push(listContent[index].listItens[i]);
        }
      }

      newList[index].listItens = newObject;

      setListContent(newList);
    }
  };

  useEffect(() => {
    serviceCards.cardUpdate(listContent);
  }, [listContent]);

  useEffect(() => {
    if (listContent === undefined) return;

    setTimeout(() => {
      serviceCards.cardUpdateGet().then((value: any) => {
        console.log(JSON.parse(value));
        setListContent(JSON.parse(value));
        setCallUpdater(!callUpdater);
      });
    }, 3000);
  }, [callUpdater]);

  return (
    <>
      {listContent.map((listContentItem: any, Listindex: number) => {
        return (
          <>
            <div className="list-section">
              <TextEditable
                TextValue={listContent[Listindex].title}
                onBlur={() => {}}
                onChange={(value) => {
                  updateTitleTable(value, Listindex);
                }}
              />
              <ul>
                {listContentItem.listItens.map((listItem: any, itemIndex: number) => {
                  return (
                    <li className="List-Section-Item">
                      <span style={{ background: listItem.tagColor }} />

                      <div className="List-Section-Container">
                        <div className="List-Section-Text">
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
                              onBlur={(value) => {
                                removeItemName(value, Listindex, itemIndex);
                              }}
                              underlines={false}
                              fontSize={"18px"}
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
                      </div>
                    </li>
                  );
                })}
                <TextAddItem listContent={listContent} setListContent={setListContent} index={Listindex} />
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
