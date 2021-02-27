import { Formik, Field, Form } from 'formik'
import './../../App.css'

function SecondPageComponent() {
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
          <div className="second-page__radio">
            <div className="radio-first">
              <label>
                <Field type="radio" name="picked" value="One" />

                <span>Исполнитель</span>
              </label>
            </div>
            <div className="radio-second">
              <label>
                <Field type="radio" name="picked" value="Two" />
                Коллектив
              </label>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default SecondPageComponent
