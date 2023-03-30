// Tools to build the publication tables. Called in publications.html.
function buildTable(publications, tablename) {
  var tbody = document.getElementById(tablename).getElementsByTagName('tbody')[0];
  for (let i = 0; i < publications.length; i++) {
    addTableRow(publications[i], tbody);
  }
}

function addTableRow(publication, tbody) {
  // Build the row content for the publication.
  var text = ""

  // Lead image.
  text += "<td style='width: 25%; padding-right: 2em; padding-bottom: 2em'><a href='" + publication.venue.link + "'  ><img src='images/publications/" + publication.venue.image + "' style='width: 100%' alt=" + publication.venue.title + "'></span></a></td>";

  // Authors.
  text += "<td style='width: 75%; vertical-align: top; padding-bottom: 2em; line-height: 1.4em'>";
  for (let i = 0; i < publication.authors.length; i++) {
    // Separators.
    if (i > 0) {
      if (publication.authors.length > 2) {
        text += ", ";
      } else {
        text += " ";
      }
    }
    if (i == publication.authors.length - 1 && i > 0) {
      text += "and ";
    }

    // Highlights.
    var name_check = publication.authors[i].toLowerCase();
    if (name_check == "l. schmid" || name_check == "lukas schmid" || name_check == "schmid, l." || name_check == "schmid, lukas") {
      text += "<strong>" + publication.authors[i];
      if (publication.sharedfirst) {
        text += "*";
      }
      text += "</strong>";
    } else {
      text += publication.authors[i];
    }
  }

  // Title and reference.
  text += "<br><span style='font-weight: bold; color: rgb(80, 100, 200);'>" + publication.title + "</span><br>" + publication.venue.name + ", ";
  if (publication.pages != "") {
    text += publication.pages + ", ";
  }
  text += publication.year + ".<br>";

  // Links.
  for (let i = 0; i < publication.links.length; i++) {
    text += "[<a href=" + publication.links[i].link + " >" + publication.links[i].name + "</a>]&nbsp;";
  }

  text += "</div></td>"

  // Add the data to the table.
  tbody.insertRow().innerHTML = text;
}

