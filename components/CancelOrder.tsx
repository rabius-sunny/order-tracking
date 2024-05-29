'use client'

import { Button, Tooltip } from 'antd'
import { changeOrder } from '~/actions/order'

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
