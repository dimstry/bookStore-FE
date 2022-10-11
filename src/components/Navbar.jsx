/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logoImg from "../assets/navbar.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            {/* img bulat */}
            <img
              src={logoImg}
              alt="logo"
              width="35"
              height="35"
              className="d-inline-block align-text-center rounded-circle"
            />
            Toko Buku Dims
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/manajemen-buku" className="nav-link">
                  Manajemen Buku
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
