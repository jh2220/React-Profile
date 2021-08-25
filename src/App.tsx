import React, { useState } from "react";
import AddCard from "./component/AddCard";
import AppHeader from "./component/Header";
import List from "./component/List";
import "./style/App.scss";

function App() {
  const [listContent, setListContent] = useState([
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

  return (
    <>
      <AppHeader />
      <section className="main-section">
        <List listContent={listContent} />
        <AddCard />
      </section>
    </>
  );
}

export default App;
