(function () {
  const userCodes = [115, 117, 112, 112, 111, 114, 116, 46, 118, 97, 107, 116, 112, 114, 97, 121];
  const domainCodes = [112, 114, 111, 116, 111, 110, 46, 109, 101];
  const decode = (codes) => String.fromCharCode.apply(null, codes);
  const address = `${decode(userCodes)}${String.fromCharCode(64)}${decode(domainCodes)}`;

  document.querySelectorAll(".js-support-email").forEach((link) => {
    link.textContent = address;
    link.href = `${["mai", "lto:"].join("")}${address}`;
  });
})();
