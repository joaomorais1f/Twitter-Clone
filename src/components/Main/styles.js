import styled, { css } from 'styled-components';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { HomeCircle, Search, Notifications, Email } from '../../assets/styles/icons';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: min(601px, 100%);
  
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);

`;

export const Header = styled.header`
    position: sticky;
    top: 0;
    background: var(--primary);
    height: 50px;
    display: flex;
    align-items: center;
    text-align: left;
    padding: 8px 0 9px 13px;
    z-index: 5;

    > button {
        padding: 8px;
        border-radius: 50%;
        outline: 0;
        cursor: pointer;
        &:hover {
            background: var(--twitter-dark-hover);
        }
    }
`;

export const BackIcon = styled(ArrowBack)`
    height: 23px;
    width: 23px;
    fill: var(--twitter);
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    > strong {
        font-size: 21px;
        font-weight: bold;
    }

    > span {
        font-size: 14px;
        color: var(--gray);
    }
`;

export const BottomMenu = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    background: var(--primary);
    z-index: 5;
    border-top: 2px solid var(--outline);

    @media screen and (max-width: 500px) {
        display: flex;
        height: 60px;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
`;

const Icons = css`
    width: 28px;
    height: 28px;
    fill: var(--gray);
    cursor: pointer;

    &.active, &:hover {
        fill: var(--twitter);
    }
`;

export const HomeIcon = styled(HomeCircle)`
    ${Icons};
`;

export const SearchIcon = styled(Search)`
    ${Icons};
    height: 30px;
    width: 30px;
`;

export const NotificationIcon = styled(Notifications)`
    ${Icons};
    height: 32px;
    width: 32px;
`;

export const MessageIcon = styled(Email)`
    ${Icons};
`;

