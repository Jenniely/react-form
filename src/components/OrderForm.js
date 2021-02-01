import React from "react";
/* import Basket from "./Basket.js" */
import { useForm } from "react-hook-form";
import '../css/OrderForm.css';

const OrderForm = () => {

    const { register, handleSubmit, errors, watch } = useForm();

    const DeliveryCalc = () => {
        let amount = 0;
        const deliveryOpt = parseInt(watch("deliveryOption", 1));
        if (deliveryOpt === 1) {
            amount = 9;
        } else if (deliveryOpt === 2) {
            amount = 15;
        } else {
            amount = 0;
        }

        return <p className='order-form__delivery-cost'>Доставка: {amount} руб</p> 
    }

    const SumCalc = () => {
        let sum = 709;

       return <p className='order-form__final-sum'>Сумма: {sum} руб</p>
    }
    


    const onSubmit = (data) => {
        let request = JSON.stringify(data);
        fetch("https://run.mocky.io/v3/5ad0744a-3f93-41cc-b2b9-523b2e70e556", {
            method: "POST",
            body: request,
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "same-origin"
        }).then((response) => {
            (response.status === 200) ?
            console.log('success') :
                console.log('fail')
        });
    }

    return (
        <div className="order-form d-flex flex-column">
            <p className="order-form__header">Оформление заказа</p>
            <form className="order-form__form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="order-form__contacts">
                    <input className="order-form__input order-form__name" ref={register({ required: true })} type="text"  name="orderFirstName" placeholder='Имя' />
                    {errors.orderFirstName && <p>Пожалуйста, введите имя</p>}
                    <input className="order-form__input order-form__name" ref={register({ required: true })} type="text" name="orderLastName" placeholder='Фамилия' />
                    {errors.orderLastName && <p>Пожалуйста, введите имя</p>}
                    <input className="order-form__input" type="text" ref={register({ required: true })} name="orderAddress" placeholder='Адрес' />
                    {errors.orderAddress && <p>Пожалуйста, введите адрес</p>}
                    <input className="order-form__input" type="tel" ref={register({required: true, pattern: /^[0-9\-+]{9,15}$/})}  name="orderPhoneNumber"  placeholder='Телефон'/>
                    {errors.orderPhoneNumber && <p>Пожалуйста, введите номер телефона</p>}
                    {errors.orderPhoneNumber && errors.orderPhoneNumber.type === 'pattern' && <p>Пожалуйста, номер телефона в формате:</p>}
                    <input className="order-form__input" type="email" ref={register({
                                       required: true,
                                       pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                                   })}  name="orderEmail" placeholder='Email' />
                    {errors.orderEmail && <p>Пожалуйста, введите корректный адрес электронной почты</p>}
                </fieldset>
                <fieldset className="order-form__radio-group" name="deliveryOption">
                    <legend className="order-form__radio-group-legend">
                        Способ доставки
                        </legend>
                    <input className="order-form__radio" type="radio" id="delivery-option-1"
                        name="deliveryOption" value="1" ref={register} defaultChecked />
                    <label className="order-form__radio-label" htmlFor="delivery-option-1">Доставка курьером по городу Минску: <span className="order-form__radio-span">9 руб</span> (бесплатно от 50 рублей)</label>

                    <input className="order-form__radio" type="radio" id="delivery-option-2"
                        name="deliveryOption" value="2" ref={register} />
                    <label className="order-form__radio-label" htmlFor="delivery-option-2">Курьером Автолайтэкспресс до двери по РБ: <span className="order-form__radio-span">15 руб</span></label>

                    <input className="order-form__radio" type="radio" id="delivery-option-3"
                        name="deliveryOption" value="3" ref={register} />
                    <label className="order-form__radio-label" htmlFor="delivery-option-3">Самовывоз г.Минск ул. Кальварийская 42</label>
                </fieldset>
                <fieldset className="order-form__radio-group" name="paymentOption">
                    <legend className="order-form__radio-group-legend">
                        Способ оплаты
                        </legend>
                    <input className="order-form__radio" type="radio" id="payment-option-1"
                        name="paymentOption" value="1" ref={register} defaultChecked />
                    <label className="order-form__radio-label" htmlFor="payment-option-1">Оплата наличными</label>

                    <input className="order-form__radio" type="radio" id="payment-option-2"
                        name="paymentOption" value="2" ref={register}/>
                    <label className="order-form__radio-label" htmlFor="payment-option-2">Оплата картой при получении</label>

                    <input className="order-form__radio" type="radio" id="payment-option-3"
                        name="paymentOption" value="3" ref={register}/>
                    <label className="order-form__radio-label" htmlFor="payment-option-3">Оплата картой онлайн</label>
                    <input className="order-form__radio" type="radio" id="payment-option-4"
                        name="paymentOption" value="4" ref={register}/>
                    <label className="order-form__radio-label" htmlFor="payment-option-4">Оплата через ЕРИП</label>
                </fieldset>
                {/* <Basket/> */}
                <div className="order-form__agree-and-submit">
                    <fieldset className="order-form__checkbox-group">
                        <input className="order-form__checkbox" type='checkbox' name='orderCheckbox' id='order-checkbox' ref={register({ required: true })} ></input>
                        <label className="order-form__checkbox-label" htmlFor="order-checkbox">Я прочитал(а) и соглашаюсь с правилами сайта</label>
                        {errors.orderCheckbox && <p>Пожалуйста, примите правила сайта</p>}
                    </fieldset>
                    {<div>
                        <SumCalc/>    
                    <DeliveryCalc/>
                    </div>
                   }

                    <button className="order-form__submit btn" type="submit">Подтвердить заказ</button>
                </div>

            </form>
        </div>
    );
}

export default OrderForm;