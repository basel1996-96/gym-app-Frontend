import { FlexStyleVer, FormCenter,Center2 } from "../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGym } from "../store/actions/gymActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatGym = () => {
  const users = useSelector((state) => state.authReducer.users);

  const dispatch = useDispatch();
  let history = useHistory();

  const newGym = {
    name: "",
    image: "",
    ownerId: "",
  };

  const [gym, setGym] = useState(newGym);

  const resetForm = () => {
    setGym({
      name: "",
      image: "",
      ownerId: "",
    });
  };

  const handleChange = (event) => {
    setGym({ ...gym, [event.target.name]: event.target.value });
  };

  const handelUrl = (event) => {
    setGym({ ...gym, image: event.target.files[0] });
  };

  const fitchOwner = users
    .filter((user) => user.type === "owner")
    .map((user) => <option value={user.id}>{user.username}</option>);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createGym(gym, history));

    resetForm();
  };

  return (
    <Center2>
    <FormCenter onSubmit={handleSubmit}>
      <h3> Create New Gym</h3>
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
        <label>Gym Owner :</label>
        <select onChange={handleChange} name="ownerId" id="ownerId" value={gym}>
          <option>Chose ...</option>
          {fitchOwner}
        </select>
      </FlexStyleVer>

      <br></br>

      <button type="submit" className="btn btn-primary" value="Create">
        Create
      </button>
    </FormCenter>
    </Center2>
  );
};

export default CreatGym;
