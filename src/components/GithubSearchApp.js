import React, { useState } from "react";
import Axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "./GithubCredintial";
import { GithubProfile } from "./GithubProfile";
import { GithubRepos } from "./GithubRepos";

export const GithubSearchApp = () => {
  let [githubUsername, setGithubUser] = useState("");
  let [githubProfile, setGithubProfile] = useState({}); // it store our coming profile values that is in object
  let [githubRepose, setGithubRepose] = useState([]); // our repositonry is in array
  let [errorMessage, setErrorMessage] = useState("");

  //   set search quary
  let setInput = (event) => {
    setGithubUser(event.target.value);
  };

  //   here we sending "github" usename to search in url
  let searchgithubProfile = (githubUsername) => {
    let dataurl = `https://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    Axios.get(dataurl)
      .then((response) => {
        //   here we attach the value that we receive from server to profile
        setGithubProfile(response.data); // this response we keep them in local variable
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  //  here we send "github" username to send them to server to search for the data
  let searchGithubRepos = (githubUsername) => {
    let dataurl = `https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    Axios.get(dataurl)
      .then((response) => {
        //   this (repository) simply returns an array
        setGithubRepose(response.data); // here we simply store our coming response in seperate local storage to display them
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error);
      });
  };

  // // Submit github search quary
  let searchSubmit = (event) => {
    event.preventDefault();
    searchgithubProfile(githubUsername); // we do function call for profile search
    searchGithubRepos(githubUsername); // and here we do function call to get github users profile repository
  };

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(githubUsername)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h2 text-secondary">GitHub Profile Search</p>
            <p className="lead">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <form className="form-inline" onSubmit={searchSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  size={40}
                  className="form-control"
                  placeholder="Github username"
                  //   now we binding github search app
                  value={githubUsername}
                  onChange={setInput}
                />
                <input
                  type="submit"
                  className="btn btn-secondary btn-md rounded ml-2"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Github profile details */}
        <div className="row">
          <div className="col">
            {/* <pre>{JSON.stringify(githubProfile)}</pre> */}
            {Object.keys(githubProfile).length > 0 ? (
              <React.Fragment>
                <GithubProfile githubProfile={githubProfile} />
              </React.Fragment>
            ) : null}
          </div>
        </div>

        {/* Github reposetory details */}
        <div className="row">
          <div className="col">
            {/* <pre>{JSON.stringify(githubRepose)}</pre> */}
            {githubRepose.length > 0 ? (
              <React.Fragment>
                <GithubRepos githubRepose={githubRepose} />
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
