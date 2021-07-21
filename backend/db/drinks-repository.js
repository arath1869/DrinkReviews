const { Drink } = require('./models');


async function create({title,imageURL, userId}) {
    const drink = await Drink.create({
        title,
        imageURL,
        userId
    })
    return drink.id
}

async function list(){
    return await Drink.findAll()
}

module.exports={
    create,
    list
}

