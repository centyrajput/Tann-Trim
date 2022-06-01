import React from "react";
import Gridprop from "./Gridprop";
export const Home = () => {
  return (
    <div>
      {/* NAV 1 SECTION */}
      <div className="nav1">
        <div className="innertopnav">
          <h1>TANN TRIM</h1>
          <div className="innernavicon">
            <i class="fa-solid fa-magnifying-glass nav1icon"></i>
            <i class="fa-regular fa-user nav1icon"></i>
            <i class="fa-regular fa-bookmark nav1icon"></i>
            <i class="fa-solid fa-bag-shopping nav1icon"></i>
          </div>
        </div>

        {/* NAV 2 SECTION */}

        <div className="nav2">
          <ul>
            <li>
              {" "}
              <a href=""> Bags </a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Travel </a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Accesories </a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Gifting </a>{" "}
            </li>
            <li>
              {" "}
              <a href=""> Jewelery </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* BAGS ICON SECTION */}
      <div className="bags">
        <i class="fa-solid fa-suitcase-rolling bagicon"></i>
        <i class="fa-solid fa-briefcase bagicon"></i>
        <i class="fa-solid fa-cart-flatbed-suitcase bagicon"></i>
        <i class="fa-solid fa-bag-shopping bagicon"></i>
        <i class="fa-solid fa-suitcase-rolling bagicon"></i>
        <i class="fa-solid fa-briefcase bagicon"></i>
        <i class="fa-solid fa-cart-flatbed-suitcase bagicon"></i>
        <i class="fa-solid fa-bag-shopping bagicon"></i>
      </div>

      {/* BAGPACK SECTION */}
      <div className="bagpack">
        <div className="innerbp">
          <h1>
            Bags <i class="fa-solid fa-circle bpicon1"></i> Bag Packs
          </h1>
          <div className="innerbpicon">
            <h1>
              13 Products
              <i class="fa-solid fa-arrow-up-from-bracket bpicon2"></i>
            </h1>
          </div>
        </div>
      </div>

      {/* GRID SECTION */}
      <div className="grid">
        <Gridprop
          sorc="men1.png"
          h1="The Brown Metro Movers"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men2.png"
          h1="The Metro Movers Black"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men3.png"
          h1="The Metro Movers Black"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men4.png"
          h1="The Metro Movers Black"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men1.png"
          h1="The Brown Metro Movers"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men2.png"
          h1="The Metro Movers Black"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men3.png"
          h1="The Metro Movers Black"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />

        <Gridprop
          sorc="men4.png"
          h1="The Metro Movers Black"
          p1="₹4899"
          p2="8999"
          p3="(50% Off)"
        />
      </div>
    </div>
  );
};

export default Home;
