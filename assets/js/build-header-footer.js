// Tools to build the headers and footers on each page.
function buildHeader(id) {
  document.getElementById(id).innerHTML = `
    <div class="inner">
      <a href="index.html" class="image avatar" target="_self"><img src="images/avatar.png" alt="" /></a>
      <h1>
        <ul class="no-bullets" style="padding-bottom: 2em;">
          <li><strong>Lukas Schmid</strong>, PhD</li>
          <li>Postdoctoral Fellow </li>
          <li>@<a href="https://web.mit.edu/sparklab/">MIT-SPARK Lab</a></li>
        </ul>
      </h1>
    </div>`;
}

function buildFooter(id) {
  document.getElementById(id).innerHTML = `
    <div class="inner">
      <ul class="icons">
        <li><a href="https://github.com/Schmluk" class="icon brands fa-github"><span
              class="label">Github</span></a>
        </li>
        <li><a href="https://www.linkedin.com/in/lukas-schmid-599872217"
            class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="https://scholar.google.com/citations?user=r79fGI0AAAAJ"
            class="icon brands fa-google"><span class="label">Google Scholar</span></a></li>
      </ul>
      <ul class="icons">
        <li><a href="https://orcid.org/0000-0002-3961-8145" class="icon brands fa-orcid"><span
              class="label">ORCID</span></a></li>
        <li><a href="https://www.researchgate.net/profile/Lukas-Schmid-14"
            class="icon brands fa-researchgate"><span class="label">Research Gate</span></a></li>
        <li><a href="mailto:lschmid@mit.edu" class="icon solid fa-envelope"><span
              class="label">Email</span></a></li>
      </ul>
      <ul class="copyright">
        <li>&copy; Lukas Schmid</li>
        <li>Based on Designs by <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>`;
}

function buildNavigation(id) {
  document.getElementById(id).innerHTML = `
    <ul>
      <li><a class="icon solid fa-home" href="index.html" target="_self">Homepage</a></li>
      <li><a class="icon solid fa-user" href="bio.html" target="_self">About Me</a></li>
      <li><a class="icon solid fa-graduation-cap" href="publications.html" target="_self"> Publications</a></li>
      <li><a class="icon solid fa-university" href="students.html" target="_self">Teaching</a></li>
      <li><a class="icon solid fa-code" href="code.html" target="_self">Open Source Code</a></li>
    </ul>`;
}

function buildHeadFootNav(headerId, footerId, navId) {
  buildHeader(headerId);
  buildFooter(footerId);
  buildNavigation(navId);
}

buildHeadFootNav("header", "footer", "nav");

