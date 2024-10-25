import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryLists";
import Footer from "./Footer";

export default function App() {
  // Inisialisasi state dengan item dari local storage atau array kosong
  const [groceryItems, setGroceryItems] = useState(() => {
    const savedItems = localStorage.getItem("groceryItems");
    return savedItems ? JSON.parse(savedItems) : []; // Parse item yang disimpan atau gunakan array kosong
  });

  // Ambil opsi pengurutan dari localStorage atau set ke "input" sebagai default
  const [sortOption, setSortOption] = useState(() => {
    const savedSortOption = localStorage.getItem("sortOption");
    return savedSortOption ? savedSortOption : "input";
  });

  // Memperbarui local storage setiap kali groceryItems berubah
  useEffect(() => {
    localStorage.setItem("groceryItems", JSON.stringify(groceryItems)); // Simpan item ke local storage
  }, [groceryItems]);

  // Simpan opsi pengurutan ke local storage saat berubah
  useEffect(() => {
    localStorage.setItem("sortOption", sortOption); // Simpan opsi pengurutan
  }, [sortOption]);

  // Fungsi untuk menangani penambahan item baru
  const handleAddItem = (event) => {
    event.preventDefault(); // Mencegah perilaku pengiriman form default
    const form = event.target; // Dapatkan elemen form
    const newItem = {
      id: groceryItems.length + 1, // Tetapkan ID berdasarkan panjang item saat ini
      name: form.itemName.value, // Dapatkan nama item dari input
      quantity: parseInt(form.quantity.value), // Parse jumlah dari input
      checked: false, // Item baru tidak dicentang secara default
    };
    setGroceryItems([...groceryItems, newItem]); // Perbarui state dengan item baru
    form.reset(); // Reset field form
  };

  // Fungsi untuk menangani penghapusan item berdasarkan ID
  const handleDeleteItem = (id) => {
    setGroceryItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Filter keluar item dengan ID yang diberikan
  };

  // Fungsi untuk menangani perubahan opsi pengurutan
  const handleSortChange = (event) => {
    setSortOption(event.target.value); // Memperbarui opsi pengurutan
  };

  // Fungsi untuk mengurutkan item belanja berdasarkan opsi yang dipilih
  const sortedGroceryItems = () => {
    switch (sortOption) {
      case "name":
        return [...groceryItems].sort((a, b) => a.name.localeCompare(b.name)); // Urutkan berdasarkan nama
      case "checked":
        return [...groceryItems].sort((a, b) => a.checked - b.checked); // Urutkan berdasarkan status dicentang
      default:
        return groceryItems; // Kembalikan item dalam urutan input
    }
  };

  return (
    <div className="app">
      <Header /> {/* Render komponen Header */}
      <Form onAddItem={handleAddItem} /> {/* Kirim fungsi untuk menambah item ke komponen Form */}
      <GroceryList
        groceryItems={sortedGroceryItems()} // Gunakan item yang telah diurutkan
        setGroceryItems={setGroceryItems}
        onDeleteItem={handleDeleteItem} // Kirim fungsi untuk menghapus item
        onSortChange={handleSortChange} // Kirim handler urut ke GroceryList
        sortOption={sortOption} // Kirim opsi urut saat ini
      />
      <Footer groceryItems={groceryItems} /> {/* Render komponen Footer */}
    </div>
  );
}

// Fungsi untuk merender item belanja individu
