'use client'

import {
  GiftFilled,
  GoldFilled,
  ProfileFilled,
  SettingFilled
} from '@ant-design/icons'
import { status } from '~/constants/status'
import { TStatus } from '~/index'
import { Steps } from 'antd'

export default function OrderStep({ resStatus }: { resStatus: TStatus }) {
  return (
    <div>
      <Steps
        className='min-h-[450px]'
        current={status[resStatus]}
        direction='vertical'
        items={[
          {
            title: 'Listed',
            description: '25 May, 24',
            icon: <ProfileFilled />
          },
          {
            title: 'Placed',
            description: '26 May, 24',
            icon: <GoldFilled />
          },
          {
            title: 'Processing',
            description: '27 May, 24',
            icon: <SettingFilled />
          },
          {
            title: 'Delivered',
            description: '28 May, 24',
            icon: <GiftFilled />
          }
        ]}
      />
    </div>
  )
}
