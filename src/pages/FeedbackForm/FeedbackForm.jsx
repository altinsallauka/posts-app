import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./FeedbackForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "./actions";
import pic1 from "../../assets/p1.png";
import pic2 from "../../assets/p2.png";
import pic3 from "../../assets/p3.png";
const FeedbackForm = (props) => {
  //   const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [samples, setSamples] = useState([
    {
      PID: "1700000076",
      rtypemenu: "Meal:Rations,Patrol,Occidental,Menu 1",
    },
    {
      PID: "1700000077",
      rtypemenu: "Meal:Rations,Patrol,Occidental,Menu 2",
    },
    {
      PID: "1700000078",
      rtypemenu: "Meal:Rations,Patrol,Occidental,Menu 3",
    },
    {
      PID: "1700000067",
      rtypemenu: "Meal:Rations,Patrol,Halal,Menu 1",
    },
    {
      PID: "1700000068",
      rtypemenu: "Meal:Rations,Patrol,Halal,Menu 2",
    },
    {
      PID: "1700000069",
      rtypemenu: "Meal:Rations,Patrol,Halal,Menu 3",
    },
    {
      PID: "1700000070",
      rtypemenu: "Meal:Rations,Patrol,Hindu,Menu 1",
    },
    {
      PID: "1700000071",
      rtypemenu: "Meal:Rations,Patrol,Hindu,Menu 2",
    },
    {
      PID: "1700000072",
      rtypemenu: "Meal:Rations,Patrol,Hindu,Menu 3",
    },
    {
      PID: "1700000073",
      rtypemenu: "Meal:Rations,Patrol,Vegetarian,Menu 1",
    },
    {
      PID: "1700000074",
      rtypemenu: "Meal:Rations,Patrol,Vegetarian,Menu 2",
    },
    {
      PID: "1700000075",
      rtypemenu: "Meal:Rations,Patrol,Vegetarian,Menu 3",
    },
    {
      PID: "1700000010",
      rtypemenu: "Meal:Rations,24hr,Occidental,Menu 1",
    },
    {
      PID: "1700000065",
      rtypemenu: "Meal:Rations,24hr,Occidental,Menu 2",
    },
    {
      PID: "1700000066",
      rtypemenu: "Meal:Rations,24hr,Occidental,Menu 3",
    },
    {
      PID: "1700000007",
      rtypemenu: "Meal:Rations,24hr,Halal,Menu 1",
    },
    {
      PID: "1700000059",
      rtypemenu: "Meal:Rations,24hr,Halal,Menu 2",
    },
    {
      PID: "1700000060",
      rtypemenu: "Meal:Rations,24hr,Halal,Menu 3",
    },
    {
      PID: "1700000008",
      rtypemenu: "Meal:Rations,24hr,Hindu,Menu 1",
    },
    {
      PID: "1700000061",
      rtypemenu: "Meal:Rations,24hr,Hindu,Menu 2",
    },
    {
      PID: "1700000062",
      rtypemenu: "Meal:Rations,24hr,Hindu,Menu 3",
    },
    {
      PID: "1700000009",
      rtypemenu: "Meal:Rations,24hr,Vegetarian,Menu 1",
    },
    {
      PID: "1700000063",
      rtypemenu: "Meal:Rations,24hr,Vegetarian,Menu 2",
    },
    {
      PID: "1700000064",
      rtypemenu: "Meal:Rations,24hr,Vegetarian,Menu 3",
    },
    {
      PID: "1700000085",
      rtypemenu: "Meal:Rations,10man,Occidental,Menu 1",
    },
    {
      PID: "1700000086",
      rtypemenu: "Meal:Rations,10man,Occidental,Menu 2",
    },
    {
      PID: "1700000087",
      rtypemenu: "Meal:Rations,10man,Occidental,Menu 3",
    },
    {
      PID: "1700000079",
      rtypemenu: "Meal:Rations,10man,Halal,Menu 1",
    },
    {
      PID: "1700000080",
      rtypemenu: "Meal:Rations,10man,Halal,Menu 2",
    },
    {
      PID: "1700000081",
      rtypemenu: "Meal:Rations,10man,Halal,Menu 3",
    },
    {
      PID: "1700000082",
      rtypemenu: "Meal:Rations,10man,Hindu,Menu 1",
    },
    {
      PID: "1700000083",
      rtypemenu: "Meal:Rations,10man,Hindu,Menu 2",
    },
    {
      PID: "1700000084",
      rtypemenu: "Meal:Rations,10man,Hindu,Menu 3",
    },
  ]);
  const [selectedPid, setSelectedPid] = useState("");
  const [lotNo, setLotNo] = useState("");
  const [rangeOfIngredients, setRangeOfIngredients] = useState([
    {
      optionName: "Range of ingredients",
      optionId: 0,
      options: [
        { radioName: "Very good", selected: false },
        { radioName: "All right", selected: false },
        { radioName: "Do not like", selected: false },
      ],
    },
  ]);
  const [easeOfUsingIngredients, setEaseOfUsingIngredients] = useState([
    {
      optionName: "Ease of using ingredients",
      optionId: 1,
      options: [
        { radioName: "Very good", selected: false },
        { radioName: "All right", selected: false },
        { radioName: "Do not like", selected: false },
      ],
    },
  ]);
  const [flexibilityOfIngredients, setFlexibilityOfIngredients] = useState([
    {
      optionName: "Ease of using ingredients",
      optionId: 2,
      options: [
        { radioName: "Very good", selected: false },
        { radioName: "All right", selected: false },
        { radioName: "Do not like", selected: false },
      ],
    },
  ]);
  const [flavorProfile, setFlavorProfile] = useState([
    {
      optionName: "Flavor Profile",
      optionId: 3,
      options: [
        { radioName: "Very good", selected: false },
        { radioName: "All right", selected: false },
        { radioName: "Do not like", selected: false },
      ],
    },
  ]);
  const [overallRation, setOverallRation] = useState([
    {
      optionName: "Overall Ration",
      optionId: 4,
      options: [
        { radioName: "Very good", selected: false },
        { radioName: "All right", selected: false },
        { radioName: "Do not like", selected: false },
      ],
    },
  ]);
  const [additionalComments, setAdditionalComments] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Feedback Form value:");
  };

  const onInputChange = (list) => {
    // console.log(list);
    const nexState = list.map((el) => {
      if (el.optionName !== list.optionName) return el;
      return {
        ...el,
        options: el.options.map((opt) => {
          const checked = opt.radioName === list.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
      };
    });
    console.log(nexState);
  };
  useEffect(() => {
    // console.log(samples);
    dispatch(addList(samples));
  }, [samples]);
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="row ">
          <h4 className="d-flex justify-content-center">Feedback Form</h4>

          <form onSubmit={handleSubmit} className="feedbackForm mt-4">
            <div className="d-flex align-items-center">
              <label className="d-flex flex-column align-items-start">
                PID Nr. - Ration Type / Menu:
                <select
                  className="form-select"
                  name="PID"
                  aria-label="Default select example"
                  onChange={(e) => setSelectedPid(e.target.value)}
                >
                  <option disabled selected>
                    Select one PID Nr. - Ration Type / Menu:
                  </option>
                  {samples.map((sample) => (
                    <option value={sample.PID} key={sample.PID}>
                      {sample.PID} - {sample.rtypemenu}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="d-flex align-items-center">
              <label className="d-flex flex-column align-items-start">
                LOT No.
                <input
                  type="text"
                  name="lotNo"
                  className="form-control"
                  onChange={(e) => setLotNo(e.target.value)}
                />
              </label>
            </div>
            <div className="d-flex align-items-center feedback-txt shadow-sm p-3 mb-2 rounded">
              <span>
                Look at the different categories and mark the matching face. You
                can also make comments on the box below about specific subjects.
              </span>
            </div>
            <div>
              <table className="table table-white">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col" className="d-flex">
                      <div>
                        <img
                          src={pic1}
                          className="img-rounded"
                          alt="Cinque Terre"
                        />
                      </div>
                      <div>
                        <img
                          src={pic2}
                          className="img-rounded"
                          alt="Cinque Terre"
                        />
                      </div>
                      <div>
                        <img
                          src={pic3}
                          className="img-rounded"
                          alt="Cinque Terre"
                        />
                      </div>
                    </th>
                    <th>Comment</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th className="first-col">
                      {rangeOfIngredients.optionName}
                    </th>
                    <td>
                      {/* {rangeOfIngredients.map((rangeOfIngredient) => (
                        <ul>
                          {rangeOfIngredient.optionName}
                          {rangeOfIngredient.options.map((option) => {
                            return (
                              <input
                                type="radio"
                                name={rangeOfIngredient.radioName}
                                value={option.radioName}
                                checked={!!option.selected}
                                // onChange={(e)=>{setRangeOfIngredients(...rangeOfIngredients, options:[radioName:rangeOfIngredient,selected:option.selected])}}
                                onChange={onInputChange(option)}
                              />
                            );
                          })}
                        </ul>
                      ))} */}
                      <form>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" checked />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="lotNo"
                          className="form-control"
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Ease of using Ingredients</th>
                    <td>
                      <form>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" checked />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="lotNo"
                          className="form-control"
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Flexibility of Ingredients</th>
                    <td>
                      <form>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" checked />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="lotNo"
                          className="form-control"
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Flavor Profile</th>
                    <td>
                      <form>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" checked />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="lotNo"
                          className="form-control"
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th className="first-col">Overall Ration</th>
                    <td>
                      <form>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" checked />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" />
                        </label>
                      </form>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="lotNo"
                          className="form-control"
                          onChange={(e) => setLotNo(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center  mt-3">
              <label htmlFor="additionalComments">
                Additional Comments:
                <textarea
                  className="form-control"
                  id="additionalComments"
                  rows="3"
                  onChange={(e) => setAdditionalComments(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="d-flex align-items-center p-3 rounded">
              <span>
                The information received will be used to further develop the
                Combat ration Packs and imporve the service. The feedbach will
                be kept anonymous.
              </span>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="submit"
                className="btn btn-primary mt-2"
                value="Submit Feedback"
              />
            </div>
            <div className="mt-3 bg-black rounded">
              <h4 className="text-light text-center">
                MORE INFORMATION - BETTER RATIONS
              </h4>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeedbackForm;
