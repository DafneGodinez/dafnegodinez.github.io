import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Hacker News</div>
        </Link>           
        <Link to="/" className="ml1 no-underline black">
          New
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          Search
        </Link>

        {authToken && (

          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              Submit
            </Link>
          </div>

       
        )}
        {authToken && (
   
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/linear"
              className="ml1 no-underline black"
            >
              Linear
            </Link>
          </div>

   
        )}
        {authToken && (
  
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/resnet"
              className="ml1 no-underline black"
            >
              Resnet
            </Link>
          </div>
 
        )}
        {authToken && (
   
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/arduino"
              className="ml1 no-underline black"
            >
              Arduino
            </Link>
          </div>


 )}
        
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            Logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;