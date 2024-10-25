export default function Item({ item, onCheckboxChange, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" checked={item.checked} onChange={() => onCheckboxChange(item.id)} />{" "}
      {/* Checkbox untuk item */}
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name} {/* Tampilkan jumlah dan nama item */}
      </span>
      <button
        aria-label="Hapus barang"
        onClick={() => onDeleteItem(item.id)} // Panggil fungsi hapus saat tombol diklik
      >
        &times; {/* Tampilkan tombol hapus */}
      </button>
    </li>
  );
}
