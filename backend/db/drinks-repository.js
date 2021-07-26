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

async function updateDrink(drink) {
    const id = drink.id;
    delete drink.id
    console.log({ drink, id });
    await Drink.update(
        drink,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    return await Drink.findByPk(id)
}

async function deleteDrink(drinkId){
    const drink = await Drink.findByPk(drinkId);
    if(!drink) throw new Error('Cannot find drink');
    await Drink.destroy({ where: { id: drink.id } });
    return drink.id
}

module.exports={
    create,
    list,
    deleteDrink,
    updateDrink,
}

