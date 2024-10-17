"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPages = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    // Hamma qatorlar to'ldirilganligini tekshiradi
    if (!name || !password) {
      setError("Iltimos, barcha qatorlarni to'ldiring!");
      return;
    }

    // Agar hammasi to'ldirilgan bo'lsa, home sahifasiga yo'naltiradi
    router.push("/HomePages"); // To'g'ri yo'l
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        className="bg-slate-200 flex flex-col items-center justify-center gap-4 w-[450px] h-64 rounded-2xl"
        onSubmit={(e) => e.preventDefault()} // Formani avtomatik yuborilishidan to'xtatish
      >
        <input
          type="tel"
          placeholder="Telephone Number"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[250px] py-2 px-3 rounded-xl"
        />
        <input
          type="password"
          placeholder="Code"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[250px] py-2 px-3 rounded-xl"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!name || !password} // Submit butonini yuborishga ruxsat berish uchun qatorlarni to'ldirganligi sharti
          className="w-[250px] py-2 px-3 rounded-xl bg-slate-700 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPages;
