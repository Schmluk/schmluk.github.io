// Automatically build the open-source code by filling in all table rows based on ID. Called in code.html.

let tables = document.getElementsByTagName("tr");

for (let i = 0; i < tables.length; i++) {
  if (Object.keys(pubCode).includes(tables[i].id)) {
    let code = pubCode[tables[i].id];
    var text = "<td><a href=" + code.link + " ><span class='image left'><img alt='" + code.title + "' src='images/code/" + code.image +"'/></span></a><h3 style='margin-bottom: 0; color: var(--activecolor)'><a href=" + code.link + ">" + code.title + "</a></h3>" + code.description + "</td>";
    tables[i].innerHTML = text;
  }
}
