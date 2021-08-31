import React, { useEffect, useState } from "react";
import AddCard from "./component/AddCard";
import AppHeader from "./component/Header";
import List from "./component/List";
import Modal from "./component/AppModal";
import "./style/App.scss";
import "./style/FX.scss";
import CodeBlock from "./component/CodeBlock";
import ICardList from "./interface/ListContent";

function App() {
  const [listContent, setListContent] = useState<ICardList[]>();
  const [modalExportIsOpen, setModalExportIsOpen] = useState<boolean>(false);
  const [JsonExport, setJsonExport] = useState("");

  useEffect(() => {
    if (listContent) {
      setJsonExport(JSON.stringify(listContent, undefined, 1));
    } else {
      setJsonExport("[{}]");
    }
  }, [listContent]);

  useEffect(() => {
    setListContent([
      {
        title: "Simple Title",
        listItens: [
          { name: "Alpha", isChecked: false, tagColor: "#09f" },
          { name: "Beta", isChecked: true, tagColor: "#f54275" },
        ],
      },
      {
        title: "List 2",
        listItens: [{ name: "Charlie", isChecked: false, tagColor: "#eff542" }],
      },
    ]);
  }, []);

  return (
    <>
      <AppHeader setModalIsOpen={setModalExportIsOpen} />
      <section className="main-section">
        {listContent ? <List listContent={listContent} setListContent={setListContent} /> : <></>}
        <AddCard />
      </section>
      <Modal setCloseModal={setModalExportIsOpen} modalIsOpen={modalExportIsOpen}>
        <CodeBlock textContent={JsonExport} id={"JsonCode"} />
        <input
          type="button"
          value="Copiar"
          onClick={() => {
            navigator.clipboard.writeText(JsonExport);

            //.setSelectionRange(0, 99999);
            //document.execCommand("copy");
          }}
        />
      </Modal>
    </>
  );
}

export default App;
