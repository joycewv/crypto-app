import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOUtlind, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const NavBar = () => {
  return (
    <div className='Nav-container'>
        <div className='Log-container'>
            <Avatar src={'icon'} size={'large'} />
            <Typography.Title level={2} className='logo'>
                <Link to={'/'}>Cryptoverse</Link>
            </Typography.Title>
            {/*<Button className='menu-control-container'></Button>*/}

        </div>
    </div>
  )
}

export default NavBar