import { useProducts } from "../../hooks/useProducts"
import CommerceContent from "../../components/CommerceContent"
import { Button, Col, Row, Typography } from "antd"
import bannerImage from "../../assets/danti-banner.png";

const CommerceHome:React.FC = () => {
  const { searchedProducts } = useProducts()

  function scrollToCategory() {
    const element = document.getElementById('category_label');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="danti-banner-reduced">
        <div className="banner-information-reduced">
          <Row>
            <Typography.Text className="info-title">{'BEM-VINDO À DANTI!'}</Typography.Text>
          </Row>
          <Row>
            <Typography.Text className="info-description-2">{"Vista-se com autenticidade. Vista-se com DANTI."}</Typography.Text>
          </Row>
          <Row>
            <Button className="info-button" onClick={scrollToCategory}>{'COMPRAR AGORA'}</Button>
          </Row>
        </div>
      </div>
      <div className="danti-banner" style={{ backgroundImage: `url(${bannerImage})` }} >
        <Row>
          <Col xs={12}>
            <div className="banner-information">
              <Row>
                <Typography.Text className="info-title">{'BEM-VINDO À DANTI!'}</Typography.Text>
              </Row>
              <Row>
                <Typography.Text className="info-description">{"Descubra uma nova forma de expressar sua personalidade através da moda. Na DANTI, unimos conforto e estilo para oferecer peças que acompanham você em todos os momentos. Explore nossa coleção exclusiva e encontre o look perfeito para seu dia a dia."}</Typography.Text>
              </Row>
              <Row>
                <Typography.Text className="info-description-2">{"Vista-se com autenticidade. Vista-se com DANTI."}</Typography.Text>
              </Row>
              <Row>
                <Button className="info-button" onClick={scrollToCategory}>{'COMPRAR AGORA'}</Button>
              </Row>
            </div>
          </Col>
          </Row>
      </div>
      <br />
      {searchedProducts?.map((category, index) => {
        return (
        <>
          {index === 2 && (<div className="danti-mid-banner">
            <div className="danti-mid-banner-content">
              <Row justify="center"><Typography.Text className="mid-title">{'Descubra um Estilo Único'}</Typography.Text></Row>
              <Row justify="center"><Typography.Text className="mid-description">{'Renove seu guarda-roupa com peças versáteis que combinam conforto e sofisticação. Escolha sua favorita e eleve seu estilo a outro nível.'}</Typography.Text></Row>
            </div>
          </div>)}
          {index === 4 && (
            <div className="danti-mid-banner-2">
              <div className="danti-mid-banner-content">
                <Row justify="center"><Typography.Text className="mid-title">{'Tendências Que Inspiram'}</Typography.Text></Row>
                <Row justify="center"><Typography.Text className="mid-description">{'Explore as últimas novidades da moda e encontre peças que combinam com o seu estilo. Vista-se com confiança e autenticidade todos os dias.'}</Typography.Text></Row>
              </div>
            </div>
          )}
          <CommerceContent category={category?.label} products={category?.products}  />
        </>
      )
      })}
    </>
  )
}

export default CommerceHome