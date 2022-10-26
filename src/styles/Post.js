import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #171717;
    position: relative;
    z-index: 1;


    .btn-delete, .btn-edit, .btn-comment{
        height: fit-content;
        color: white;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .btn-comment{
        margin: 5px 0;
    }
    
    .btn-container{
        position: absolute;
        right: 1rem;
        top: 1rem;
    }

    aside{
        display: flex;
        flex-direction: column;
        align-items: center;

        .user-picture{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }

        .like-container{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    p{
        font-size: 0.75rem;
        color: #FFF;
    }

    main{
        display: flex;
        flex-direction: column;
        width: 100%;

        h3, p{
            margin-bottom: 0.75rem;
        }

        h3{
            font-size: 1.25rem;
        }

        p{
            font-size: 1rem;
            color: #B7B7B7;
        }

        form{
            width: 100%;
            margin-bottom: 0.75rem;

            input{
                width: 100%;
                height: fit-content;
                padding: 0.5em;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
            }
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
            color: #CECECE;

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
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: -1px;
                right: -1px;
                width: 155px;
                height: calc(100% + 2px);
                object-fit: cover;
                border-radius: 0 15px 15px 0;
            }
        }
    }
`

export default Wrapper