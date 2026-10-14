import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={send} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" className="w-full rounded-md border px-4 py-3" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" placeholder="Email" className="w-full rounded-md border px-4 py-3" />
      </div>
      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone (optional)" className="w-full rounded-md border px-4 py-3" />
      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="How can we help?" className="w-full rounded-md border px-4 py-3 min-h-[120px]" />

      <div>
        <button type="submit" disabled={status === 'sending'} className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'sent' && <span className="ml-4 text-sm text-green-600">Message sent — we’ll be in touch.</span>}
        {status === 'error' && <span className="ml-4 text-sm text-rose-600">Failed to send. Try again later.</span>}
      </div>
    </form>
  );
}
