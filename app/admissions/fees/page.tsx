import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Fee Details - Army Public School',
  description: 'Fee structure and payment information.',
};

export default function FeesPage() {
  return (
    <PageLayout
      title="Fee Details"
      subtitle="Affordable Quality Education"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Admissions', href: '/admissions/rules' },
        { label: 'Fee Details' },
      ]}
    >
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-bold">Class</th>
                <th className="px-6 py-4 text-left font-bold">Annual Fees</th>
                <th className="px-6 py-4 text-left font-bold">Monthly Fees</th>
                <th className="px-6 py-4 text-left font-bold">Registration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { class: 'I-II', annual: '₹1,50,000', monthly: '₹12,500', registration: '₹5,000' },
                { class: 'III-V', annual: '₹1,75,000', monthly: '₹14,583', registration: '₹5,000' },
                { class: 'VI-VIII', annual: '₹2,00,000', monthly: '₹16,667', registration: '₹7,500' },
                { class: 'IX-X', annual: '₹2,25,000', monthly: '₹18,750', registration: '₹7,500' },
                { class: 'XI-XII', annual: '₹2,50,000', monthly: '₹20,833', registration: '₹10,000' },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/50'}>
                  <td className="px-6 py-4 font-semibold text-primary">{row.class}</td>
                  <td className="px-6 py-4">{row.annual}</td>
                  <td className="px-6 py-4">{row.monthly}</td>
                  <td className="px-6 py-4">{row.registration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Payment Methods */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Payment Methods</h2>
          <div className="space-y-4">
            {[
              { method: 'Online Payment', icon: '💳', description: 'Pay via net banking or credit/debit card' },
              { method: 'Bank Transfer', icon: '🏦', description: 'Direct bank transfer to school account' },
              { method: 'Cheque', icon: '📋', description: 'Cheque in favor of APS Khadakwasla' },
              { method: 'Cash', icon: '💵', description: 'Direct payment at school office' },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-border">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-primary">{item.method}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Important Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Fee Payment Dates</h3>
              <p className="text-sm">Fees should be paid by 10th of each month.</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Late Fee</h3>
              <p className="text-sm">A late fee of ₹500 will be charged if fees are paid after 20th of the month.</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Scholarships</h3>
              <p className="text-sm">Merit-based scholarships are available for deserving students.</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h3 className="font-bold text-primary mb-2">Concessional Fees</h3>
              <p className="text-sm">Fee concession is available for wards of defence personnel.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Additional Charges */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Additional Charges (One Time)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { item: 'Uniform', amount: '₹3,000' },
            { item: 'Books & Stationery', amount: '₹5,000' },
            { item: 'ID Card & Documents', amount: '₹500' },
            { item: 'Laboratory Deposit', amount: '₹2,000' },
            { item: 'Computer Lab Deposit', amount: '₹1,500' },
            { item: 'Library Deposit', amount: '₹1,000' },
          ].map((charge, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white border border-border rounded-lg">
              <span className="text-muted-foreground font-medium">{charge.item}</span>
              <span className="font-bold text-primary">{charge.amount}</span>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
