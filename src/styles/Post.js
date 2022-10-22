import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #171717;

    > img{
        width: 50px;
        border-radius: 50%;
    }


    .content{

        h3, > p{
            margin-bottom: 0.5rem
        }
    
        h3{
            font-size: 1.25rem;
        }
    
        a{
            position: relative;
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 100%;
            padding: 1.5rem 1rem;
            border: 1px solid #4D4D4D;
            border-radius: 15px;

            .title, .description, .link{
                width: calc(100% - 170px);
            }
    
            .title, .link{
                color: #CECECE;
            }

            .link, .description{
                font-size: 0.75rem;
            }

            .title{
                margin-bottom: 0.5em;
                font-weight: bold;
            }

            .link{
                font-weight: bold;
            }
    
            .description {
                color: #9B9595;
                margin-bottom: 1em;
            }
    
            img{
                position: absolute;
                top: -1px;
                right: -1px;
                max-width: 155px;
                height: calc(100% + 2px);
                object-fit: cover;
                border-radius: 0 15px 15px 0;
            }
        }
    }


`

export default Wrapper