// Core
import React, { FC } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Bus
import { useStudent } from '../../../bus/student';
import { initialState, optionInitialValues } from '../../../bus/student/slice';

// Styles
import * as S from './styles';

const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    surname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    age: Yup.number()
        .min(6, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Required'),
    sex: Yup.string()
        .required('Required'),
    email: Yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email')
        .required('Required'),
});

export const StudentRegistrationComponents: FC = () => {
    const { updateStudent } = useStudent();

    return (
        <Formik
            initialValues = { initialState }
            validationSchema = { RegistrationSchema }
            onSubmit = { (values) => {
                updateStudent(values);
                console.log(values);
            } }>
            {({ isSubmitting }) => (
                <Form style = {{ width: '100%', margin: '0 auto' }}>
                    <S.FormLabel htmlFor = 'name'>
                        <Field
                            name = 'name'
                            placeholder = 'name'
                            type = 'text'
                        />
                        <ErrorMessage
                            component = 'span'
                            name = 'name'
                        />
                    </S.FormLabel>
                    <S.FormLabel htmlFor = 'surname'>
                        <Field
                            name = 'surname'
                            placeholder = 'surname'
                            type = 'text'
                        />
                        <ErrorMessage
                            component = 'span'
                            name = 'surname'
                        />
                    </S.FormLabel>
                    <S.FormLabel htmlFor = 'age'>
                        <Field
                            name = 'age'
                            placeholder = 'age'
                            type = 'number'
                        />
                        <ErrorMessage
                            component = 'span'
                            name = 'age'
                        />
                    </S.FormLabel>
                    <S.FormLabel htmlFor = 'email'>
                        <Field
                            name = 'email'
                            placeholder = 'email'
                            type = 'email'
                        />
                        <ErrorMessage
                            component = 'span'
                            name = 'email'
                        />
                    </S.FormLabel>
                    <S.FlexColumn>
                        <S.FormLabelFlex>
                            Male:
                            <Field
                                name = 'sex'
                                type = 'radio'
                                value = 'male'
                            />
                        </S.FormLabelFlex>
                        <S.FormLabelFlex>
                            Female:
                            <Field
                                name = 'sex'
                                type = 'radio'
                                value = 'female'
                            />
                        </S.FormLabelFlex>
                        <ErrorMessage
                            component = 'span'
                            name = 'sex'
                        />
                    </S.FlexColumn>
                    <S.Select>
                        <Field
                            component = 'select'
                            name = 'speciality'>
                            {optionInitialValues.map((position, index) => {
                                return (
                                    <option
                                        key = { index }
                                        value = { position }>
                                        {position}
                                    </option>
                                );
                            })}
                        </Field>
                    </S.Select>
                    <S.SubmitBtn
                        disabled = { isSubmitting }
                        type = 'submit'>
                        Submit
                    </S.SubmitBtn>
                </Form>
            )}
        </Formik>
    );
};
