import React from "react";
import TextEditable from "./TextEditable";

interface IList {
  listContent: any;
}

const List: React.FC<IList> = (props) => {
  const { listContent } = props;

  console.log(listContent);

  return (
    <>
      {listContent.map((listContentItem: any) => {
        return (
          <>
            <div className="list-section">
              <TextEditable TextValue={listContentItem.title} />
              <ul>
                {listContentItem.listItens.map((listItem: any) => {
                  return (
                    <li>
                      <p>
                        {listItem.name} <input type="checkbox" checked={listItem.isChecked} />
                      </p>
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
