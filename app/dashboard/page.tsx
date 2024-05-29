import { notFound } from 'next/navigation'
import { getOrder } from '~/actions/order'
import CancelOrder from '~/components/CancelOrder'
import ChangeStatus from '~/components/ChangeStatus'
import OrderStep from '~/components/OrderStep'
import { status } from '~/constants/status'

export default async function Dashboard() {
  const { data } = await getOrder()
  if (!data) return notFound()

  const resStatus = data.status
  return (
    <div>
      <h1 className='text-center text-primary font-medium mb-4 text-4xl'>
        Your order status
      </h1>
      <OrderStep resStatus={resStatus} />
      {resStatus === 'CANCELLED' ? (
        <p className='text-danger text-lg font-medium'>
          You cancelled this order
        </p>
      ) : (
        <CancelOrder isDisabled={status[resStatus] >= 1} id={data.id} />
      )}
      <ChangeStatus id={data.id} />
    </div>
  )
}
