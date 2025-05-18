// Basic controller/gamepad/remote navigation mapping
export function setupGamepadNavigation(setTab, setShowSettings, setShowAccount) {
  let lastTab = null;
  function poll() {
    const gp = navigator.getGamepads()[0];
    if (!gp) return requestAnimationFrame(poll);

    // Left/Right dpad or analog stick
    if (gp.buttons[14]?.pressed) setTab(t=>(["movies","music","gaming","apps","store","discord","settings"][(["movies","music","gaming","apps","store","discord","settings"].indexOf(t)+6)%7]));
    if (gp.buttons[15]?.pressed) setTab(t=>(["movies","music","gaming","apps","store","discord","settings"][(["movies","music","gaming","apps","store","discord","settings"].indexOf(t)+1)%7]));
    // Settings: 'Start' or 'Menu'
    if (gp.buttons[9]?.pressed) setShowSettings(v=>!v);
    // Account: 'Select' or 'Share'
    if (gp.buttons[8]?.pressed) setShowAccount(v=>!v);

    requestAnimationFrame(poll);
  }
  poll();
}