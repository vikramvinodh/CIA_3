const express = require('express');
const Author = require('../../Models/Blog/Author');
const router = express.Router();
const Category = require('../../Models/Blog/Category')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var formattedDate = dd + '-' + mm + '-' + yyyy.toString().substr(-2);

router.post('/', async (req, res) => {

    try {
        const data = req.body;
        data.createdAt = formattedDate;
        data.updatedAt = formattedDate;
        const result = await Category.create(data);

        if (!result) {
            throw new Error("Cannot create the category")
        }
        res.status(200).json({ message: "Created Succesfully", success: true })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/', async (req, res) => {

    try {

        const data = await Category.find()
            .select("name updatedAt")
            .populate('blogs');
        res.status(200).json({ message: "Fetch Succesfully", success: true, data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});

router.get('/get-blogs', async (req, res) => {
    const { category_id, limit } = req.query;

    try {
        const category = await Category.findOne({ _id: category_id }).populate('blogs');

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found',
            });
        }

        const final = category.blogs.slice(0, limit);

        const blogs = await Promise.all(final.map(async ele => {
            const author = await Author.findOne({ _id: ele.author });
            return {
                ...ele.toObject(),
                author,
            };
        }));

        return res.status(200).json({ success: true, blogs: blogs });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/list/get-blogs', async (req, res) => {
    const { category_id } = req.query;
    let courses;
    try {

        if (category_id === 'undefined') {
            courses = await Category.findOne({})
                .populate({
                    path: 'blogs',
                    populate: {
                        path: 'author',
                        model: 'blog-authors'
                    }
                })

        } else {
            const category = await Category.findOne({ _id: category_id })
                .populate({
                    path: 'blogs',
                    populate: {
                        path: 'author',
                        model: 'blog-authors'
                    }
                })
            return res.status(200).json({ success: true, blogs: category });
        }

        return res.status(200).json({ success: true, blogs: courses });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/get-one/:id', async (req, res) => {

    try {

        const data = await Category.findById(req.params.id);

        if (!data) {
            throw new Error("Cannot find data for the id")
        }

        res.status(200).json({ message: "Created Succesfully", success: true, data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.patch('/:id', async (req, res) => {
    const data = req.body;
    try {
        data.updatedAt = formattedDate;
        const result = await Category.updateOne(
            { _id: req.params.id },
            { $set: data },
            { new: true } // options
        );

        if (!result) {
            throw new Error("Cannot Update category")
        }

        res.status(200).json({ message: "Updated Succesfully", success: true })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/:id', async (req, res) => {

    try {

        const id = req.params.id;
        const result = await Category.findByIdAndDelete(id);

        if (!result) {
            throw new Error("Cannot Update category")
        }

        res.status(200).json({ message: "Deleted Succesfully", success: true })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.get('/fetch', async (req, res) => {

    try {
        const data = await Category.find()
            .populate({
                path: 'article',
                populate: {
                    path: 'author',
                    model: 'blog-authors'
                }
            })
        res.status(200).json({ success: true, Category: data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router 