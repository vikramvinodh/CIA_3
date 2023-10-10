import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../../alert/Loading';
import * as bi from 'react-icons/bi';
import { FetchCategories, FetchCourses, debounce } from "../functions"
import { EditCategoryModal, AddCategoryModal } from '../modals/Modal';
import DeleteModal from '../modals/DeleteModal';
import UserContext from '../../context/UserContext'

const Course = () => {
  const [state, setState] = useState('');
  const [course, setCourse] = useState('');
  const [loading, setisLoading] = useState(true);
  const [edit, setedit] = useState(false)
  const [courseedit, setcourseedit] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
  const [showModal, setShowModal] = useState({ set: false, _id: '', id: '', data: '', set2: false, set3: false }); // Add state variable and setter function
  const [searchTog, setSearchTog] = useState('')
  const { isAdmin } = useContext(UserContext)
  const showedit = () => setedit(!edit);
  const showCourseEdit = () => setcourseedit(!courseedit);


  const Data = debounce(async () => {
    const response = await FetchCategories()
    const sortedCategories = [...response].sort((a, b) => a.order_by - b.order_by);
    setState(sortedCategories)
    setisLoading(false)

  }, 2000)


  async function handleFetchClick(id) {
    setisLoading(true)
    const data = await FetchCourses(id)
    setCourse({ data: data, _id: id })
    setisLoading(false)
  }

  useEffect(() => {
    setisLoading(true)
    Data();
    // eslint-disable-next-line
  }, [])


  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 990;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);


  if (!state || loading) {
    return (<><Loading /></>)
  }
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-3">
            <div className="Category-box-1">
              <div className="d-flex justify-content-center px-3 mt-3">
                {
                  isAdmin.isadmin === 2 ? "" :
                    <ul className=" category-course-nav w-100 text-uppercase mt-2">
                      <div className="nav-link" onClick={() => setShowModal({ set2: true, id: "1" })} >Add</div>
                      <div className="nav-link" onClick={showedit} >Edit</div>
                    </ul>
                }

              </div>
              {
                !state
                  ?
                  "Internal Problem"
                  :
                  state.map((item, index) => {
                    // if (item.id === 99) return
                    return (
                      <div className='category-element text-uppercase' key={index} >
                        <div onClick={() => handleFetchClick(item.id)} className="d-flex justify-content-between fw-bold" style={{ fontSize: ".8rem" }}>
                          <div className='category-flex'>
                            <div>( {item.id} )&nbsp;&nbsp;&nbsp; {item.name}</div>
                            <div>{item.order_by} &nbsp;&nbsp;&nbsp;</div>
                          </div>
                          {
                            edit ? <button className='category-btn m-0'><bi.BiPencil className="text-success" cursor="pointer"
                              data-toggle="tooltip" data-placement="bottom" title="Edit" onClick={() =>
                                setShowModal({ set: true, _id: item._id, data: item, id: "1" })} /></button> : ""
                          }
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          </div>
          <div className="col-sm-0 col-md-1 col-lg-1">
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8">
            <div className="Category-box-2">
              <div className={`${isMobile ? "row" : "d-flex"} justify-content-${isAdmin.isadmin === 2 ? "end m-2" : 'between'}  px-3 mt-3`}>
                {isAdmin.isadmin === 2 ? "" :
                  <ul className=" category-course-nav text-uppercase mt-1">
                    {/* <div className="nav-link" onClick={() => setShowModal({ set2: true, id: "2" })} >Add</div> */}
                    <div className="nav-link" onClick={showCourseEdit} >Edit</div>
                  </ul>
                }
                <div className='mt-2'>
                  <div className="input-icons">
                    <i className='icon'>
                      <bi.BiSearch />
                    </i>
                    <input type="text" name="search" className='category-input-box px-4' onChange={(e) => setSearchTog({ search: e.target.value })} />
                  </div>
                </div>
              </div>
              <div className='category-box-2-inner'>
                {
                  course.length === 0 ?
                    <>
                      <div className="error-no-data">
                        No Course
                      </div>
                    </>
                    :
                    Array.isArray(course.data) ?
                      course.data.filter((val) => {
                        if (searchTog === '') {
                          return val;
                        }
                        if (val.name.toLowerCase().includes(searchTog.search.toLowerCase())) {
                          return val;
                        } else {
                          return null;
                        }
                      }).map((item, index) => {
                        return (
                          <div className='course-element ' key={index}>
                            <div className="d-flex justify-content-between">
                              <div>
                                {item.name}
                                {/* <span className='course-status' > {item.slug} </span> */}
                              </div>
                              {
                                courseedit ?
                                  <>
                                    <div>
                                      <button className='category-btn mx-3'>
                                        <bi.BiPencil className="text-success" cursor="pointer"
                                          data-toggle="tooltip" data-placement="bottom" title="Edit" onClick={() =>
                                            setShowModal({ set: true, id: "2", data: item })} />
                                      </button>
                                      {/* <bi.BiTrash className="text-danger" cursor="pointer" data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={() =>
                                        setShowModal({ set3: true, id: item._id })} /> */}
                                    </div>
                                  </>
                                  : ""
                              }

                            </div>

                          </div>
                        )
                      })
                      :
                      <>
                        Internal problem
                      </>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
      {showModal.set && <EditCategoryModal showModal={showModal.set} setShowModal={setShowModal} data={showModal.data} id={showModal.id} _id={course._id} />}
      {showModal.set2 && <AddCategoryModal showModal={showModal.set2} setShowModal={setShowModal} id={showModal.id} _id={course._id} />}
      {showModal.set3 && <DeleteModal showModal={showModal.set3} setShowModal={setShowModal} message={"Do you want to delete the Course ?"} modal_id={2} id={course._id} _id={showModal.id} />}
    </>
  )
}

export default Course
