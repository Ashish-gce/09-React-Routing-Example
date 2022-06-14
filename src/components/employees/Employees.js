import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export const Employees = () => {
  let [employees, setEmployees] = useState([]);
  let [errorMessage, setErrorMessage] = useState([]);

  // here we get data as soon as load our page
  useEffect(() => {
    let dataurl =
      "https://gist.githubusercontent.com/Ashish-gce/867c07f914fe892fc7bfe4c1bcf0f952/raw/26bb15525e8d4e069c8cf2edc96c6b75f3478425/customerData.json";
    Axios.get(dataurl)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error);
      });
  }, []);
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(employees)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h2 font-weight-bold font-italic text-secondary">
              Behind the Rolex crown is a way of thinking about our place in the
              world and an aspiration to contribute.
            </p>
            <p className="rolexText mt-3">
              We call this perpetual spirit. It is based on a fundamental belief
              in unlimited human potential, in continuous improvement and
              lasting excellence, in always pushing the boundaries and taking
              the long-term view. Our watches are built to last. So is our
              contribution to future generations. Discover more about our
              corporate commitments on Rolex.org
            </p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <table className="table table-hover text-center table-striped table-secondary">
              <thead className="bg-secondary text-white">
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>Age</th>
                  <th>PHONE</th>
                  <th>CITY</th>
                  <th>COUNTRY</th>
                </tr>
              </thead>
              <tbody>
                {/* 
                  1. object length check -> Object.key(employees.length) > 0 ? --- : ---  -> "Object" is a global object in JavaScript
                  2. array length check -> employees.length > 0 ? --- : ---
               */}
                {/* V. V. Imp. before going inside Table body, we should check weather array length > 0 or not */}
                {employees.length > 0 ? (
                  <React.Fragment>
                    {employees.map((employee, index) => {
                      return (
                        <tr /*  key={index}  */ key={employee.login.uuid}>
                          <td>
                            {employee.login.uuid.substr(
                              employee.login.uuid.length - 4
                            )}
                          </td>
                          <td>
                            <Link
                              to={`/employees/${employee.login.uuid}`}
                              className="text-secondary font-italic"
                            >
                              <u>
                                {employee.name.title}. {employee.name.first}{" "}
                                {employee.name.last}
                              </u>
                            </Link>
                          </td>
                          <td>{employee.email}</td>
                          <td>{employee.dob.age}</td>
                          <td>{employee.phone}</td>
                          <td>{employee.location.city}</td>
                          <td>{employee.location.country}</td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
