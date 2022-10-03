import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items:center;
height: 100px;
margin: 20px 90px 60px 0;
`;

export const Tarzan = styled.div`
display: flex;
margin : 50px;
`;

Container.heroWrap = styled.h2`
margin-top: -20px;
margin-left: 20px;
`;

Container.Title = styled.h2`
margin-top: 0;
margin-bottom: 4px;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`;

Container.Text = styled.h2`
margin: 0;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`;

Container.Price = styled.h2`
margin:0;
margin-top: -20px;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-decoration-line: line-through;
color: #696969;
`;

Container.Sum = styled.h2`
margin:0;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #696969;
`;

Container.TitleWrapFlex = styled.h2`
display:flex;
align-items:center;
margin:0 ;
`;

Container.TitleWrap = styled.h2`
margin-right: 24px;
`;

Container.Btn = styled.h2`
margin-top: -10px;
font-weight: 400;
font-size: 10px;
padding: 5px 12px;
background-color: #0D263B;
color: #fff;
text-transform:uppercase;
border-radius: 3px;
`;


export const Promo = styled.tbody`
width: 530px;
height: 160px;
display: flex;
align-items: center;
justify-content: space-between;
`;


export const PromoHead = styled.tbody`
width: 500px;
display: flex;
align-items: center;
justify-content: space-between;
`;

PromoHead.Info = styled.th`
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
`;

Promo.Info = styled.td`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`;

Promo.btnWrap = styled.td`
display: flex;
`;

Promo.btn = styled.button`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: blue;
margin-right: 10px;
background-color: transparent;
border: none;
`;