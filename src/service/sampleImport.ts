class sampleImport {

  async getExempleCards() {
    return await ajaxConnection("GET", "exempleCards");
  };

}

function ajaxConnection(method: string, domain: string) {
  return new Promise(resolve => {
    var ajax = new XMLHttpRequest();

    ajax.open("GET", `http://localhost:3001/${domain}`, true);

    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        resolve(ajax.responseText);
      }
    }


  })
}

export default sampleImport;