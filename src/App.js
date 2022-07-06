import React from 'react'
import ResponsiveAppBar from './common/header'


import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import QrCode from 'qrcode.react'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)


function App () {
  return (
    <div>
      <ResponsiveAppBar />
      <Card sx={{ minWidth: 275 }}>

        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            设计部- UI设计
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
            敕勒木格
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="h5" component="div" >
            内蒙古贺乐科技有限公司
          </Typography>
          <Typography variant="body2" color="text.secondary">
            呼和浩特市-新城区-新华东街-奈伦国际公馆3-140
            <br />
            {'TEL:15148983176 FAX:0483-8225307 Mobile:0483-8225307'}
            <br />
            {'Email:zh.pengfei@icloud.com web:www.youteacher.asia'}
          </Typography>
        </CardContent>


      </Card>


      <List>
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="简介" />
        </ListItemButton>

        <ListItemText primary="贺乐科技以科技引领未来为经营思想和品牌承诺， 致力于通过IT信息技术的创新推动社会可持续发展，受社会，客户，员工的尊敬。 贺乐科技母公司 YouTeacher Inc, 成立于2011年，是一家面向全球提供AI解决方案与服务的公司。致力于通过创新软件应用推动社会发展与变革，为个人创造创新的生活方式，为社会造价值。" />

      </List>
      <List>
        <ListItemButton>
          <ListItemIcon >
            <DraftsIcon sx={{
              bgcolor: 'rgba(71, 98, 1, 0.2)',
            }} />
          </ListItemIcon>
          <ListItemText primary="UNIQR在线沟通" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="15148983176" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="joeytes78@gmail。com" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="呼和浩特市-新城区-新华东街-奈伦国际公馆3-140" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon >
            <SendIcon color="yellow" />
          </ListItemIcon>
          <ListItemText primary="www.youteacher.asia" />
        </ListItemButton>
      </List>


      <List>
        <ListItemButton>
          <ListItemIcon >
            <DraftsIcon sx={{
              bgcolor: 'rgba(71, 98, 1, 0.2)',
            }} />
          </ListItemIcon>
          <ListItemText primary="在线生成交换名片，会员卡" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="快速交换名片，会员卡" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="在线沟通" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="一键打电话，定位，发送邮箱，查看网页" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon >
            <SendIcon color="yellow" />
          </ListItemIcon>
          <ListItemText primary="扫码办理业务窗口" />
        </ListItemButton>
      </List>

      <Divider variant="middle" />

      <QrCode value='www.baidu.com' size={200} fgColor='#000000' />

      <Divider variant="middle" />
      <h5>了解关于UNIqr 更多：www.uniqr.com</h5>,
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<DeleteIcon />}>
          App Store
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          Google Play
        </Button>
      </Stack>
    </div>
  )
}

export default App

