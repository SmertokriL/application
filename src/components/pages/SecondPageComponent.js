import {Formik, Field, Form} from 'formik'
import './../../App.css'
import * as yup from 'yup'
import React from 'react'


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
            <div className="second-page__title">
                <h1>Подать заявку на участие</h1>
            </div>
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
                    <div className="second-page__mainForm">
                        <div className="second-page__radio">
                            <div className="radio-first">
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
                        {/* Форма ФИО */}
                        <div className="second-page__nameForm">
                            <p>
                                <input
                                    placeholder="ФИО исполнителя"
                                    className={`input`}
                                    type={`text`}
                                    name={`name`}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.name}
                                ></input>
                            </p>

                            {touched.name && errors.name && (
                                <p className={'error'}>{errors.name}</p>
                            )}

                            {/* Форма даты рождения */}
                            <div className="second-page__dateOfBirth">
                                <p>
                                    <input
                                        placeholder="Дата рождения"
                                        className={`input`}
                                        type={`text`}
                                        name={`dateOfBirth`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.dateOfBirth}
                                    ></input>
                                </p>

                                {touched.dateOfBirth && errors.dateOfBirth && (
                                    <p className={'error'}>{errors.dateOfBirth}</p>
                                )}

                                {/* Форма образовательного учреждения */}
                                <div className="second-page__nameOfSchool">
                                    <p>
                                        <input
                                            placeholder="Образовательное учреждение"
                                            className={`input`}
                                            type={`text`}
                                            name={`nameOfSchool`}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.nameOfSchool}
                                        ></input>
                                    </p>

                                    {touched.nameOfSchool && errors.nameOfSchool && (
                                        <p className={'error'}>{errors.nameOfSchool}</p>
                                    )}
                                    {/* Город */}
                                    <div className="second-page__country">
                                        <p>
                                            <input
                                                placeholder="Город"
                                                className={`input`}
                                                type={`text`}
                                                name={`country`}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.country}
                                            ></input>
                                        </p>

                                        {touched.country && errors.country && (
                                            <p className={'error'}>{errors.country}</p>
                                        )}
                                        {/* Телефон для связи */}
                                        <div className="second-page__phone">
                                            <p>
                                                <input
                                                    placeholder="Телефон для связи"
                                                    className={`input`}
                                                    type={`text`}
                                                    name={`phone`}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.phone}
                                                ></input>
                                            </p>

                                            {touched.phone && errors.phone && (
                                                <p className={'error'}>{errors.phone}</p>
                                            )}
                                            {/*  Форма исполнения */}
                                            <div className="second-page__formOfPerfomance">
                                                <p>
                                                    <input
                                                        placeholder="Форма исполнения"
                                                        className={`input`}
                                                        type={`text`}
                                                        name={`formOfPerfomance`}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        value={values.formOfPerfomance}
                                                    ></input>
                                                </p>

                                                {touched.formOfPerfomance &&
                                                errors.formOfPerfomance && (
                                                    <p className={'error'}>{errors.formOfPerfomance}</p>
                                                )}
                                                {/*  Преподаватель */}
                                                <div className="second-page__teacher">
                                                    <p>
                                                        <input
                                                            placeholder="Преподаватель"
                                                            className={`input`}
                                                            type={`text`}
                                                            name={`teacher`}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.teacher}
                                                        ></input>
                                                    </p>

                                                    {touched.teacher && errors.teacher && (
                                                        <p className={'error'}>{errors.teacher}</p>
                                                    )}

                                                    {/*  Комментарий */}
                                                    <div className="second-page__comment">
                                                        <p>
                                                            <input
                                                                placeholder="Комментарий"
                                                                className={`input`}
                                                                type={`text`}
                                                                name={`comment`}
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values.comment}
                                                            ></input>
                                                        </p>

                                                        {touched.comment && errors.comment && (
                                                            <p className={'error'}>{errors.comment}</p>
                                                        )}

                                                        <button
                                                            disabled={!isValid && !dirty}
                                                            onClick={handleSubmit}
                                                            type={`submit`}
                                                        >
                                                            Отправить{' '}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default SecondPageComponent
