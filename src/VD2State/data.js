// Nâng cao - Tạo nhiều data
function data(dataName){
    // eslint-disable-next-line default-case
    switch(dataName){
        case "products":
            const products=[
                        {
                            id:"20",
                            name:"cameraLunix 5n",
                            img:"https://images-na.ssl-images-amazon.com/images/I/71Y6iYShgIL._AC_UL160_SR160,160_.jpg",
                            id_cate:"1"
                        },
                        {
                            id:"30",
                            name:"Vivo Y33s 8GB - 128GB",
                            img:"https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/15/637829405985657624_vivo-y33s-vang-dd.jpg",
                            id_cate:"2"
                         },
                         {
                             id:"40",
                            name:"MacBook Air M1 2020 7-core GPU",
                            img:"https://cdn.tgdd.vn/Products/Images/44/239552/macbook-air-m1-2020-gray-600x600.jpg",
                            id_cate:"3"
                         },
                         {
                            id:"21",
                            name:"cameraLunix 5n",
                            img:"https://images-na.ssl-images-amazon.com/images/I/71Y6iYShgIL._AC_UL160_SR160,160_.jpg",
                            id_cate:"1"
                        },
                        {
                            id:"31",
                            name:"Vivo Y33s 8GB - 128GB",
                            img:"https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/15/637829405985657624_vivo-y33s-vang-dd.jpg",
                            id_cate:"2"
                         },
                       {
                            id:"41",
                            name:"MacBook Air M1 2020 7-core GPU",
                            img:"https://cdn.tgdd.vn/Products/Images/44/239552/macbook-air-m1-2020-gray-600x600.jpg",
                            id_cate:"3"
                        }, 
                ];
                return products;
                case "categories":
                    const categories = [
                        {
                            id_cate:"1",
                            title: "Máy ảnh",
                            description:"Máy Ảnh Canon EOS M6 Mark II Kit EF-M15-45mm F3.5-6.3 IS STM"
                        },
                        {
                            id_cate:"2",
                            title: "Điện thoại",
                            description:"6.58 inch, IPS LCD, FHD+, 2408 x 1080 Pixels"
                        },
                        {
                            id_cate:"3",
                            title: "Laptop",
                            description:"Laptop Apple MacBook Air M1 2020 có thiết kế đẹp, sang trọng với CPU M1 độc quyền từ Apple cho hiệu năng đồ họa cao, màn hình Retina hiển thị siêu nét cùng với hệ thống bảo mật tối ưu."
                        },
                        {
                            id_cate:"1",
                            title: "Máy ảnh",
                            description:"Máy Ảnh Canon EOS M6 Mark II Kit EF-M15-45mm F3.5-6.3 IS STM"
                        },
                        {
                            id_cate:"2",
                            title: "Điện thoại",
                            description:"6.58 inch, IPS LCD, FHD+, 2408 x 1080 Pixels"
                        },
                        {
                            id_cate:"3",
                            title: "Laptop",
                            description:"Laptop Apple MacBook Air M1 2020 có thiết kế đẹp, sang trọng với CPU M1 độc quyền từ Apple cho hiệu năng đồ họa cao, màn hình Retina hiển thị siêu nét cùng với hệ thống bảo mật tối ưu."
                        },
                        
                ]; 
                return categories;
        } 
    }
export default data;
