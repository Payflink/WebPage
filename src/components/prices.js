export const menuPrice = 49
export const orderPrice = 89
export const licensePrice = 3
export const takeawayPercentageFee = '2'

export const planPrice = plan =>
  plan === 'gaston-menu' ? menuPrice : orderPrice

export const totalPrice = (plan) => planPrice(plan)
