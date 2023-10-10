const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Article = require('../../Models/Blog/Articals');
const Author = require('../../Models/Blog/Author');
const Category = require('../../Models/Blog/Category');
const dotenv = require("dotenv");
dotenv.config();


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var formattedDate = dd + '-' + mm + '-' + yyyy.toString().substr(-2);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/blogs");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname +
            "-" +
            Date.now() +
            path.extname(file.originalname).toLowerCase()
        );
    },
});
const upload = multer({ storage: storage });

// Handle image uploads
router.post('/upload-image', upload.single('image'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No image uploaded' });
    }

    const imageUrl = `${process.env.SERVER}/${file.path}`;

    return res.status(200).json({ url: imageUrl });
});


// Handle Artical uploads
router.post('/', async (req, res) => {

    try {
        const data = req.body;
        data.createdAt = formattedDate;
        data.updatedAt = formattedDate;
        const result = await Article.create(data);

        if (!result) {
            throw new Error("Couldn't save the Artical")
        } else {
            const authorId = data.author;
            const catagoryId = data.category;
            const aut = await Author.findByIdAndUpdate(
                authorId,
                { $push: { blogs: result._id } },
                { new: true }
            );

            const cat = await Category.findByIdAndUpdate(
                catagoryId,
                { $push: { blogs: result._id } },
                { new: true }
            );
        }

        res.status(200).json({ message: "Created Succesfully", success: true })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});

router.get('/get-all', async (req, res) => {
    try {
        const data = await Article.find()
            .select("slug title updatedAt smalldesc")

        if (!data) {
            throw new Error("Cannot find data for the id")
        }

        res.status(200).json({ message: "Created Succesfully", success: true, data })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


router.get('/recent-posts', async (req, res) => {
    try {
        const recentPosts = await Article.find()
            .sort({ BlogArticleid: -1 }) // Sort by most recent first
            .limit(10) // Limit to 5 most recent posts
            .populate('author', 'name email') // Populate author field with name and email only

        res.status(200).json({ success: true, data: recentPosts })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching recent posts', error: error.message })
    }
})



router.get('/:slug', async (req, res) => {
    try {
        const data = await Article.findOne({ slug: req.params.slug })
            .select('title body meta_title meta_description meta_robots updatedAt')
            .populate("author", 'name email')

        if (!data) {
            throw new Error("Cannot find data for the id")
        }

        res.status(200).json({ message: "Created Succesfully", success: true, data })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


router.get('/get-one/:id', async (req, res) => {

    try {

        const data = await Article.findById(req.params.id)
            .populate("author")
            .populate("category");

        if (!data) {
            throw new Error("Cannot find data for the id")
        }

        res.status(200).json({ message: "Created Succesfully", success: true, data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.patch('/:id', async (req, res) => {

    try {

        const data = req.body;
        data.updatedAt = formattedDate;
        const update = await Article.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: data },
            { new: true }
        )

        if (!update) {
            throw new Error("Cannot Update Article")
        }

        res.status(200).json({ message: "Update Succesfully", success: true })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.delete('/:id', async (req, res) => {

    try {

        const id = req.params.id;

        // Find the blog and its category and author
        const blog = await Article.findById(id);
        if (!blog) {
            throw new Error("Blog not found");
        }

        const category = await Category.findOne({ blogs: id });
        if (!category) {
            throw new Error("Category not found");
        }

        const author = await Author.findById(blog.author);
        if (!author) {
            throw new Error("Author not found");
        }

        // Remove the blog from the Article collection
        const result = await Article.findByIdAndDelete(id);
        if (!result) {
            throw new Error("Cannot delete blog");
        }

        // Remove the blog ID from the category and author
        category.blogs.pull(id);
        await category.save();
        author.blogs.pull(id);
        await author.save();

        res.status(200).json({ message: "Deleted successfully", success: true });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router 