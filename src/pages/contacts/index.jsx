import React from 'react'
import { useForm } from "react-hook-form";

import phone from "../../assets/icon/phone.svg"
import email from "../../assets/icon/email.svg"
import location from "../../assets/icon/location.svg"
import "./contacts.scss"

const emailPatten = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contacts = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("done")
        console.log(data)
        reset()
    }
    return (
        <section id="contacts" className="padding-top-buttom-100 bg-light">
            <div className="container">
                <h1 className="text-center padding-bottom-100 text-black">যোগাযোগ</h1>
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <div className="di">
                            <div style={{ height: "20px" }} className="mb-4 d-flex align-items-center">
                                <img className="h-100" src={phone} alt="" />
                                <span className="ms-3 font-size-20 text-black">01754540123</span>
                            </div>
                            <div style={{ height: "20px" }} className="mb-4 d-flex align-items-center">
                                <img className="h-100" src={email} alt="" />
                                <span className="ms-3 font-size-20 text-black">mdridoyhossain24@gmail.com</span>
                            </div>
                            <div style={{ height: "20px" }} className="mb-4 d-flex align-items-center">
                                <img className="h-100" src={location} alt="" />
                                <span className="ms-3 font-size-20 text-black">kalkini, college get, kalkini Madaripur</span>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-7">
                        <div className="bg-light p-3">
                            <h4 className="text-black pb-3">আমাদের সাথে যোগাযোগ করুন</h4>
                            <p className="text-black pb-2 font-size-18">আমাদের টেকি মার্কেটিং টিম সবসময় সাহায্য করতে প্রস্তুত। আমাদের একটি কল দিন, আমাদের একটি ইমেইল করুন, অথবা আমাদের সাথে একটি কল করার জন্য অবিলম্বে নীচের ফর্মটি পূরণ করুন।</p>

                            <form id="form" action="" onSubmit={handleSubmit(onSubmit)} className="mt-4 font-Montserrat">
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <div className="form-group mb-3">
                                            <input className="form-control formControl" type="text" placeholder="নাম"
                                                {...register("fullName", { required: true, minLength: 3 })} />
                                            {errors.fullName && <label className='text-danger font-size-14'>
                                                {errors.fullName.type === 'required' && 'নাম'}
                                                {errors.fullName.type === 'minLength' && 'Minimum 3 characaters required'}
                                            </label>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="form-group mb-3">
                                            <input className="form-control formControl" type="text" placeholder="ইমেল"
                                                {...register("email", { required: true, pattern: emailPatten })} />
                                            {errors.email && <label className='text-danger font-size-14'>
                                                {errors.email.type === 'required' && 'ইমেল'}
                                                {errors.email.type === 'pattern' && 'Invalid email address'}
                                            </label>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 ">
                                        <div className="form-group mb-3">
                                            <input className="form-control formControl" type="text" placeholder="মোবাইল নাম্বর"
                                                {...register("number", { required: true, minLength: 11 })} />
                                            {errors.number && <label className='text-danger font-size-14'>
                                                {errors.number.type === 'required' && 'মোবাইল নাম্বর'}
                                                {errors.number.type === 'minLength' && 'minLength 11 characaters required'}
                                            </label>}
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea rows="6" className="form-control formControl" type="text" placeholder="মেসেজ"
                                            {...register("query", { required: true, minLength: 11 })} />
                                        {errors.query && <label className='text-danger font-size-14'>
                                            {errors.query.type === 'required' && 'মেসেজ'}
                                            {errors.query.type === 'minLength' && 'minLength 11 characaters required'}

                                        </label>}
                                    </div>
                                </div>
                                <div className="text-end mt-4">
                                    <button className='red-botton' type="submit">পাঠান</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contacts
