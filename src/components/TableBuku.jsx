import React from "react";

export default function TableBuku({ showEdit, books, requestDelete }) {
  function editData(book) {
    showEdit(book);
  }

  function deleteData(book) {
    requestDelete(book);
  }

  return (
    <div className="card mt-3">
      <div className="card-header">
        <h5>Data Buku</h5>
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul Buku</th>
              <th>Pengarang</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{book.judul}</td>
                  <td>{book.pengarang}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning text-white mx-2"
                      onClick={() => editData(book)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger mx-2"
                      onClick={() => deleteData(book)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
