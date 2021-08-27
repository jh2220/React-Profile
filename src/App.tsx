import React, { useEffect, useState } from "react";
import AddCard from "./component/AddCard";
import AppHeader from "./component/Header";
import List from "./component/List";
import Modal from "./component/AppModal";
import "./style/App.scss";

interface ICardList {
  title: string;
  listItens: IlistItens[];
}

interface IlistItens {
  name: string;
  isChecked: boolean;
}

function App() {
  const [listContent, setListContent] = useState<ICardList[]>();
  const [modalExportIsOpen, setModalExportIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setListContent([
      {
        title: "Simple Title",
        listItens: [
          { name: "Alpha", isChecked: false },
          { name: "Beta", isChecked: true },
        ],
      },
      {
        title: "List 2",
        listItens: [{ name: "Charlie", isChecked: false }],
      },
    ]);

    console.log("Load Data");
  }, []);

  return (
    <>
      <AppHeader setModalIsOpen={setModalExportIsOpen} />
      <section className="main-section">
        {listContent ? <List listContent={listContent} /> : <></>}
        <AddCard />
      </section>

      <div
        className="Transition-Opacity"
        style={modalExportIsOpen ? { display: "block" } : { display: "none" }}
      >
        <Modal>
          {listContent
            ? listContent.map((item) => {
                return (
                  <p>
                    <br />
                    {JSON.stringify(item)}
                    <br />
                  </p>
                );
              })
            : "false"}
        </Modal>
      </div>
    </>
  );
}

export default App;
