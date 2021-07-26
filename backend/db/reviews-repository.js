const { Review } = require('./models');


async function create({ rating, comment, userId, drinksId }) {
    const review = await Review.create({
        rating,
        comment,
        userId,
        drinksId,
    })
    return review.id
}

async function list() {
    return await Review.findAll()
}

async function deleteReview(reviewId) {
    const review = await Review.findByPk(reviewId);
    if (!review) throw new Error('Cannot find review');
    await Review.destroy({ where: { id: review.id } });
    return review.id
}

module.exports = {
    create,
    list,
    deleteReview
}
