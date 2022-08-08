import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";

export default function Success(second) {
  return (
    <Layout>
      <OrderModal opened={true} PaymentMethod={1} />
    </Layout>
  )
}