// Fungsi untuk merender form untuk menambah item baru
export default function Form({ onAddItem }) {
  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {" "}
      {/* Menghasilkan opsi dari 1 hingga 20 */}
      {i + 1}
    </option>
  ));
  return (
    <form className="add-form" onSubmit={onAddItem}>
      {" "}
      {/* Panggil onAddItem saat form disubmit */}
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select id="quantity" name="quantity">
          {" "}
          {/* Dropdown untuk memilih jumlah */}
          {quantityNum} {/* Render opsi jumlah */}
        </select>
        <input type="text" name="itemName" placeholder="nama barang..." required />{" "}
        {/* Input untuk nama item */}
      </div>
      <button type="submit">Tambah</button> {/* Tombol untuk mengirim form */}
    </form>
  );
}
