<!DOCTYPE html>
<body>
  <div>
    <span id ="text"></span>
  </div>
  <button id="button_test">click aqui!</button>
</body>
<script>
  let clickCount = 0;
  let textToDisplay = document.getElementById("text");

  document.getElementById("button_test")
          .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);
</script>
</html>