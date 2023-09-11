function clickClaimBonus() {
  var claimBonusElement = document.querySelector('[aria-label="Claim Bonus"]');

  if (claimBonusElement && claimBonusElement instanceof HTMLButtonElement) {
    console.log("🎉 Woohoo! Bonus fetched automagically!");
    claimBonusElement.click();
  }
}

setInterval(clickClaimBonus, 10000);
