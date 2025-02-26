import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"



const Layout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBillList())
  },[dispatch])


  return (
    <div>
      <Outlet></Outlet>
      Layout 页面
      <Button color="primary">全局</Button>

      <div className="puple">
        <Button color="primary">局部样式</Button>
      </div>
      

    </div>
  )
}

export default Layout