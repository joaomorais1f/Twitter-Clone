import styled, { css } from 'styled-components';

import { Twitter } from '@styled-icons/entypo-social/Twitter';
import { MoreHorizontal } from '@styled-icons/feather/MoreHorizontal';
import { Feather } from '@styled-icons/entypo/Feather';

import { HomeCircle, Notifications, Email, Hashtag, Bookmark, FileList2, User, DotsCircleHorizontal } from '../../assets/styles/icons';

export const Container = styled.div`
    max-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 9px 19px 20px;
    overflow-y: auto;
    /* flex-grow: 1; */
    justify-content: space-between;
    width: 300px;
    @media (min-width: 500px) and (max-width: 1280px) {
        width: 88px;
        overflow-x: hidden;
        align-items: center;
    }
    
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const TwitterLogo = styled(Twitter)`
    height: 30px;
    width: 30px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (min-width: 500px) and (max-width: 1280px) {
        align-items: center;
    }

`;

export const MenuOption = styled.button`
    display: flex;
    align-items: center;
    transform: translateX(-10px);
    cursor: pointer;
    > span {
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
    }
    padding: 10px 12px;
    max-width: 100%;
    width: 100%;
    &:hover {
        background: var(--twitter-dark-hover);
        border-radius: 9999px;
        > span {
            color: var(--twitter);
        }
        svg {
            fill: var(--twitter);
        }
    }

    &.active, &:hover {
        span, svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }

    @media screen and (min-width: 500px) and (max-width: 1280px) {
        span {
            display: none;
        }
        transform: none;
    }
`;

const Icons = css`
    flex-shrink: 0;
    height: 30px;
    width: 30px;
`;

export const HomeIcon = styled(HomeCircle)`
    ${Icons};
`;


export const HashtagIcon = styled(Hashtag)`
    ${Icons};
`;

export const NotificationIcon = styled(Notifications)`
    ${Icons};
`;

export const MessageIcon = styled(Email)`
    ${Icons};
`;

export const FavoriteIcon = styled(Bookmark)`
    ${Icons};
`;

export const ListIcon = styled(FileList2)`
    ${Icons};
`;

export const ProfileIcon = styled(User)`
    ${Icons};
`;

export const MoreIcon = styled(DotsCircleHorizontal)`
    ${Icons};
    &:hover {
        fill: none;
    }

`;

export const Tweetar = styled.button`
    border-radius: 9999px;
    background-color: var(--twitter);
    margin-top: 10px;
    /* padding: 12px; */
    min-height: 49px;
    width: 100%;
    cursor: pointer;
    span {
        font-weight: bold;
        display: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    &:hover {
        background-color: var(--twitter-light-hover);
    }
    @media screen and (min-width: 1280px) {
        span {
            display: block;
        }
    }
`;

export const AvatarButton = styled.button`
    min-height: 49px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: var(--twitter-dark-hover);
    }


    @media screen and (min-width: 500px) and (max-width: 1280px) {
        align-items: center;
        justify-content: center;
        display: block;
    }
`;

export const AvatarPhoto = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 100%;
`;

export const AvatarData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    span:first-child {
        font-size: 16px;
        font-weight: bold;
    }
    span:last-child {
        color: var(--gray);
    }
    margin-right: 50px;
    @media screen and (min-width: 500px) and (max-width: 1280px) {
        span {
            display: none;
        }
    }
`;

export const More = styled(MoreHorizontal)`
    width: 30px;
    height: 30px;
    @media screen and (min-width: 500px) and (max-width: 1280px) {
        display: none;
    }
`;

export const FeatherIcon = styled(Feather)`
    width: 50%;
    display: none;
    @media screen and (min-width: 500px) and (max-width: 1280px) {
        display: block;
    }
`;