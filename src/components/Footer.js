import React from "react";
import styled from "styled-components";
import "../Footer.scss";

const FooterDiv = styled.div`
    background: #568EA3;
    color: white;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
    justify-content: space-around;
    box-sizing: border-box;
`;
const ContainerA = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 50%;
    @media (max-width: 800px){
        width:100%;
        padding: 20px;
    }
`;
const NewsLetter = styled.div`
    box-sizing: border-box;
    padding: 20px;
    width: 40%;
    @media (max-width: 800px){
        width:100%;
        padding: 20px;
    }

`;



export default function Footer() {
    return (
        <FooterDiv>
            <ContainerA className="containerA">
                <h3>About Periwinkle Hair Care</h3>
                <p>Cupcake ipsum dolor sit. Amet gummi bears wafer apple pie caramels sweet. I love pastry jujubes gingerbread chocolate cake lemon drops sesame snaps topping. Toffee candy canes halvah pudding sweet roll apple pie. Dragée fruitcake gingerbread brownie lemon drops toffee danish. Danish gummies biscuit I love. Chupa chups caramels pudding liquorice I love. Toffee I love fruitcake gingerbread.</p>
                <div>
                    <ul className="decor">
                        <li><a href="https://haircareapp.netlify.com/">Contact Us</a></li>
                        <li><a href="https://haircareapp.netlify.com/">FAQs</a></li>
                        <li><a href="https://haircareapp.netlify.com/">Read more about us</a></li>
                    </ul>
                </div>   
            </ContainerA>

            <NewsLetter className="newsletter">
                <h3>Subscribe to our Newsletter</h3>
                <form>
                    <label>
                        <input
                            type="text" 
                            placeholder="Enter email here" 
                        />
                    </label>
                    <button type="submit">Subscribe</button>
                </form>
            </NewsLetter>
        </FooterDiv>
    )
}