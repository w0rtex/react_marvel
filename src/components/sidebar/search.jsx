import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import MarvelService from "../../services/MarvelService";
import {useState} from "react";

const Search = () => {
    const marvelService = new MarvelService()
    const [found, setFound] = useState(null)

    function receiveCharacter (values) {
        const name = values.name

        setFound(null)

        marvelService.getCharacterByName(name)
            .then(res => {
                if (res === false) {
                    setFound(<h4 className={'error'}>Character wasn't found</h4>)
                } else {
                    setFound(<h4 className={'success flex'}>There it is! Visit {res.name}'s page? <a href={res.homepage} className={"btn"}>To page</a></h4>)
                }
            })
    }

    return (
        <Formik initialValues={{
            name: ''
        }} validationSchema={Yup.object({
            name: Yup.string().required('Please enter the search term')
        })} onSubmit={receiveCharacter}>
            <Form className="search section" >
                <h4>Or find a character by name:</h4>
                <div className="flex">
                    <Field type="text" id={"name"} name="name" placeholder="Enter name"/>
                    <button type={"submit"} className="btn btn-red m-0">Search</button>
                </div>
                <ErrorMessage name={"name"} component={"h4"} className='error' />
                {found ? found : null}
            </Form>
        </Formik>
    )
}

export default Search