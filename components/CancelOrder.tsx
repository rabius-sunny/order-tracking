'use client'

import { changeOrder } from '~/actions/order'
import { Button, Tooltip } from 'antd'

export default function CancelOrder({
  isDisabled,
  id
}: {
  isDisabled: boolean
  id: string
}) {
  return (
    <div>
      <Tooltip title={isDisabled && 'Cannot cancel the order now'}>
        <Button
          onClick={() => changeOrder(id, 'CANCELLED')}
          type='primary'
          disabled={isDisabled}
        >
          Cancel this order
        </Button>
      </Tooltip>
    </div>
  )
}
