class cardsService {

  async getExempleCards() {
    return await ajaxConnection("GET", "exempleCards", {});
  };

  async cardUpdate(list: any) {
    return await ajaxConnection("POST", "cardUpdater", list);
  }

  async cardUpdateGet() {
    return await ajaxConnection("GET", "cardUpdater", {});
  }

}

function ajaxConnection(method: string, domain: string, data: any) {
  return new Promise(resolve => {
    var ajax = new XMLHttpRequest();

    ajax.open(method, `http://192.168.0.3:3001/${domain}`, true);

    if (method === "POST") {
      const newData = JSON.stringify(data);
      ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      ajax.send(`data=${newData}`);
    } else {
      ajax.send();
    }

    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        resolve(ajax.responseText);
      }
    }


  })
}

export default cardsService;