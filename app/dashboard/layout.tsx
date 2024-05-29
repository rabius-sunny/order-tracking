'use client'

import { Layout, theme } from 'antd'
import DashboardFooter from '~/components/common/DashboardFooter'
import SidebarNav from '~/components/common/SidebarNav'

const { Content, Footer, Sider } = Layout

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
      >
        <SidebarNav />
      </Sider>
      <Layout>
        <Content>
          <div
            className='m-8 p-4'
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <div className='py-10'>{children}</div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <DashboardFooter />
        </Footer>
      </Layout>
    </Layout>
  )
}
