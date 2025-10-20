import { useState } from 'react';

/**
 * Generic Checkout Button that calls your serverless API and redirects to Stripe Checkout.
 *
 * Props:
 *  - priceId: string (REQUIRED)        e.g., "price_live_quant_starter"
 *  - brand:   'quant' | 'credit'       (REQUIRED) controls server allow-list + base URL routing
 *  - apiBase: string (REQUIRED)        e.g., "https://dynasty-stripe-api-deploy.vercel.app"
 */
export default function CheckoutButton({ priceId, brand, apiBase }) {
  const [loading, setLoading] = useState(false);
  const endpoint = `${apiBase.replace(/\/$/, '')}/api/create-session`;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, brand })
      });

      if (!res.ok) {
        console.error('Checkout API error:', res.status, await res.text());
        alert('Checkout failed. Please try again.');
        return;
      }

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // 🚀 to Stripe Checkout
      } else {
        alert('Unexpected response from server.');
      }
    } catch (err) {
      console.error(err);
      alert('Error starting checkout.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleCheckout} disabled={loading} className="btn btn-primary">
      {loading ? 'Redirecting…' : 'Subscribe'}
    </button>
  );
}
