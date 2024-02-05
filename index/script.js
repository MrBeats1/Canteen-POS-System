document.getElementById('homecontent').style.display = 'block';

function toggleContent(contentId) {
  // Hide all content divs
  const allContentDivs = document.querySelectorAll('.maincontent > div');
  allContentDivs.forEach(div => {
    div.style.display = 'none';
  });

  // Show the clicked content div
  const clickedContentDiv = document.getElementById(`${contentId}content`);
  if (clickedContentDiv) {
    clickedContentDiv.style.display = 'block';
  }
}