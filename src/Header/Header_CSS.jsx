import styled from 'styled-components'

export const S_Header = styled.header`
    display: flex;
    align-items: center;
    background-color: #474158;
    width: 100%;
    height: 82px;
    justify-content: space-between;
    padding:  0 105px;
`
export const S_headLogo = styled.div`
    display: flex;
    align-items: center;
     .contentLogo p{
           color: #fff;
           margin-left: 10px;
        }
    .imgLogo{
        font-size: 50px;
        color:  #fff;
    }
`
export const S_headSearch = styled.div`
    width: 370px;
    height: 32px;
    border-radius: 20px;
    background-color: #3e394b;
    position: relative;
    color: #fff;
    .headSearch_content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .headSearch_icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 14px;
        font-size: 18px;
    }
`
export const S_head_User = styled.div`
    width: 200px;
    background-color: #3e394b;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 0 30px;
    a{
        color: #fff;
        text-decoration: none;
        display: block;

    }
`

/////////////////animation
export const S_Navigate = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2b2735;
    color: #fff;
    height: 40px;
    padding: 0 164px;
    a{
        text-decoration: none;
        color: #fff;
    }
`