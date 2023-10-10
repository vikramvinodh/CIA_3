import React, { useEffect, useState, useCallback, useReducer, useContext, useRef } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import * as bi from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'
import DeleteModal from '../../modals/DeleteModal'
import { fetchBlogCategory, FetchblogsList } from '../../functions'
import Loading from '../../../../alert/Loading'
import UserContext from '../../../context/UserContext'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import $ from 'jquery';
import 'select2';

// If you don't know what reducer is then you will not understand this Component 

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
}

// inital-state of the state 
const initialState = {
    loading: true,
    data: [],
    error: null
};

const BlogList = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState({ set: false, id: '', _id: '', message: '' });
    const [state, dispatch] = useReducer(reducer, initialState);
    const [courses, setCategory] = useState();
    const { isAdmin } = useContext(UserContext);
    const courseSelectRef = useRef(null);

    /**  fetch data is a function which is using callback for stop the rerender and 
     * it is using dispatch function from the reducer to send the data and the type of case happened 
    */
    const fetchData = useCallback(async (id) => {
        try {
            dispatch({ type: 'FETCH_START' });
            const blogs = await FetchblogsList(id);
            const data = await fetchBlogCategory();
            setCategory(data)
            dispatch({ type: 'FETCH_SUCCESS', payload: blogs });

        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error });
            console.log(error);
        }
    }, []);

    /**
     * This function is used to change the name to text and _id to id to send data in Select2 plug in 
     */
    function transformOptions(options) {
        return options.map(option => ({ id: option._id, text: option.name, photo: option.photo }));
    }

    /**
     * sending data to the select componet and setting to select2,
     *  so the functionaly is used for search and multi select
     */
    useEffect(() => {
        if (courseSelectRef.current) {
            $(courseSelectRef.current).select2({
                placeholder: 'Select a Category',
                allowClear: true,
                data: transformOptions(courses),
                autocorrect: true
            }).on('select2:select', handleCourseChange);
        }
    }, [courses]);

    /**
     * Getting the id when the course is selected and fetchs the data from the fetch function
     */
    function handleCourseChange(event) {
        const courseId = event.target.value;
        fetchData(courseId);
    }

    /**
     * initally fetching the data when componet is loading
     */
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    /**
     * paginator from bootstrap tables
     */
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 8,
        lastPageText: '>>',
        firstPageText: "<<",
        nextPageText: ">",
        prePageTextL: "<",
        alwaysShowAllBtns: false,
    });

    /**
     * 
     * defining the cloumns and data to pass and send this to the bootstrap table 
     * check react-bootstrap-table-next for the clear information
     */
    const columns = [
        {
            dataField: 'BlogArticleid',
            headerStyle: { textAlign: 'center' },
            text: 'id'
        },
        {
            dataField: 'title',
            filter: textFilter(),
            sort: true,
            headerStyle: { textAlign: 'center' },
            text: 'Title'
        },
        {
            dataField: 'slug',
            filter: textFilter(),
            headerStyle: { textAlign: 'center' },
            text: 'page_slug',
            sort: true
        },
        {
            dataField: 'author.name',
            filter: textFilter(),
            sort: true,
            headerStyle: { textAlign: 'center' },
            text: 'Author'
        },

        {
            dataField: 'updatedAt',
            filter: textFilter(),
            sort: true,
            headerStyle: { textAlign: 'center' },
            text: 'Updated_at'
        },
        {
            dataField: `_id`,
            text: 'Action',
            cellStyle: { textAlign: "center" },
            headerStyle: { textAlign: 'center' },
            formatter: (row) => {
                return (
                    <>
                        {
                            isAdmin.isadmin === 2 ? "" :
                                <>
                                    <button className='btn btn-danger p-2' onClick={() => {
                                        setShowModal({ set: true, _id: row, message: row.page_slug })
                                    }}>
                                        <bi.BiTrash className="text-white" cursor="pointer" data-toggle="tooltip" data-placement="bottom" title="Delete" />
                                    </button>
                                    &nbsp;
                                    <button className='btn btn-success p-2' onClick={e => navigate(`../edit-blog/list/${row}`)}>
                                        <bi.BiPencil className="text-white" cursor="pointer" data-toggle="tooltip" data-placement="bottom" title="Edit" />
                                    </button>
                                </>
                        }
                    </>
                )
            }
        }
    ]

    console.log(state.data.name)

    if (state.loading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <>
            <div className='pages-outer'>
                <div className="container py-2 my-5 ">

                    <div className='mt-4'>
                        <select name="course" value={state.data.name} ref={courseSelectRef} id='course' >
                            <option value="" disabled selected>Select a Category</option>
                        </select>
                    </div>

                    <div className='text-center d-flex justify-content-between py-3'>
                        <h3><b>Blogs</b></h3>
                        <button className='create-button-blog' onClick={() => navigate('../create-blog/list')}>
                            <p className='m-1 px-2'>Add Blog</p>
                            <AiOutlinePlusCircle className='mx-2' />
                        </button>
                    </div>

                    <BootstrapTable
                        bootstrap4
                        keyField='_id'
                        columns={columns}
                        data={state.data.blogs}
                        pagination={pagination}
                        filter={filterFactory()}
                    />
                </div>
            </div>

            {showModal.set && <DeleteModal showModal={showModal.set} setShowModal={setShowModal} message={`Do you want to delete this Page ?`} modal_id={6} _id={showModal._id} />}

        </>
    );
}

export default BlogList
