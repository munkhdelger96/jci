/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function About() {
  return (
    <div id="about-us" className="section section-about-us">
        <Container>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">Who we are?</h2>
                    <h5 className="description">
                        2020 он. Шинэ жаран, шинэ арваны эхлэл. 
                        Технологийн хөгжил асар хурдтай явагдаж, хүн робот хоёр зэрэгцэн ажиллах, 
                        орших шинэ эрин бидний өмнө ирээд байна. Бидний мэдэх ажлын байрууд устаж, 
                        хиймэл оюун ухаанд байраа тавьж өгөх болоод байгаа энэ цаг үеийг цахим 
                        шилжилтийн үе гэж тодорхойлж байна.<br></br> Залуус бид үүнийг мэдлэг шилжиж буй 
                        цаг үе гэж хүлээн авч, өөрсдийгөө олон талаар хөгжүүлж, бусдад ч гэрэлтэй 
                        сайн сайхныг түгээх, нийтээрээ урагшлан хөгжих эрин үе болгох учиртай
                    </h5>
                </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
                <Row>
                <Col md="5">
                    <div
                    className="image-container image-left"
                    style={{
                        backgroundImage:
                        "url(" + require("assets/img/landing-page.jpg") + ")"
                    }}
                    >
                    <p className="blockquote blockquote-info">
                        "Бид хамтдаа хийж хэрэгжүүлж буй ажлынхаа гол бүр байж чадна.
                        Залуус бидэнд ирээдүйг бүтээх эрх нь үүрэг хариуцлагатайгаа бий" <br></br>
                        <br></br>
                        <small>- Б.МӨНХТУГ<br></br>
                        2020 оны Ерөнхийлөгч <br></br>
                        JCI Централ,</small>
                    </p>
                    </div>
                </Col>
                <Col md="5">
                    <div
                    className="image-container image-right"
                    style={{
                        backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")"
                    }}
                    ></div>
                    <h3>
                        Бид юу хийдэг вэ
                    </h3>
                    <p>
                        Jaycee-чүүд бид Тогтвортой хөгжлийн зорилгуудыг нийгэмд 
                        сурталчилахад манлайлан ажиллаж, түгээн дэлгэрүүлэхэд өөрсдийн 
                        төсөл хөтөлбөрөө чиглүүлдэг.<br></br> <br></br> <br></br> 
                    </p>
                </Col>
                <Col className="ml-auto mr-auto text-center pad-top" md="8">
                    <h3>
                        2020 онд
                    </h3>
                    <p>
                        2020 онд бид олон улсын болон бизнесийн хамтын ажиллагааг дэмжиж, 
                        хөгжүүлж, гишүүдээ дэмжин ажиллана. Улмаар хамтран ажиллах байгууллагууд, 
                        спонсоруудын хамтын зорилгод нийцүүлэн нийгэм, олон нийтэд хандсан 4 төсөл 
                        хөтөлбөрөөр дамжуулан ТХЗ-ыг сурталчилж, шууд болон олон нийтийн хэрэгслээр 
                        1,500,000 гаруй хүнд хүрч ажиллахаар төлөвлөж байна.
                    </p>
                </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default About;
