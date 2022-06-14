import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export const EmployeeDetails = () => {
  // let { id : employeeId } = useParams(); // this statement simply read "url" parameter
  let employeeId = useParams().id; //  either we using {id} -> distructuring concept  or  useParams().id -> normal concept
  // console.log(employeeId);   // to see the getting url

  let [selectedEmployee, setSelectedEmployee] = useState({});
  let [errorMessage, setErrorMessage] = useState("");

  // "useEffect()" -> b'z I want data when the page is loaded
  useEffect(() => {
    let dataurl =
      "https://gist.githubusercontent.com/Ashish-gce/867c07f914fe892fc7bfe4c1bcf0f952/raw/26bb15525e8d4e069c8cf2edc96c6b75f3478425/customerData.json";
    Axios.get(dataurl)
      .then((response) => {
        // setSelectedEmployee(response.data);  // here we don't do this b'z we want to get employee "id"
        // let employees = response.data;
        // let anEmployee = employees.find(
        let anEmployee = response.data.find(
          (employee) => employee.login.uuid === employeeId
        );
        setSelectedEmployee(anEmployee);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h2 text-secondary">Employee Details</p>
            <p className="lead">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Object.keys(selectedEmployee).length > 0 ? (
              <React.Fragment>
                <div className="card">
                  <div className="card-header bg-secondary text-white">
                    <p className="h4">
                      {selectedEmployee.name.title}.{" "}
                      {selectedEmployee.name.first} {selectedEmployee.name.last}
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          src={selectedEmployee.picture.large}
                          alt=""
                          className="img-fluid img-thumbnail"
                          // height="150"
                          // width="150"
                        />
                      </div>
                      <div className="col-md-4">
                        <p>Gander : {selectedEmployee.gender}</p>
                        <p>Email : {selectedEmployee.email}</p>
                        <p>Phone : {selectedEmployee.phone}</p>
                      </div>
                      <div className="col-md-4">
                        <h2>City : {selectedEmployee.location.city}</h2>
                        <h2>Country : {selectedEmployee.location.country}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
