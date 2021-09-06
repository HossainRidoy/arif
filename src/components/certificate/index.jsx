import React, { useState, useRef } from 'react'
import photo from "../../assets/images/ridoy.JPG"
import "./certificate.scss"
const students = [
    {
        id: 1,
        studentId: 2191995,
        photo: photo,
        studentName: "Md Ridoy Hossain",
        motherName: "Renu Begum",
        fatherName: "Md Arshed Ali Bepari",
        gender: "Male",
        word: "5",
        villege: "Bivagdi",
        thana: "kalkini",
        postOffice: "kalkini",
        dist: "Madaripur",
        birth: "21-09-1995",
        blood: "O+"
    },
    {
        id: 2,
        studentId: 121,
        studentName: "title 2"
    },
    {
        id: 3,
        studentId: 122,
        studentName: "title 3"
    },
    {
        id: 4,
        studentId: 123,
        studentName: "title 4"
    },
]





const Certificate = () => {

    const [studentInfo, setstudentInfo] = useState()
    const [inputId, setinputId] = useState()

    const inputFill = useRef()

    const idFind = (e) => {
        let findValue = e.target.value
        setinputId(findValue)

        if(e.key === 'Enter'){
            search(e)
        }
    }

    const search = (e) => {
        let filteStId = students.filter((item) => parseInt(item.studentId) === parseInt(inputId))
        setstudentInfo(filteStId[0])
        inputFill.current.value = ""

    }

    return (
        <section className="padding-top-buttom-100">
            <h1 className="text-center padding-bottom-100">সনদ পত্র</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 mx-auto">
                        <div className="input-group mb-3">
                            <input ref={inputFill} onKeyUp={idFind} onChange={idFind} type="text" className="form-control" placeholder="ছাত্র / ছাত্রী আইডি নাম্বর" />
                            <button onClick={search}  className="red-botton" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>

                {studentInfo && <div id="StInfo" className="">
                    <div className="row">
                        <div className="col-12">
                            <div className="card rounded">
                                <div className="p-3 p-sm-5">
                                    <div className="text-center d-lg-flex align-items-center">
                                        <div>
                                            <img src={studentInfo.photo} alt="" />
                                        </div>
                                        <h2 className="mt-4 mt-lg-0 ms-lg-5">{studentInfo.studentName}</h2>
                                    </div>
                                    <div className="row mt-4 font-size-20">
                                        <div className="col-12 col-sm-7">
                                            <p>ID : {studentInfo.studentId}</p>
                                            <p>Student Name : {studentInfo.studentName}</p>
                                            <p>Mother Name : {studentInfo.motherName}</p>
                                            <p>Father Name : {studentInfo.fatherName}</p>
                                            <p>Gender : {studentInfo.gender}</p>
                                            <p>Date Of Birth : {studentInfo.birth}</p>
                                        </div>
                                        <div className="col-12 col-sm-5">
                                            <p>Word No: {studentInfo.word}</p>
                                            <p>Villege : {studentInfo.villege}</p>
                                            <p>Thana : {studentInfo.thana}</p>
                                            <p>Post office : {studentInfo.postOffice}</p>
                                            <p>Dist : {studentInfo.dist}</p>
                                            <p>Blood Group : {studentInfo.blood}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}



            </div>
        </section>
    )
}

export default Certificate
