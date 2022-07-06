import styled from 'styled-components'

// 引入 logo 图片
import LogoPic from '../header/logo.png'
export const HeaderWrapper = styled.div`

postition: relate;

height:56px;

border-bottom:1px solid #f0f0f0;

`

export const Logo = styled.a.attrs({

  href: '/'

})`

position: absolute;

left : 20;

top : 0;

display: block;

height:56px;

width:100px;

background: url(${LogoPic}) no-repeat;

background-size: contain;

`

export const Nav = styled.div`

width:960px;

box-size: box-size;

padding-right: 70px;

height: 56px;

margin-left: 100px;

`

export const NavItem = styled.div`

&.left {

float: left;

}

&.right {

float: right;

color: #969696;

}

&.active {

color: #ea6f5a;

}

line-height: 56px;

front-size: 15px;

padding-left: 6px;

padding-right: 12px;

color: #333;

`

export const NavSearch = styled.input.attrs({

  placeholder: '搜索'

})`

width : 160px;

height : 38px;

border: none;

outline : none;

padding : 0 20px;

box-size: box-size;

margin-top: 9px;

margin-left: 20px;

border-radius : 19px;

background: #eee;

font-size: 14px;

&::placeholder:

`

export const Addtion = styled.div`

position:absolute;

right: 0;

top: 0;

height: 65px;

`

export const Button = styled.div`

float:right;

line-height:38px;

margin-top:9px;

margin-right: 20px;

border-radius: 19px;

border : 1px solid rgba(236,97,73,.7);

color : #fff;

padding : 0 20px;

&.reg{

color:#ea6f5a;

}

&.writting{

background:#ea6f5a;

}

`