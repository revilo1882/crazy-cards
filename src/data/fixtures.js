export const cards = [
  {
    id: 0,
    name: 'Student Life',
    apr: 18.9,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    creditAvailable: 1200,
    requirements: {
      validEmploymentStatus: ['student'],
      minimumAnnualIncome: 0
    },
    selected: false
  },
  {
    id: 1,
    name: 'Anywhere Card',
    apr: 33.9,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    creditAvailable: 300,
    requirements: {
      validEmploymentStatus: ['fullTime', 'partTime', 'student'],
      minimumAnnualIncome: 0
    },
    selected: false
  },
  {
    id: 2,
    name: 'Liquid Card',
    apr: 33.9,
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    creditAvailable: 3000,
    requirements: {
      validEmploymentStatus: ['fullTime', 'partTime', 'student'],
      minimumAnnualIncome: 16000
    },
    selected: false
  }
]
