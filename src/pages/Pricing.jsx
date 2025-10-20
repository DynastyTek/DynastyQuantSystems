import CheckoutButton from '../components/CheckoutButton';

const API_BASE = 'https://dynasty-stripe-api-deploy.vercel.app';

export default function Pricing() {
  return (
    <section className="pricing grid gap-6">
      <article className="card">
        <h3>Quant Starter</h3>
        <p>Perfect for getting signal fast.</p>
        <CheckoutButton
          priceId="price_live_quant_starter"  // TODO: replace with your real live Price ID
          brand="quant"
          apiBase={API_BASE}
        />
      </article>

      <article className="card">
        <h3>Quant Pro</h3>
        <p>Scale alpha with pro telemetry.</p>
        <CheckoutButton
          priceId="price_live_quant_pro"       // TODO: replace with your real live Price ID
          brand="quant"
          apiBase={API_BASE}
        />
      </article>
    </section>
  );
}
