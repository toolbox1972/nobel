<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/index.css">
  <title>Home -Nobel search engine</title>
</head>
<body>

    <!-- Link to Alfred Nobel picture
    Ref: https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwi0qdDyksniAhWh5KYKHc50ApkQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D2ahUKEwi0qdDyksniAhWh5KYKHc50ApkQjRx6BAgBEAU%26url%3Dhttps%253A%252F%252Fen.wikipedia.org%252Fwiki%252FFile%253ANobel_Prize.png%26psig%3DAOvVaw2RZSF5ixNSjqWSMDDFrn4F%26ust%3D1559506153142026&psig=AOvVaw2RZSF5ixNSjqWSMDDFrn4F&ust=1559506153142026
    -->

<div class="wrapper">

    <div class="header-1">
      <img
          id="nobel-pic"
          src="images/nobel.png"
          alt="alfred_nobel"
          width="180"
      >
    </div>

    <div class="header-2">
        Alfred Nobel <br /> search engine
    </div>

    <div class="search-area">
        <input id="search-box" placeholder="[YYYY]"></input>

        <button
              id="submit-search"
              type="button"
              name="button"
              onclick="submitRequest()"
          >
              Submit request
        </button>
   </div>

      <div id="result-area" class="result-area">
        <div id="year" class="year"></div>
        <div id="category" class="category"></div>
        <div id="name" class="name"></div>
      </div>

</div>

<script src="js/index.js" charset="utf-8"></script>

</body>
</html>
