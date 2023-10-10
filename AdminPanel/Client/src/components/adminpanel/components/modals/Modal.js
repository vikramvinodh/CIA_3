import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  EditCategory,
  AddCategory,
  AddCourse,
  EditCourses,
  AddCountry,
  AddCity
} from '../functions'

export const EditCategoryModal = ({ showModal, setShowModal, _id, data, id }) => {

  const [state, setState] = useState(data)

  const edit = async (e) => {
    e.preventDefault()
    if (id === "1") {
      const data = await EditCategory(state);
      if (data.success) {
        setTimeout(() => {
          setShowModal(false)
          window.location.reload();
        }, 1000);

      }
    }

    if (id === "2") {
      const data = await EditCourses(state, _id);
      if (data.success) {
        setTimeout(() => {
          setShowModal(false)
          window.location.reload();
        }, 1000);

      }
    }
  }


  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <React.Fragment>
      <Modal backdrop="static" centered show={showModal} animation={false} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-capitalize'>
          {
            id === "1"
              ?
              <>
                <div className="form-group">
                  <label>iD</label>
                  <input type="text" className="form-control" name="name" onChange={onChange} value={state.id} disabled />
                </div>
                <div className="form-group my-3">
                  <label>name</label>
                  <input type="text" className="form-control" name="name" onChange={onChange} value={state.name} />
                </div>

                <div className="form-group my-3">
                  <label>link_title</label>
                  <input type="text" className="form-control" name="link_title" onChange={onChange} value={state.link_title} />
                </div>

                <div className="form-group my-3">
                  <label>description</label>
                  <input type="text" className="form-control" name="description" onChange={onChange} value={state.description} />
                </div>

                <div className="form-group my-3">
                  <label>order_by</label>
                  <input type="text" className="form-control" name="order_by" onChange={onChange} value={state.order_by} />
                </div>

                <div className="form-group my-3">
                  <label>Status<span className="text-danger">*</span></label>
                  <select className="form-control mt-2 mb-4" name="category_status" onChange={onChange} value={state.category_status}>
                    <option value="active" >Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

              </>
              :
              <>
                <div className="form-group my-3">
                  <label>name</label>
                  <input type="text" className="form-control" name="name" onChange={onChange} value={state.name} />
                </div>

                <div className="form-group my-3">
                  <label>Slug</label>
                  <input type="text" className="form-control" name="slug" onChange={onChange} value={state.slug} />
                </div>

                <div className="form-group my-3">
                  <label>Point1</label>
                  <input type="text" className="form-control" name="point1" onChange={onChange} value={state.point1} />
                </div>

                <div className="form-group my-3">
                  <label>Point2</label>
                  <input type="text" className="form-control" name="point2" onChange={onChange} value={state.point2} />
                </div>

                <div className="form-group my-3">
                  <label>registered</label>
                  <input type="text" className="form-control" name="registered" onChange={onChange} value={state.registered} />
                </div>

                <div className="form-group my-3">
                  <label>Status<span className="text-danger">*</span></label>
                  <select className="form-control mt-2 mb-4" name="course_status" onChange={onChange} value={state.course_status}>
                    <option value="active" >Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </>
          }

        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={edit}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}


export const AddCategoryModal = ({ showModal, setShowModal, id, _id }) => {
  const [state, setState] = useState({ id: '', name: '', link_title: '', description: '', order_by: '', category_status: 'active', course_status: 'active', category_id: '' })

  const Add = async () => {

    if (id === '1') {
      const data = await AddCategory(state);
      if (data.success) {
        setTimeout(() => {
          setShowModal(false)
          window.location.reload();
        }, 1000);
      } else {
        alert(data.message)
      }
    }

    if (id === '2') {
      const data = await AddCourse(state, _id);
      if (data.success) {
        setTimeout(() => {
          setShowModal(false)
          window.location.reload();
        }, 1000);
      } else {
        alert(data.message)
      }
    }
  }

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <React.Fragment>
      <Modal backdrop="static" centered show={showModal} animation={false} onHide={() => setShowModal(false)}>
        <Modal.Header>
          {id === '1' ?
            <Modal.Title>Add Category</Modal.Title>
            :
            <Modal.Title>Add Course</Modal.Title>
          }
        </Modal.Header>
        <Modal.Body className='text-capitalize'>
          {
            id === '1' ? (
              <>
                <div className="form-group">
                  <label>id <span className="text-danger">*</span></label> &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className='category-unique-id'>unique</label>
                  <input type="text" className="form-control" name="id" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="name" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>link_title <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="link_title" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>description <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="description" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>order_by <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="order_by" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>Status<span className="text-danger">*</span></label>
                  <select className="form-control mt-2 mb-4" name="category_status" onChange={onChange}  >
                  <option value="" disabled >select options</option>
                    <option value="active" >Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </>
            ) :
              <>

                <div className="form-group my-3">
                  <label>name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="name" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>Status<span className="text-danger">*</span></label>
                  <select className="form-control mt-2 mb-4" name="category_status" onChange={onChange}  >
                    <option value="active" >Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </>
          }
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={Add}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}


export const CityCountry = ({ showModal, setShowModal, id, _id }) => {

  const [state, setState] = useState({
    id: '',
    name: '',
    continent_id: '',
    weekend_constant_value_id: '',
    short_name: '',
    dialing_code: '',
    time_zone_constant_value_id: '',
    currency_symbol: '',
    status: 'true',
    city_slug: ''

  })

  const Add = async () => {
    if (id === "1") {
      const data = await AddCountry(state);
      if (data.success) {
        setTimeout(() => {
          setShowModal(false)
          window.location.reload();
        }, 1000);
      } else {
        alert(data.error)
      }
    }
    if (id === '2') {
      const data = await AddCity(state, _id);
      if (data.success) {
        setTimeout(() => {
          setShowModal(false)
          window.location.reload();
        }, 1000);
      } else {
        alert(data.error)
      }
    }
  }


  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <React.Fragment>
      <Modal backdrop="static" centered show={showModal} animation={false} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-capitalize'>
          {
            id === '1' ? (
              <>
                <div className="form-group">
                  <label>id <span className="text-danger">*</span></label> &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className='category-unique-id'>unique</label>
                  <input type="text" className="form-control" name="id" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="name" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>short_name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="short_name" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>continent_id <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="continent_id" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>weekend_constant_value_id <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="weekend_constant_value_id" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>dialing_code <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="dialing_code" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                  <label>time_zone_constant_value_id <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="time_zone_constant_value_id" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                  <label>currency_symbol <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="currency_symbol" onChange={onChange} />
                </div>
                <div className="form-group my-3">
                  <label>Status<span className="text-danger">*</span></label>
                  <select className="form-control mt-2 mb-4" name="status" onChange={onChange}  >
                    <option value="true" >Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </>
            ) :
              <>

                <div className="form-group">
                  <label>id <span className="text-danger">*</span></label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label className='category-unique-id'>unique</label>
                  <input type="text" className="form-control" name="id" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="name" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>short_name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="short_name" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>city_slug <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="city_slug" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>time_zone_constant_value_id <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="time_zone_constant_value_id" onChange={onChange} />
                </div>

                <div className="form-group my-3">
                  <label>Status<span className="text-danger">*</span></label>
                  <select className="form-control mt-2 mb-4" name="status" onChange={onChange}  >
                    <option value="true" >Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </>
          }
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={Add}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}