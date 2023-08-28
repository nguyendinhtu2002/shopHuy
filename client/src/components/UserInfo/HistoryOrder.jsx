import React from "react"

function HistoryOrder() {
    return (
        <>
            <div className="">
                <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">History Orders</h1>

                <div className="cat-products-content">
                    <div className="product-lists-history grid bg-whitesmoke my-3 "><a className="block"
                                                                                                  href="/product/undefined">
                        <div className="product-history bg-white mb-3">
                            <div className="category">smartphones</div>
                            <div className="product-history-img"><img className="img-cover"
                                                                   src="https://i.dummyjson.com/data/products/1/1.jpg"
                                                                   alt="iPhone 9"/></div>
                            <div className="product-history-info fs-14">
                                <div className="brand"><span>Brand: </span><span className="fw-7">Apple</span></div>
                                <div className="title py-2">iPhone 9</div>
                                <div className="price flex align-center justify-center"><span
                                    className="old-price">$549.00</span><span className="new-price">$477.85</span><span
                                    className="discount fw-6">(% Off)</span></div>
                            </div>
                        </div>
                    </a><a className="block" href="/product/undefined">
                        <div className="product-item bg-white mb-3">
                            <div className="category">smartphones</div>
                            <div className="product-history-img"><img className="img-cover"
                                                                   src="https://i.dummyjson.com/data/products/2/1.jpg"
                                                                   alt="iPhone X"/></div>
                            <div className="product-item-info fs-14">
                                <div className="brand"><span>Brand: </span><span className="fw-7">Apple</span></div>
                                <div className="title py-2">iPhone X</div>
                                <div className="price flex align-center justify-center"><span
                                    className="old-price">$899.00</span><span className="new-price">$737.72</span><span
                                    className="discount fw-6">(% Off)</span></div>
                            </div>
                        </div>
                    </a><a className="block" href="/product/undefined">
                        <div className="product-item bg-white mb-3">
                            <div className="category">smartphones</div>
                            <div className="product-history-img"><img className="img-cover"
                                                                   src="https://i.dummyjson.com/data/products/3/1.jpg"
                                                                   alt="Samsung Universe 9"/></div>
                            <div className="product-item-info fs-14">
                                <div className="brand"><span>Brand: </span><span className="fw-7">Samsung</span></div>
                                <div className="title py-2">Samsung Universe 9</div>
                                <div className="price flex align-center justify-center"><span
                                    className="old-price">$1,249.00</span><span
                                    className="new-price">$1,055.90</span><span className="discount fw-6">(% Off)</span>
                                </div>
                            </div>
                        </div>
                    </a><a className="block" href="/product/undefined">
                        <div className="product-item bg-white mb-3">
                            <div className="category">smartphones</div>
                            <div className="product-history-img"><img className="img-cover"
                                                                   src="https://i.dummyjson.com/data/products/4/1.jpg"
                                                                   alt="OPPOF19"/></div>
                            <div className="product-item-info fs-14">
                                <div className="brand"><span>Brand: </span><span className="fw-7">OPPO</span></div>
                                <div className="title py-2">OPPOF19</div>
                                <div className="price flex align-center justify-center"><span
                                    className="old-price">$280.00</span><span className="new-price">$229.85</span><span
                                    className="discount fw-6">(% Off)</span></div>
                            </div>
                        </div>
                    </a><a className="block" href="/product/undefined">
                        <div className="product-item bg-white mb-3">
                            <div className="category">smartphones</div>
                            <div className="product-history-img"><img className="img-cover"
                                                                   src="https://i.dummyjson.com/data/products/5/1.jpg"
                                                                   alt="Huawei P30"/></div>
                            <div className="product-item-info fs-14">
                                <div className="brand"><span>Brand: </span><span className="fw-7">Huawei</span></div>
                                <div className="title py-2">Huawei P30</div>
                                <div className="price flex align-center justify-center"><span
                                    className="old-price">$499.00</span><span className="new-price">$446.21</span><span
                                    className="discount fw-6">(% Off)</span></div>
                            </div>
                        </div>
                    </a></div>
                </div>


            </div>

        </>
    )
}

export default HistoryOrder