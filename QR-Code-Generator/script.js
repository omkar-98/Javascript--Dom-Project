const qrCodeInput = document.querySelector(".qr-code-input");
const qrCodeContainer = document.querySelector(".qr-code-container");
const qrCodeBtn = document.querySelector(".qr-code-btn");
const errorMsg = document.querySelector(".error-text");

qrCodeBtn.addEventListener("click", () => {
    validateInputField();
});

function validateInputField() {
    console.log(qrCodeInput.value);

    if (qrCodeInput.value.trim().length > 0) {
        generateQrCode();
    }
    else {
        errorMsg.innerText = "Please enter a Text or Url to generate a QR Code"
    }

}

function generateQrCode() {
    qrCodeContainer.innerHTML = "";
    new QRCode(qrCodeContainer, {
        text: qrCodeInput.value,
        width: 350,
        height: 350,
        colorDark: "#000000",
        colorWhite: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })
}

qrCodeContainer.innerHTML = "";
errorMsg.innerText = "";


