import {Formik, Field} from 'formik'
import '../../../App.css'
import * as yup from 'yup'
import React from 'react'

import "./SecondPageComponent.css"


function SecondPageComponent() {
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
        nameOfSchool: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательно'),
        dateOfBirth: yup.string().required('Обязательно'),
        country: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательно'),
        phone: yup.number().typeError('Должен быть номер').required('Обязательно'),
        teacher: yup
            .string()
            .typeError('Должно быть строкой')
            .required('Обязательно'),
    })

    return (
        <div className="second-page">
            <h1 className="second-page__title">Подать заявку на участие</h1>
            <Formik
                initialValues={{
                    picked: '',
                    name: '',
                    dateOfBirth: '',
                    nameOfSchool: '',
                    country: '',
                    phone: '',
                    formOfPerfomance: '',
                    ovz: '',
                    teacher: '',
                    comment: '',
                }}
                validateOnBlur
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationsSchema}

                // onSubmit={async (values) => {
                //   await new Promise((r) => setTimeout(r, 500))
                //   alert(JSON.stringify(values, null, 2))
                // }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      dirty,
                  }) => (
                    //Форма общая
                    <div className="second-page__mainForm">
                        <div className="second-page__radio">
                            <div className="radio-  first">
                                <label>
                                    <Field type="radio" name="picked" value="Single"/>

                                    <span>Исполнитель</span>
                                </label>
                            </div>
                            <div className="radio-second">
                                <label>
                                    <Field type="radio" name="picked" value="Collective"/>
                                    Коллектив
                                </label>
                            </div>
                        </div>

                        <div className="second-page__inputs">
                            {/* Форма ФИО */}
                            <div className="second-page__nameForm">
                                <input
                                    placeholder="ФИО исполнителя"
                                    className={`input`}
                                    type={`text`}
                                    name={`name`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                />

                                {touched.name && errors.name && (
                                    <p className={'error'}>{errors.name}</p>
                                )}
                            </div>


                            {/* Форма даты рождения */}
                            <div className="second-page__dateOfBirth">

                                <input
                                    placeholder="Дата рождения"
                                    className={`input`}
                                    type={`text`}
                                    name={`dateOfBirth`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.dateOfBirth}
                                />


                                {touched.dateOfBirth && errors.dateOfBirth && (
                                    <p className={'error'}>{errors.dateOfBirth}</p>
                                )}
                            </div>
                            {/* Форма образовательного учреждения */}
                            <div className="second-page__nameOfSchool">

                                <input
                                    placeholder="Образовательное учреждение"
                                    className={`input`}
                                    type={`text`}
                                    name={`nameOfSchool`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.nameOfSchool}
                                />


                                {touched.nameOfSchool && errors.nameOfSchool && (
                                    <p className={'error'}>{errors.nameOfSchool}</p>
                                )}
                            </div>
                            <div className="row">
                                {/* Город */}
                                <div className="second-page__country">

                                    <input
                                        placeholder="Город"
                                        className={`input`}
                                        type={`text`}
                                        name={`country`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.country}
                                    />


                                    {touched.country && errors.country && (
                                        <p className={'error'}>{errors.country}</p>
                                    )}
                                </div>


                                {/* Телефон для связи */}
                                <div className="second-page__phone">

                                    <input
                                        placeholder="Телефон для связи"
                                        className={`input`}
                                        type={`text`}
                                        name={`phone`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.phone}
                                    />


                                    {touched.phone && errors.phone && (
                                        <p className={'error'}>{errors.phone}</p>
                                    )}
                                </div>
                            </div>
                            <div className='row'>
                            {/*  Форма исполнения */}
                            <div className="second-page__formOfPerfomance">

                                <input
                                    placeholder="Форма исполнения"
                                    className={`input`}
                                    type={`text`}
                                    name={`formOfPerfomance`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.formOfPerfomance}
                                />

                                {touched.formOfPerfomance &&
                                errors.formOfPerfomance && (
                                    <p className={'error'}>{errors.formOfPerfomance}</p>
                                )}

                            </div>

                            {/*  ОВЗ */}
                            <div className="second-page__ovz">
                                <label>
                                    <input
                                        type={`checkbox`}
                                        name={`ovz`}
                                        value={values.ovz}
                                        
                                    /> ОВЗ

                                </label>

                            </div>
                                </div>


                            {/*  Преподаватель */}
                            <div className="second-page__teacher">
                                <textarea
                                    rows = '3' placeholder=" Преподаватель
                                Концертмейстер
                                Представитель"



                                    className={`height-input`}
                                    type={`text`}
                                    name={`teacher`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.teacher}
                                />


                                {touched.teacher && errors.teacher && (
                                    <p className={'error'}>{errors.teacher}</p>
                                )}

                            </div>

                            {/*  Комментарий */}
                            <div className="second-page__comment">

                                <input
                                    placeholder="Комментарий"
                                    className={`height-input`}
                                    type={`text`}
                                    name={`comment`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.comment}
                                />


                                {touched.comment && errors.comment && (
                                    <p className={'error'}>{errors.comment}</p>
                                )}
                            </div>
                        </div>
                        <div className= 'button-container'>
                        <button className="second-page__button"
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={`submit`}
                        >
                            Отправить{' '}
                        </button>
                         </div>


                    </div>
                )}
            </Formik>
        </div>
    )
}

export default SecondPageComponent
