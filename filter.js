function filterFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Convert li elements to an array and sort them alphabetically
  var listItems = Array.prototype.slice.call(li);
  listItems.sort(function(a, b) {
    var aText = a.textContent || a.innerText;
    var bText = b.textContent || b.innerText;
    return aText.localeCompare(bText);
  });

  // Append sorted list items to the ul element
  for (i = 0; i < listItems.length; i++) {
    ul.appendChild(listItems[i]);
  }

  // Filter the sorted list based on user input
  for (i = 0; i < listItems.length; i++) {
    a = listItems[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listItems[i].style.display = "";
    } else {
      listItems[i].style.display = "none";
    }
  }
}
