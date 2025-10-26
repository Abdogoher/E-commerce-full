import {
  BadgeDollarSign,
  BadgePercent,
  PillBottle,
  TruckElectric,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-full">
        <div className="border-b border-gray-300 w-full md:w-3/5 mx-auto flex justify-around items-center divide-y-0 divide-x divide-gray-300 py-1 md:py-4 text-gray-700 text-[5px] md:text-sm">
          <div className="flex justify-center items-center gap-2 px-1 md:px-4 md:py-2 py-0">
            <span>
              <PillBottle className="w-3 md:w-5" />
            </span>
            <span>Everyday fresh products</span>
          </div>
          <div className="flex justify-around items-center gap-2 px-1 md:px-4 md:py-2 py-0">
            <div>
              <TruckElectric className="w-3 md:w-5" />
            </div>
            <p>Free delivery for order over $70</p>
          </div>
          <div className="flex justify-center items-center gap-2 px-1 md:px-4 md:py-2 py-0">
            <span>
              <BadgePercent className="w-3 md:w-5" />
            </span>
            <span>Daily Mega Discounts</span>
          </div>
          <div className="flex justify-center items-center gap-2 px-1 md:px-4 md:py-2 py-0">
            <span>
              <BadgeDollarSign className="w-3 md:w-5" />
            </span>
            <span>Best price on the market</span>
          </div>
        </div>
      </div>
      {/* links  */}
      <div className="w-full md:w-3/5 mx-auto flex justify-between px-1 py-3 md:py-16 ">
        <div>
          <h4 className="mb-1 md:mb-3 text-xs md:text-lg">
            Fruit & Vegetables
          </h4>
          <ul className="text-gray-500 text-[6px] md:text-sm">
            <li className="py-1">
              <Link href="/">Fresh Vegetables</Link>
            </li>
            <li className="py-1">
              <Link href="/">Herbs & Seasonings</Link>
            </li>
            <li className="py-1">
              <Link href="/">Fresh Fruits</Link>
            </li>
            <li className="py-1">
              <Link href="/">Cuts & Sprouts</Link>
            </li>
            <li className="py-1">
              <Link href="/">Exotic Fruits & Veggies</Link>
            </li>
            <li className="py-1">
              <Link href="/">Packaged Produce</Link>
            </li>
            <li className="py-1">
              <Link href="/">Party Trays</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1 md:mb-3 text-xs md:text-lg">Breakfast & Dairy</h4>
          <ul className="text-gray-500 text-[6px] md:text-sm">
            <li className="py-1">
              <Link href="/">Milk & Flavoured Milk</Link>
            </li>
            <li className="py-1">
              <Link href="/">Butter and Margarine</Link>
            </li>
            <li className="py-1">
              <Link href="/">Cheese</Link>
            </li>
            <li className="py-1">
              <Link href="/">Eggs Substitutes</Link>
            </li>
            <li className="py-1">
              <Link href="/">Honey</Link>
            </li>
            <li className="py-1">
              <Link href="/">Marmalades</Link>
            </li>
            <li className="py-1">
              <Link href="/">Sour Cream and Dips</Link>
            </li>
            <li className="py-1">
              <Link href="/">Yogurt</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1 md:mb-3 text-xs md:text-lg">Meat & Seafood</h4>
          <ul className="text-gray-500 text-[6px] md:text-sm">
            <li className="py-1">
              <Link href="/">Breakfast Sausage</Link>
            </li>
            <li className="py-1">
              <Link href="/">Dinner Sausage</Link>
            </li>
            <li className="py-1">
              <Link href="/">Beef</Link>
            </li>
            <li className="py-1">
              <Link href="/">Chicken</Link>
            </li>
            <li className="py-1">
              <Link href="/">Sliced Deli Meat</Link>
            </li>
            <li className="py-1">
              <Link href="/">Shrimp</Link>
            </li>
            <li className="py-1">
              <Link href="/">Wild Caught Fillets</Link>
            </li>
            <li className="py-1">
              <Link href="/">Crab and Shellfish</Link>
            </li>
            <li className="py-1">
              <Link href="/">Farm Raised Fillets</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1 md:mb-3 text-xs md:text-lg">Beverages</h4>
          <ul className="text-gray-500 text-[6px] md:text-sm">
            <li className="py-1">
              <Link href="/">Water</Link>
            </li>
            <li className="py-1">
              <Link href="/">Sparkling Water</Link>
            </li>
            <li className="py-1">
              <Link href="/">Soda & Pop</Link>
            </li>
            <li className="py-1">
              <Link href="/">Coffee</Link>
            </li>
            <li className="py-1">
              <Link href="/">Milk & Plant-Based Milk</Link>
            </li>
            <li className="py-1">
              <Link href="/">Tea & Kombucha</Link>
            </li>
            <li className="py-1">
              <Link href="/">Drink Boxes & Pouches</Link>
            </li>
            <li className="py-1">
              <Link href="/">Craft Beer</Link>
            </li>
            <li className="py-1">
              <Link href="/">Wine </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-1 md:mb-3 text-xs md:text-lg">Breads & Bakery</h4>
          <ul className="text-gray-500 text-[6px] md:text-sm">
            <li className="py-1">
              <Link href="/">Milk & Flavoured Milk</Link>
            </li>
            <li className="py-1">
              <Link href="/">Butter and Margarine</Link>
            </li>
            <li className="py-1">
              <Link href="/">Cheese</Link>
            </li>
            <li className="py-1">
              <Link href="/">Eggs Substitutes</Link>
            </li>
            <li className="py-1">
              <Link href="/">Honey</Link>
            </li>
            <li className="py-1">
              <Link href="/">Marmalades</Link>
            </li>
            <li className="py-1">
              <Link href="/">Sour Cream and Dips</Link>
            </li>
            <li className="py-1">
              <Link href="/">Yogurt</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
