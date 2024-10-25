// Fungsi untuk merender footer dengan statistik
export default function Footer({ groceryItems }) {
  const totalItems = groceryItems.length; // Total jumlah item
  const boughtItems = groceryItems.filter((item) => item.checked).length; // Hitung jumlah item yang sudah dibeli
  const percentBought = totalItems > 0 ? (boughtItems / totalItems) * 100 : 0; // Hitung persentase item yang dibeli

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {boughtItems} barang sudah dibeli (
      {percentBought.toFixed(0)}%) {/* Tampilkan statistik */}
    </footer>
  );
}
