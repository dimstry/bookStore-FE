import React from "react";

export default function TableBuku({ showEdit }) {
  function editData() {
    showEdit();
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
            <tr>
              <td>1</td>
              <td>Belajar React</td>
              <td>Dimas</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-warning text-white mx-2"
                  onClick={() => editData()}
                >
                  Edit
                </button>
                <button className="btn btn-sm btn-danger mx-2">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
