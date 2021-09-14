export const eventNameParser = (name: string) => {
  switch (name) {
    case 'RedeemUnderlying':
      return 'Withdraw';
    case 'ClaimReward':
      return 'Claim-Rewards';
    default:
      return name;
  }
};
