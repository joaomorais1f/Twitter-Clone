import { Container, Wrapper } from './styles';
import MainContent from '../Main';
import Menu from '../Menu';

export default function Layout() {
    return (
        <>
        <Container>
            <Wrapper>
                <Menu />
                <MainContent />
                {/* <Side />  */}
            </Wrapper>
        </Container>
        </>
    )
}