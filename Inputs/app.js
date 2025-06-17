function checkAddress(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  } else {
    console.log(document.getElementById(fieldId).value);
  }
}

function fillCity() {
  var cityName;
  var ProvinceName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "12345":
      cityName = "karachi";
      ProvinceName = "sindh";
      break;
    case "54321":
      cityName = "lahore";
      ProvinceName = "Punjab";
      break;
    case "67890":
      cityName = "islamabad";
      ProvinceName = "Punjab";
      break;
  }
  document.getElementById("city").value = cityName;
  document.getElementById("province").value = ProvinceName;
}