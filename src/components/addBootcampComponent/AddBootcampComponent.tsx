import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormGroup, Input, Label } from 'reactstrap';

export const AddBootcampComponent = () => {
    const validationSchema = yup.object().shape({
        title: yup.string().required().min(2),
        imageUrl: yup.string().required(),
        details: yup.string().required().min(5)
    });

    const { handleSubmit, errors, control } = useForm({
        resolver: yupResolver(validationSchema)
    });
    
    const validate = (data: any) => {
        console.log("data", data)
    }

    console.log("errors:", errors)

    return (
        <div className="add-form">
            <form onSubmit={handleSubmit(validate)}>
                {errors.title && <div className="text-danger">{errors.title.message}</div>}
                <FormGroup>
                    <Label for="title">Title: </Label>
                    <Controller 
                        as={Input}
                        name="title"
                        control={control}
                    />
                </FormGroup>
                {errors.imageUrl && <div className="text-danger">{errors.imageUrl.message}</div>}
                <FormGroup>
                    <Label for="imageUrl">Image URL: </Label>
                    <Controller 
                        as={Input}
                        name="imageUrl"
                        control={control}
                    />
                </FormGroup>
                {errors.details && <div className="text-danger">{errors.details.message}</div>}
                <FormGroup>
                    <Label for="details">Details: </Label>
                    <Controller 
                        name="details"
                        control={control}
                        render={(props): any => (
                            <textarea className="form-control details-textarea" onChange={(e) => props.onChange(e.target.value)}></textarea>
                        )}
                    />
                </FormGroup>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
