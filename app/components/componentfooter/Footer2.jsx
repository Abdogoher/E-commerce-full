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
        <div className="border-b border-gray-300 w-3/5 mx-auto flex flex-col sm:flex-row justify-between items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300 py-4 text-gray-700 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 sm:py-0">
            <span>
              <PillBottle />
            </span>
            <span>Everyday fresh products</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 sm:py-0">
            <span>
              <TruckElectric />
            </span>
            <span>Free delivery for order over $70</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 sm:py-0">
            <span>
              <BadgePercent />
            </span>
            <span>Daily Mega Discounts</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 sm:py-0">
            <span>
              <BadgeDollarSign />
            </span>
            <span>Best price on the market</span>
          </div>
        </div>
      </div>
      {/* links  */}
      <div className="w-3/5 mx-auto flex flex-col sm:flex-row justify-between py-16 ">
        <div>
          <h4 className="mb-3">Fruit & Vegetables</h4>
          <ul className="text-gray-500 text-sm">
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
          <h4 className="mb-3">Breakfast & Dairy</h4>
          <ul className="text-gray-500 text-sm">
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
          <h4 className="mb-3">Meat & Seafood</h4>
          <ul className="text-gray-500 text-sm">
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
          <h4 className="mb-3">Beverages</h4>
          <ul className="text-gray-500 text-sm">
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
          <h4 className="mb-3">Breads & Bakery</h4>
          <ul className="text-gray-500 text-sm">
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
