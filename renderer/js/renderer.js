const form = document.querySelector("#img-form");
const img = document.querySelector("#img");
const outputPath = document.querySelector("#output-path");
const filename = document.querySelector("#filename");
const heightInput = document.querySelector("#height");
const widthInpt = document.querySelector("#width");

function loadImage(e) {
  const file = e.target.files[0];
  if (!checkImage(file)) {
    alertError("Please upload image file");
    return;
  }

  //get original dimensions
  const image = new Image();
  image.src = URL.createObjectURL(file);
  image.onload = function () {
    widthInpt.value = this.width;
    heightInput.value = this.height;
  };

  form.style.display = "block";
  filename.innerText = file.name;
  outputPath.innerText = path.join(os.homedir(), "imageresizer");
}

// send image to main process
function sendImage(e) {
  e.preventDefault();
  const width = widthInpt.value;
  const height = heightInput.value;
  const imgPath = img.files[0].path;
  if (!img.files[0]) {
    alertError("Please upload image file");
    return;
  }

  if (!checkWidthAndHeight(width, height)) {
    alertError("Please enter valid width and height");
    return;
  }

  //send to main using ipcRenderer
  ipcRenderer.send("image:resize", {
    imgPath,
    width,
    height,
  });
}

// receive success message from main process
ipcRenderer.on("image:done", () => {
  alertSuccess(
    `Image resized successfully to ${widthInpt.value}x${heightInput.value}. Check ${outputPath.innerText}`
  );
});

// check width and height
function checkWidthAndHeight(width, height) {
  if (width === "" || height === "") {
    return false;
  }

  if (parseInt(width) <= 0 || parseInt(height) <= 0) {
    return false;
  }

  return true;
}

// check file is image
function checkImage(file) {
  const acceptedTypes = ["image/jpeg", "image/png", "image/gif"];
  return file && acceptedTypes.includes(file["type"]);
}

function alertError(message) {
  Toastify.toast({
    text: message,
    duration: 1000,
    close: false,
    style: {
      background: "#ad0000",
      color: "#fff",
      textAlign: "center",
    },
  });
}

function alertSuccess(message) {
  Toastify.toast({
    text: message,
    duration: 2000,
    gravity: "top",
    close: false,
    style: {
      background: "green",
      color: "#fff",
      textAlign: "center",
    },
  });
}
img.addEventListener("change", loadImage);
form.addEventListener("submit", sendImage);
