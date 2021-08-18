const { Drink } = require('./models');
const { Review } = require('./models');


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

async function updateDrink(drinks) {
    const id = drinks.id;
    delete drinks.id
    console.log({ drinks, id });
    await Drink.update(
        drinks,
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
    await Review.destroy({ where: { drinksId: drink.id} })
    await Drink.destroy({ where: { id: drink.id } });
    return drink.id
}

module.exports={
    create,
    list,
    deleteDrink,
    updateDrink,
}

