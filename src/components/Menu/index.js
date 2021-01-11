import { Container,
    TwitterLogo,
    MenuContainer,
    MenuOption,
    HomeIcon,
    HashtagIcon,
    NotificationIcon,
    MessageIcon,
    FavoriteIcon,
    ListIcon,
    ProfileIcon,
    MoreIcon,
    Tweetar,
    AvatarButton,
    AvatarPhoto,
    AvatarData,
    More,
    FeatherIcon } from './styles';
    
import Joao from '../../assets/joao.jpg'; 

export default function Menu() {
    return (
        <Container>
            <MenuContainer>
            <TwitterLogo />
                <MenuOption>
                    <HomeIcon />
                    <span> Página Inicial </span>
                </MenuOption>
                <MenuOption>
                    <HashtagIcon />
                    <span> Explorar </span>
                </MenuOption>
                <MenuOption>
                    <NotificationIcon />
                    <span> Notificações </span>
                </MenuOption>
                <MenuOption>
                    <MessageIcon />
                    <span> Mensagens </span>
                </MenuOption>
                <MenuOption>
                    <FavoriteIcon />
                    <span> Itens salvos </span>
                </MenuOption>
                <MenuOption>
                    <ListIcon />
                    <span> Listas </span>
                </MenuOption>
                <MenuOption className="active">
                    <ProfileIcon />
                    <span> Perfil </span>
                </MenuOption>
                <MenuOption>
                    <MoreIcon />
                    <span> Mais </span>
                </MenuOption>
            <Tweetar> 
                <span> Tweetar </span> 
                <FeatherIcon />
            </Tweetar>
            </MenuContainer>
            <AvatarButton>
                <AvatarPhoto src={Joao} alt="foto_de_perfil" />
                <AvatarData>
                    <span> João Morais </span>
                    <span> @J0A0M042116 </span>
                </AvatarData>
                <More />
            </AvatarButton>
        </Container>
    )
}