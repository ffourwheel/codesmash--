"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
        <h3 className="text-xl font-bold mb-2">ส่งข้อความสำเร็จ!</h3>
        <p>ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 btn-primary bg-green-600 hover:bg-green-700 border-none"
        >
          ส่งข้อความใหม่
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">
          เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง
        </div>
      )}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">ชื่อ-นามสกุล</label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d90a2c] transition-colors"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">อีเมล</label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d90a2c] transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">เบอร์โทรศัพท์</label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d90a2c] transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">ข้อความ</label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d90a2c] transition-colors resize-none"
          required
        />
      </div>
      <button 
        type="submit" 
        className="btn-accent flex items-center gap-2"
        disabled={status === "loading"}
      >
        <Send size={18} />
        {status === "loading" ? "กำลังส่ง..." : "ส่งข้อความ"}
      </button>
    </form>
  );
}
