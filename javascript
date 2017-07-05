<!DOCTYPE html>
<html>
<body>

<h2>Playing with javascript</h2>

<button onclick="myFunction()">Click</button>

<script>
function myFunction() {
    alert("Welcome!");
}
</script>

<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

<img src="http://static3.businessinsider.com/image/53d964206da811f82189cded/neil-degrasse-tyson-to-gmo-critics-chill-out.jpg" alt="Mountain View" style="width:304px;height:228px;">

</body>
</html>
