import axios from "axios";

/**
 * Asynchronously fetches a list of courses by category ID.
 * @param {number} id - The ID of the category to fetch courses for.
 * @returns {Promise} A promise that resolves with the list of courses.
 * @throws {Error} If the request fails.
 */

export const FetchCourses = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/category/get-courses?category_id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const json = await response.json()
    return json.courses
}


export const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
};

/**
 * Asynchronously updates a category with the provided data.
 * @param {Object} data - An object containing the updated data for the category.
 * @param {number} data.id - The ID of the category to update.
 * @param {string} data.name - The new name of the category.
 * @param {string} data.link_title - The new link title of the category.
 * @param {string} data.description - The new description of the category.
 * @param {number} data.order_by - The new order of the category.
 * @param {string} data.category_status - The new status of the category.
 * @returns {Promise} A promise that resolves with the response from the server.
 * @throws {Error} If the request fails.
 */

export const EditCategory = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/category/update-category?category_id=${data.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: data.name, link_title: data.link_title, description: data.description, order_by: data.order_by, category_status: data.category_status }),
    });

    const json = await response.json()
    return json
}


/**
 * 
 * @param {data} data - object containing the course_id ,name,status and category_id 
 * @param {id} id - Category Id 
 * @returns {Promise} A promise that resolves with the response from the server.
 */

export const EditCourses = async (data, id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/category/update-course`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: data.name, slug: data.slug, point1: data.point1, point2: data.point2, registered: data.registered, course_id: data._id, category_id: id, course_status: data.course_status }),
    });

    const json = await response.json()
    return json
}


/**

AddCategory is an async function that makes a POST request to the server to add a new category.
@async
@function
@param {Object} data - The data of the new category.
@param {string} data.id - The id of the new category.
@param {string} data.name - The name of the new category.
@param {string} data.link_title - The link title of the new category.
@param {string} data.description - The description of the new category.
@param {string} data.order_by - The order by of the new category.
@param {string} data.category_status - The status of the new category.
@returns {Object} - The server's response in JSON format.
*/

export const AddCategory = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/category/add-category`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: data.id, name: data.name, link_title: data.link_title, description: data.description, order_by: data.order_by, category_status: data.category_status }),
    });

    const json = await response.json()
    return json
}


/**

AddCourse is an async function that makes a POST request to the server to add a new course to a category.
@async
@function
@param {Object} data - The data of the new course.
@param {string} data.name - The name of the new course.
@param {string} data.course_status - The status of the new course.
@param {string} id - The id of the category to which the course will be added.
@returns {Object} - The server's response in JSON format.
*/

export const AddCourse = async (data, id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/category/add-course`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category_id: id, name: data.name, course_status: data.course_status }),
    });

    const json = await response.json()
    return json
}


/**

FetchCountries is an async function that makes a GET request to the server to retrieve a list of countries.
@async
@function
@returns {Array} - An array of countries in JSON format.
*/

export const FetchCountries = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/location/countries`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': sessionStorage.getItem('token')
        },
    });

    const json = await response.json()

    return json.countries
}


/**

FetchCountriesCity is an async function that makes a GET request to the server to retrieve a list of cities for a specific country.
@async
@function
@param {string} id - The id of the country to retrieve the cities for.
@returns {Array} - An array of cities in JSON format.
*/


export const FetchCountriesCity = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/location/countries/${id}/cities`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': sessionStorage.getItem('token')
        },
    });

    const json = await response.json()
    return json.cities
}


/**

AddCountry is an async function that makes a POST request to the server to create a new country.
@async
@function
@param {Object} data - The data of the new country.
@param {string} data.id - The id of the new country.
@param {string} data.name - The name of the new country.
@param {string} data.continent_id - The id of the continent of the new country.
@param {string} data.weekend_constant_value_id - The weekend constant value id of the new country.
@param {string} data.short_name - The short name of the new country.
@param {string} data.dialing_code - The dialing code of the new country.
@param {string} data.time_zone_constant_value_id - The time zone constant value id of the new country.
@param {string} data.currency_symbol - The currency symbol of the new country.
@param {string} data.status - The status of the new country.
@returns {Object} - The server's response in JSON format.
*/

export const AddCountry = async (data) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/location/create-country`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: data.id,
            name: data.name,
            continent_id: data.continent_id,
            weekend_constant_value_id: data.weekend_constant_value_id,
            short_name: data.short_name,
            dialing_code: data.dialing_code,
            time_zone_constant_value_id: data.time_zone_constant_value_id,
            currency_symbol: data.currency_symbol,
            status: data.status
        }),
    });

    const json = await response.json()
    return json
}


/**
 
AddCity is an async function that makes a POST request to the server to create a new city.
@async
@function
@param {Object} data - The data of the new city.
@param {string} data.id - The id of the new city.
@param {string} data.name - The name of the new city.
@param {string} data.short_name - The short name of the new city.
@param {string} data.city_slug - The city slug of the new city.
@param {string} data.time_zone_constant_value_id - The time zone constant value id of the new city.
@param {string} data.status - The status of the new city.
@param {string} _id - The id of the country to which the city will be added.
@returns {Object} - The server's response in JSON format.
*/

export const AddCity = async (data, _id) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/location/add-city`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: data.id,
            name: data.name,
            country_id: _id,
            short_name: data.short_name,
            city_slug: data.city_slug,
            time_zone_constant_value_id: data.time_zone_constant_value_id,
            status: data.status
        }),
    });

    const json = await response.json()
    return json
}

/**

@function
@async
@returns {Promise<Object>} - The response object from the server containing all course pages.
@throws {Error} - If there is an error with the axios request.
Fetches all course pages from the server using the axios library. The server URL is retrieved from the REACT_APP_SERVER_URL environment variable.
*/

// Fetch all the pages availabe and display in table
export const FetchPages = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/course/get-all?id=${id}`)
    return res
}

/**

@function
@async
@returns {Promise<Array>} - The array of all categories from the server.
@throws {Error} - If there is an error with the axios request.
Fetches all categories from the server using the axios library. The server URL is retrieved from the REACT_APP_SERVER_URL environment variable.
The function returns the data.category from the response object.
*/

// Fetch all the Categories 
export const FetchCategories = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/category/get-all-category`)
    return res.data.category
}


export const FetchTemplates = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/course/templates`)
    return res.data
}

/**

@function
@async
@returns {Promise<Array>} - The array of all categories from the server.
@throws {Error} - If there is an error with the axios request.
Fetches all categories from the server using the axios library. The server URL is retrieved from the REACT_APP_SERVER_URL environment variable.
The function returns the data.category from the response object.
*/

// Fetch all Testimonials
export const FetchTestimonials = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/testimonials`)
    return res.data.testimonialsWithCourses
}


// Fetch all Forms
export const FetchForms = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/form`, {
        headers: {
            'auth-token': sessionStorage.getItem('token'),
        }
    })
    return res.data
}

// Fetch particular FormsDetials
export const FetchFormsDeatials = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/form/${id}`, {
        headers: {
            'auth-token': sessionStorage.getItem('token'),
        }
    })
    return res.data.Detials
}

// Fetch particular lead detial
export const FetchLeadDeatials = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/form/get/${id}`, {
        headers: {
            'auth-token': sessionStorage.getItem('token'),
        }
    })
    return res.data.Detials[0]
}




//fetch all the courses
export const GetAllCourses = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/category/get-courses/all`)
    return res.data
}

// delete the course from the categor and the pages table
export const DeleteCoursePage = async (course) => {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/category/delete-course/${course._id}`, { course })
    return res.data
}

// fetch trainer from the table
export const GetTrainers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/trainer/get-trainers`)
    return res.data.trainers
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Manage Blogs Category calls

// fetch the categorys of the blogs
export const fetchBlogCategory = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog-category`)
    return res.data.data
}

// Delet the blog-category 
export const DeletBlogCategory = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog-category/${id}`)
    return res.data.data
}

// delets the blogs from the articals tabel and from author and category 
export const DeletBlog = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
    return res.data.message
}

// fetch the blogs from catgory with the paramaters of id and limite
export const Fetchblogs = async (id, numBlogs) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog-category/get-blogs?category_id=${id}&limit=${numBlogs}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const json = await response.json()
    return json.blogs
}

export const FetchblogsList = async (id, numBlogs) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog-category/list/get-blogs?category_id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const json = await response.json()
    return json.blogs
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Manage Blog Author Calls

export const fetchBlogAuthor = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog-author`)
    return res.data.data
}

// Delet the blog-author 
export const DeletBlogAuthor = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog-author/${id}`)
    return res.data.data
}

// fetch the blogs from Author with the paramaters of id and limite
export const FetchAuthblogs = async (id, numBlogs) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog-author/get-blogs?category_id=${id}&limit=${numBlogs}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const json = await response.json()
    return json.blogs
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Manage Blog Articals Calls

// fetch one article from the Article table
export async function fetchOneBlog(id) {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/get-one/${id}`)
    return res.data.data
} 
