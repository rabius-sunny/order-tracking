import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider } from 'antd'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#722ed1'
          }
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  )
}
