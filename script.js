(() => {
  const iframe = document.querySelector("#sandbox-maui-preact-container");
  if (!iframe) throw new Error("Oracle iframe not found");

  const computeWindow = iframe.contentWindow;
  const computeDoc = computeWindow?.document;
  if (!computeDoc) throw new Error("Cannot access iframe document");

  const getCreateBtn = () =>
    [...computeDoc.querySelectorAll("button")]
      .find(b => b.textContent.trim() === "Create");

  let intervalSeconds = 30;
  let countdown = intervalSeconds;

  const status = document.createElement("div");
  status.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999999;
    padding: 8px 12px;
    background: #00688c;
    color: #fff;
    font: 16px sans-serif;
    text-align: center;
  `;
  document.body.appendChild(status);

  const timerId = setInterval(() => {
    if (countdown > 0) {
      status.textContent = `Clicking Create in ${countdown}s`;
      countdown--;
      return;
    }

    const btn = getCreateBtn();
    if (!btn) {
      status.textContent = "Create button not found";
      status.style.background = "#b33";
      return;
    }

    btn.click();
    status.textContent = `Clicked Create at ${new Date().toLocaleTimeString()}`;
    status.style.background = "#2d8a34";
    countdown = intervalSeconds;
  }, 1000);

  window.oracleCreateClicker = {
    stop() {
      clearInterval(timerId);
      status.remove();
    },
    setSeconds(n) {
      intervalSeconds = Number(n);
      countdown = intervalSeconds;
    }
  };

  console.log("Started. Stop with oracleCreateClicker.stop()");
})();
