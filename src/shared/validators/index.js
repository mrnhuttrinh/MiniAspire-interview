export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');

export const email = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const phoneNumber = (value) => value && !/^0([0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

export const minNumber = (min) => (value) => value && Number(value) < min ? `The value must be greater than ${min}` : undefined;

export const maxNumber = (max) => (value) => value && Number(value) > max ? `The value must be less than ${max}` : undefined;