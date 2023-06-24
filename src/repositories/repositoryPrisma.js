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
    const smartphones = await prisma.smartphone.findMany()
    return smartphones
  } catch (error) {
    console.log(error)
  }
}

const updateSmartphoneRepositoryPrisma = async (id, data) => {
  try {
    const updatedSmartphone = await prisma.smartphone.update({
      where: { id },
      data
    })
    return updatedSmartphone
  } catch (error) {
    console.log(error)
  }
}

const deleteSmartphoneRepositoryPrisma = async (id) => {
  try {
    const existingSmartphone = await prisma.smartphone.findUnique({
      where: { id }
    })

    if (!existingSmartphone) {
      throw new Error(`Smartphone com ID ${id} não encontrado`)
    }

    await prisma.smartphone.delete({
      where: { id }
    })

    return `Smartphone com ID ${id} deletado`
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  createSmartphoneRepository,
  getALLSmartphoneRepositoryPrisma,
  updateSmartphoneRepositoryPrisma,
  deleteSmartphoneRepositoryPrisma
}
