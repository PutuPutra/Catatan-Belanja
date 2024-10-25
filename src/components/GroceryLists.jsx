import Item from "./Items";
// Fungsi untuk merender daftar item belanja
export default function GroceryList({
  groceryItems,
  setGroceryItems,
  onDeleteItem,
  onSortChange,
  sortOption,
}) {
  // Fungsi untuk menangani perubahan status checkbox
  const handleCheckboxChange = (id) => {
    setGroceryItems(
      (prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)) // Toggle status dicentang
    );
  };

  return (
    <>
      <div className="list">
        <ul>
          {groceryItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onCheckboxChange={handleCheckboxChange} // Kirim handler checkbox
              onDeleteItem={onDeleteItem} // Kirim fungsi hapus item
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <label htmlFor="sort">Urutkan:</label>
        <select id="sort" name="sort" onChange={onSortChange} value={sortOption}>
          {" "}
          {/* Dropdown untuk memilih opsi pengurutan */}
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={() => setGroceryItems([])}>Bersihkan Daftar</button>{" "}
        {/* Tombol untuk membersihkan daftar */}
      </div>
    </>
  );
}
