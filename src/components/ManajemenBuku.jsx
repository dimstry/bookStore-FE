import React from "react";
import TableBuku from "./TableBuku";
import { useState } from "react";
export default function ManajemenBuku() {
  const [formMode, setFormMode] = useState("");

  function showEditForm() {
    setFormMode("show");
  }

  function showCreateForm() {
    setFormMode("show");
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      {/* form input buku */}
      <button className="btn btn-primary mt-3" onClick={showCreateForm}>
        Tambah Buku
      </button>
      {formMode === "show" && (
        <div className="card mt-3">
          <div className="card-header">
            <h5>Form Input Buku</h5>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Judul Buku</label>
                  <input
                    type="text"
                    className="form-control"
                    name="judul"
                    placeholder="Masukkan Judul Buku"
                  />
                  <label>Pengarang</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pengarang"
                    placeholder="Masukkan Nama Pengarang"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary float-end mt-3"
                    name="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* table data buku */}
      <TableBuku showEdit={showEditForm} />
    </div>
  );
}
