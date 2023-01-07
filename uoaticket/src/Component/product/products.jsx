import React from "react";
import Card from "./card";
import "./products.scss"
import Navbar from "../nav-bar";

function Products(){
    const data = [
        {
            id: 1,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Avatar",
            Price: 5000
        },
        {
            id: 2,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Avatar",
            Price: 5000

        },
        {
            id: 3,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Avatar",
            Price: 5000

        },
        {
            id: 4,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",            title: "Avatar",
            title: 'Thien',
            Price: 5000
        },
        {
            id: 4,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",            title: "Avatar",
            title: 'Thien',
            Price: 5000
        },
        {
            id: 5,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",            title: "Avatar",
            title: 'Thien',
            Price: 5000
        },
        {
            id: 6,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",            title: "Avatar",
            title: 'Thien',
            Price: 5000
        },
        {
            id: 7,
            img:"https://www.cgv.vn/media/catalog/product/cache/1/thumbnail/240x388/c88460ec71d04fa96e628a21494d2fd3/a/v/avatar_2_payoff_posster_2_.jpg",
            img2:  "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",            title: "Avatar",
            title: 'Thien',
            Price: 5000
        },
    ]
    return(
        <><Navbar/>
        <div className="list">
            {data?.map(item=>(<Card item={item} key={item.id} />))}
        </div>
        </>
    )
}

export default Products