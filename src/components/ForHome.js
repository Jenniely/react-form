import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import OfferItem from "./OfferItem";
import {bundles} from "./sampleStorage";
import "../css/ForHome.css";

const ForHome = () => {

    return (
            <div className="app_container">
            <div className="for-home-page">
                <Header />
                <main className="for-home">
                    <section className="for-home__promo">
                        <div className="for-home__promo-item">
                            <h2 className="for-home__title">Кофе для дома</h2>
                            <p className="for-home__subtitle">#ForMyPeopleVol2</p>
                            <p className="for-home__text">Доставка курьером по городу Минску (бесплатно от 50 рублей): 9 руб. Доставка курьером по городу Минску (бесплатно от 50 рублей): 9 руб.</p>
                        </div>
                        <div className="for-home__promo-item">
                        <img className="for-home__img" src="https://res.cloudinary.com/jenniely/image/upload/v1612389131/coffee/coffee_machine_xx9lyq.png" alt="Кофемашина Nespresso Essenza Mini" width="520" height="560" />
                        </div>
                            
                    </section>
                    <section className="for-home__offers">
                    <ul className="for-home__offers-list">
                        {bundles.map(bundle =>
        <OfferItem key={bundle.id} bundle={bundle}/>
      )}
                    </ul>   
                    </section>
                </main>
                <Footer />
            </div>
        </div>
        );
        }


export default ForHome;