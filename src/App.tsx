import { useEffect, useState } from "react";
import AddCard from "./component/AddCard";
import AppHeader from "./component/Header";
import List from "./component/List";
import Modal from "./component/AppModal";
import "./style/App.scss";
import "./style/FX.scss";
import CodeBlock from "./component/CodeBlock";
import ICardList from "./interface/ListContent";
import AppButton from "./component/AppButton";
import AppBox from "./component/AppBox";
import sampleImport from "./service/sampleImport";

function App() {
  const [listContent, setListContent] = useState<ICardList[]>();
  const [modalExportIsOpen, setModalExportIsOpen] = useState<boolean>(false);
  const [JsonExport, setJsonExport] = useState("");

  const [copyButtonText, setCopyButtonText] = useState("Copiar");

  const sampleImprtService = new sampleImport();

  const copyJsonExport = () => {
    navigator.clipboard.writeText(JsonExport);
    setCopyButtonText("Copiado !");
  };

  useEffect(() => {
    setTimeout(() => {
      if (copyButtonText === "Copiado !") {
        setCopyButtonText("Copiar");
      }
    }, 1000);
  }, [copyButtonText]);

  useEffect(() => {
    if (listContent) {
      setJsonExport(JSON.stringify(listContent, undefined, 1));
    } else {
      setJsonExport("[{}]");
    }
  }, [listContent]);

  useEffect(() => {
    sampleImprtService.getExempleCards().then((value: any) => {

      setListContent(JSON.parse(value));
      
    });
  }, []);

  return (
    <>
      <AppHeader setModalIsOpen={setModalExportIsOpen} />
      <section className="main-section">
        {listContent ? <List listContent={listContent} setListContent={setListContent} /> : <></>}
        <AddCard listContent={listContent} setListContent={setListContent} />
      </section>
      <Modal setCloseModal={setModalExportIsOpen} modalIsOpen={modalExportIsOpen}>
        <CodeBlock textContent={JsonExport} id={"JsonCode"} />

        <AppBox display={"flex"} justifyContent={"center"} margin={"25px 0 0 0"}>
          <AppButton
            onClick={() => {
              copyJsonExport();
            }}
          >
            {copyButtonText}
          </AppButton>
        </AppBox>
      </Modal>
    </>
  );
}

export default App;
