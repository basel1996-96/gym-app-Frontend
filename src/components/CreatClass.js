import { FlexStyleVer, FormCenter } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createClass } from "../store/actions/classActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatClass = () => {
  const gyms = useSelector((state) => state.gyms.gyms);

  const dispatch = useDispatch();
  let history = useHistory();

  const newClass = {
    name: "",
    price: "",
    image: "",
    type: "",
    gymId: "",
  };

  const [_class, setClass] = useState(newClass);

  const resetForm = () => {
    setClass({
      name: "",
      price: "",
      image: "",
      type: "",
      gymId: "",
    });
  };

  const handleChange = (event) => {
    setClass({ ..._class, [event.target.name]: event.target.value });
  };

  const handelUrl = (event) => {
    setClass({ ..._class, image: event.target.files[0] });
  };

  const fitchGyms = gyms.map((gym) => (
    <option value={gym.id}>{gym.name}</option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(_class);

    dispatch(createClass(_class, history));

    resetForm();
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3> Creat New Class</h3>
      <br />

      <div className="form-group">
        <label>Name : </label>
        <input
          className="form-control-file"
          type="text"
          name="name"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price : </label>
        <input
          className="form-control-file"
          type="text"
          name="price"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Type : </label>
        <input
          className="form-control-file"
          type="text"
          name="type"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Image : </label>
        <input
          className="form-control-file"
          type="file"
          name="image"
          // value={shop.url} we remove it becouse type file is read only
          onChange={handelUrl}
        />
      </div>

      <FlexStyleVer>
        <label>Assign To Gym : :</label>
        <select onChange={handleChange} name="gymId" id="gymId" value={_class}>
          <option>Chose ...</option>
          {fitchGyms}
        </select>
      </FlexStyleVer>

      <br></br>

      <button type="submit" className="btn btn-primary" value="Create">
        Create
      </button>
    </FormCenter>
  );
};

export default CreatClass;
