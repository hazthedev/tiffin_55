import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID || 'xxxxxxxx';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    reservationDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget as HTMLFormElement),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', message: '', reservationDate: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.15em] text-cream/40 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-sm bg-coal-brown border border-concrete-grey/20 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-xs font-semibold uppercase tracking-[0.15em] text-cream/40 mb-2">
          Phone or Email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          value={formData.contact}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-sm bg-coal-brown border border-concrete-grey/20 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors"
          placeholder="+6012-345-6789 or hello@email.com"
        />
      </div>

      <div>
        <label htmlFor="reservationDate" className="block text-xs font-semibold uppercase tracking-[0.15em] text-cream/40 mb-2">
          Reservation Date <span className="text-cream/20 font-normal normal-case">(optional)</span>
        </label>
        <input
          id="reservationDate"
          name="reservationDate"
          type="date"
          value={formData.reservationDate}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-sm bg-coal-brown border border-concrete-grey/20 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-cream/40 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-sm bg-coal-brown border border-concrete-grey/20 text-cream placeholder:text-cream/30 focus:outline-none focus:border-copper transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper text-charcoal font-medium rounded-sm hover:bg-copper/90 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 rounded-sm bg-green-900/20 border border-green-700/30 text-green-300 text-sm text-center"
          >
            Thanks! We'll get back to you soon.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 rounded-sm bg-red-900/20 border border-red-700/30 text-red-300 text-sm text-center"
          >
            Something went wrong. Please try again or WhatsApp us.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
