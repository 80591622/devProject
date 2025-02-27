import { NavBar, DatePicker } from 'antd-mobile'
import { useMemo, useEffect, useState } from 'react'
import './index.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import DayBill from './components/DayBill'
import _ from 'lodash'

const Month = () => {
  const billList = useSelector((state) => state.bill.billList)
  const monthGroup = useMemo(() => {
   return  _.groupBy(billList, item => dayjs(item.date).format('YYYY-MM') )
  }, [billList])
  
  const [dateVisible, setDateVisible] = useState(false)
  const [curDate, setCurDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  })

  const [curMonthList, setCurMonthList] = useState([])

  const monthResult= useMemo(() => {
    // 支出  /   收入   /  结余
    const pay = curMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = curMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)

    return {
      pay,
      income,
      total: pay + income
    }
  }, [curMonthList])
  


  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
   
    if (monthGroup[nowDate]){
      setCurMonthList(monthGroup[nowDate])
    }
    
  },[monthGroup])

  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(curMonthList, item => dayjs(item.date).format('YYYY-MM-DD') )
    
    const keys = Object.keys(groupData)
    
    return  {
      groupData,
      keys
    }
   }, [curMonthList])

  const onConfirm = (date) => {
    setDateVisible(false)
    const formatDate = dayjs(date).format('YYYY-MM')
    setCurDate(formatDate)
    setCurMonthList(monthGroup[formatDate])
  }

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">{curDate + ''}月账单</span>
            {/* 思路：根据当前弹框打开的状态控制expand类名是否存在 */}
            <span
              className={classNames('arrow', dateVisible && 'expand')}
            ></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 单日列表统计 */}
        {
          dayGroup.keys.map(key => {           
            const billList = dayGroup.groupData[key] ? dayGroup.groupData[key] : [];
            return  <DayBill key={key} date={key} billList={billList}/>
          })
        }
        
      </div>
    </div>
  )
}

export default Month
