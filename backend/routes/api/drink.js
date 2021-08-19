
const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')


const DrinksRepository = require('../../db/drinks-repository')
const router = express.Router();

router.get('/', asyncHandler(async function(_req, res) {
    const drink = await DrinksRepository.list();
    return res.json(drink)
}))

router.post(
    '/',
    singleMulterUpload("imageURL"),
    asyncHandler(async function (req,res) {
        const {title,userId} = req.body;
        const imageURL = await singlePublicFileUpload(req.file);
        const id = await DrinksRepository.create({title,userId,imageURL});
        return res.json(id)
    })
)

router.put(
    "/:id",
    asyncHandler(async function (req, res) {
        const drink = await DrinksRepository.updateDrink(req.body)
        return res.json(drink)
    })
)


router.delete('/:id', asyncHandler(async function(req,res){
    const id = await DrinksRepository.deleteDrink(req.params.id);
    return res.json({ id })
}))

module.exports = router;