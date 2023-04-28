import { BsStarFill } from "react-icons/bs";
import {
  emma,
  freeman,
  mike,
  paul,
  c1,
  c2,
  c3,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
} from "../assets";

export const employees = [
  {
    img: freeman,
    name: "David Kim",
    postion: "Exterior Designer",
  },
  {
    img: emma,
    name: "Sarah Johnson",
    postion: " Interior Designer",
  },
  {
    img: mike,
    name: "James Rodriguez ",
    postion: "House Repair Specialist",
  },
  {
    img: paul,
    name: "David Lee ",
    postion: "Architect",
  },
];

export const testimonial = [
  {
    img: c1,
    name: " Emily Jones",
    title: "Stay-at-home mom",
    desc: (
      <span>
        I recently worked with Mireya for exterior design services for our home
        renovation project, and I was blown away by the results. Mireya was
        incredibly patient and attentive to our needs and preferences, and she
        helped us create a beautiful and functional outdoor living space that we
        now enjoy spending time in as a family. Her team was also very
        professional and efficient, and they kept the work site clean and
        organized throughout the project. I would definitely recommend Mireya
        for any design or house repair needs.
      </span>
    ),
    star1: <BsStarFill />,
    star2: <BsStarFill />,
    star3: <BsStarFill />,
    star4: <BsStarFill />,
    star5: <BsStarFill />,
  },
  {
    img: c2,
    name: "Paul Trueman",
    title: "CEO of a technology company",
    desc: (
      <span>
        I hired Mireya for interior design services for our office renovation
        project, and I couldn't be happier with the results. Mireya and her team
        were professional, creative, and efficient, and they really understood
        our vision for the space. They transformed our bland, outdated office
        into a modern, inspiring work environment that has had a positive impact
        on our team's productivity and morale. I highly recommend Mireya for any
        design or architecture needs.
      </span>
    ),
    stars: <BsStarFill />,
    star1: <BsStarFill />,
    star2: <BsStarFill />,
    star3: <BsStarFill />,
    star4: <BsStarFill />,
  },
  {
    img: c3,
    name: "Clara Smith",
    title: "Real estate developer",
    desc: (
      <span>
        I have worked with Mireya on several architecture projects, and she has
        always delivered exceptional results. Her attention to detail,
        creativity, and technical expertise are second to none, and she has
        helped me bring my vision to life on multiple occasions. Mireya is also
        very responsive and communicative, which is essential in the fast-paced
        world of real estate development. I highly recommend Mireya for any
        architecture or design needs.
      </span>
    ),
    star1: <BsStarFill />,
    star2: <BsStarFill />,
    star3: <BsStarFill />,
    star4: <BsStarFill />,
    star5: <BsStarFill />,
  },
];

export const portfolio = [
  {
    id: 1,
    name: "Townhouse",
    image: img1,
    desc: (
      <span>
        Mireya's team designed a chic and modern interior for a townhouse in
        ,Nairobi City.
      </span>
    ),
    details: {
      name: (
        <span>
          Minimalist Interior Design
          <span className="outline-text">
            <br /> for Townhouse
          </span>
        </span>
      ),
      image: img2,
      more: (
        <div className="wraper">
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img src={img5} alt="" />
          <img src={img1} alt="" />
          <img src={img4} alt="" />
        </div>
      ),
      date: "March 2022",
      desc: (
        <span>
          Mireya's team transformed the townhouse into an elegant space by
          creating a minimalist interior design. They used neutral color schemes
          to create a sense of harmony and balance in the house. They also
          incorporated natural materials like wood and stone to add warmth to
          the space. To make the most out of the small space, the team utilized
          multifunctional furniture. The result was a beautifully designed
          interior that maximized space and functionality.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an incredible job in transforming my townhouse.
          Their minimalist approach created an elegant and calming space that I
          love coming home to. They maximized space and functionality without
          compromising on style. I highly recommend them to anyone looking for
          interior design services." - <span className="client"> Emily</span>.
        </span>
      ),
    },
  },
  {
    id: 2,
    name: "Villa",
    image: img6,
    desc: (
      <span>
        Transformed a villa in Mombasa with a modern and sleek exterior design.
      </span>
    ),
    details: {
      name: (
        <span>
          Exterior Design for
          <span className="outline-text">
            <br /> Villa
          </span>
        </span>
      ),
      image: img7,
      more: (
        <div className="wraper">
          <img src={img8} alt="" />
          <img src={img7} alt="" />
          <img src={img9} alt="" />
          <img src={img6} alt="" />
          <img src={img10} alt="" />
        </div>
      ),
      date: "August 2022",
      desc: (
        <span>
          The team at worked on a villa in Mombasa to give it a modern look.
          They used a combination of steel, glass, and concrete to create a
          sleek and contemporary exterior. The team also added a new swimming
          pool and patio area to create a space perfect for outdoor
          entertaining. To complement the modern design, they added landscaping
          with drought-resistant plants that require minimal maintenance. The
          end result was a stunning villa with a modern and functional exterior.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an exceptional job in transforming my villa. The
          new modern design is breathtaking, and the added patio and pool area
          have become a favorite spot for outdoor entertainment. Their attention
          to detail and use of durable materials make me confident that my villa
          will look great for years to come. I highly recommend Mireya to anyone
          looking for exterior design services." -{" "}
          <span className="client"> Ahmed</span>.
        </span>
      ),
    },
  },
  {
    id: 3,
    name: "Renovation",
    image: img11,

    desc: (
      <span>
        Restored a historic building in Lamu, Kenya, to its former glory.
      </span>
    ),
    details: {
      name: (
        <span>
          Renovation a Historic
          <span className="outline-text">
            <br /> Building
          </span>
        </span>
      ),
      image: img15,
      more: (
        <div className="wraper">
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img11} alt="" />
          <img src={img15} alt="" />
        </div>
      ),
      date: "January 2022",
      desc: (
        <span>
          Mireya's team worked on a historic building in Lamu to restore it to
          its former glory. They started by carefully analyzing the building's
          structure to understand its unique features. They then used
          traditional building techniques to ensure the building's historical
          authenticity. The team also added modern amenities to make the
          building more functional, like air conditioning and new plumbing. The
          result was a beautifully restored building that pays homage to its
          history while meeting the needs of modern living.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an incredible job in restoring our historic
          building in Lamu. They were able to maintain the building's historical
          authenticity while adding modern amenities that made it more
          functional for daily living. We are so grateful for their expertise
          and would highly recommend them for any restoration or renovation
          projects." - <span className="client"> Fatima</span>.
        </span>
      ),
    },
  },

  {
    id: 4,
    name: "Contemporary Artitechuare Design",
    image: img16,
    desc: (
      <span>
        Designed a contemporary and functional artitechuare plan for a
        residential home in Karen, Nairobi.
      </span>
    ),
    details: {
      name: (
        <span>
          Artitechuare Design for
          <span className="outline-text">
            <br /> Residential Home
          </span>
        </span>
      ),
      image: img17,
      more: (
        <div className="wraper">
          <img src={img18} alt="" />
          <img src={img17} alt="" />
          <img src={img19} alt="" />
          <img src={img16} alt="" />
        </div>
      ),
      date: "May 2022",
      desc: (
        <span>
          Worked on a residential home in Karen, Nairobi, to design an
          artitechuare plan that maximized functionality and aesthetics. They
          utilized contemporary design elements like clean lines and open spaces
          to create a modern look. The team also incorporated sustainable
          building practices like solar panels and water recycling systems to
          reduce the home's environmental impact. The end result was a stunning
          and functional residential home that blends contemporary design with
          sustainable building practices.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did a phenomenal job in designing our residential home
          in Karen. The contemporary design elements and sustainable building
          practices they incorporated have made our home both functional and
          beautiful. Their attention to detail and commitment to sustainability
          are truly inspiring. We highly recommend them to anyone looking for
          artitechuare design services." - <span className="client"> John</span>
          .
        </span>
      ),
    },
  },
  {
    id: 5,
    name: "Renovation",
    image: img20,
    desc: (
      <span>
        Mireya's team undertook a complete renovation of a home in Eldoret.
      </span>
    ),
    details: {
      name: (
        <span>
          Complete Home Renovation
          <span className="outline-text">
            <br /> in Eldoret
          </span>
        </span>
      ),
      image: img21,
      more: (
        <div className="wraper">
          <img src={img22} alt="" />
          <img src={img23} alt="" />
          <img src={img20} alt="" />
          <img src={img24} alt="" />
          <img src={img25} alt="" />
          <img src={img21} alt="" />
        </div>
      ),
      date: "October 2022",
      desc: (
        <span>
          Complete renovation of a home in Eldoret, Kenya. They started by
          analyzing the home's structural integrity and addressing any necessary
          repairs. The team then worked with the client to design a new interior
          and exterior that met their needs and preferences. They used durable
          and sustainable materials like bamboo and recycled glass to minimize
          the home's environmental impact. The result was a stunning home that
          maximized functionality, aesthetics, and sustainability.
        </span>
      ),
      test: (
        <span>
          "Mireya's team went above and beyond in renovating our home in
          Eldoret. They not only addressed any necessary repairs but also
          designed a beautiful and sustainable new interior and exterior. Their
          commitment to sustainability and their use of eco-friendly materials
          has made our home not only beautiful but also environmentally
          conscious. We would highly recommend Mireya to anyone looking for a
          complete home renovation." - <span className="client">Anne</span>.
        </span>
      ),
    },
  },
  {
    id: 6,
    name: "Living Space",
    image: img26,
    desc: <span>Designed an outdoor living space for a villa in Malindi.</span>,
    details: {
      name: (
        <span>
          Living Space Design
          <span className="outline-text">
            <br /> for Villa
          </span>
        </span>
      ),
      image: img27,
      more: (
        <div className="wraper">
          <img src={img28} alt="" />
          <img src={img29} alt="" />
          <img src={img26} alt="" />
          <img src={img27} alt="" />
        </div>
      ),
      date: "July 2022",
      desc: (
        <span>
          Mireya's team worked on a villa in Malindi, Kenya, to create a
          stunning outdoor living space. They started by analyzing the space to
          determine the best design elements to incorporate. The team then used
          natural materials like wood and stone to create a warm and inviting
          atmosphere. They added comfortable outdoor furniture, a barbecue area,
          and a fire pit to make the space functional for outdoor entertaining.
          The end result was a beautiful outdoor living space that maximized
          functionality and aesthetics.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an amazing job in designing our outdoor living
          space in Malindi. Their use of natural materials and attention to
          detail created a warm and inviting atmosphere that we love spending
          time in. They also incorporated functional elements like a barbecue
          area and a fire pit, making the space perfect for outdoor
          entertaining. We highly recommend Mireya for any outdoor living space
          design projects." - <span className="client"> Sarah</span>.
        </span>
      ),
    },
  },
  {
    id: 7,
    name: "Commercial Space",
    image: img30,

    desc: (
      <span>Modern interior for a commercial space in Nairobi, Kenya.</span>
    ),
    details: {
      name: (
        <span>
          Interior Design for
          <span className="outline-text">
            <br /> Commercial Space
          </span>
        </span>
      ),
      image: img31,
      more: (
        <div className="wraper">
          <img src={img33} alt="" />
          <img src={img31} alt="" />
          <img src={img32} alt="" />
          <img src={img30} alt="" />
          <img src={img34} alt="" />
        </div>
      ),
      date: "January 2022",
      desc: (
        <span>
          Team worked on a commercial space in Nairobi, Kenya, to create a
          modern and functional interior design. They started by analyzing the
          space and determining the best layout and design elements to
          incorporate. The team then used modern design elements like clean
          lines and minimalist decor to create a sleek and contemporary look.
          They added functional elements like built-in shelving and ergonomic
          furniture to maximize the space's functionality. The end result was a
          beautiful and functional commercial space that perfectly met the
          client's needs.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an outstanding job in designing the interior of our
          commercial space in Nairobi. Their use of modern design elements and
          functional features has transformed the space into a sleek and
          contemporary work environment. We highly recommend Mireya for any
          commercial interior design projects." -
          <span className="client"> Lucy</span>.
        </span>
      ),
    },
  },

  {
    id: 8,
    name: "Facelift",
    image: img37,
    desc: (
      <span>
        Team gave a residential home in Mombasa, Kenya, an exterior facelift.
      </span>
    ),
    details: {
      name: (
        <span>
          Facelift for
          <span className="outline-text">
            <br /> Residential Home
          </span>
        </span>
      ),
      image: img38,
      more: (
        <div className="wraper">
          <img src={img39} alt="" />
          <img src={img40} alt="" />
          <img src={img37} alt="" />
          <img src={img38} alt="" />
        </div>
      ),
      date: "March 2023",
      desc: (
        <span>
          Mireya's team worked on a residential home in Mombasa, Kenya, to give
          it an exterior facelift. They started by analyzing the home's exterior
          and determining the best design elements to incorporate. The team then
          used natural materials like stone and wood to create a warm and
          inviting exterior. They added landscaping and outdoor lighting to
          further enhance the home's curb appeal. The end result was a stunning
          and inviting home exterior that perfectly complemented the home's
          interior.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an amazing job in giving our home in Mombasa an
          exterior facelift. Their use of natural materials and attention to
          detail created a warm and inviting atmosphere that perfectly
          complements the home's interior. We love the new landscaping and
          outdoor lighting, which have further enhanced our home's curb appeal.
          We highly recommend Mireya for any home exterior design projects." -
          <span className="client"> David</span>.
        </span>
      ),
    },
  },
  {
    id: 9,
    name: "Kitchen Renovation",
    image: img41,
    desc: (
      <span>
        Undertook a kitchen renovation project for a residential home in Nakuru,
        Kenya.
      </span>
    ),
    details: {
      name: (
        <span>
          Kitchen Renovation for
          <span className="outline-text">
            <br /> Residential Home
          </span>
        </span>
      ),
      image: img44,
      more: (
        <div className="wraper">
          <img src={img43} alt="" />
          <img src={img41} alt="" />
          <img src={img44} alt="" />
          <img src={img45} alt="" />
          <img src={img42} alt="" />
        </div>
      ),
      date: "April 2023",
      desc: (
        <span>
          The team worked on a residential home in Nakuru, Kenya, to undertake a
          kitchen renovation project. They started by analyzing the space and
          determining the best layout and design elements to incorporate. The
          team then used durable and sustainable materials like bamboo and
          recycled glass to create a functional and environmentally conscious
          kitchen. They added modern design elements like stainless steel
          appliances and sleek cabinetry to create a contemporary look. The end
          result was a stunning and functional kitchen that perfectly met the
          client's needs.
        </span>
      ),
      test: (
        <span>
          "Mireya's team did an outstanding job in renovating our kitchen in
          Nakuru. Their use of sustainable materials and modern design elements
          has transformed our kitchen into a functional and beautiful space. We
          love the new cabinetry and stainless steel appliances, which have
          given our kitchen a contemporary look. We highly recommend Mireya for
          any kitchen renovation projects." -
          <span className="client"> Grace</span>.
        </span>
      ),
    },
  },
];

export const home = [
  {
    type: "exterior design",
    img: img4,
    title: (
      <span>
        Greenwell Yards
        <span className="outline-text">
          <br /> Country house
        </span>
      </span>
    ),
    desc: (
      <span>
        Transform outdoor space into a lush oasis with Greenwell expert
        landscaping services.
      </span>
    ),
  },
  {
    type: "artichecture",
    img: img10,
    title: (
      <span>
        Compact House
        <span className="outline-text">
          <br /> Project
        </span>
      </span>
    ),
    desc: (
      <span>
        Discover the beauty of minimalist living with our sleek and stylish home
        designs.
      </span>
    ),
  },
  {
    type: "interior design ",
    img: img7,
    title: (
      <span>
        Little Cottage
        <span className="outline-text">
          <br /> Concept
        </span>
      </span>
    ),
    desc: (
      <span>
        Experience cozy living at its best with Little Cottage Concept - where
        charm meets comfort.
      </span>
    ),
  },
];
