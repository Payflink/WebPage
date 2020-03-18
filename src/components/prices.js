export const iPadRentPrice = 29
export const androidRentPrice = 19
export const proPlanPrice = 39
export const licensePrice = 3

export const totalProPrice = (tabletCount, tabletPrice = 0) =>
  Math.max(0, tabletCount - 10) * licensePrice +
  tabletCount * tabletPrice +
  proPlanPrice

export const tabletLicensePrice = tabletCount =>
  Math.max(0, tabletCount - 10) * licensePrice

export const extraLicenses = tabletCount => Math.max(0, tabletCount - 10)

export const tabletTotalPrice = (tabletCount, tabletPrice) =>
  tabletCount * tabletPrice
