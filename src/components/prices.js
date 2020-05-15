export const iPadRentPrice = 29
export const androidRentPrice = 19
export const menuPrice = 49
export const orderPrice = 89
export const licensePrice = 3
export const takeawayPercentageFee = '2'

export const planPrice = plan =>
  plan === 'gaston-menu' ? menuPrice : orderPrice

export const totalPrice = (tabletCount, tabletPrice = 0, plan) =>
  tabletCount * tabletPrice + planPrice(plan)

export const tabletLicensePrice = tabletCount =>
  Math.max(0, tabletCount - 10) * licensePrice

export const extraLicenses = tabletCount => Math.max(0, tabletCount - 10)

export const tabletTotalPrice = (tabletCount, tabletPrice) =>
  tabletCount * tabletPrice
