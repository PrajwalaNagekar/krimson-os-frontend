import React, { useState } from "react";
import {
  ShoppingBag,
  BookOpen,
  Shirt,
  Package,
  Clock,
  CheckCircle,
  Loader,
  Ruler,
  Filter,
  ShoppingCart,
} from "lucide-react";

const UniformBookSection = ({ uniformBookOrders }) => {
  const [activeTab, setActiveTab] = useState("catalog");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const allItems = [
    ...uniformBookOrders.catalog.uniforms,
    ...uniformBookOrders.catalog.books,
  ];

  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-50 text-green-700 border-green-200";
      case "processing":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "paid":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Uniform":
      case "Footwear":
        return <Shirt className="w-5 h-5" />;
      case "Books":
      case "Stationery":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setActiveTab("catalog")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "catalog"
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Catalog
          </div>
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === "orders"
              ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            My Orders
          </div>
        </button>
        <button
          onClick={() => setShowSizeGuide(!showSizeGuide)}
          className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
        >
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4" />
            Size Guide
          </div>
        </button>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Ruler className="w-6 h-6 text-blue-600" />
              Size Guide
            </h3>
            <button
              onClick={() => setShowSizeGuide(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Uniform Sizes */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Uniform Sizes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
                    <tr>
                      <th className="p-2 text-left">Size</th>
                      <th className="p-2 text-left">Chest</th>
                      <th className="p-2 text-left">Waist</th>
                      <th className="p-2 text-left">Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uniformBookOrders.sizeGuide.uniforms.map((size, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-blue-50"
                      >
                        <td className="p-2 font-semibold">{size.size}</td>
                        <td className="p-2">{size.chest}</td>
                        <td className="p-2">{size.waist}</td>
                        <td className="p-2">{size.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Shoe Sizes */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Shoe Sizes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
                    <tr>
                      <th className="p-2 text-left">Size</th>
                      <th className="p-2 text-left">Length</th>
                      <th className="p-2 text-left">Age Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uniformBookOrders.sizeGuide.shoes.map((size, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-blue-50"
                      >
                        <td className="p-2 font-semibold">{size.size}</td>
                        <td className="p-2">{size.length}</td>
                        <td className="p-2">{size.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Catalog Tab */}
      {activeTab === "catalog" && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="bg-white rounded-2xl p-4 shadow-md border-2 border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <h4 className="font-bold text-gray-800">Filter by Category</h4>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["all", "Uniform", "Footwear", "Books", "Stationery"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category === "all" ? "All Items" : category}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-blue-600 shadow-md">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600">
                      {getCategoryIcon(item.category)}
                      {item.category}
                    </div>
                    {item.inStock && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                        In Stock
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>
                  {item.sizes && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-600 mb-1">
                        Available Sizes:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.sizes.map((size, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-semibold"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.author && (
                    <p className="text-xs text-gray-600 mb-1">
                      Author: {item.author}
                    </p>
                  )}
                  {item.isbn && (
                    <p className="text-xs text-gray-600 mb-3">
                      ISBN: {item.isbn}
                    </p>
                  )}
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Orders Tab */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          {/* Pending Orders */}
          {uniformBookOrders.pendingOrders.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Loader className="w-6 h-6 text-blue-600" />
                Pending Orders
              </h3>
              {uniformBookOrders.pendingOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800">
                        Order #{order.orderNumber}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Placed on {order.orderDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        <Clock className="w-3 h-3 inline mr-1" />
                        ETA: {order.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Items:
                    </p>
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {item.name}
                          </p>
                          {item.size && (
                            <p className="text-xs text-gray-600">
                              Size: {item.size} • Qty: {item.quantity}
                            </p>
                          )}
                        </div>
                        <p className="font-bold text-gray-800">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-blue-200">
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.paymentStatus,
                        )}`}
                      >
                        {order.paymentStatus}
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                      Total: {order.totalAmount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Order History */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Order History
            </h3>
            <div className="space-y-4">
              {uniformBookOrders.orderHistory.map((order) => (
                <div
                  key={order.id}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-800">
                        Order #{order.orderNumber}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Ordered: {order.orderDate}
                      </p>
                      <p className="text-sm text-green-600 font-semibold">
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                        Delivered: {order.deliveryDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">
                        {order.totalAmount}
                      </p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-600 mb-2">
                      {order.items.length} item(s)
                    </p>
                    {order.items.map((item, index) => (
                      <p key={index} className="text-sm text-gray-700">
                        • {item.name} - {item.price}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniformBookSection;
