const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');


const ReviewsRepository = require('../../db/reviews-repository')
const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    const review = await ReviewsRepository.list();
    return res.json(review)
}))

router.post(
    '/',
    asyncHandler(async function (req, res) {
        const { rating, comment, userId, drinksId } = req.body;
        const id = await ReviewsRepository.create({ rating, comment, userId, drinksId });
        return res.json({id})
    })
)

router.put(
    "/:id",
    asyncHandler(async function(req,res) {
        const review = await ReviewsRepository.updateReview(req.body)
        return res.json(review)
    })
)


router.delete('/:id', asyncHandler(async function (req, res) {
    const id = await ReviewsRepository.deleteReview(req.params.id);
    return res.json({ id })
}))

module.exports = router;