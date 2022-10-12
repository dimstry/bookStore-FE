import React from "react";
import TableBuku from "./TableBuku";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ManajemenBuku() {
  const [formMode, setFormMode] = useState("");
  const [buku, setBuku] = useState([]);
  const [inputForm, setInputForm] = useState();

  function showEditForm(book) {
    setFormMode("edit");
    setInputForm(book);
  }

  function showCreateForm() {
    setFormMode("create");
    setInputForm("");
  }

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get("http://localhost:4000/book")
      .then((response) => {
        setBuku(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleJudul(e) {
    setInputForm({
      ...inputForm,
      judul: e.target.value,
    });
  }

  function handlePengarang(e) {
    setInputForm({
      ...inputForm,
      pengarang: e.target.value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    if (formMode === "create") {
      axios
        .post("http://localhost:4000/book/add", inputForm)
        .then((response) => {
          retrieveData();
          setFormMode("");
          alert("Data berhasil ditambahkan");
        })
        .catch((error) => {
          console.log("eror nya " + error);
        });
    } else if (formMode === "edit") {
      axios
        .put("http://localhost:4000/book/update/" + inputForm._id, inputForm)
        .then((response) => {
          retrieveData();
          setFormMode("");
          alert("Data berhasil diupdate");
        })
        .catch((error) => {
          console.log("eror nya " + error);
        });
    }
  }

  function deleteOne(book) {
    axios
      .delete("http://localhost:4000/book/delete/" + book._id)
      .then((response) => {
        retrieveData();
        alert("Data berhasil dihapus");
      })
      .catch((error) => {
        console.log("eror nya " + error);
      });
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      {/* form input buku */}
      <button className="btn btn-primary mt-3" onClick={showCreateForm}>
        Tambah Buku
      </button>
      {formMode !== "" && (
        <div className="card mt-3">
          <div className="card-header">
            <h5>Form Input Buku</h5>
            <div className="card-body">
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <label>Judul Buku</label>
                  <input
                    type="text"
                    className="form-control"
                    name="judul"
                    placeholder="Masukkan Judul Buku"
                    value={inputForm.judul || ""}
                    onChange={handleJudul}
                  />
                  <label>Pengarang</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pengarang"
                    placeholder="Masukkan Nama Pengarang"
                    value={inputForm.pengarang || ""}
                    onChange={handlePengarang}
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
      <TableBuku
        showEdit={showEditForm}
        books={buku}
        requestDelete={deleteOne}
      />
    </div>
  );
}
