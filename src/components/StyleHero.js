import styled from 'styled-components'
import defaultmg from '../images/room-1.jpeg'
const StyledHero =styled.header`
min-height: calc(100vh - 66px);
background: url(${props=> props.img? props.img:defaultmg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`
export default StyledHero