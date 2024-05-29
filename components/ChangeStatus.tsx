'use client'

import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { changeOrder } from '~/actions/order'
import { TStatus } from '..'

const items: MenuProps['items'] = [
  {
    label: 'LISTED',
    key: 'LISTED'
  },
  {
    label: 'PLACED',
    key: 'PLACED'
  },
  {
    label: 'PROCESSING',
    key: 'PROCESSING'
  },
  {
    label: 'DELIVERED',
    key: 'DELIVERED'
  }
]

export default function ChangeStatus({ id }: { id: string }) {
  const onClick: MenuProps['onClick'] = ({ key }) =>
    changeOrder(id, key as TStatus)
  return (
    <div className='mt-4'>
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Change status to see effect
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}
