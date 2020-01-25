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
                    <h2 className="title">Бидний тухай</h2>
                    <h5 className="description">
                        Тус салбар байгууллага нь 2003 оны 10 сарын 18-нд буюу дэлхий 
                        JCI хөдөлгөөн үүсэж хөгжсөн өдөр Улаанбаатар Централ нэртэйгээр 
                        С.Эрдэнэ ерөнхийлөгч, Д.Сүрэнчимэг, Ц.Түвшинбаяр сенаторуудын санаачилга, 
                        хичээл зүтгэлээр JCI Монгол байгууллагын VI дахь салбар болон үүсгэн 
                        байгуулагдсан түүхтэй.
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
                        "url(" + require("assets/img/bg3.jpg") + ")"
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
                        "url(" + require("assets/img/buga.jpg") + ")"
                    }}
                    ></div>
                    <p>
                    Байгуулагдсан цагаасаа өнөөдрийг хүртэл 
                    Монголын нийгмийн салбар бүрийн шилдэг манлайлагч залуусаас бүрдсэн гишүүд, 
                    үе үеийн удирдлагийн багийнхан, ерөнхийлөгчид, сенаторуудын сэтгэл зүтгэл, 
                    идэвхитэй оролцоо, дэмжлэгтэйгээр тогтвортой, амжилттай хөгжсөөр ирлээ.
                    <br></br><br></br> 
                    Түүхэн хөгжлийн явцад JCI Улаанбаатар Централ нэрээ өөрчилж 2017 оноос JCI Централ нэртэйгээр үйл ажиллагаагаа явуулж байна. 
                    17 жилийн хугацаанд олон төсөл хөтөлбөрүүдийг хэрэгжүүлснээс хүүхдэд хандсан төслүүд 48.5%  орчмыг эзлэн, амжилттай, бодит үр дүн гаргасаар иржээ. 
                    </p>
                </Col>
                <Col className="ml-auto mr-auto text-center pad-top" md="8">
                    <p>
                    JCI Централ салбар байгууллага байгуулагдсан цагаасаа өнөөдрийг хүртэл JCI Монгол байгууллагын “central” буюу төв нь байсаар ирсэн бөгөөд өнгөрсөн хугацаанд манай салбар байгууллагаас 5 үндэсний ерөнхийлөгч, JCI Монгол байгууллагын зөвлөхүүдийн танхимын дарга, JCI Монгол сангийн тэргүүн, JCI байгууллагын шилдэг Үндэсний ерөнхийлөгч 2, JCI Grand Slam шагналын эзэн 2, JCI сенатор ... төрсөн зэрэг амжилттайгаар БАХАРХАЛ, ХҮНДЭТГЭЛ, ТАЛАРХАЛ дүүрэн түүхийг хамтдаа бүтээлцсээр байна.
                    Бид нийгэмд эерэг өөрчлөлт бүтээх хүсэл, тэмүүлэлтэй бусдаас суралцаж, хамтдаа хөгжих зөв хандлагатай манлайлагч залууст үргэлж нээлттэй байх болно.
                    </p>
                </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default About;
