import { Carousel, CarouselIndicators, CarouselItem, CarouselControl } from 'reactstrap'
import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'

import Footer from '../../layouts/Footer/Footer'
import NavbarLayouts from '../../layouts/Navbar/Navbar'

import atk from '../../assets/images/atk.jpg'
import aunjai from '../../assets/images/aunjai.png'
import ceo from '../../assets/images/ceo.png'
import chumchon1 from '../../assets/images/chumchon2.png'
import chumchon2 from '../../assets/images/chumchon2.jpg'
import doctor from '../../assets/icons/icon-02.png'
import ecg from '../../assets/icons/icon-01.png'
import './landing.scss'
import logotext from '../../assets/images/go-check-text.png'
import plus from '../../assets/images/plus.png'
import service from '../../assets/images/service.jpg'
import sorporsorchor from '../../assets/icons/icon-03.png'
import stayhome from '../../assets/images/stayhome.jpg'
import telAlt from '../../assets/icons/icon-10.png'
import tick from '../../assets/icons/icon-04.png'

// slider image
import slide1 from '../../assets/images/slide-pic/1.jpg'
import slide2 from '../../assets/images/slide-pic/2.jpg'
import slide3 from '../../assets/images/slide-pic/3.jpg'
import slide4 from '../../assets/images/slide-pic/4.jpg'
import slide5 from '../../assets/images/slide-pic/5.jpg'
import slide6 from '../../assets/images/slide-pic/6.jpg'
import slide7 from '../../assets/images/slide-pic/7.jpg'
import slide8 from '../../assets/images/slide-pic/8.jpg'
import slide9 from '../../assets/images/slide-pic/9.jpg'
import slide10 from '../../assets/images/slide-pic/10.jpg'
import slide11 from '../../assets/images/slide-pic/11.jpg'
import slide12 from '../../assets/images/slide-pic/12.jpg'

export default function landing() {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0)

  // State for Animation
  const [animating, setAnimating] = React.useState(false)

  const items = [
    {
      src: slide1,
      altText: 'Slide 1',
      key: 1,
    },
    {
      src: slide2,
      altText: 'Slide 2',
      key: 2,
    },
    {
      src: slide3,
      altText: 'Slide 3',
      key: 3,
    },
    {
      src: slide4,
      altText: 'Slide 4',
      key: 4,
    },
    {
      src: slide5,
      altText: 'Slide 5',
      key: 5,
    },
    {
      src: slide6,
      altText: 'Slide 6',
      key: 6,
    },
    {
      src: slide7,
      altText: 'Slide 7',
      key: 7,
    },
    {
      src: slide8,
      altText: 'Slide 8',
      key: 8,
    },
    {
      src: slide9,
      altText: 'Slide 9',
      key: 9,
    },
    {
      src: slide10,
      altText: 'Slide 10',
      key: 10,
    },
    {
      src: slide11,
      altText: 'Slide 11',
      key: 11,
    },
    {
      src: slide12,
      altText: 'Slide 12',
      key: 12,
    },
  ]

  // Items array length
  const itemLength = items.length - 1

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  // Carousel Item Data
  const carouselItemData = items.map(item => (
    <CarouselItem key={item.key} onExited={() => setAnimating(false)} onExiting={() => setAnimating(true)}>
      <img src={item.src} alt={item.altText} className="custom-tag" />
    </CarouselItem>
  ))

  const handleRegister = () => {
    window.location.href = '/'
  }

  const handleContact = () => {
    window.location.href = '/'
  }

  return (
    <>
      <NavbarLayouts />
      <section className="banner-top">
        <div className="d-grid">
          <div className="brand-name">
            <img src={logotext} alt={logotext} width="600" />
          </div>
          <ul className="content">
            <li>
              โครงการ <span>"ชุมชนอุ่นใจ" GoCheck</span> บริการเชิงรุก
            </li>
            <li>ตรวจหาโควิด-19 ด้วย ATK ให้ชาวชุมชน พร้อมรับ</li>
            <li>
              เข้าระบบแยกกักตัวที่บ้าน <span>"อุ่นใจอยู่บ้าน"</span> กับ
            </li>
            <li>
              <span>GoCheck</span> ตามแนวทางของ <span>สปสช.</span>
            </li>
          </ul>
          <div className="btn-register">
            <button type="button" className="push-able" onClick={handleRegister}>
              <span className="front">
                <h5>ลงทะเบียน</h5>
              </span>
            </button>
          </div>
          <div className="btn-contact">
            <button type="button" className="push-able" onClick={handleContact}>
              <span className="front">
                <img src={telAlt} alt="tel" width="45" color="white left" />
                <h5 className="d-inline right">ติดต่อเรา</h5>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="d-grid">
          <div className="ceo">
            <img className="circle-img" src={ceo} alt="ceo" width="450" height="450" />
          </div>
          <div className="break-line"> </div>
          <div className="content">
            <div className="title">
              จุดเริ่มต้น <br />
              ของ <span className="green">Go</span>
              <span className="dark">Check</span>
            </div>
            <div className="detail">
              “ในปัจจุบัน สถานการณ์ของโรค โควิด 19 ในประเทศ ไทยมีแนวโน้มที่จะมีผู้ติดเชื้อเพิ่มมากขึ้นทุกวัน ผมจึง อยากให้ GoCheck
              ได้เป็นส่วนหนึ่งของสังคมในการ ช่วยเหลือประชาชนให้ต่อสู้กับโรคโควิด 19 และได้รับ ความรู้ที่ถูกต้องเกี่ยวกับโรคชนิดนี้”
            </div>
            <div className="author">- Nutchapon Kittichaiwong &nbsp;CEO & Founder</div>
          </div>
        </div>

        <div className="d-flex desc">
          <div className="description">
            <div className="title">
              เราทำให้การตรวจ
              <br />
              เป็นเรื่องง่าย
            </div>
            <div className="detail">
              ที่ GoCheck เรามีแพทย์และพยาบาลที่มี
              <br />
              ประสบการณ์เกี่ยวกับโรค โควิด 19 เราให้คำปรึกษา
              <br />
              ครอบคลุมตั้งแต่ การติดเชื้อ การกักตัว ไปจนถึง
              <br />
              การรักษา และที่คลินิคของเรายังมีอุปกรณ์ชุดตรวจ
              <br />
              ที่ทันสมัยและได้รับรองมาตรฐานจาก อย. และ
              <br />
              หน่วยงานภาครัฐกับภาคเอกชนต่าง ๆ
            </div>
          </div>
          <div className="pic">
            <img src={chumchon1} alt="chumchon1" width="500" height="400" />
          </div>
        </div>

        <div className="why-go-check">
          <div className="title">
            <div>
              <span className="spacer"> </span>
              <span className="th left">ทำไมต้อง&nbsp;</span>
              <span className="en uppercase right">
                <span>Go</span>Check <span className="question-mark">?</span>
              </span>
              <span className="spacer"> </span>
            </div>
          </div>
          <div className="d-grid">
            <div className="item">
              <img src={ecg} alt="ecg" width="250" />
              <div className="detail">
                การตรวจสุขภาพ
                <br />
                รูป<span>แบบใหม่</span>
              </div>
            </div>
            <div className="item">
              <img src={doctor} alt="doctor" width="250" />
              <div className="detail">
                คณะแพทย์และพยาบาล
                <br />
                <span>มีความเชี่ยวชาญ</span>
              </div>
            </div>
            <div className="item">
              <img src={sorporsorchor} alt="sorporsorchor" width="250" className="sorporsorchor" />
              <div className="detail">
                เราทำร่วมกับ
                <br />
                <span>
                  สํานักงานหลักประกัน
                  <br />
                  สุขภาพแห่งชาติ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="title">
          <AiOutlineLine size="90" />
          <div className="text">การบริการของเรา</div>
        </div>
        <div className="d-grid">
          <div className="picture">
            <img src={atk} alt="atk" width="400" height="350" />
          </div>
          <div className="tick">
            <img src={tick} alt="tick" width="30" />
          </div>
          <div className="item">
            <div className="topic">
              <span className="hilight">จำหน่าย</span>
              <br />
              ชุดตรวจ atk
            </div>
            <AiOutlineLine size="70" className="line" />
            <div className="detail">
              ชุดตรวจ ATK ยี่ห้อ RE 3 in 1 ใน 1 ชุดตรวจ สามารถเลือกตรวจได้ทั้ง โพรงจมูกน้ำลาย และลำคอ มีความแม่นยำมากถึง 95%
              สามารถใช้งานเองที่บ้านหรือที่สำนักงานได้ ใช้เวลาทราบผลเพียง 15-20 นาที
            </div>
          </div>
          <div className="picture">
            <img src={chumchon2} alt="chumchon2" width="400" height="350" />
          </div>
          <div className="tick">
            <img src={tick} alt="tick" width="30" />
          </div>
          <div className="item">
            <div className="topic">
              ตรวจ atk/pcr
              <br />
              <span className="hilight">Delivery</span>
            </div>
            <AiOutlineLine size="70" className="line" />
            <div className="detail">
              ตรวจกับแพทย์หรือพยาบาลผู้เชี่ยวชาญเท่านั้น ไม่สามารถทำเองได้ โดยใช้การเก็บตัวอย่างจาก โพรงจมูก ใช้เวลา 24-30 ชั่วโมง ในการทราบผล
              มีความแม่นยำ 100% มีการออกผลใบรับรองแพทย์ ยืนยันให้ โดยสามารถให้เดินทางมาตรวจที่คลินิก
              หรือให้ทีมผู้เชี่ยวชาญไปตรวจที่บ้านหรือที่ทำงานได้
            </div>
          </div>
          <div className="picture">
            <img src={stayhome} alt="stayhome" width="400" height="350" />
          </div>
          <div className="tick">
            <img src={tick} alt="tick" width="30" />
          </div>
          <div className="item">
            <div className="topic">
              ตรวจ atk/pcr
              <br />
              <span className="hilight">Home isolate</span>
            </div>
            <AiOutlineLine size="70" className="line" />
            <div className="detail">
              ตรวจกับแพทย์หรือพยาบาลผู้เชี่ยวชาญเท่านั้น ไม่สามารถทำเองได้ โดยใช้การเก็บตัวอย่างจาก โพรงจมูก ใช้เวลา 24-30 ชั่วโมง ในการทราบผล
              มีความแม่นยำ 100% มีการออกผลใบรับรองแพทย์ ยืนยันให้ โดยสามารถให้เดินทางมาตรวจที่คลินิก
              หรือให้ทีมผู้เชี่ยวชาญไปตรวจที่บ้านหรือที่ทำงานได้
            </div>
          </div>
          <div className="picture">
            <img src={service} alt="service" width="400" height="350" />
          </div>
          <div className="tick">
            <img src={tick} alt="tick" width="30" />
          </div>
          <div className="item">
            <div className="topic">
              บริการ
              <br />
              <span className="hilight">พ่นฆ่าเชื้อ</span>
            </div>
            <AiOutlineLine size="70" className="line" />
            <div className="detail">
              การฆ่าเชื้อโดยใช้น้ำยาฆ่าเชื้อทางการแพทย์ที่ได้รับรองจากองค์การอาหารและยา กำจัดไวรัส แบคทีเรีย และเชื้อโรคได้ 99.9%
              โดยปราศจากกลิ่นและปลอดสารพิษ เหมาะกับผู้ที่แพ้ง่าย ไม่ต้องฉีดทิ้งไว้ กลับมาใช้พื้นที่ได้ทันทีหลังจากฉีดพ่น
            </div>
          </div>
        </div>
      </section>

      <section className="home-isolation">
        <div className="title d-grid">
          <div className="text">
            <div>เข้าระบบ HOME ISOLATION กับ GOCHECK</div>
          </div>
          <div className="img">
            <img className="low-opacity" src={plus} alt="plus" width="200" />
          </div>
        </div>

        <div className="detail">
          <div className="topic">ตลอดการแยกกักตัวที่บ้านท่านจะได้รับ</div>
          <img src={aunjai} alt="aunjai" width="650" className="img-aunjai" />

          <ul className="list">
            <li>อาหาร 3 มื้อ สูงสุด 400/วัน</li>
            <li>ปรอทวัดไข้ดิจิตอล</li>
            <li>เครื่องวัดออกซิเจนปลายนิ้ว</li>
            <li>การติดตามอาการจากบุคลากรทางแพทย์ วันละ 4 ครั้ง</li>
            <li>ยาสามัญที่จำเป็น</li>
            <li>เตรียมพร้อมส่งโรงพยาบาลหากอาการแย่ลง</li>
          </ul>

          <div className="remark">
            <div>หมายเหตุ</div>
            <ul className="list">
              <li>เข้าระบบ HOME ISOLATION คนไข้ต้องเป็นผู้ที่มีบัตรประชาชน</li>
              <li>การบริการเป็นไปตามเงื่อนไขของ สปสช.</li>
            </ul>
          </div>
          <img className="low-opacity plus" src={plus} alt="plus" width="200" />
          <img src={sorporsorchor} alt="sorporsorchor" width="250" className="sorporsorchor" />
        </div>
      </section>

      <section className="slider">
        <div className="title">ผลงานของเรา</div>
        <div className="slider-image">
          <style>
            {`.custom-tag {
                  max-width: 100%;
                  height: 550px;
                  width: 70%;
                  box-shadow: 0px 8px 10px #808080;
                }`}
          </style>

          <Carousel activeIndex={activeIndex} next={nextButton} previous={previousButton}>
            <CarouselIndicators
              activeIndex={activeIndex}
              items={items}
              onClickHandler={newIndex => {
                if (animating) return
                setActiveIndex(newIndex)
              }}
            />
            {carouselItemData}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousButton} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={nextButton} />
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  )
}
