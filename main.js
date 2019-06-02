function generateQR() {
  let size = Math.min(window.innerWidth, window.innerHeight) * 0.9
  const qrCodeSetting = {
    size: size,
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
