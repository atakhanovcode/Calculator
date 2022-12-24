let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  input.value = "";
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    input.value += button.innerHTML;
    input.value = input.value.replace("//", "/");
    input.value = input.value.replace("**", "*");
    input.value = input.value.replace("++", "+");
    input.value = input.value.replace("--", "-");
    input.value = input.value.replace("/*", "/");
    input.value = input.value.replace("/+", "/");
    input.value = input.value.replace("/-", "/");
    input.value = input.value.replace("*/", "*");
    input.value = input.value.replace("*+", "*");
    input.value = input.value.replace("*-", "*");
    input.value = input.value.replace("+/", "+");
    input.value = input.value.replace("+-", "+");
    input.value = input.value.replace("+*", "+");
    input.value = input.value.replace("-*", "-");
    input.value = input.value.replace("-+", "-");
    input.value = input.value.replace("-/", "-");

    if (input.value.length >= 1) {
      if (input.value.substring(0, 2) == 0) {
        input.value = input.value.slice(1, input.value.length);
      }
    }
    if (
      input.value.substring(0, 1) == "+" ||
      input.value.substring(0, 1) == "-" ||
      input.value.substring(0, 1) == "*" ||
      input.value.substring(0, 1) == "/"
    ) {
      input.value = "";
    }
    if (input.value.endsWith("-")) {
    }
  });
});
equal.addEventListener("click", () => {
  input.value = eval(input.value);
});
