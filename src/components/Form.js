import React from 'react';
import { useForm } from 'react-hook-form';


function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (async ({ firstName, lastName, email, password }) => {
        console.log({
            firstName,
            lastName,
            email,
            password
        });
        alert('Wysłano formularz!');
        reset();
    });




    const registerOptions = {
        firstName: {
            required: "First Name cannot be empty"
        },
        lastName: {
            required: "Last Name cannot be empty"
        },
        email: {
            required: "Email cannot be empty",
            pattern: {
                //eslint-disable-next-line
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Looks like this is not an email"
            }
        },
        password: {
            required: "Password cannot be empty"
        }
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='error'
                    type="text"
                    placeholder='First Name'
                    name="firstName"
                    {...register('firstName', (registerOptions.firstName))}
                    className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <input
                    type="text"
                    placeholder='Last Name'
                    name="lastName"
                    {...register('lastName', (registerOptions.lastName))}
                    className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
                <input
                    type="text"
                    placeholder='Email Address'
                    name="email"
                    {...register('email', (registerOptions.email)
                    )}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                    type="password"
                    placeholder='Password'
                    name="password"
                    {...register('password', (registerOptions.password))}
                    className={errors.password ? 'error' : ''}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <input type="submit" value="Claim your free trial" className="submit" />
                <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>
    )
}

export default Form;