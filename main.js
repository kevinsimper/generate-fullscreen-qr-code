function generateQR() {
  const qrCodeSetting = {
    size: document.body.clientWidth,
    ecLevel: QrCode.ecLevel.QUARTILE,
    minVersion: 8,
    background: "#fff",
    mode: QrCode.modes.NORMAL,
    // radius: 0.5,
    mSize: 0.15
  };

  const element = document.getElementById("qrCode");
  element.innerHTML = ""; // clear from earlier codes

  const qrCode = new QrCode.qrcode(element);
  qrCode.generate(url.value, qrCodeSetting);
}

window.generateQR = generateQR;
