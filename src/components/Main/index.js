import { Container, Header, BackIcon, Profile, BottomMenu, HomeIcon, SearchIcon, NotificationIcon, MessageIcon } from './styles';

export default function MainContent() {
    return (
        <>
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <Profile>
                    <strong> João Morais</strong>
                    <span> 372 Tweets </span>
                </Profile>
            </Header>

            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <NotificationIcon />
                <MessageIcon />
            </BottomMenu> 
        </Container>
        </>
    )
}