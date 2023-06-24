const { prisma } = require('../utils/prismaClient')

const createSmartphoneRepository = async (data) => {
  try {
    const smartphoneCreated = await prisma.smartphone.create({
      data,
      select: {
        id: true,
        name: true,
        price: true,
        image: true
      }
    })
    return smartphoneCreated
  } catch (error) {
    console.log(error)
  }
}

const getALLSmartphoneRepositoryPrisma = async () => {
  try {
    await prisma.smartphone.findMany()
    return null
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createSmartphoneRepository,
  getALLSmartphoneRepositoryPrisma
}
